import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { FloatingShehnai } from "@/components/FloatingShehnai";

export const metadata: Metadata = {
  title: "अंकित एवं सिमरन | शुभ विवाह निमंत्रण | 24 नवम्बर 2026",
  description:
    "॥ श्री गणेशाय नमः ॥ चिरंजीव अंकित श्रीवास्तव एवं आयुष्मती सिमरन सिंह के शुभ विवाह का पावन निमंत्रण पत्रिका - 24 नवम्बर 2026, लखनऊ, उत्तर प्रदेश।",
  keywords: [
    "अंकित श्रीवास्तव",
    "सिमरन सिंह",
    "शुभ विवाह",
    "विवाह निमंत्रण पत्रिका",
    "Ankit Shrivastav",
    "Simran Singh",
    "Lucknow Wedding",
    "24 November 2026",
  ],
  authors: [{ name: "श्रीवास्तव एवं सिंह परिवार" }],
  creator: "श्रीवास्तव एवं सिंह परिवार",
  publisher: "अंकित एवं सिमरन विवाह निमंत्रण",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ankit-weds-simran.vercel.app"),
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: "/",
    title: "अंकित एवं सिमरन | शुभ विवाह निमंत्रण | 24 नवम्बर 2026",
    description:
      "॥ श्री गणेशाय नमः ॥ चिरंजीव अंकित श्रीवास्तव एवं आयुष्मती सिमरन सिंह के शुभ विवाह का पावन निमंत्रण - 24 नवम्बर 2026, लखनऊ, उत्तर प्रदेश।",
    siteName: "शुभ विवाह पत्रिका",
    images: [
      {
        url: "/images/og-wedding-card.svg",
        width: 1200,
        height: 630,
        alt: "अंकित एवं सिमरन शुभ विवाह निमंत्रण 24 नवम्बर 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "अंकित एवं सिमरन | शुभ विवाह निमंत्रण",
    description: "॥ श्री गणेशाय नमः ॥ 24 नवम्बर 2026, लखनऊ, उत्तर प्रदेश।",
    images: ["/images/og-wedding-card.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#821422",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FAF5EB] text-[#24140E] antialiased selection:bg-[#B88632]/25 selection:text-[#821422] font-devanagari">
        {children}
        <FloatingShehnai />
      </body>
    </html>
  );
}
