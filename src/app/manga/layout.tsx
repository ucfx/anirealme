import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Manga",
    template: "%s | AniRealme",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
