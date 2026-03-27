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


import { BusinessFlow } from "@/components/about/BusinessFlow";

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
                                "A creative platform of expert engineers delivering multiple service management solutions with meticulous precision."
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Hero Image - Absolute positioned to touch top and bottom */}
                <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block overflow-hidden">
                    <Image
                        src="/images/about_hero.webp"
                        alt="About GNOM"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Subtle gradient overlay to blend left side */}
                    <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/20 to-transparent" />
                </div>
            </section>

            {/* 2. Philosophy & Expertise Section (Redesigned) */}
            <section className="py-6 lg:py-10 xl:py-12 bg-white relative overflow-hidden">
                {/* Decorative background numbers or letters */}
                <div className="absolute top-1/4 -left-20 text-[20rem] font-black text-slate-50 opacity-[0.02] select-none pointer-events-none italic">
                    GNOM
                </div>

                <div className="container mx-auto px-6">
                    <SectionHeader 
                        title="Our Philosophy"
                        subtitle="Interlinking ideas, execution, and associated work for a seamless engineering experience."
                        prefix="Strategic Core"
                        align="center"
                        className="mb-12"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Core Pillars (Mission/Vision) */}
                        <div className="lg:col-span-7 flex flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <ScrollReveal delay={0.1}>
                                    <div className="group relative h-full">
                                        <div className="absolute -inset-2 bg-slate-900 rounded-[3rem] rotate-1 group-hover:rotate-3 transition-transform duration-500" />
                                        <div className="relative bg-white border-2 border-slate-900 rounded-[2.5rem] p-8 h-full shadow-2xl">
                                            <div className="h-14 w-14 bg-slate-900 rounded-2xl flex items-center justify-center text-brand mb-6 shadow-xl">
                                                <Target className="w-8 h-8" />
                                            </div>
                                            <h4 className="font-black text-2xl mb-4 text-slate-900 uppercase italic tracking-tighter">Mission</h4>
                                            <p className="text-slate-600 leading-relaxed italic text-base">
                                                "{companyProfile.mission}"
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal delay={0.2}>
                                    <div className="group relative h-full">
                                        <div className="absolute -inset-2 bg-brand rounded-[3rem] -rotate-1 group-hover:-rotate-3 transition-transform duration-500" />
                                        <div className="relative bg-white border-2 border-slate-900 rounded-[2.5rem] p-8 h-full shadow-2xl">
                                            <div className="h-14 w-14 bg-brand rounded-2xl flex items-center justify-center text-slate-900 mb-6 shadow-xl">
                                                <Eye className="w-8 h-8" />
                                            </div>
                                            <h4 className="font-black text-2xl mb-4 text-slate-900 uppercase italic tracking-tighter text-right">Vision</h4>
                                            <p className="text-slate-600 leading-relaxed italic text-base text-right">
                                                "{companyProfile.vision}"
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <ScrollReveal delay={0.3} className="mt-auto h-full flex">
                                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden group w-full flex flex-col justify-center">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                                    <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 uppercase italic tracking-tighter">Technical Commitment</h3>
                                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed italic mb-8 md:mb-10 opacity-90">
                                        "GNOM is a creative platform of entrepreneurs: expertised, skilled, committed and experienced faculties, qualified and educated young engineers and technocrats. All of them share ideas in project implementation, execution, interlinking and associated work."
                                    </p>
                                    <div className="mt-auto">
                                        <Link
                                            href="/services"
                                            className="inline-flex items-center gap-4 text-brand font-black uppercase tracking-widest text-xs py-4 px-8 border-2 border-brand/30 rounded-full hover:bg-brand hover:text-slate-900 transition-all group"
                                        >
                                            Explore Expertise <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Expertise Cluster Visual */}
                        <div className="lg:col-span-5 flex flex-col">
                            <ScrollReveal direction="left" delay={0.4} className="h-full">
                                <div className="relative p-12 rounded-[4rem] bg-brand border-4 border-slate-900 shadow-[20px_20px_0px_0px_#0f172a] h-full flex flex-col justify-center">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="h-24 w-24 bg-slate-900 rounded-4xl flex items-center justify-center text-white mb-10 shadow-2xl rotate-3">
                                            <Users className="w-12 h-12" />
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase italic leading-none tracking-tighter">
                                            The <br /> Expertise
                                        </h3>
                                        <p className="text-slate-800 leading-relaxed italic text-xl font-bold bg-white/30 p-6 rounded-3xl backdrop-blur-sm border border-white/20 mb-10">
                                            "All of our crews have 20 to 30 years experience in the field of Electrical, Plumbing, Mechanical and HVAC installation."
                                        </p>
                                        
                                        <div className="grid grid-cols-2 gap-8 w-full">
                                            <div className="p-6 bg-slate-900 rounded-3xl text-white transform -rotate-2">
                                                <p className="text-4xl font-black text-brand italic mb-1">8+</p>
                                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Services</p>
                                            </div>
                                            <div className="p-6 bg-white rounded-3xl text-slate-900 border-2 border-slate-900 transform rotate-2 shadow-xl">
                                                <p className="text-4xl font-black text-brand italic mb-1">2012</p>
                                                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Established</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Flow Section */}
            <BusinessFlow />

            {/* 3. Strategic Presence / Projects Section */}
            <section className="py-6 lg:py-10 xl:py-12 bg-white relative overflow-hidden">
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
