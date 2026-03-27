import { servicesData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GnomCard } from "@/components/ui/GnomCard";
import { ArrowRight, Binary, Droplets, Zap, Wind, Sun, Video, FlameKindling, Lock, Gamepad2, Palette, Filter, Recycle, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore our range of MEP services, from Industrial Solutions and HVAC systems to Electrical Infrastructure and Smart Automation.",
};


const icons = [Droplets, Zap, Wind, Sun, Video, FlameKindling, Lock, Gamepad2, Palette, Filter, Recycle, Wrench];

export default function ServicesPage() {
    return (
        <main className="bg-white">
            {/* 1. Services Hero */}
            <section className="relative pt-24 md:pt-40 lg:pt-48 pb-12 md:pb-32 xl:pb-20 overflow-hidden bg-slate-900 text-white min-h-[40vh] md:min-h-[60vh] flex items-center">
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 blur-[120px] rounded-full translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-light/5 blur-[100px] rounded-full -translate-x-1/2" />
                    <div className="absolute inset-0 opacity-[0.05] bg-[grid] mask-[linear-gradient(to_bottom,white,transparent)]"
                        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <ScrollReveal direction="down">
                            <h1 className="font-black mb-10 leading-[0.9] tracking-tighter italic uppercase text-white">
                                <span className="text-4xl md:text-7xl xl:text-8xl block mb-2">Our MEP</span>
                                <span className="text-brand text-3xl md:text-5xl block">Expertise.</span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium italic opacity-90 max-w-2xl">
                                "Comprehensive engineering solutions tailored for high-quality performance and architectural precision."
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Hero Image - Absolute positioned to touch top and bottom */}
                <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block overflow-hidden">
                    <Image
                        src="/images/services_hero.webp"
                        alt="Our MEP Services"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Subtle gradient overlay to blend left side */}
                    <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/20 to-transparent" />
                </div>
            </section>

            {/* 2. Services Grid */}
            <section className="py-6 lg:py-10 xl:py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {servicesData.map((service, idx) => {
                            const Icon = icons[idx] || Wrench;
                            return (
                                <ScrollReveal key={service.id} delay={idx * 0.1}>
                                    <GnomCard 
                                        id={service.title.toLowerCase().replace(/\s+/g, '-')}
                                        rotate={idx % 2 === 0 ? "rotate-1" : "-rotate-1"}
                                        isRecommended={service.tag === "Recommended"}
                                        padding="p-0"
                                        className="overflow-hidden flex flex-col group"
                                    >
                                        {/* 1. Service Image Section */}
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image 
                                                src={service.image} 
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* 2. Content Section */}
                                        <div className="p-8 pt-10 flex flex-col flex-1">
                                            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight italic">
                                                {service.title}
                                            </h3>
                                            <p className="text-slate-600 italic text-sm leading-relaxed mb-6 flex-1 opacity-80">
                                                "{service.description}"
                                            </p>
                                            
                                            <Link
                                                href={`/contact?service=${encodeURIComponent(service.title)}#inquiry-form`}
                                                className="pt-5 border-t border-slate-100 flex items-center justify-between group/btn text-brand font-black uppercase tracking-widest text-[10px]"
                                            >
                                                <span>Inquire Now</span>
                                                <div className="h-6 w-6 rounded-full bg-brand/10 flex items-center justify-center group-hover/btn:bg-brand group-hover/btn:text-white transition-all">
                                                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                                                </div>
                                            </Link>
                                        </div>
                                    </GnomCard>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. Engineering Methodology */}
            <section className="py-6 lg:py-10 xl:py-12 bg-white relative overflow-hidden border-t border-slate-100">
                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="container mx-auto px-6 relative z-10">
                    <SectionHeader 
                        title="Our Methodology"
                        subtitle="Meticulous planning meets advanced execution. Our 4-step lifecycle ensures every project delivers excellence."
                        align="center"
                        className="mb-20"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Analyze", desc: "In-depth feasibility and requirement mapping." },
                                { step: "02", title: "Architect", desc: "Precision MEP design using BIM and AI integration." },
                                { step: "03", title: "Execute", desc: "Deployment with zero-compromise on safety and quality." },
                                { step: "04", title: "Optimize", desc: "Continuous monitoring and performance tuning." }
                            ].map((item, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.1}>
                                    <div className="p-8 rounded-2xl bg-white border-2 border-slate-900 hover:shadow-xl transition-all group">
                                        <span className="text-brand font-black text-xs tracking-[0.3em] uppercase mb-4 block">{item.step}</span>
                                        <h4 className="text-2xl font-black mb-4 italic uppercase tracking-tight text-slate-900">{item.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                    </div>
                </div>
            </section>

            {/* 4. Final CTA */}
            <section className="py-20 bg-slate-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/5 blur-[120px] rounded-full" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 italic uppercase tracking-tighter">
                            Ready to <span className="text-brand">Start?</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <Link
                            href="/contact#inquiry-form"
                            className="inline-flex items-center gap-4 px-12 py-6 bg-brand text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all italic uppercase"
                        >
                            Launch Your Mission <ArrowRight className="w-6 h-6" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
