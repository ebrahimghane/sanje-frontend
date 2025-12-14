import React, { useEffect, useState } from "react";
import Head from "next/head";
import ErrorState, { ErrorDetails } from "../../components/ErrorState";

interface VisitDetail {
  Ravi_id: string;
  patient_name: string;
  patient_cell: string;
  book_date: string;
}

interface DoctorProfile {
  data: {
    slug: string;
  };
}

interface SearchDocumentResponse {
  entity: {
    online_visit_absence_penalty: number;
  };
}

const OnlineVisitAbsentReport: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorDetails | null>(null);
  const [visitDetails, setVisitDetails] = useState<VisitDetail[]>([]);
  const [penalty, setPenalty] = useState<number | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

  // Helper function to extract error details from Response
  const extractErrorDetails = (
    response: Response | null,
    userMessage: string,
    endpoint: string
  ): ErrorDetails => {
    const details: ErrorDetails = {
      userMessage,
      timestamp: new Date().toISOString(),
      endpoint,
    };

    if (response) {
      details.statusCode = response.status;
      details.statusText = response.statusText;
      details.requestId = response.headers.get("X-Request-Id") || undefined;
      details.traceSid = response.headers.get("X-Sid") || undefined;

      // Check for empty data scenario (200 OK but no content)
      const contentLength = response.headers.get("content-length");
      if (response.status === 200 && (contentLength === "0" || !contentLength)) {
        details.errorType = "Data Availability Issue";
      } else if (response.status === 504) {
        details.errorType = "Server Timeout - Infrastructure Issue";
      }
    }

    return details;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Step 1: Get doctor profile to get slug
        const profileEndpoint = "https://apigw.paziresh24.com/v1/doctor/profile";
        let profileResponse: Response;
        try {
          profileResponse = await fetch(profileEndpoint, {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (networkError) {
          throw {
            type: "network",
            message: "خطا در اتصال به سرور. لطفاً اتصال اینترنت خود را بررسی کنید.",
            endpoint: profileEndpoint,
          };
        }

        if (!profileResponse.ok) {
          let userMessage = "خطا در دریافت اطلاعات پروفایل پزشک";
          if (profileResponse.status === 401) {
            userMessage = "لطفاً ابتدا وارد حساب کاربری خود شوید.";
          } else if (profileResponse.status === 403) {
            userMessage = "شما دسترسی لازم برای مشاهده این صفحه را ندارید.";
          } else if (profileResponse.status >= 500) {
            userMessage = "خطا در سرور. لطفاً بعداً تلاش کنید.";
          }
          throw {
            type: "response",
            response: profileResponse,
            message: userMessage,
            endpoint: profileEndpoint,
          };
        }

        let profileData: DoctorProfile | DoctorProfile[];
        try {
          profileData = await profileResponse.json();
        } catch (jsonError) {
          throw {
            type: "parse",
            message: "خطا در پردازش اطلاعات دریافتی از سرور.",
            endpoint: profileEndpoint,
            response: profileResponse,
          };
        }

        // Handle both array and object responses
        const profile = Array.isArray(profileData) ? profileData[0] : profileData;
        const doctorSlug = profile?.data?.slug;

        if (!doctorSlug) {
          throw {
            type: "logic",
            message: "Slug پزشک یافت نشد",
            endpoint: profileEndpoint,
            response: profileResponse,
          };
        }

        setSlug(doctorSlug);

        // Step 2: Get penalty from my-search-document
        const searchDocEndpoint = "https://apigw.paziresh24.com/v1/n8n-jahannama/webhook/my-search-document";
        let searchDocResponse: Response;
        try {
          searchDocResponse = await fetch(searchDocEndpoint, {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (networkError) {
          throw {
            type: "network",
            message: "خطا در اتصال به سرور برای دریافت نمره منفی.",
            endpoint: searchDocEndpoint,
          };
        }

        if (!searchDocResponse.ok) {
          let userMessage = "خطا در دریافت اطلاعات نمره منفی";
          if (searchDocResponse.status >= 500) {
            userMessage = "خطا در سرور. لطفاً بعداً تلاش کنید.";
          }
          throw {
            type: "response",
            response: searchDocResponse,
            message: userMessage,
            endpoint: searchDocEndpoint,
          };
        }

        let searchDocData: SearchDocumentResponse | SearchDocumentResponse[];
        try {
          searchDocData = await searchDocResponse.json();
        } catch (jsonError) {
          // Check if response was 200 but empty
          const contentLength = searchDocResponse.headers.get("content-length");
          if (contentLength === "0" || !contentLength) {
            throw {
              type: "parse",
              message: "خطا در پردازش اطلاعات نمره منفی.",
              endpoint: searchDocEndpoint,
              response: searchDocResponse,
              isDataAvailability: true,
            };
          } else {
            throw {
              type: "parse",
              message: "خطا در پردازش اطلاعات نمره منفی.",
              endpoint: searchDocEndpoint,
              response: searchDocResponse,
            };
          }
        }

        // Handle both array and object responses
        const data = Array.isArray(searchDocData) ? searchDocData[0] : searchDocData;
        const penaltyValue = data?.entity?.online_visit_absence_penalty ?? null;
        setPenalty(penaltyValue);
        
        // Check for empty data scenario (200 OK but empty content)
        const contentLength = searchDocResponse.headers.get("content-length");
        if (searchDocResponse.status === 200 && (contentLength === "0" || !contentLength) && !penaltyValue) {
          // This might be a data availability issue, but we'll continue
        }

        // Step 3: Get visit details
        const detailsEndpoint = `https://apigw.paziresh24.com/ravi/v1/onlinevisit_detail?slug=${encodeURIComponent(doctorSlug)}`;
        let detailsResponse: Response;
        try {
          detailsResponse = await fetch(detailsEndpoint, {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (networkError) {
          throw {
            type: "network",
            message: "خطا در اتصال به سرور برای دریافت جزئیات گزارش‌ها.",
            endpoint: detailsEndpoint,
          };
        }

        if (!detailsResponse.ok) {
          if (detailsResponse.status === 404) {
            // No data is not an error, just set empty array
            setVisitDetails([]);
          } else {
            let userMessage = "خطا در دریافت جزئیات گزارش‌ها";
            if (detailsResponse.status === 401) {
              userMessage = "لطفاً ابتدا وارد حساب کاربری خود شوید.";
            } else if (detailsResponse.status === 403) {
              userMessage = "شما دسترسی لازم برای مشاهده این اطلاعات را ندارید.";
            } else if (detailsResponse.status >= 500) {
              userMessage = "خطا در سرور. لطفاً بعداً تلاش کنید.";
            }
            throw {
              type: "response",
              response: detailsResponse,
              message: userMessage,
              endpoint: detailsEndpoint,
            };
          }
        } else {
          let detailsData: VisitDetail[];
          try {
            detailsData = await detailsResponse.json();
          } catch (jsonError) {
            // Check if response was 200 but empty
            const contentLength = detailsResponse.headers.get("content-length");
            if (contentLength === "0" || !contentLength) {
              throw {
                type: "parse",
                message: "خطا در پردازش اطلاعات جزئیات گزارش‌ها.",
                endpoint: detailsEndpoint,
                response: detailsResponse,
                isDataAvailability: true,
              };
            } else {
              throw {
                type: "parse",
                message: "خطا در پردازش اطلاعات جزئیات گزارش‌ها.",
                endpoint: detailsEndpoint,
                response: detailsResponse,
              };
            }
          }
          setVisitDetails(Array.isArray(detailsData) ? detailsData : []);
          
          // Check for empty data scenario (200 OK but empty array or no content)
          const contentLength = detailsResponse.headers.get("content-length");
          if (detailsResponse.status === 200 && (contentLength === "0" || !contentLength) && detailsData.length === 0) {
            // This is acceptable - just empty data, not an error
          }
        }

        setLoading(false);
      } catch (err: any) {
        let errorDetails: ErrorDetails;
        
        if (err && typeof err === "object" && "type" in err) {
          // Custom error object with response details
          if (err.type === "network") {
            errorDetails = {
              userMessage: err.message || "خطا در اتصال به سرور",
              timestamp: new Date().toISOString(),
              endpoint: err.endpoint,
            };
          } else if (err.type === "response" && err.response) {
            errorDetails = extractErrorDetails(err.response, err.message, err.endpoint);
          } else if (err.type === "parse" && err.response) {
            errorDetails = extractErrorDetails(err.response, err.message, err.endpoint);
            if (err.isDataAvailability) {
              errorDetails.errorType = "Data Availability Issue";
            }
          } else if (err.type === "logic" && err.response) {
            errorDetails = extractErrorDetails(err.response, err.message, err.endpoint);
          } else {
            errorDetails = {
              userMessage: err.message || "خطای نامشخص",
              timestamp: new Date().toISOString(),
              endpoint: err.endpoint,
            };
          }
        } else if (err instanceof Error) {
          errorDetails = {
            userMessage: err.message,
            timestamp: new Date().toISOString(),
          };
        } else {
          errorDetails = {
            userMessage: "خطای نامشخص",
            timestamp: new Date().toISOString(),
          };
        }
        
        setError(errorDetails);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateStr: string): string => {
    if (!dateStr) return "ثبت نشده";

    try {
      const date = new Date(dateStr.replace(" ", "T"));
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        calendar: "persian",
        timeZone: "Asia/Tehran",
      };

      const formatter = new Intl.DateTimeFormat("fa-IR", options);
      return formatter.format(date).replace("،", " ساعت");
    } catch (e) {
      console.error("Error formatting date:", dateStr, e);
      return "تاریخ نامعتبر";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-600">در حال بارگذاری...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>خطا - گزارش ویزیت آنلاین ناموفق</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="preload"
            href="https://www.paziresh24.com/fonts/IRANSansXFaNum-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <style jsx global>{`
          @font-face {
            font-family: "IRANSansX";
            src: url("https://www.paziresh24.com/fonts/IRANSansXFaNum-Regular.woff2")
              format("woff2");
            font-weight: normal;
            font-style: normal;
          }

          body {
            font-family: "IRANSansX", "Tahoma", "sans-serif";
          }
        `}</style>
        <ErrorState
          error={error}
          onRetry={() => window.location.reload()}
        />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>گزارش ویزیت آنلاین ناموفق</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="preload"
          href="https://www.paziresh24.com/fonts/IRANSansXFaNum-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="min-h-screen bg-gray-50 py-5 px-4" dir="rtl">
        <style jsx global>{`
          @font-face {
            font-family: "IRANSansX";
            src: url("https://www.paziresh24.com/fonts/IRANSansXFaNum-Regular.woff2")
              format("woff2");
            font-weight: normal;
            font-style: normal;
          }

          body {
            font-family: "IRANSansX", "Tahoma", "sans-serif";
          }
        `}</style>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h1 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-2 mb-4 mt-0">
            📊 گزارش ویزیت آنلاین ناموفق
          </h1>

          <h2 className="text-base font-medium text-gray-800 mt-5 mb-2.5">
            📈 خلاصه گزارش‌ها:
          </h2>
          <ul className="list-none pr-0 m-0">
            <li className="text-sm text-gray-800 mb-2 pr-4 relative">
              <span className="absolute right-0 top-0 text-blue-600 text-base leading-tight">
                •
              </span>
              <strong>تعداد گزارش‌های ویزیت ناموفق:</strong> {visitDetails.length}
            </li>
            <li className="text-sm text-gray-800 mb-2 pr-4 relative">
              <span className="absolute right-0 top-0 text-blue-600 text-base leading-tight">
                •
              </span>
              <strong>نمره منفی:</strong>{" "}
              <span dir="ltr">
                {penalty !== null ? penalty : "ثبت نشده"}
              </span>{" "}
              از منفی پنج
            </li>
            <li className="text-sm text-gray-800 mb-2 pr-4 relative">
              <span className="absolute right-0 top-0 text-blue-600 text-base leading-tight">
                •
              </span>
              <strong>نمره منفی موثر در رتبه بندی:</strong> 0 (این شاخص موقتاً فقط
              جهت اطلاع شما اینجا نمایش داده شده. تاثیر این شاخص در آینده در رتبه
              بندی نتایج جستجو هم خواهد بود.)
            </li>
          </ul>

          <h2 className="text-base font-medium text-gray-800 mt-5 mb-2.5">
            📜 جزئیات گزارش‌های ویزیت ناموفق:
          </h2>
          {visitDetails.length === 0 ? (
            <ul className="list-none pr-0 m-0">
              <li className="text-sm text-gray-800 mb-2 pr-4 relative">
                <span className="absolute right-0 top-0 text-blue-600 text-base leading-tight">
                  •
                </span>
                داده‌ای برای نمایش وجود ندارد.
              </li>
            </ul>
          ) : (
            <ul className="list-none pr-0 m-0">
              {visitDetails.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-800 mb-2 pr-4 relative"
                >
                  <span className="absolute right-0 top-0 text-blue-600 text-base leading-tight">
                    •
                  </span>
                  <strong>بیمار:</strong> {item.patient_name || "ثبت نشده"} |{" "}
                  <strong>موبایل:</strong> {item.patient_cell || "ثبت نشده"} |{" "}
                  <strong>تاریخ نوبت:</strong> {formatDate(item.book_date)}
                </li>
              ))}
            </ul>
          )}

          <h2 className="text-base font-medium text-gray-800 mt-5 mb-2.5">
            توضیحات:
          </h2>
          <div className="bg-gray-50 border-r-4 border-yellow-500 p-3 my-4 rounded-lg">
            <ul className="list-none pr-4 m-0">
              <li className="text-sm text-gray-800 mb-2 pr-4 relative">
                <span className="absolute right-0 top-0 text-yellow-500 text-base leading-tight">
                  •
                </span>
                <strong>تعداد گزارش‌ها،</strong> مجموع کل گزارش‌های "ویزیت ناموفق"
                (مانند عدم پاسخگویی) ثبت‌شده برای شما است.
              </li>
              <li className="text-sm text-gray-800 mb-2 pr-4 relative">
                <span className="absolute right-0 top-0 text-yellow-500 text-base leading-tight">
                  •
                </span>
                <strong>امتیاز منفی</strong> با استفاده از یک فرمول رشد نمایی
                محاسبه شده است:
                <ul className="list-none pr-4 mt-2">
                  <li className="text-sm text-gray-800 mb-2 pr-4 relative">
                    <span className="absolute right-0 top-0 text-yellow-500 text-base leading-tight">
                      •
                    </span>
                    با افزایش تعداد گزارش‌ها، این امتیاز به‌سرعت افزایش یافته و
                    نهایتاً به حداکثر <strong>5- (منفی پنج)</strong> می‌رسد.
                  </li>
                  <li className="text-sm text-gray-800 mb-2 pr-4 relative">
                    <span className="absolute right-0 top-0 text-yellow-500 text-base leading-tight">
                      •
                    </span>
                    با عدم ثبت گزارش جدید، به مرور و طی 30 روز، این امتیاز منفی
                    کاهش یافته و نهایتاً <strong>0 (صفر)</strong> می‌شود.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-r-4 border-blue-600 p-3 rounded-lg mt-4">
            <h2 className="text-base font-medium text-gray-800 mt-0 mb-2.5">
              💡 چرا این گزارش اهمیت دارد؟
            </h2>
            <p className="text-sm text-gray-800 leading-relaxed mb-2.5">
              این شاخص، مواردی را اندازه‌گیری می‌کند که بیمار، ویزیت آنلاین خود
              را «ناموفق» (معمولاً به دلیل عدم دریافت پاسخ به موقع از سوی شما)
              علامت‌گذاری کرده است.
            </p>
            <p className="text-sm text-gray-800 leading-relaxed mb-0">
              از آنجایی که «عدم پاسخگویی» یکی از جدی‌ترین عوامل نارضایتی بیماران
              و کاهش اعتماد آن‌ها به خدمات آنلاین است، این گزارش به شما کمک
              می‌کند تا این موارد خاص را شناسایی کرده، علت آن را بررسی کنید و
              امتیاز عملکرد خود را بهبود بخشید.
            </p>
          </div>

          <p className="text-center mt-6 text-xs text-gray-600 border-t border-gray-200 pt-4">
            برای ارتباط با پشتیبانی در مورد اطلاعات این شاخص با{" "}
            <a
              href="https://support.paziresh24.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 no-underline hover:text-blue-400"
            >
              پشتیبانی درمانگران پذیرش24
            </a>{" "}
            در تلگرام در ارتباط باشید.
          </p>
        </div>
      </div>
    </>
  );
};

export default OnlineVisitAbsentReport;

