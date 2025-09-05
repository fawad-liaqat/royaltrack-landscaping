import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Footer from "@/components/Footer";
import SocialWidgets from "@/components/SocialWidgets";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.royaltracklandscaping.com"),
  title: "Royal Track Landscaping And General Contracting LLC",
  description:
    "Transform your villa dreams into reality with Royal Track Landscaping And General Contracting LLC. Premium swimming pools, landscaping, and outdoor living spaces for luxury properties.",
  applicationName: "Royal Track Landscaping",
  authors: [{ name: "Royal Track Landscaping And General Contracting LLC" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Royal Track Landscaping And General Contracting LLC",
    description:
      "Transform your villa dreams into reality with Royal Track Landscaping And General Contracting LLC. Premium swimming pools, landscaping, and outdoor living spaces for luxury properties.",
    url: "/",
    images: [{ url: "/Images/Pool.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Track Landscaping And General Contracting LLC",
    description:
      "Transform your villa dreams into reality with Royal Track Landscaping And General Contracting LLC. Premium swimming pools, landscaping, and outdoor living spaces for luxury properties.",
    images: ["/Images/Pool.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <div id="home" />
        {children}
        <SocialWidgets />
        {/* Organization JSON-LD for rich results */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Royal Track Landscaping And General Contracting LLC",
              url: "https://www.royaltracklandscaping.com",
              logo: "/Images/FINAL LOGO.jpg",
              image: "/Images/Pool.jpg",
              telephone: "+1-555-123-4567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Luxury Lane",
                addressLocality: "Villa District",
                postalCode: "12345",
                addressCountry: "US",
              },
              openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
              sameAs: [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
              ],
            }),
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
