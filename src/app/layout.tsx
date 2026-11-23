import type { Metadata, Viewport } from "next";
import "./globals.css";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL("https://abodebuilders.com"),
  title: "Abode Builders | Design • Build • Inspire",
  description:
    "Abode Builders creates thoughtfully designed modern homes that blend contemporary architecture, quality craftsmanship, and the warmth of nature. Modern Homes. Earthy Feels.",
  keywords: [
    "Abode Builders",
    "Luxury Home Builders",
    "Modern Architecture",
    "Contemporary Villas",
    "Kerala Modern Homes",
    "Sustainable Home Design",
    "Custom Residential Construction",
    "Interior Design Architecture",
    "Kochi Home Builders",
    "Bangalore Architects",
  ],
  authors: [{ name: "Abode Builders" }],
  openGraph: {
    title: "Abode Builders | Design • Build • Inspire",
    description:
      "Modern Homes. Earthy Feels. Thoughtfully designed, expertly built homes blending modern living with the warmth of nature.",
    url: "https://abodebuilders.com",
    siteName: "Abode Builders",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Abode Builders - Luxury Modern Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abode Builders | Design • Build • Inspire",
    description: "Modern Homes. Earthy Feels. Luxury home design and construction.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#171816",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "Abode Builders",
    alternateName: "Abode Architectural Spaces",
    url: "https://abodebuilders.com",
    logo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    description: COMPANY_INFO.description,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.office.address,
      addressLocality: COMPANY_INFO.office.city,
      addressRegion: COMPANY_INFO.office.state,
      postalCode: COMPANY_INFO.office.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.96739",
      longitude: "76.287883",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:30",
      },
    ],
    sameAs: [
      COMPANY_INFO.socials.instagram,
      COMPANY_INFO.socials.facebook,
      COMPANY_INFO.socials.linkedin,
      COMPANY_INFO.socials.youtube,
    ],
    priceRange: "₹₹₹₹",
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#171816] text-[#F5F1E9] antialiased selection:bg-[#D8C3A5] selection:text-[#171816] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
