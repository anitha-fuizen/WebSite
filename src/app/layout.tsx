import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.site.url),
  title: {
    default: `${profile.fullName} — ${profile.headline}`,
    template: `%s — ${profile.fullName}`,
  },
  description: profile.summary,
  openGraph: {
    title: `${profile.fullName} — ${profile.headline}`,
    description: profile.summary,
    url: profile.site.url,
    siteName: profile.fullName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} — ${profile.headline}`,
    description: profile.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
