"use client";

import { GnomCard } from "@/components/ui/GnomCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { UserSearch, Cpu, HardHat, ArrowRight, ArrowLeft, RefreshCcw } from "lucide-react";

export function BusinessFlow() {
    return (
        <section className="py-6 lg:py-10 xl:py-12 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <SectionHeader
                        title="Business Flow"
                        subtitle="A seamless ecosystem interlinking needs, intelligence, and execution."
                        align="center"
                    />
                </ScrollReveal>

                <div className="mt-20 relative">
                    {/* Flow Path Visualization (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0">
                        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full border-2 border-slate-200">
                            <ArrowRight className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full border-2 border-slate-200">
                            <ArrowRight className="w-4 h-4 text-slate-400" />
                        </div>
                    </div>

                    {/* Nodes Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                        {/* 1. Customer Needs */}
                        <ScrollReveal delay={0.1}>
                            <GnomCard rotate="-rotate-2" accentColor="bg-slate-900" padding="p-10">
                                <div className="flex flex-col items-center text-center">
                                    <div className="h-16 w-16 bg-slate-100 rounded-2xl flex items-center justify-center text-brand mb-6 shadow-inner">
                                        <UserSearch className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic">Customer Needs</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed italic">
                                        "Every project begins with a specific requirement, a vision, or a challenge that needs solving."
                                    </p>
                                </div>
                            </GnomCard>
                        </ScrollReveal>

                        {/* 2. GNOM (Intelligence Hub) */}
                        <ScrollReveal delay={0.3}>
                            <GnomCard rotate="rotate-0" accentColor="bg-brand" padding="p-12" className="border-4 border-slate-900 scale-110 lg:scale-125 shadow-2xl">
                                <div className="flex flex-col items-center text-center">
                                    <div className="h-20 w-20 bg-slate-900 rounded-4xl flex items-center justify-center text-brand mb-8 shadow-2xl animate-pulse">
                                        <Cpu className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">GNOM</h3>
                                    <p className="text-slate-800 text-base leading-relaxed font-bold italic">
                                        "The central hub where ideas are analyzed, architectures are designed, and teams are interlinked."
                                    </p>
                                    <div className="mt-6 flex gap-2">
                                        <div className="px-3 py-1 bg-slate-900 text-white text-[10px] font-black uppercase rounded-full tracking-widest">Intelligence</div>
                                        <div className="px-3 py-1 bg-white text-slate-900 text-[10px] font-black uppercase rounded-full border border-slate-900 tracking-widest">Management</div>
                                    </div>
                                </div>
                            </GnomCard>
                        </ScrollReveal>

                        {/* 3. Service Provider */}
                        <ScrollReveal delay={0.5}>
                            <GnomCard rotate="rotate-2" accentColor="bg-slate-900" padding="p-10">
                                <div className="flex flex-col items-center text-center">
                                    <div className="h-16 w-16 bg-slate-100 rounded-2xl flex items-center justify-center text-brand mb-6 shadow-inner">
                                        <HardHat className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase italic">Implementation</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed italic">
                                        "Expert technocrats and on-field crews bringing the design to life with 20-30 years of experience."
                                    </p>
                                </div>
                            </GnomCard>
                        </ScrollReveal>
                    </div>

                    {/* Feedback Loops (Desktop) */}
                    <div className="hidden lg:block mt-16 max-w-4xl mx-auto">
                        <div className="flex justify-between items-center text-slate-400">
                             <div className="flex items-center gap-4 italic font-black text-[10px] uppercase tracking-[0.3em]">
                                <ArrowLeft className="w-4 h-4" /> Loop of Commitment
                             </div>
                             <RefreshCcw className="w-6 h-6 animate-spin-slow" />
                             <div className="flex items-center gap-4 italic font-black text-[10px] uppercase tracking-[0.3em]">
                                Precision Delivery <ArrowRight className="w-4 h-4" />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
