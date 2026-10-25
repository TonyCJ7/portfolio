import { NextResponse, type NextRequest } from "next/server";
// TODO: this import puts every Workshop entry in the proxy chunk (~285 KB); revisit if entries grow or cold starts show up.
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
