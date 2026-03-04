import { companyProfile, currentProjects } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GnomCard } from "@/components/ui/GnomCard";
import { Target, Eye, Award, Users, ChevronRight, Binary, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about GNOM's mission, vision, and decades of engineering expertise in the MEP industry.",
};


export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            {/* 1. About Hero */}
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
                            <h1 className="font-black mb-10 leading-[0.9] tracking-tighter italic text-white uppercase">
                                <span className="text-4xl md:text-7xl xl:text-8xl block mb-2">Engineering</span>
                                <span className="text-brand text-3xl md:text-5xl block">Intelligence.</span>
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-medium italic opacity-90">
                                "A creative platform of expert engineers delivering cutting-edge MEP solutions with meticulous precision."
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Hero Image - Absolute positioned to touch top and bottom */}
                <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block overflow-hidden">
                    <Image
                        src="/images/about_hero.png"
                        alt="About GNOM"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Subtle gradient overlay to blend left side */}
                    <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/20 to-transparent" />
                </div>
            </section>

            {/* 2. Philosophy & Expertise Section */}
            <section className="py-16 md:py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
                        {/* Left Column: Mission/Vision */}
                        <div className="flex flex-col justify-between space-y-16 h-full">
                            <div className="space-y-16">
                                <ScrollReveal>
                                    <SectionHeader
                                        title="Our Philosophy"
                                        subtitle="Interlinking ideas, execution, and associated work for a seamless engineering experience."
                                        align="left"
                                    />
                                </ScrollReveal>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <ScrollReveal delay={0.1}>
                                        <GnomCard accentColor="bg-slate-900" rotate="rotate-2">
                                            <div className="h-12 w-12 bg-slate-100 rounded-xl flex items-center justify-center text-brand mb-6">
                                                <Target className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-black text-xl mb-3 text-slate-900 uppercase">Mission</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed italic">
                                                "{companyProfile.mission.substring(0, 100)}..."
                                            </p>
                                        </GnomCard>
                                    </ScrollReveal>

                                    <ScrollReveal delay={0.2}>
                                        <GnomCard accentColor="bg-brand-light" rotate="-rotate-2">
                                            <div className="h-12 w-12 bg-slate-100 rounded-xl flex items-center justify-center text-brand mb-6">
                                                <Eye className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-black text-xl mb-3 text-slate-900 uppercase">Vision</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed italic">
                                                "{companyProfile.vision.substring(0, 100)}..."
                                            </p>
                                        </GnomCard>
                                    </ScrollReveal>
                                </div>
                            </div>

                            <ScrollReveal delay={0.3}>
                                <GnomCard rotate="-rotate-1" padding="p-10">
                                    <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Technical Commitment</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                                        "{companyProfile.about}"
                                    </p>
                                    <Link
                                        href="/services"
                                        className="flex items-center gap-3 text-brand font-black uppercase tracking-widest text-xs group"
                                    >
                                        Explore our expertise <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </GnomCard>
                            </ScrollReveal>
                        </div>

                        {/* Right Column: Key Expertise Highlight */}
                        <div className="h-full">
                            <ScrollReveal direction="left" delay={0.4}>
                                <GnomCard rotate="rotate-3" padding="p-12" accentColor="bg-brand" className="flex items-center">
                                    <div className="flex flex-col items-center text-center py-6 w-full">
                                        <div className="h-20 w-20 bg-slate-900 rounded-3xl flex items-center justify-center text-white mb-8 shadow-2xl">
                                            <Users className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-4xl font-black text-slate-900 mb-6 uppercase">The Expertise</h3>
                                        <div className="space-y-6">
                                            <p className="text-slate-700 leading-relaxed italic text-xl font-medium">
                                                "All of our crews have 20 to 30 years experience in the field of Electrical, Plumbing, Mechanical and HVAC installation."
                                            </p>
                                            <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-8">
                                                <div>
                                                    <p className="text-3xl font-black text-brand italic">8+</p>
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Core Services</p>
                                                </div>
                                                <div>
                                                    <p className="text-3xl font-black text-brand italic">2012</p>
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Established</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </GnomCard>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Strategic Presence / Projects Section */}
            <section className="py-16 md:py-24 lg:py-32 xl:py-16 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <ScrollReveal>
                        <SectionHeader
                            title="Strategic Presence"
                            subtitle="Providing high-end MEP support for major landmarks and institutions."
                            align="center"
                        />
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-20">
                        {currentProjects.slice(0, 3).map((project, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <GnomCard rotate={idx % 2 === 0 ? "rotate-2" : "-rotate-2"}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="h-16 w-16 bg-slate-100 rounded-2xl flex items-center justify-center text-brand mb-6">
                                            <Award className="w-8 h-8" />
                                        </div>
                                        <h4 className="font-black text-slate-900 uppercase tracking-tighter leading-tight text-xl mb-4 h-14 flex items-center">
                                            {project}
                                        </h4>
                                        <p className="text-slate-400 text-[10px] uppercase tracking-[0.3em] font-black border-t border-slate-100 pt-4 w-full">
                                            Major Project Site
                                        </p>
                                    </div>
                                </GnomCard>
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
                            Join Our <span className="text-brand">Mission.</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <Link
                            href="/contact#inquiry-form"
                            className="inline-flex items-center gap-4 px-12 py-6 bg-brand text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all italic uppercase"
                        >
                            Contact Experts Now <ArrowRight className="w-6 h-6" />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
