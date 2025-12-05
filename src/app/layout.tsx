import type { Metadata } from "next";
import { Underdog,Saira_Stencil_One } from "next/font/google";
import './globals.css';

const underdog = Underdog({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-underdog",
});
const saira_Stencil_One = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-saira_stencil_One",
});

export const metadata: Metadata = {
  title: {
    default: "Muhammed Riswan - Full Stack Web Developer & Software Engineer",
    template: "%s | Muhammed Riswan"
  },
  description: "Muhammed Riswan is a passionate full-stack web developer specializing in Next.js, React, Node.js, and real-time applications. View my portfolio, projects, and professional experience.",
  keywords: [
    "Muhammed Riswan",
    "Muhammed Riswan developer",
    "Muhammed Riswan portfolio",
    "Muhammed Riswan web developer",
    "Muhammed Riswan software engineer",
    "portfolio",
    "web developer",
    "full stack developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Heaven Finder",
    "NextTick",
    "software engineer",
    "frontend developer",
    "backend developer",
    "JavaScript developer",
    "TypeScript developer"
  ],
  authors: [{ name: "Muhammed Riswan" }],
  creator: "Muhammed Riswan",
  publisher: "Muhammed Riswan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.riswan.site",
    siteName: "Muhammed Riswan - Portfolio",
    title: "Muhammed Riswan - Full Stack Web Developer & Software Engineer",
    description: "Explore the portfolio of Muhammed Riswan, a passionate full-stack web developer specializing in Next.js, React, Node.js, and real-time applications. View my projects and professional experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammed Riswan - Full Stack Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@riswan_dev",
    creator: "@riswan_dev",
    title: "Muhammed Riswan - Full Stack Web Developer & Software Engineer",
    description: "Portfolio of Muhammed Riswan, a passionate full-stack web developer specializing in Next.js, React, and Node.js applications.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.riswan.site",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammed Riswan",
    "jobTitle": "Full Stack Web Developer & Software Engineer",
    "description": "Passionate full-stack web developer specializing in Next.js, React, Node.js, and real-time applications",
    "url": "https://www.riswan.site",
    "sameAs": [
      "https://github.com/MuhammedRizwan",
      "https://www.linkedin.com/in/muhammedrizwan-pannicode/"
    ],
    "knowsAbout": [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Web Development",
      "Full Stack Development",
      "Real-time Applications",
      "Payment Systems"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Web Developer",
      "occupationLocation": {
        "@type": "Place",
        "name": "Remote"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Your University/Institution"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://www.riswan.site" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Muhammed Riswan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#09090b" />
        <meta name="msapplication-TileColor" content="#09090b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Muhammed Riswan" />
        <meta name="application-name" content="Muhammed Riswan Portfolio" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${underdog.variable} ${saira_Stencil_One.variable} antialiased bg-zinc-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
