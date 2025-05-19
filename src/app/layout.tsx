import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, Inter } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import RootProviders from "@/components/providers";

const fontSans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const fontHeading = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.creator.name,
  icons: {
    icon: "/thanos.png",
    shortcut: "/thanos.png",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/thanos.png",
        width: 1200,
        height: 1200,
        alt: siteConfig.name,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.socials.github,
    title: siteConfig.title,
    description: siteConfig.description,
    images: {
      url: "/thanos.png",
      width: 1200,
      height: 1200,
      alt: siteConfig.name,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-foreground selection:text-background",
          fontSans.variable,
          fontHeading.variable,
          fontMono.variable
        )}
      >
        <RootProviders>
          <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-background to-background/80">
            {children}
          </div>
        </RootProviders>
      </body>
    </html>
  );
}
