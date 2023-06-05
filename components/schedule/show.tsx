import clsx from "clsx";

export default function Show({
  day,
}: {
  day: {
    id: number;
    name: string;
    show_start_hour: string;
    show_end_hour: string;
    is_live: boolean;
  };
}) {
  return (
    <li
      className={clsx(
        "p-5 md:px-6 md:pb-0 md:pt-5",
        day.is_live ? "-mt-px bg-white text-black md:rounded-xl" : "text-white"
      )}
    >
      <div className="flex items-center gap-8">
        <p className="text-inter-small whitespace-nowrap tabular-nums">
          {`${day.show_start_hour} - ${day.show_end_hour}`}
        </p>

        <p className="flex-1 font-kinfolk text-mobile-kinfolk-artist uppercase md:text-kinfolk-artist">
          {day.name}
        </p>

        {day.is_live && (
          <div className="flex items-center gap-2">
            <p className="text-mobile-inter-xsmall">Live</p>

            <div className="h-4 w-4 animate-pulse rounded-full bg-[#FF0000]" />
          </div>
        )}
      </div>

      <div className="hidden h-5 md:block" />

      <div className="hidden h-px w-full bg-white md:block" />
    </li>
  );
}