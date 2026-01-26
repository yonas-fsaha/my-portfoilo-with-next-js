import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yonas Fsaha | Full-Stack Developer & Tech Entrepreneur",
    template: "%s | Yonas Fsaha"
  },
  description: "Full-stack developer specializing in React, Next.js, and digital marketing. Building high-performance web solutions that drive business growth and ROI.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Development",
    "Digital Marketing",
    "Tech Entrepreneur",
    "Web Solutions",
    "Addis Ababa Developer",
    "Ethiopia Developer",
    "Portfolio Website",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Node.js",
    "API Development",
    "Responsive Web Design",
    "SEO Optimization"
  ],
  authors: [{ name: "Yonas Fsaha" }],
  creator: "Yonas Fsaha",
  publisher: "Yonas Fsaha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yonasfsaha.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yonasfsaha.com',
    title: 'Yonas Fsaha | Full-Stack Developer & Tech Entrepreneur',
    description: 'Full-stack developer specializing in React, Next.js, and digital marketing. Building high-performance web solutions.',
    siteName: 'Yonas Fsaha Portfolio',
    images: [
      {
        url: '/og-image.png', // Create this image at /public/og-image.png
        width: 1200,
        height: 630,
        alt: 'Yonas Fsaha - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yonas Fsaha | Full-Stack Developer & Tech Entrepreneur',
    description: 'Building high-performance web solutions with React, Next.js, and digital marketing expertise.',
    images: ['/twitter-image.png'], // Create this image at /public/twitter-image.png
    creator: '@YonasFsaha',
    site: '@YonasFsaha',
  },
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
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#020617" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Yonas Fsaha" />
        <meta name="copyright" content="Yonas Fsaha" />
        <meta name="language" content="English" />
        <meta name="reply-to" content="yonasfsaha404@gmail.com" />
        
        {/* Structured Data (JSON-LD) - Uncomment when needed */}
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Yonas Fsaha",
            "url": "https://yonasfsaha.com",
            "image": "https://yonasfsaha.com/profile-image.jpg",
            "sameAs": [
              "https://github.com/yonas-fsaha",
              "https://linkedin.com/in/yonas-fsaha",
              "https://x.com/YonasFsaha"
            ],
            "jobTitle": "Full-Stack Developer & Tech Entrepreneur",
            "worksFor": {
              "@type": "Organization",
              "name": "Vibeica Technology"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Addis Ababa",
              "addressCountry": "Ethiopia"
            }
          })}
        </script>
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-white selection:bg-blue-400/30 selection:text-white`}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-400 focus:text-[#020617] focus:font-medium focus:rounded"
        >
          Skip to main content
        </a>
        
        {children}
        
        {/* Google Analytics Script - Uncomment when you have tracking ID */}
        {/* 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_TRACKING_ID"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YOUR_TRACKING_ID');
          `
        }} />
        */}
      </body>
    </html>
  );
}





























// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
