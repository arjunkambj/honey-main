import type { Metadata } from "next";
import { Geist_Mono, Geist_Pixel, Inter_Tight } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toast";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistPixel = Geist_Pixel({
  variable: "--font-pixel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        interTight.variable,
        geistMono.variable,
        geistPixel.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <SmoothScroll>
            {children}
            <Toaster />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
