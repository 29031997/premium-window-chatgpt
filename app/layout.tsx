import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VELORA — архитектурные окна",
  description:
    "Премиальные оконные системы, панорамное остекление и интерактивный предварительный расчёт.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
