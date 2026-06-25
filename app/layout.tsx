import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SGS Golf Co. | Short Game Golf Lessons & Coaching",
  description:
    "SGS Golf Co. specializes in short game golf coaching — putting, chipping, pitching, and bunker play. Book structured lessons to lower your scores and master the shots that matter most.",
  keywords: [
    "short game golf lessons",
    "golf lessons",
    "golf coach",
    "putting lessons",
    "chipping lessons",
    "golf coaching",
    "beginner golf lessons",
    "break 100 golf",
    "golf instructor",
  ],
  openGraph: {
    title: "SGS Golf Co. | Short Game Lessons",
    description: "Master the short game. Master your score.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
