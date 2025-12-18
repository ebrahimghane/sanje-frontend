import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./my-performance-independent.module.css";

// Types
interface NewsItem {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  type: string;
}

interface GrowthOpportunity {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  type: string;
}

interface SearchDocument {
  entity: {
    id: string;
    display_name: string;
    consult_services: Array<{
      free_price: number;
    }>;
    group_expertise_id: number[];
  };
}

interface PricingStats {
  group_name?: string;
  min?: number;
  max?: number;
  avg?: number;
  group_expertise?: {
    name: string;
  };
  factorCosts?: Array<{
    count: number;
    range: string;
  }>;
}

// The API returns an array where [0] is group info and [1] is stats
interface PricingStatsResponse {
  0: {
    group_expertise: {
      name: string;
    };
  };
  1: {
    group_name?: string;
    minCost: number;
    maxCost: number;
    averageCost: number;
    factorCosts: Array<{
      count: number;
      range: string;
    }>;
  };
}

interface MetricDataItem {
  time: string;
  value: number;
}

interface MetricData {
  data: Array<MetricDataItem>;
}

import { Chart } from "@/fragment/components/chart";

// Helper function to calculate interval based on data length and screen width
const calculateInterval = (dataLength: number, windowWidth: number): number => {
  if (dataLength <= 7) return 0; // Show all labels if data is small
  if (windowWidth < 768) {
    // Mobile: show every 2nd or 3rd label
    return dataLength > 14 ? 2 : 1;
  }
  // Desktop: show every other label if data is large
  return dataLength > 10 ? 1 : 0;
};

