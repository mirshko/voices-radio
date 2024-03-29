"use client";

export default function JoinChat() {
  return (
    <button
      onClick={() => {
        window.open("/chat", "voiceschatwindow", "width=480,height=520");
      }}
      className="relative ml-8 hidden whitespace-nowrap rounded-full bg-white px-6 py-1.5 text-inter-text-small lg:block"
    >
      <span>Join Chat</span>

      {/* Tail */}
      <svg
        className="absolute -left-9 top-1/2 hidden -translate-y-1/2 md:inline"
        width="40"
        height="16"
        viewBox="0 0 40 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.4647 7.51292C31.2534 7.69884 33.6739 8.6872 35.5813 10.8206C37.0172 12.427 38.4733 14.0156 39.9294 15.6041L40 15.6812L40 4.92976C38.8614 3.93606 37.6473 3.04405 36.3038 2.32282C32.4494 0.253671 28.5534 0.270663 24.633 2.08811C22.6501 3.00749 20.8631 4.22864 19.2985 5.76022C18.4908 6.55264 17.7128 7.37584 16.917 8.18057C15.0224 10.0993 12.8318 11.5511 10.2526 12.3879C8.38851 12.9942 6.47144 13.2306 4.51405 13.2145C3.1529 13.2019 1.79317 13.2125 0.434178 13.2202C0.293882 13.222 0.106394 13.1505 -1.95201e-06 13.4061C0.160061 13.5007 0.310924 13.6126 0.48093 13.6871C4.1158 15.2764 7.88025 15.7454 11.7838 14.9903C13.3235 14.6937 14.7787 14.1388 16.1273 13.3578C17.3016 12.6774 18.376 11.8365 19.2915 10.8116C19.808 10.2329 20.3799 9.70848 21.0416 9.28571C23.3112 7.83386 25.8133 7.33647 28.4647 7.51292Z"
          fill="#fff"
        />
      </svg>
    </button>
  );
}
