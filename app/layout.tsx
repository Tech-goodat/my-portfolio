import type { Metadata } from "next";
import { Alatsi } from "next/font/google";
// @ts-expect-error Next.js loads this global stylesheet at runtime.
import "./globals.css";

const alatsi = Alatsi({
  variable: "--font-alatsi",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Felix Kiprotich — Software Engineer",
  description:
    "Software engineer building intelligent applications, strong backend systems, and real-time products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alatsi.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}