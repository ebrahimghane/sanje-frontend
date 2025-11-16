import React, { useEffect, useState } from "react";
import Head from "next/head";

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
  const [error, setError] = useState<string | null>(null);
  const [visitDetails, setVisitDetails] = useState<VisitDetail[]>([]);
  const [penalty, setPenalty] = useState<number | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Step 1: Get doctor profile to get slug
        let profileResponse: Response;
        try {
          profileResponse = await fetch(
            "https://apigw.paziresh24.com/v1/doctor/profile",
            {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } catch (networkError) {
          throw new Error("خطا در اتصال به سرور. لطفاً اتصال اینترنت خود را بررسی کنید.");
        }

        if (!profileResponse.ok) {
          if (profileResponse.status === 401) {
            throw new Error("لطفاً ابتدا وارد حساب کاربری خود شوید.");
          }
          if (profileResponse.status === 403) {
            throw new Error("شما دسترسی لازم برای مشاهده این صفحه را ندارید.");
          }
          if (profileResponse.status >= 500) {
            throw new Error("خطا در سرور. لطفاً بعداً تلاش کنید.");
          }
          throw new Error("خطا در دریافت اطلاعات پروفایل پزشک");
        }

        let profileData: DoctorProfile | DoctorProfile[];
        try {
          profileData = await profileResponse.json();
        } catch (jsonError) {
          throw new Error("خطا در پردازش اطلاعات دریافتی از سرور.");
        }

        // Handle both array and object responses
        const profile = Array.isArray(profileData) ? profileData[0] : profileData;
        const doctorSlug = profile?.data?.slug;

        if (!doctorSlug) {
          throw new Error("Slug پزشک یافت نشد");
        }

        setSlug(doctorSlug);

        // Step 2: Get penalty from my-search-document
        let searchDocResponse: Response;
        try {
          searchDocResponse = await fetch(
            "https://apigw.paziresh24.com/v1/n8n-jahannama/webhook/my-search-document",
            {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } catch (networkError) {
          throw new Error("خطا در اتصال به سرور برای دریافت نمره منفی.");
        }

        if (!searchDocResponse.ok) {
          if (searchDocResponse.status >= 500) {
            throw new Error("خطا در سرور. لطفاً بعداً تلاش کنید.");
          }
          // Don't throw error for penalty, just set it to null
          setPenalty(null);
        } else {
          let searchDocData: SearchDocumentResponse | SearchDocumentResponse[];
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
          }
        }

        // Step 3: Get visit details
        let detailsResponse: Response;
        try {
          detailsResponse = await fetch(
            `https://apigw.paziresh24.com/ravi/v1/offlinevisit_detail?slug=${encodeURIComponent(doctorSlug)}`,
            {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } catch (networkError) {
          throw new Error("خطا در اتصال به سرور برای دریافت جزئیات گزارش‌ها.");
        }

        if (!detailsResponse.ok) {
          if (detailsResponse.status === 401) {
            throw new Error("لطفاً ابتدا وارد حساب کاربری خود شوید.");
          }
          if (detailsResponse.status === 403) {
            throw new Error("شما دسترسی لازم برای مشاهده این اطلاعات را ندارید.");
          }
          if (detailsResponse.status >= 500) {
            throw new Error("خطا در سرور. لطفاً بعداً تلاش کنید.");
          }
          if (detailsResponse.status === 404) {
            // No data is not an error, just set empty array
            setVisitDetails([]);
          } else {
            throw new Error("خطا در دریافت جزئیات گزارش‌ها");
          }
        } else {
          let detailsData: VisitDetail[];
          try {
            detailsData = await detailsResponse.json();
          } catch (jsonError) {
            throw new Error("خطا در پردازش اطلاعات جزئیات گزارش‌ها.");
          }
          setVisitDetails(Array.isArray(detailsData) ? detailsData : []);
        }

        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "خطای نامشخص");
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
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" dir="rtl">
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
          <div className="max-w-md w-full bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-red-600 mb-2 text-lg font-medium">خطا</div>
            <div className="text-gray-700 mb-4">{error}</div>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              تلاش مجدد
            </button>
          </div>
        </div>
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
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h1 className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-2 mb-4 mt-0">
            📊 گزارش ویزیت حضوری ناموفق
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
                (مانند عدم حضور) ثبت‌شده برای شما است.
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
              این شاخص، مواردی را اندازه‌گیری می‌کند که بیمار، ویزیت حضوری خود
              را «ناموفق» (معمولاً به دلیل عدم حضور در نوبت) علامت‌گذاری کرده است.
            </p>
            <p className="text-sm text-gray-800 leading-relaxed mb-0">
              از آنجایی که «عدم حضور» یکی از جدی‌ترین عوامل نارضایتی بیماران
              و کاهش اعتماد آن‌ها به خدمات حضوری است، این گزارش به شما کمک
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

export default InpersonVisitAbsentReport;