const MyPerformanceIndependent: React.FC = () => {
  // State management
  const [currentDoctorData, setCurrentDoctorData] = useState<SearchDocument | null>(null);
  const [newsUpdates, setNewsUpdates] = useState<NewsItem[]>([]);
  const [growthOpportunities, setGrowthOpportunities] = useState<GrowthOpportunity[]>([]);
  const [growthOpportunitiesHeader, setGrowthOpportunitiesHeader] = useState<{
    icon: string;
    title: string;
    subtitle: string;
  } | null>(null);
  const [pricingStats, setPricingStats] = useState<Record<number, PricingStatsResponse>>({});
  const [searchCardViewData, setSearchCardViewData] = useState<MetricData | null>(null);
  const [searchClickPositionData, setSearchClickPositionData] = useState<MetricData | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1200);

  // Loading states
  const [loadingNews, setLoadingNews] = useState(true);
  const [loadingSearchDoc, setLoadingSearchDoc] = useState(true);
  const [loadingGrowth, setLoadingGrowth] = useState(true);
  const [loadingCardView, setLoadingCardView] = useState(true);
  const [loadingClickPosition, setLoadingClickPosition] = useState(true);
  const [loadingPricingStats, setLoadingPricingStats] = useState<Record<number, boolean>>({});

  // Error states
  const [errorNews, setErrorNews] = useState<string | null>(null);
  const [errorSearchDoc, setErrorSearchDoc] = useState<string | null>(null);
  const [errorGrowth, setErrorGrowth] = useState<string | null>(null);
  const [errorCardView, setErrorCardView] = useState<string | null>(null);
  const [errorClickPosition, setErrorClickPosition] = useState<string | null>(null);
  const [errorPricingStats, setErrorPricingStats] = useState<Record<number, string | null>>({});

  // Fetch functions
  const fetchNewsUpdates = async () => {
    try {
      setLoadingNews(true);
      setErrorNews(null);
      const response = await fetch(
        "https://apigw.paziresh24.com/v1/n8n-search/webhook/sanje-news-updates",
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) throw new Error("خطا در دریافت اطلاعات");
      const data = await response.json();
      if (data.news) {
        setNewsUpdates(Array.isArray(data.news) ? data.news : [data.news]);
      }
    } catch (error) {
      setErrorNews("خطا در دریافت اطلاعات");
      console.error("Error fetching news:", error);
    } finally {
      setLoadingNews(false);
    }
  };

  const fetchMySearchDocument = async () => {
    try {
      setLoadingSearchDoc(true);
      setErrorSearchDoc(null);
      const response = await fetch(
        "https://apigw.paziresh24.com/v1/n8n-search/webhook/my-search-document",
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) throw new Error("خطا در دریافت اطلاعات");
      const data = await response.json();
      setCurrentDoctorData(data);
    } catch (error) {
      setErrorSearchDoc("خطا در دریافت اطلاعات. (خطای سیستمی یا نداشتن سطح دسترسی لازم)");
      console.error("Error fetching search document:", error);
    } finally {
      setLoadingSearchDoc(false);
    }
  };

  const fetchGrowthOpportunities = async () => {
    try {
      setLoadingGrowth(true);
      setErrorGrowth(null);
      const response = await fetch(
        "https://apigw.paziresh24.com/v1/n8n-search/webhook/growth-opportunities",
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) throw new Error("خطا در دریافت اطلاعات");
      const data = await response.json();
      if (data.headerSection) {
        setGrowthOpportunitiesHeader(data.headerSection);
      }
      if (data["growth Opportunities"]) {
        setGrowthOpportunities(
          Array.isArray(data["growth Opportunities"])
            ? data["growth Opportunities"]
            : [data["growth Opportunities"]]
        );
      }
    } catch (error) {
      setErrorGrowth("خطا در دریافت اطلاعات. (خطای سیستمی یا نداشتن سطح دسترسی لازم)");
      console.error("Error fetching growth opportunities:", error);
    } finally {
      setLoadingGrowth(false);
    }
  };

  const fetchPricingStats = async (groupExpertiseId: number) => {
    try {
      setLoadingPricingStats((prev) => ({ ...prev, [groupExpertiseId]: true }));
      setErrorPricingStats((prev) => ({ ...prev, [groupExpertiseId]: null }));
      const response = await fetch(
        `https://apigw.paziresh24.com/v1/n8n-search/webhook/GroupExpertiseOnlineVisitsPricingRangeStats?group_expertise_id=${groupExpertiseId}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) throw new Error("خطا در دریافت اطلاعات");
      const data = await response.json();
      // The API returns an array, convert it to object format
      const formattedData: PricingStatsResponse = {
        0: data[0] || { group_expertise: { name: "" } },
        1: data[1] || { minCost: 0, maxCost: 0, averageCost: 0, factorCosts: [] },
      };
      setPricingStats((prev) => ({ ...prev, [groupExpertiseId]: formattedData }));
    } catch (error) {
      setErrorPricingStats((prev) => ({
        ...prev,
        [groupExpertiseId]: "خطا در دریافت اطلاعات",
      }));
      console.error("Error fetching pricing stats:", error);
    } finally {
      setLoadingPricingStats((prev) => ({ ...prev, [groupExpertiseId]: false }));
    }
  };

  const fetchSearchCardView = async () => {
    try {
      setLoadingCardView(true);
      setErrorCardView(null);
      const response = await fetch(
        "https://apigw.paziresh24.com/v1/n8n-search/webhook/my-metric-data?metric_name=search_card_view",
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) throw new Error("خطا در دریافت اطلاعات");
      const data = await response.json();
      setSearchCardViewData(data);
    } catch (error) {
      setErrorCardView("خطا در دریافت اطلاعات");
      console.error("Error fetching card view:", error);
    } finally {
      setLoadingCardView(false);
    }
  };

  const fetchSearchClickPosition = async () => {
    try {
      setLoadingClickPosition(true);
      setErrorClickPosition(null);
      const response = await fetch(
        "https://apigw.paziresh24.com/v1/n8n-search/webhook/my-metric-data?metric_name=search_click_position",
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) throw new Error("خطا در دریافت اطلاعات");
      const data = await response.json();
      setSearchClickPositionData(data);
    } catch (error) {
      setErrorClickPosition("خطا در دریافت اطلاعات");
      console.error("Error fetching click position:", error);
    } finally {
      setLoadingClickPosition(false);
    }
  };

  // Handle window resize for responsive charts
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initial data fetch
  useEffect(() => {
    fetchNewsUpdates();
    fetchMySearchDocument();
    fetchGrowthOpportunities();
  }, []);

  // Fetch pricing stats when search document is loaded
  useEffect(() => {
    if (currentDoctorData?.entity) {
      const groupIds =
        currentDoctorData.entity.group_expertise_id &&
          currentDoctorData.entity.group_expertise_id.length > 0
          ? currentDoctorData.entity.group_expertise_id
          : [35];
      groupIds.forEach((id) => {
        if (!pricingStats[id] && !loadingPricingStats[id]) {
          fetchPricingStats(id);
        }
      });
    }
  }, [currentDoctorData]);

  // Fetch search metrics when search document is loaded and has free_price
  useEffect(() => {
    if (currentDoctorData?.entity) {
      fetchSearchCardView();
      fetchSearchClickPosition();
    }
  }, [currentDoctorData]);

  // GTM and Metrica loading
  useEffect(() => {
    // Load GTM
    const loadGTM = () => {
      const gtmScript = document.createElement("script");
      gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-P5RPLDP');`;
      document.head.appendChild(gtmScript);
      const gtmNoScript = document.createElement("noscript");
      gtmNoScript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5RPLDP"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertBefore(gtmNoScript, document.body.firstChild);
    };

    // Load Metrika
    const loadMetrika = () => {
      const metrikaScript = document.createElement("script");
      metrikaScript.innerHTML = `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(98010713, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });`;
      document.head.appendChild(metrikaScript);
      const metrikaNoScript = document.createElement("noscript");
      metrikaNoScript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/98010713" style="position:absolute; left:-9999px;" alt="" /></div>`;
      document.body.insertBefore(metrikaNoScript, document.body.firstChild);
    };

    loadGTM();
    loadMetrika();

    // Send user details to Metrika
    const sendUserDetailsToMetrica = async () => {
      try {
        const response = await fetch("https://apigw.paziresh24.com/v1/auth/me", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) return;
        const data = await response.json();
        if (data && data.users && data.users[0]) {
          const userDetails = {
            id: data.users[0].id?.toString() || null,
            family: data.users[0].family || null,
            name: data.users[0].name || null,
            cell: data.users[0].cell || null,
            email: data.users[0].email || null,
            username: data.users[0].username || null,
            national_code: data.users[0].national_code || null,
            gender: data.users[0].gender || null,
            country_code_id: data.users[0].country_code_id || null,
          };
          setTimeout(() => {
            if (typeof (window as any).ym === "function") {
              (window as any).ym(98010713, "userParams", userDetails);
            }
          }, 3000);
        }
      } catch (error) {
        console.error("Error sending user details to Metrika:", error);
      }
    };

    sendUserDetailsToMetrica();
  }, []);

  const handleCrawlMe = async () => {
    try {
      const response = await fetch(
        "https://apigw.paziresh24.com/v1/n8n-search/webhook/crawl-me",
        {
          method: "PUT",
          credentials: "include",
        }
      );
      if (response.ok) {
        alert("درخواست به‌روزرسانی در نتایج جستجو ثبت شد و در صف آپدیت قرار گرفت.");
      }
    } catch (error) {
      console.error("Error crawling:", error);
    }
  };

  return (
    <>
      <Head>
        <title>شاخص های عملکردی من</title>
        <meta name="twitter:card" content="summary" />
        <link href="https://fonts.paziresh24.com/iran-sans-x.css" rel="stylesheet" />
        <style>{`
          * {
            -moz-font-feature-settings: "ss02";
            -webkit-font-feature-settings: "ss02";
            font-feature-settings: "ss02";
            font-family: 'iran-sans-x' !important;
          }
          body {
            margin: 0;
          }
        `}</style>
      </Head>

      <div className={styles.pageWrapper} dir="rtl">
        <div className={styles.root}>
          {/* Header */}
          <h4 className={styles.header}>
            {currentDoctorData?.entity?.display_name ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: `شاخص‌های عملکرد <b>${currentDoctorData.entity.display_name}</b>`,
                }}
              />
            ) : (
              "شاخص‌های عملکرد شما"
            )}
          </h4>
          {loadingNews ? (
            <div className={styles.loadingContainer}>
              <div>در حال دریافت اطلاعات</div>
            </div>
          ) : errorNews ? (
            <div className={styles.errorContainer}>..</div>
          ) : newsUpdates.length > 0 ? (
            <div className={styles.newsContainer}>
              {newsUpdates.map((item, index) => (
                <TaskCardItem
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  icon={item.icon}
                  type={item.type}
                />
              ))}
            </div>
          ) : null}


          {/* Growth Opportunities */}
          {loadingGrowth ? (
            <div className={styles.loadingContainer}>
              <div>
                لطفاً چند لحظه صبر کنید، در حال تجزیه و تحلیل داده‌های صفحه شما هستیم.
              </div>
            </div>
          ) : errorGrowth ? (
            <div className={styles.errorContainer}>
              خطا در دریافت اطلاعات. (خطای سیستمی یا نداشتن سطح دسترسی لازم)
            </div>
          ) : null}

          {!loadingGrowth &&
            growthOpportunitiesHeader && (
              <div className={styles.growthOpportunitiesContainer}>
                <h6 className={styles.growthHeader}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `${growthOpportunitiesHeader.icon} ${growthOpportunitiesHeader.title}`,
                    }}
                  />
                </h6>
                <main className={styles.growthSubtitle}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: growthOpportunitiesHeader.subtitle || "برای رشد رتبه و افزایش تعداد مراجعین خود نکات زیر را مد نظر قرار دهید.",
                    }}
                  />
                </main>
                {growthOpportunities.map((item, index) => (
                  <TaskCardItem
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                    icon={item.icon}
                    type={item.type}
                  />
                ))}
              </div>
            )}

          {/* Pricing Stats Section */}
          {!loadingGrowth &&
            currentDoctorData?.entity?.consult_services?.[0]?.free_price !== undefined &&
            currentDoctorData?.entity?.consult_services?.[0]?.free_price !== null && (
              <div className={styles.pricingSection}>
                <h6 className={styles.pricingHeader}>🏷️ قیمت‌گذاری ویزیت آنلاین</h6>
                {(currentDoctorData.entity.group_expertise_id &&
                  currentDoctorData.entity.group_expertise_id.length > 0
                  ? currentDoctorData.entity.group_expertise_id
                  : [35]
                ).map((groupId, index) => {
                  const stats = pricingStats[groupId];
                  const loading = loadingPricingStats[groupId];
                  const error = errorPricingStats[groupId];

                  if (loading) {
                    return <div key={index}>Loading...</div>;
                  }
                  if (error) {
                    return <div key={index}>Error fetching data</div>;
                  }
                  if (!stats) {
                    return null;
                  }

                  return (
                    <PricingStatsGroup
                      key={index}
                      stats={stats}
                      doctorPrice={currentDoctorData.entity.consult_services[0].free_price}
                    />
                  );
                })}
                <main className={styles.pricingNote}>
                  داده‌های فوق بر اساس مبلغ پرداختی بیماران در نوبت‌های اخیر محاسبه شده است.
                </main>
                <div className={styles.pricingInfo}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `مبلغ ویزیت آنلاین شما <b>${new Intl.NumberFormat("fa-IR").format(
                        Math.round(
                          currentDoctorData.entity.consult_services[0].free_price / 10000
                        )
                      )} هزارتومان</b> می‌باشد. `,
                    }}
                  />
                </div>
                <main className={styles.pricingAdvice}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `تنظیم قیمت پایین‌تر از میانگین پرداختی بیماران، در رتبه‌بندی شما تاثیر مثبت دارد.  <br>اگر مبلغ انتخابی شما بیش از میانگین هست و یا به تازگی فعالیت خود را شروع کرده اید، توصیه می‌کنیم با مبلغ پایین تری شروع کنید تا توجه جریان ثابتی از مراجعین را به خود جلب کنید. ` +
                        `<br>` +
                        `<b>` +
                        `<a href="https://yun.ir/0x2b0c">` +
                        ` <span style='font-size: smaller; text-decoration: underline;'>برای اصلاح هزینه ویزیت آنلاین خود کلیک کنید</span>` +
                        `</a>` +
                        `<b>`,
                    }}
                  />
                </main>
              </div>
            )}

          {/* Search Stats Section */}
          {!loadingGrowth && (
            <div className={styles.searchStatsSection}>
              <h6 className={styles.searchStatsHeader}>📊 آمار جستجو</h6>

              {/* Search Card View */}
              {loadingCardView ? (
                <div className={styles.loadingContainer}>در حال دریافت اطلاعات</div>
              ) : errorCardView ? (
                <div className={styles.errorContainer}>خطا در دریافت اطلاعات</div>
              ) : searchCardViewData?.data && searchCardViewData.data.length > 0 ? (
                <div className={styles.metricContainer}>
                  <div className={styles.metricTitle}>
                    <strong>مشاهده کارت شما در نتایج</strong>
                  </div>
                  <Chart
                    cartesianGrid={[]}
                    chartConfig={[
                      {
                        key: "value",
                        label: "تعداد مشاهده",
                        color: "#3b82f6",
                        type: "natural",
                        dot: false,
                      },
                    ]}
                    className={styles.fragmentChart}
                    data={searchCardViewData.data.map((item) => ({
                      time: item.time,
                      value: item.value,
                    }))}
                    dataKey={{ key: "value" }}
                    label={false}
                    layout="horizontal"
                    legend={true}
                    nameKey={{ key: "time", label: "" }}
                    stack={false}
                    tooltip={{ enabled: true, indicator: "dashed" }}
                    type="bar"
                    xAxis={{
                      enabled: true,
                      key: "time",
                      type: "category",
                      tickLine: false,
                      axisLine: false,
                      tickMargin: 10,
                      angle: windowWidth < 768 ? -60 : -45,
                      textAnchor: "end",
                      height: windowWidth < 768 ? 100 : 80,
                      interval: calculateInterval(searchCardViewData.data.length, windowWidth),
                    }}
                    yAxis={{
                      enabled: true,
                      key: "value",
                      type: "number",
                      tickLine: false,
                      axisLine: true,
                    }}
                  />
                </div>
              ) : null}

              {/* Search Click Position */}
              {loadingClickPosition ? (
                <div className={styles.loadingContainer}>در حال دریافت اطلاعات</div>
              ) : errorClickPosition ? (
                <div className={styles.errorContainer}>خطا در دریافت اطلاعات</div>
              ) : searchClickPositionData?.data && searchClickPositionData.data.length > 0 ? (
                <div className={styles.metricContainer}>
                  <div className={styles.metricTitle}>
                    <strong>کلیک روی کارت شما</strong>
                  </div>
                  <Chart
                    cartesianGrid={[]}
                    chartConfig={[
                      {
                        key: "value",
                        label: "تعداد کلیک",
                        color: "#3b82f6",
                        type: "natural",
                        dot: false,
                      },
                    ]}
                    className={styles.fragmentChart}
                    data={searchClickPositionData.data.map((item) => ({
                      time: item.time,
                      value: item.value,
                    }))}
                    dataKey={{ key: "value" }}
                    label={false}
                    layout="horizontal"
                    legend={true}
                    nameKey={{ key: "time", label: "" }}
                    stack={false}
                    tooltip={{ enabled: true, indicator: "dashed" }}
                    type="bar"
                    xAxis={{
                      enabled: true,
                      key: "time",
                      type: "category",
                      tickLine: false,
                      axisLine: false,
                      tickMargin: 10,
                      angle: windowWidth < 768 ? -60 : -45,
                      textAnchor: "end",
                      height: windowWidth < 768 ? 100 : 80,
                      interval: searchClickPositionData?.data 
                        ? calculateInterval(searchClickPositionData.data.length, windowWidth)
                        : 0,
                    }}
                    yAxis={{
                      enabled: true,
                      key: "value",
                      type: "number",
                      tickLine: false,
                      axisLine: true,
                    }}
                  />
                </div>
              ) : null}
            </div>
          )}

          {/* Footer Buttons */}
          {!loadingGrowth && (
            <div className={styles.footerSection}>
              <button onClick={handleCrawlMe} className={styles.button}>
                به‌روزرسانی در نتایج جستجو
              </button>

              <div className={styles.footerText}>
                شما در حال مشاهده نسخه آزمایشی (رایگان) صفحه عملکرد پزشکان هستید. ممکن است در
                آینده نیاز به خرید اشتراک برای مشاهده این اطلاعات باشد.
              </div>
              <div className={styles.footerCredit}>
                ساخته شده با <span style={{ color: "var(--token-1jTXKEDkeRHC)" }}>❤</span> برای
                همه پزشکان پذیرش24
              </div>
            </div>
          )}
        </div>
      </div >
    </>
  );
};

