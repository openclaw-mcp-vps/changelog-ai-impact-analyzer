import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog AI Impact Analyzer",
  description: "Correlates changelog entries with user metrics to identify which changes drive engagement."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="92adcff3-87a8-4a95-b887-f525a6c04d99"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
