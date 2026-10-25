import { NextResponse, type NextRequest } from "next/server";
import { findEntry } from "@/app/workshop/entries";

export const config = { matcher: "/workshop/:entry" };

// The entry page streams its prerendered shell (status 200) before notFound() can run.
export function proxy(request: NextRequest) {
  const entry = request.nextUrl.pathname.split("/")[2];

  if (findEntry(entry)) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/404", request.url));
}
