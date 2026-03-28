import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
    title: {
        default: `${config.companyName} | Engineering Intelligence`,
        template: `%s | ${config.companyName}`
    },
    description: "Premium MEP engineering solutions including Electrical, Plumbing, HVAC, and Smart Automation. Precision in detail, Intelligence in design.",
    keywords: ["MEP Engineering", "HVAC", "Electrical Solutions", "Plumbing", "Kerala Engineering", "GNOM", "Technical Audit"],
    authors: [{ name: "GNOM Engineering" }],
    creator: "GNOM Engineering",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://gnom.co", // Placeholder for actual domain
        siteName: config.companyName,
        title: config.companyName,
        description: "Leading MEP engineering experts delivering cutting-edge architectural solutions.",
        images: [
            {
                url: "/images/home_hero.webp",
                width: 1200,
                height: 630,
                alt: config.companyName,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: config.companyName,
        description: "Intelligence in MEP design and execution.",
        images: ["/images/home_hero.webp"],
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
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased" suppressHydrationWarning>
                <JsonLd />
                <Navbar />
                {children}
                <FloatingWhatsApp />
                <Footer />
            </body>
        </html>
    );
}
