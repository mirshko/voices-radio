import { draftMode } from "next/headers";

export async function GET() {
  draftMode().enable();

  return new Response("Draft mode is enabled", {
    status: 307,
    headers: { Location: "/" },
  });
}
