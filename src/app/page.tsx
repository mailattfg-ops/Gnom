import { Hero } from "@/components/home/Hero";
import { Expertise } from "@/components/home/Expertise";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServicePreview } from "@/components/home/ServicePreview";
import { Clients } from "@/components/home/Clients";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
    return (
        <main className="min-h-screen selection:bg-brand selection:text-white">
            <Hero />
            <Expertise />
            <WhyChooseUs />
            <ServicePreview />
            <Clients />
            <Testimonials />
        </main>
    );
}
