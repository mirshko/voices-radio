"use client";

import useWeekInfo from "@/hooks/use-week-info";
import { useState } from "react";
import Show from "./show";

export default function ScheduleDialog() {
  const [index, indexSet] = useState(0);

  const { data } = useWeekInfo();

  if (data) {
    const [date, shows] = data[index];

    return (
      <div className="mx-auto w-full max-w-5xl pt-10 md:p-10">
        <div className="mx-auto mb-4 grid w-full grid-cols-3 gap-16">
          <button
            className="inline-flex h-8 w-8 items-center justify-center justify-self-end text-inter-text text-white focus:outline-none disabled:text-white/50"
            disabled={index <= 0}
            onClick={() => indexSet(index - 1)}
          >
            <span role="img" aria-label="Left">{`<-`}</span>
          </button>

          <p className=" justify-self-center text-center text-inter-text text-white">
            {date}
          </p>

          <button
            className="inline-flex h-8 w-8 items-center justify-center justify-self-start text-inter-text text-white focus:outline-none disabled:text-white/50"
            onClick={() => indexSet(index + 1)}
            disabled={index >= data.length - 1}
          >
            <span role="img" aria-label="Right">{`->`}</span>
          </button>
        </div>

        {shows.length > 0 ? (
          <ul className="divide-y divide-white md:divide-none">
            {shows.map((day) => (
              <Show key={day.id} day={day} />
            ))}
          </ul>
        ) : (
          <div className="p-5">
            <p className="flex-1 text-center font-kinfolk text-mobile-kinfolk-artist uppercase text-white md:text-kinfolk-artist">
              No Shows Scheduled For Today
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-1 items-center justify-center p-5">
      <p className="text-center font-kinfolk text-mobile-kinfolk-artist uppercase text-white md:text-kinfolk-artist">
        Loading Schedule
      </p>
    </div>
  );
}
