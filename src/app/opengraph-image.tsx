import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { DOT, GLYPH } from "@/components/Logo/paths";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, ${profile.role}`;

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

const dmSansBold = await readFile(
  join(process.cwd(), "src/assets/fonts/DMSans-Bold.ttf"),
);

// Satori widens each word by its kerning (T-o in "Tony"); one unbroken run keeps the gaps even.
const unbrokenName = profile.name.replaceAll(" ", "\u00a0");

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#16161A",
          fontFamily: "DM Sans",
        }}
      >
        <svg width={160} height={160} viewBox="0 0 256 256">
          <path fill="#F5F5F4" d={GLYPH} />
          <path fill="#FF5C1A" d={DOT} />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, color: "#F5F5F4" }}>
            {unbrokenName}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                background: "#FF5C1A",
              }}
            />
            <div style={{ fontSize: 32, color: "#ADADB2" }}>
              {profile.role}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "DM Sans", data: dmSansBold, style: "normal", weight: 700 }],
    },
  );
}
