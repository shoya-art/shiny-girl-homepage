import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiny☆Girl ホームページ デザイン提案",
  description: "Shiny☆Girlのホームページデザイン3案を比較できる提案サイトです。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
