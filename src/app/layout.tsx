import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex-sans',
});

export const metadata: Metadata = {
  title: "Next Lab",
  description: "Official website of Next Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexSans.className} font-sans antialiased`}
      >
        <Navbar />
        <main className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8">
          <div className="w-full max-w-[1920px] mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
