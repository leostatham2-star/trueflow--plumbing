import type { Metadata } from "next";
import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TrueFlow Plumbing & Repair | Licensed Plumbers in Columbus, OH",
  description:
    "TrueFlow Plumbing & Repair is a family run plumbing company serving Columbus and central Ohio. Leak detection, drain cleaning, water heaters, repiping and 24 hour emergency service.",
  keywords: [
    "plumber",
    "plumbing repair",
    "drain cleaning",
    "water heater",
    "emergency plumber",
    "Columbus Ohio plumbing",
  ],
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "TrueFlow Plumbing & Repair",
    description:
      "Licensed plumbers serving Columbus and central Ohio around the clock.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${nunito.variable} antialiased bg-background text-foreground font-body`}
      >
        {children}
      </body>
    </html>
  );
}
