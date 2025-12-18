import React, { useEffect, useState } from "react";
import Head from "next/head";
import ErrorState, { ErrorDetails } from "../../components/ErrorState";
import { InfoIcon } from "../../components/plasmic/fragment_icons/icons/PlasmicIcon__Info";

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
    inperson_visit_absence_penalty: number;
  };
}

const InpersonVisitAbsentReport: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorDetails | null>(null);
  const [visitDetails, setVisitDetails] = useState<VisitDetail[]>([]);
  const [penalty, setPenalty] = useState<number | null>(null);
  const [slug, setSlug] = useState<string | null>(null);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState<string | null>(null);

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
        let searchDocResponse: Response | null = null;
        try {
          searchDocResponse = await fetch(searchDocEndpoint, {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });
        } catch (networkError) {
          // Don't throw error for penalty, just set it to null
          setPenalty(null);
        }

        if (searchDocResponse && !searchDocResponse.ok) {
          if (searchDocResponse.status >= 500) {
            // Don't throw error for penalty, just set it to null
            setPenalty(null);
          } else {
            // Don't throw error for penalty, just set it to null
            setPenalty(null);
          }
        } else if (searchDocResponse) {
          let searchDocData: SearchDocumentResponse | SearchDocumentResponse[] | null = null;
          try {
            searchDocData = await searchDocResponse.json();
          } catch (jsonError) {
            // Don't throw error for penalty parsing, just set it to null
            setPenalty(null);
          }

          if (searchDocData) {
            // Handle both array and object responses
            const data = Array.isArray(searchDocData) ? searchDocData[0] : searchDocData;
            const penaltyValue = data?.entity?.inperson_visit_absence_penalty ?? null;
            setPenalty(penaltyValue);
          } else {
            // Check if response was 200 but empty
            const contentLength = searchDocResponse.headers.get("content-length");
            if (searchDocResponse.status === 200 && (contentLength === "0" || !contentLength)) {
              // This is a data availability issue, but we don't throw for penalty
              setPenalty(null);
            }
          }
        }

        // Step 3: Get visit details
        const detailsEndpoint = `https://apigw.paziresh24.com/ravi/v1/offlinevisit_detail?slug=${encodeURIComponent(doctorSlug)}`;
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
      <>
        <Head>
          <title>گزارش ویزیت حضوری ناموفق</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
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
          <div className="text-center">
            <div className="text-gray-600">در حال بارگذاری...</div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>خطا - گزارش ویزیت حضوری ناموفق</title>
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
        <title>گزارش ویزیت حضوری ناموفق</title>
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
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-lg font-medium text-gray-800">
              گزارش ویزیت حضوری ناموفق
            </h1>
            <button
              onClick={() => setShowHelpModal(true)}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="راهنما"
            >
              <InfoIcon className="w-5 h-5" />
              <span>راهنما</span>
            </button>
          </div>

          {/* KPI Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">تعداد گزارش‌های ویزیت ناموفق</div>
              <div className="text-4xl font-bold text-gray-900">{visitDetails.length}</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-sm text-gray-600 mb-2">نمره منفی</div>
              <div className="text-4xl font-bold text-red-600" dir="ltr">
                {penalty !== null ? penalty : "ثبت نشده"}
              </div>
              <div className="text-xs text-gray-500 mt-1">از منفی پنج</div>
            </div>
          </div>

          {/* Patient List */}
          <div className="mb-8">
            <h2 className="text-base font-medium text-gray-800 mb-4">
              جزئیات گزارش‌های ویزیت ناموفق
            </h2>
            {visitDetails.length === 0 ? (
              <div className="text-sm text-gray-500 py-8 text-center">
                داده‌ای برای نمایش وجود ندارد.
              </div>
            ) : (
              <div className="space-y-3">
                {visitDetails.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-4 px-4 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-right mb-1">
                        {item.patient_name || "ثبت نشده"}
                      </div>
                      <div className="text-sm text-gray-500 text-right">
                        {formatDate(item.book_date)}
                      </div>
                    </div>
                    {item.patient_cell && (
                      <button
                        onClick={() => setShowPhoneModal(item.patient_cell)}
                        className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                        aria-label="مشاهده شماره موبایل"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className="text-center mt-8 text-xs text-gray-500 pt-6">
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

        {/* Help Modal */}
        {showHelpModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" dir="rtl">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-800">راهنما</h2>
                <button
                  onClick={() => setShowHelpModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="بستن"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="px-6 py-4 space-y-4">
                <div>
                  <h3 className="text-base font-medium text-gray-800 mb-2">تعداد گزارش‌ها</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    تعداد گزارش‌ها، مجموع کل گزارش‌های "ویزیت ناموفق" (مانند عدم حضور) ثبت‌شده برای شما است.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800 mb-2">امتیاز منفی</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    امتیاز منفی با استفاده از یک فرمول رشد نمایی محاسبه شده است:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pr-4">
                    <li>
                      با افزایش تعداد گزارش‌ها، این امتیاز به‌سرعت افزایش یافته و نهایتاً به حداکثر <strong>5- (منفی پنج)</strong> می‌رسد.
                    </li>
                    <li>
                      با عدم ثبت گزارش جدید، به مرور و طی 30 روز، این امتیاز منفی کاهش یافته و نهایتاً <strong>0 (صفر)</strong> می‌شود.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800 mb-2">چرا این گزارش اهمیت دارد؟</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    این شاخص، مواردی را اندازه‌گیری می‌کند که بیمار، ویزیت حضوری خود را «ناموفق» (معمولاً به دلیل عدم حضور در نوبت) علامت‌گذاری کرده است.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    از آنجایی که «عدم حضور» یکی از جدی‌ترین عوامل نارضایتی بیماران و کاهش اعتماد آن‌ها به خدمات حضوری است، این گزارش به شما کمک می‌کند تا این موارد خاص را شناسایی کرده، علت آن را بررسی کنید و امتیاز عملکرد خود را بهبود بخشید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Phone Modal */}
        {showPhoneModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" dir="rtl">
            <div className="bg-white rounded-lg max-w-sm w-full">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-800">شماره موبایل</h2>
                <button
                  onClick={() => setShowPhoneModal(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="بستن"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="px-6 py-6">
                <p className="text-lg font-medium text-gray-900 text-center" dir="ltr">
                  {showPhoneModal}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InpersonVisitAbsentReport;

