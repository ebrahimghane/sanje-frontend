import React, { useState } from "react";

export interface ErrorDetails {
  statusCode?: number;
  statusText?: string;
  requestId?: string;
  traceSid?: string;
  endpoint?: string;
  timestamp: string;
  errorType?: string;
  userMessage: string;
}

export interface ErrorStateProps {
  error: string | ErrorDetails;
  onRetry?: () => void;
  retryLabel?: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  error,
  onRetry,
  retryLabel = "تلاش مجدد",
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  // Normalize error to ErrorDetails format
  const errorDetails: ErrorDetails = React.useMemo(() => {
    if (typeof error === "string") {
      return {
        userMessage: error,
        timestamp: new Date().toISOString(),
      };
    }
    return error;
  }, [error]);

  // Determine error type label
  const getErrorTypeLabel = (): string => {
    if (errorDetails.errorType) {
      return errorDetails.errorType;
    }
    if (errorDetails.statusCode === 504) {
      return "Server Timeout - Infrastructure Issue";
    }
    if (errorDetails.statusCode === 200 && errorDetails.errorType === "Data Availability Issue") {
      return "Data Availability Issue";
    }
    if (errorDetails.statusCode) {
      return `${errorDetails.statusCode} ${errorDetails.statusText || ""}`;
    }
    return "Logic Error";
  };

  // Format status code display
  const getStatusCodeDisplay = (): string => {
    if (errorDetails.statusCode) {
      return `${errorDetails.statusCode} ${errorDetails.statusText || ""}`;
    }
    return "Logic Error";
  };

  // Copy error report to clipboard
  const copyErrorReport = async () => {
    const report = {
      statusCode: errorDetails.statusCode
        ? `${errorDetails.statusCode} ${errorDetails.statusText || ""}`
        : "Logic Error",
      requestId: errorDetails.requestId || "N/A",
      traceSid: errorDetails.traceSid || "N/A",
      endpoint: errorDetails.endpoint || "N/A",
      timestamp: errorDetails.timestamp,
      errorType: getErrorTypeLabel(),
      userMessage: errorDetails.userMessage,
    };

    try {
      await navigator.clipboard.writeText(JSON.stringify(report, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" dir="rtl">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
        <div className="text-red-600 mb-2 text-lg font-medium">خطا</div>
        <div className="text-gray-700 mb-4">{errorDetails.userMessage}</div>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors mb-3"
          >
            {retryLabel}
          </button>
        )}

        <div className="mt-4">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            {showDetails ? "مخفی کردن جزئیات فنی" : "نمایش جزئیات فنی"}
          </button>

          {showDetails && (
            <div className="mt-4 text-right bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Status Code:</span>{" "}
                  <span className="text-gray-600">{getStatusCodeDisplay()}</span>
                </div>
                {errorDetails.requestId && (
                  <div>
                    <span className="font-medium text-gray-700">Request ID:</span>{" "}
                    <span className="text-gray-600 font-mono text-xs">{errorDetails.requestId}</span>
                  </div>
                )}
                {errorDetails.traceSid && (
                  <div>
                    <span className="font-medium text-gray-700">Trace/Sid:</span>{" "}
                    <span className="text-gray-600 font-mono text-xs">{errorDetails.traceSid}</span>
                  </div>
                )}
                {errorDetails.endpoint && (
                  <div>
                    <span className="font-medium text-gray-700">Endpoint:</span>{" "}
                    <span className="text-gray-600 font-mono text-xs break-all">{errorDetails.endpoint}</span>
                  </div>
                )}
                <div>
                  <span className="font-medium text-gray-700">Timestamp:</span>{" "}
                  <span className="text-gray-600">{new Date(errorDetails.timestamp).toLocaleString("fa-IR")}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Error Type:</span>{" "}
                  <span className="text-gray-600">{getErrorTypeLabel()}</span>
                </div>
              </div>

              <button
                onClick={copyErrorReport}
                className="mt-4 px-3 py-1.5 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-sm"
              >
                {copied ? "کپی شد!" : "کپی گزارش خطا"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorState;

