import { Hero } from "@/components/home/Hero";
import { Expertise } from "@/components/home/Expertise";
import { PlatformShowcase } from "@/components/home/PlatformShowcase";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicePreview } from "@/components/home/ServicePreview";
import { Clients } from "@/components/home/Clients";
import { Testimonials } from "@/components/home/Testimonials";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
    return (
        <main className="min-h-screen selection:bg-brand selection:text-white">
            <Hero />
            <ScrollReveal><Expertise /></ScrollReveal>
            <PlatformShowcase />
            <ScrollReveal delay={0.1}><WhyChooseUs /></ScrollReveal>
            <ScrollReveal><ServicePreview /></ScrollReveal>
            <ScrollReveal delay={0.1}><Clients /></ScrollReveal>
            <ScrollReveal><Testimonials /></ScrollReveal>
        </main>
    );
}
