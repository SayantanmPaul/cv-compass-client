import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import QueryProvider from "@/lib/QueryProvider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "CVCompass: AI-Powered Resume Review & Optimization Tool",
  description: "Accelerate talent match, find right talents, amplify Quality.",
  keywords: [
    "free resume review",
    "AI resume checker",
    "ATS bypass",
    "resume optimization",
    "open-source resume tools",
    "Llama 3 resume analysis",
    "Free ATS Scanner",
    "best resume optimization tool",
    "improve resume for ATS",
    "resume analysis AI",
    "optimize resume for job search",
    "how to pass ATS scan",
  ],
  openGraph: {
    title: "CVCompass: AI-Powered Resume Review & Optimization Tool",
    description:
      "Accelerate talent match, find right talents, amplify Quality.",
    images: [
      "https://images.pexels.com/photos/30553833/pexels-photo-30553833.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    url: "https://cvcompass.sayantanpaul.com",
  },
  twitter: {
    title: "CVCompass: AI-Powered Resume Review & Optimization Tool",
    description:
      "Accelerate talent match, find right talents, amplify Quality.",
    images: [
      "https://images.pexels.com/photos/30553833/pexels-photo-30553833.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    card: "summary_large_image",
    creator: "@sayantanpaul",
    site: "@sayantanpaul",
  },
  appleWebApp: {
    title: "CVCompass: AI-Powered Resume Review & Optimization Tool",
    startupImage: [
      "https://images.pexels.com/photos/30553833/pexels-photo-30553833.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  category: "productivity",
  authors: [{ name: "Sayantan Paul", url: "https://sayantanpaul.com/" }],
  creator: "Sayantan Paul",
  themeColor: "#181818",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`antialiased flex flex-col items-center h-[100vh]`}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
