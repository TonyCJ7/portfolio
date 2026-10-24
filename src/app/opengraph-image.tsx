import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { DOT, GLYPH } from "@/components/Logo/paths";
import { profile } from "@/content/profile";
import { ogImage } from "@/lib/metadata";

export const alt = ogImage.alt;

export const size = { width: ogImage.width, height: ogImage.height };

export const contentType = ogImage.type;

const dmSansBold = await readFile(
  join(process.cwd(), "src/assets/fonts/DMSans-Bold.ttf"),
);

const markSize = 160;

// The j's lower cap is the mark's leftmost ink, 46.4 units into its 256 unit grid.
const markInset = (46.4 / 256) * markSize;

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
        <svg
          width={markSize}
          height={markSize}
          viewBox="0 0 256 256"
          style={{ marginLeft: -markInset }}
        >
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
