import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./ui/globals.css";

const space_mono = Space_Mono({
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Splitter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${space_mono.className} antialiased`}>{children}</body>
    </html>
  );
}
