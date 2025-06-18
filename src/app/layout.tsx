import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import "./globals.css";
import { FallingTechIcons } from "@/components/faillingIcons/FallingTechIcons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aladdin-portfolio.netlify.app"),
  title: {
    default: "Aladdin Mohamed Al-Haddad - Frontend Developer",
    template: "%s | Aladdin Mohamed Al-Haddad",
  },
  description:
    "Passionate frontend developer from Yemen, crafting beautiful and functional web experiences. Specializing in React, TypeScript, and modern web technologies.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "UI/UX",
    "Yemen",
    "Zid",
    "Portfolio",
  ],
  authors: [{ name: "Aladdin Mohamed Al-Haddad" }],
  creator: "Aladdin Mohamed Al-Haddad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aladdin.dev",
    title: "Aladdin Mohamed Al-Haddad - Frontend Developer",
    description:
      "Passionate frontend developer from Yemen, crafting beautiful and functional web experiences.",
    siteName: "Aladdin Mohamed Al-Haddad Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aladdin Mohamed Al-Haddad - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aladdin Mohamed Al-Haddad - Frontend Developer",
    description:
      "Passionate frontend developer from Yemen, crafting beautiful and functional web experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <FallingTechIcons />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
