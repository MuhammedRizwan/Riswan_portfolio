import type { Metadata } from "next";
import { Underdog } from "next/font/google"; 
import './globals.css';

const underdog = Underdog({  
  subsets: ["latin"],
  weight: "400",
  variable: "--font-underdog",
});

export const metadata: Metadata = {
  title: "Muhammed Riswan's Portfolio",
  description: "Portfolio of Muhammed Riswan, a passionate web developer specializing in Next.js, real-time applications, and secure payment systems.",
  keywords: ["Muhammed Riswan", "portfolio", "web developer", "Next.js", "React", "Tailwind CSS", "Heaven Finder", "NextTick"],
  openGraph: {
    title: "Muhammed Riswan's Portfolio",
    description: "Explore the projects and skills of Muhammed Riswan, a web developer with expertise in Next.js and real-time applications.",
    url: "https://riswan.site",
    siteName: "Muhammed Riswan's Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammed Riswan's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Riswan's Portfolio",
    description: "Explore the projects and skills of Muhammed Riswan, a web developer.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${underdog.variable} antialiased bg-zinc-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
