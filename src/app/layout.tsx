import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const tajawal = Tajawal({
  subsets: ["latin", "arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});
import { ThemeProvider } from "@/providers/ThemeProvider";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Anirealme",
  description: "Anirealme is a website that provides information about anime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning={true}>
      <body className={tajawal.className}>
        <div
          vaul-drawer-wrapper=""
          className="relative flex min-h-screen flex-col bg-background"
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
