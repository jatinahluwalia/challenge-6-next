import "./globals.css";
import type { Metadata } from "next";
import ProvideThemes from "@/providers/theme";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo app for frontend mentor io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-josefin flex flex-col justify-center h-screen dark:dark-bg-desktop light-bg-desktop">
        <ProvideThemes>
          <header className="h-[min(100%,700px)]">
            <Header />
          </header>
          <main className="flex flex-col">{children}</main>
        </ProvideThemes>
      </body>
    </html>
  );
}
