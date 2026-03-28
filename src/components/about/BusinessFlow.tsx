"use client";

import { GnomCard } from "@/components/ui/GnomCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { UserSearch, Cpu, HardHat, MoveRight, MoveLeft, MoveDown, MoveUp } from "lucide-react";

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
                        subtitle="A precision-engineered cycle connecting vision to expert execution."
                        align="center"
                    />
                </ScrollReveal>

                <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-12 relative max-w-6xl mx-auto">
                    {/* Flow Container: Vertical on mobile, Horizontal on LG */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8 relative">
                        
                        {/* 1. Customer Needs */}
                        <ScrollReveal delay={0.1} className="w-full lg:w-1/3">
                            <div className="relative z-20">
                                <GnomCard rotate="-rotate-1" accentColor="bg-slate-900" padding="p-8">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="h-14 w-14 bg-slate-100 rounded-xl flex items-center justify-center text-brand mb-4 shadow-inner">
                                            <UserSearch className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-xl font-black text-slate-900 mb-2 uppercase italic">Customer Needs</h3>
                                        <p className="text-slate-600 text-xs leading-relaxed italic">
                                            Vision, requirements & definition.
                                        </p>
                                    </div>
                                </GnomCard>
                            </div>
                        </ScrollReveal>

                        {/* Desktop Connector 1 (lg only) */}
                        <div className="hidden lg:flex flex-col gap-4 items-center justify-center flex-1">
                            <MoveRight className="text-slate-900 w-6 h-6" />
                            <MoveLeft className="text-brand w-6 h-6" />
                        </div>

                        {/* Mobile Connector 1 (v) */}
                        <div className="flex lg:hidden flex-row gap-6 items-center">
                             <div className="flex flex-col items-center">
                                <MoveDown className="text-slate-900 w-6 h-6" />
                             </div>
                             <div className="flex flex-col items-center">
                                <MoveUp className="text-brand w-6 h-6" />
                             </div>
                        </div>

                        {/* 2. GNOM (Intelligence Hub) */}
                        <ScrollReveal delay={0.3} className="w-full lg:w-1/3">
                            <div className="relative z-20 scale-105 lg:scale-110">
                                <GnomCard rotate="rotate-0" accentColor="bg-brand" padding="p-10" className="border-4 border-slate-900">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="h-16 w-16 bg-slate-900 rounded-3xl flex items-center justify-center text-brand mb-5 shadow-2xl">
                                            <Cpu className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase italic tracking-tighter">GNOM</h3>
                                        <p className="text-slate-800 text-sm leading-relaxed font-bold italic">
                                            Design & Management.
                                        </p>
                                    </div>
                                </GnomCard>
                            </div>
                        </ScrollReveal>

                        {/* Desktop Connector 2 (lg only) */}
                        <div className="hidden lg:flex flex-col gap-4 items-center justify-center flex-1">
                            <MoveRight className="text-slate-900 w-6 h-6" />
                            <MoveLeft className="text-brand w-6 h-6" />
                        </div>

                        {/* Mobile Connector 2 (v) */}
                        <div className="flex lg:hidden flex-row gap-6 items-center">
                             <div className="flex flex-col items-center">
                                <MoveDown className="text-slate-900 w-6 h-6" />
                             </div>
                             <div className="flex flex-col items-center">
                                <MoveUp className="text-brand w-6 h-6" />
                             </div>
                        </div>

                        {/* 3. Service Provider */}
                        <ScrollReveal delay={0.5} className="w-full lg:w-1/3">
                            <div className="relative z-20">
                                <GnomCard rotate="rotate-1" accentColor="bg-slate-900" padding="p-8">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="h-14 w-14 bg-slate-100 rounded-xl flex items-center justify-center text-brand mb-4 shadow-inner">
                                            <HardHat className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-xl font-black text-slate-900 mb-2 uppercase italic">Execution</h3>
                                        <p className="text-slate-600 text-xs leading-relaxed italic">
                                            Precision implementation.
                                        </p>
                                    </div>
                                </GnomCard>
                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </div>
        </section>
    );
}
