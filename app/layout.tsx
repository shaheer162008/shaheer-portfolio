import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WhatsAppButton from "@/components/whatsapp";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Shaheer | Full Stack Web Developer",
  description: "Full Stack Developer with 3+ years of experience building TypeScript/Next.js web apps and AI-powered tools",
  icons: {
    icon: "/code.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <WhatsAppButton/>
      </body>
    </html>
  );
}
