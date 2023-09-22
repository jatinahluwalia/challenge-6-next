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
      <body className="font-josefin font-medium flex flex-col justify-center h-screen dark:dark-bg-desktop light-bg-desktop bg bg-mobile-light dark:bg-mobile-dark lg:bg-body-light lg:dark:bg-body-dark bg-very-light-grayish-blue dark:bg-very-dark-blue">
        <ProvideThemes>
          <main className="px-8 h-[min(100%,700px)]  w-[min(800px,100%)] mx-auto flex flex-col">
            <Header />
            <section className="flex flex-col">{children}</section>
          </main>
        </ProvideThemes>
      </body>
    </html>
  );
}
