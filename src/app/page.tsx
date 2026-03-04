import { Hero } from "@/components/home/Hero";
import { Expertise } from "@/components/home/Expertise";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicePreview } from "@/components/home/ServicePreview";
import { Clients } from "@/components/home/Clients";
import { Testimonials } from "@/components/home/Testimonials";
import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
    title: "GNOM | Engineering Intelligence - Premium MEP Solutions",
    description: "GNOM delivers cutting-edge MEP engineering solutions with meticulous precision. Experts in Electrical, Plumbing, HVAC, and Smart Automation.",
};
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
    return (
        <main className="min-h-screen selection:bg-brand selection:text-white">
            <Hero />
            <ScrollReveal><Expertise /></ScrollReveal>
            <ScrollReveal delay={0.1}><WhyChooseUs /></ScrollReveal>
            <ScrollReveal><ServicePreview /></ScrollReveal>
            <ScrollReveal delay={0.1}><Clients /></ScrollReveal>
            <ScrollReveal><Testimonials /></ScrollReveal>
        </main>
    );
}
