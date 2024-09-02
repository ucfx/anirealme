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
  title: {
    default: "Anirealme",
    template: "%s | Anirealme",
  },
  description:
    "Your gateway to the captivating worlds of anime and manga. Dive into a rich collection of series, discover new favorites, and stay updated with the latest in the anime and manga universe. Whether you're a seasoned fan or just starting your journey, AniRealme offers everything you need to explore and enjoy these vibrant storytelling mediums.",
  openGraph: {
    type: "website",
    title: "Anirealme",
    description: "Your gateway to the captivating worlds of anime and manga.",
    url: "https://anirealme.vercel.app/",
    images: [
      {
        url: "https://anirealme.vercel.app/img/og-image.jpg",
        width: 1200,
        height: 675,
        alt: "Anirealme",
      },
    ],
  },
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
