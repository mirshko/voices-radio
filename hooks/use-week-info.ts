import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

export interface WeekInfo {
  monday: Day[];
  tuesday: Day[];
  wednesday: Day[];
  thursday: Day[];
  friday: Day[];
  saturday: Day[];
  sunday: Day[];
  nextmonday: Day[];
  nexttuesday: Day[];
  nextwednesday: Day[];
  nextthursday: Day[];
  nextfriday: Day[];
  nextsaturday: Day[];
  nextsunday: Day[];
  AIRTIME_API_VERSION: string;
}

export interface Day {
  start_timestamp: string;
  end_timestamp: string;
  name: string;
  description: string;
  id: number;
  instance_id: number;
  instance_description: string;
  record: number;
  url: string;
  image_path: string;
  image_cloud_file_id: null;
  auto_dj: boolean;
  starts: string;
  ends: string;
}

export interface ProcessedDay {
  id: number;
  name: string;
  start_timestamp: string;
  end_timestamp: string;
  show_start_hour: string;
  show_end_hour: string;
  is_past: boolean;
  is_live: boolean;
}

export default function useWeekInfo() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return useSWR<{ [key: string]: ProcessedDay[] }>(
    `/api/week-info?tz=${tz}`,
    fetcher,
    {
      refreshInterval: 1000 * 60 * 10,
    },
  );
}
