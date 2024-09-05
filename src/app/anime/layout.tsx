import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Anime",
    template: "%s | Anime",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
