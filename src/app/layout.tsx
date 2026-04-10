import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "GNOM | Engineering Intelligence - Premium MEP Solutions",
    description: "GNOM delivers cutting-edge MEP engineering solutions with meticulous precision. Experts in Electrical, Plumbing, HVAC, and Smart Automation.",
    icons: {
        icon: "/images/white.svg",
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <FloatingWhatsApp />
                <Footer />
            </body>
        </html>
    );
}
