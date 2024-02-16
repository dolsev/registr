import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Registration App",
  description: "Register and go",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Подключаем шрифт Inter */}
        <link rel="stylesheet" href={inter.url} media="print" onLoad="this.media='all'" />
      </head>
      <body className={inter.className}>
      {children}
      </body>
      </html>
  );
}
