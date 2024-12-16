import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Laout from "./{grid}/layout";

const montserrat = Montserrat ({weight:['300','400','700'],subsets:["latin"]})
export const metadata: Metadata = {
  title: "gaming ",
  description: "this is a gaming website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}dark antialiased`}>
       <Laout children={undefined}/>
        {children}
        
      </body>
    </html>
  );
}
