import Link from "next/link";
import { CSSProperties } from "react";

export default function ChatLink({ style = {} }: { style?: CSSProperties }) {
  return (
    <Link
      href="/chat"
      target="_blank"
      className="relative mr-7 inline-flex justify-self-start rounded-full bg-white px-4 py-1.5 text-mobile-inter-small lg:hidden"
      style={style}
    >
      <span>Chat</span>

      {/* Tail */}
      <svg
        className="absolute -right-7 top-1/2 -translate-y-1/2"
        width="32"
        height="12"
        viewBox="0 0 44 17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6888 9.06325C9.62128 8.85873 6.95873 7.77153 4.86053 5.42478C3.28111 3.65767 1.67934 1.91021 0.0776504 0.162839L0 0.078125L7.51084e-08 11.9047C1.25242 12.9978 2.58794 13.979 4.06581 14.7724C8.30567 17.0485 12.5913 17.0298 16.9038 15.0306C19.0848 14.0192 21.0506 12.676 22.7717 10.9912C23.6602 10.1196 24.5159 9.21403 25.3913 8.32882C27.4754 6.21821 29.8851 4.62126 32.7222 3.70069C34.7726 3.03381 36.8814 2.77376 39.0345 2.79143C40.5318 2.80532 42.0275 2.79371 43.5224 2.78523C43.6767 2.78317 43.883 2.86191 44 2.58069C43.8239 2.47661 43.658 2.35351 43.471 2.27157C39.4726 0.523367 35.3317 0.00745414 31.0378 0.838051C29.3442 1.16435 27.7434 1.77469 26.2599 2.63382C24.9682 3.38224 23.7863 4.30725 22.7793 5.43465C22.2112 6.07128 21.5821 6.64811 20.8542 7.11316C18.3576 8.71021 15.6054 9.25734 12.6888 9.06325Z"
          fill="#fff"
        />
      </svg>
    </Link>
  );
}
