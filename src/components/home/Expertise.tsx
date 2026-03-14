"use client";

import { expertiseData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GnomCard } from "@/components/ui/GnomCard";
import { CheckCircle2 } from "lucide-react";

export function Expertise() {
    return (
        <section className="py-6 lg:py-10 xl:py-12 bg-white overflow-hidden">
            {/* Subtle Background Decoration */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader
                    title="Our Expertise"
                    subtitle="Precision MEP engineering for complex architectural landscapes."
                    align="center"
                    className="mb-10"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                    <div className="space-y-6">
                        <div className="grid gap-6">
                            {expertiseData.map((item, idx) => (
                                <GnomCard key={idx} accentColor="bg-transparent" rotate={idx % 2 === 0 ? "rotate-1" : "-rotate-1"} padding="p-8">
                                    <div className="flex gap-6 items-start">
                                        <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center text-white shrink-0">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-xl text-slate-900 mb-2 leading-tight uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-slate-600 text-base italic leading-relaxed">"{item.description}"</p>
                                        </div>
                                    </div>
                                </GnomCard>
                            ))}
                        </div>
                    </div>
                    <div className="relative lg:pl-10 h-full">
                        <GnomCard accentColor="bg-brand" rotate="rotate-6" padding="p-16">
                            <div className="flex flex-col items-center justify-center h-full text-center py-10">
                                <p className="text-8xl font-black text-brand mb-6 italic">20-30</p>
                                <div className="h-1 w-20 bg-slate-900 mx-auto mb-6" />
                                <p className="text-slate-900 font-black uppercase tracking-[0.2em] text-xl leading-tight">
                                    Years of<br />
                                    <span className="text-brand">Core Crew</span><br />
                                    Expertise
                                </p>
                            </div>
                        </GnomCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