// TaskCardItem Component
interface TaskCardItemProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  type: string;
}

const TaskCardItem: React.FC<TaskCardItemProps> = ({
  title,
  subtitle,
  description,
  icon,
  type,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.taskCard}>
      <div
        className={styles.taskCardHeader}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={styles.taskCardTitle}>
          <span>{icon}</span>
          <span>{title}</span>
        </div>
        <span>{isExpanded ? "▲" : "▼"}</span>
      </div>
      {isExpanded && (
        <div className={styles.taskCardContent}>
          {subtitle && (
            <div
              className={styles.taskCardSubtitle}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          )}
          {description && (
            <div
              className={styles.taskCardDescription}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
      )}
    </div>
  );
};

// PricingStatsGroup Component
interface PricingStatsGroupProps {
  stats: PricingStatsResponse;
  doctorPrice: number;
}

const PricingStatsGroup: React.FC<PricingStatsGroupProps> = ({ stats, doctorPrice }) => {
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1200);
  
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const statsData = stats[1];
  const groupInfo = stats[0];
  const averageCost = statsData?.averageCost || 0;

  // تابع عمومی برای پیدا کردن range مربوط به یک مقدار
  const findRangeForValue = (value: number, factorCosts: Array<{ count: number; range: string }>): string | null => {
    if (!factorCosts || factorCosts.length === 0) return null;
    
    // تبدیل value به هزارتومان (اگر لازم باشد)
    const valueInThousands = value;
    
    // تلاش برای parse کردن range و پیدا کردن range مربوط به value
    for (const item of factorCosts) {
      const rangeStr = item.range;
      // تلاش برای parse کردن فرمت‌های مختلف: "min-max", "min- max", "min-max هزارتومان", etc.
      const match = rangeStr.match(/(\d+(?:\.\d+)?)\s*[-–—]\s*(\d+(?:\.\d+)?)/);
      if (match) {
        const min = parseFloat(match[1]);
        const max = parseFloat(match[2]);
        // بررسی می‌کنیم که آیا value در این range قرار دارد
        if (valueInThousands >= min && valueInThousands <= max) {
          return rangeStr;
        }
      }
    }
    
    // اگر range دقیق پیدا نشد، نزدیک‌ترین range را برمی‌گردانیم
    let closestRange: string | null = null;
    let minDistance = Infinity;
    
    for (const item of factorCosts) {
      const rangeStr = item.range;
      const match = rangeStr.match(/(\d+(?:\.\d+)?)\s*[-–—]\s*(\d+(?:\.\d+)?)/);
      if (match) {
        const min = parseFloat(match[1]);
        const max = parseFloat(match[2]);
        const mid = (min + max) / 2;
        const distance = Math.abs(valueInThousands - mid);
        if (distance < minDistance) {
          minDistance = distance;
          closestRange = rangeStr;
        }
      }
    }
    
    return closestRange;
  };

  // تبدیل مبلغ ویزیت پزشک به هزارتومان
  const doctorPriceInThousands = doctorPrice ? Math.round(doctorPrice / 10000) : 0;
  
  const averageRange = statsData?.factorCosts ? findRangeForValue(averageCost, statsData.factorCosts) : null;
  const doctorPriceRange = statsData?.factorCosts && doctorPriceInThousands > 0 
    ? findRangeForValue(doctorPriceInThousands, statsData.factorCosts) 
    : null;

  // محاسبه مقادیر برای Linear Range Slider
  // استخراج min و max از factorCosts در صورت نبودن در statsData
  let minCost = statsData?.minCost || 0;
  let maxCost = statsData?.maxCost || 0;
  
  if ((!minCost || !maxCost) && statsData?.factorCosts && statsData.factorCosts.length > 0) {
    const ranges = statsData.factorCosts
      .map((item) => {
        const match = item.range.match(/(\d+(?:\.\d+)?)\s*[-–—]\s*(\d+(?:\.\d+)?)/);
        if (match) {
          return { min: parseFloat(match[1]), max: parseFloat(match[2]) };
        }
        return null;
      })
      .filter((r): r is { min: number; max: number } => r !== null);
    
    if (ranges.length > 0) {
      const allMins = ranges.map((r) => r.min);
      const allMaxs = ranges.map((r) => r.max);
      minCost = minCost || Math.min(...allMins);
      maxCost = maxCost || Math.max(...allMaxs);
    }
  }

  const avgCost = statsData?.averageCost || 0;
  const doctorPriceValue = doctorPriceInThousands;

  // محاسبه موقعیت‌ها بر اساس درصد (0-100)
  const calculatePosition = (value: number, min: number, max: number): number => {
    if (max === min) return 50; // اگر min و max برابر باشند، وسط قرار بده
    const position = ((value - min) / (max - min)) * 100;
    // محدود کردن موقعیت بین 0 تا 100
    return Math.max(0, Math.min(100, position));
  };

  const averagePosition = calculatePosition(avgCost, minCost, maxCost);
  const doctorPosition = calculatePosition(doctorPriceValue, minCost, maxCost);

  // تعیین رنگ بر اساس مقایسه قیمت پزشک با میانگین
  const isDoctorPriceHigher = doctorPriceValue > avgCost;
  const doctorColor = isDoctorPriceHigher ? "#ef4444" : "#10b981"; // قرمز برای بالاتر، سبز برای پایین‌تر

  // بررسی فاصله بین قیمت پزشک و میانگین برای جلوگیری از تداخل لیبل‌ها
  const positionDifference = Math.abs(doctorPosition - averagePosition);
  const shouldAvoidCollision = positionDifference < 15; // اگر فاصله کمتر از 15% باشد

  return (
    <div className={styles.pricingGroup}>
      <h6 className={styles.groupName}>
        {statsData?.group_name ? `گروه ${statsData.group_name}` : "..."}
      </h6>

      {/* Chart (Area) */}
      {statsData?.factorCosts && (
        <Chart
          cartesianGrid={[]}
          chartConfig={[
            {
              key: "تعداد نوبت",
              label: "فراوانی نوبت‌ها بر حسب هزینه پرداختی",
              color: "#000000",
              type: "natural",
              dot: false,
            },
          ]}
          className={styles.fragmentChart}
          data={statsData.factorCosts.map((item) => ({
            "تعداد نوبت": item.count,
            range: item.range,
          }))}
          dataKey={{ key: "تعداد نوبت" }}
          label={false}
          layout="horizontal"
          legend={true}
          nameKey={{ key: "range", label: "" }}
          stack={false}
          tooltip={{ enabled: true, indicator: "dashed" }}
          type="area"
          xAxis={{
            enabled: true,
            key: "range",
            type: "category",
            tickLine: false,
            axisLine: false,
            tickMargin: 10,
            angle: windowWidth < 768 ? -60 : -45,
            textAnchor: "end",
            height: windowWidth < 768 ? 100 : 80,
            interval: statsData?.factorCosts 
              ? calculateInterval(statsData.factorCosts.length, windowWidth)
              : 0,
          }}
          yAxis={{
            enabled: true,
            key: "تعداد نوبت",
            type: "number",
            tickLine: false,
            axisLine: true,
          }}
          referenceLines={[
            ...(averageRange
              ? [
                  {
                    x: averageRange,
                    label: `میانگین: ${new Intl.NumberFormat("fa-IR").format(Math.round(averageCost))} هزارتومان`,
                    color: "#ef4444",
                    strokeDasharray: "5 5",
                  },
                ]
              : []),
            ...(doctorPriceRange && doctorPriceInThousands > 0
              ? [
                  {
                    x: doctorPriceRange,
                    label: `مبلغ شما: ${new Intl.NumberFormat("fa-IR").format(doctorPriceInThousands)} هزارتومان`,
                    color: "#3b82f6",
                    strokeDasharray: "3 3",
                  },
                ]
              : []),
          ]}
        />
      )}

      {/* Average Cost Info */}
      <div className={styles.averageCostInfo}>
        <span
          dangerouslySetInnerHTML={{
            __html: `میانگین مبلغ ویزیت پرداختی دسته <b>${groupInfo?.group_expertise?.name || ""
              }: ${new Intl.NumberFormat("fa-IR").format(
                Math.round(averageCost)
              )} هزارتومان</b>`,
          }}
        />
      </div>

      {/* Linear Range Slider */}
      {minCost > 0 && maxCost > 0 && doctorPriceValue > 0 && (
        <div className={styles.priceRangeSlider}>
          <div className={styles.priceRangeBar}>
            {/* نشانگر میانگین بازار */}
            <div
              className={`${styles.marketAverageMarker} ${shouldAvoidCollision ? styles.marketAverageMarkerBottom : ''}`}
              style={{ left: `${averagePosition}%` }}
            >
              <div className={styles.markerLine} />
              <div className={`${styles.markerLabel} ${shouldAvoidCollision ? styles.markerLabelBottom : ''} ${styles.averageLabel}`}>
                میانگین: {new Intl.NumberFormat("fa-IR").format(Math.round(avgCost))} هزارتومان
              </div>
            </div>

            {/* نشانگر قیمت پزشک */}
            <div
              className={styles.doctorPriceMarker}
              style={{ left: `${doctorPosition}%` }}
            >
              <div
                className={styles.doctorPriceDot}
                style={{ backgroundColor: doctorColor }}
              />
              <div className={`${styles.markerLabel} ${styles.doctorLabel}`} style={{ color: doctorColor }}>
                شما: {new Intl.NumberFormat("fa-IR").format(doctorPriceValue)} هزارتومان
              </div>
            </div>

            {/* نوار پس‌زمینه */}
            <div className={styles.rangeBarBackground} />
          </div>

          {/* برچسب‌های Min و Max - زیر نوار */}
          <div className={styles.rangeLabels}>
            <span className={styles.rangeLabelMin}>
              کمترین: {new Intl.NumberFormat("fa-IR").format(Math.round(minCost))} هزارتومان
            </span>
            <span className={styles.rangeLabelMax}>
              بیشترین: {new Intl.NumberFormat("fa-IR").format(Math.round(maxCost))} هزارتومان
            </span>
          </div>
        </div>
      )}
    </div>
  );
};


export default MyPerformanceIndependent;

