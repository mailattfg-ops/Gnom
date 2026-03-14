"use client";

import { testimonialsData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GnomCard } from "@/components/ui/GnomCard";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <section className="py-6 lg:py-10 xl:py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="Client Testimonials"
                    subtitle="Feedback from prestigious institutions we've served."
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-10">
                    {testimonialsData.map((t, idx) => (
                        <GnomCard
                            key={idx}
                            rotate={idx % 2 === 0 ? "rotate-3" : "-rotate-3"}
                            accentColor="bg-brand-dark"
                            padding="p-10"
                        >
                            <div className="relative text-slate-900">
                                <Quote className="absolute -top-4 -right-4 w-12 h-12 text-slate-100" />
                                <p className="text-slate-700 italic mb-8 leading-relaxed text-lg">"{t.quote}"</p>
                                <div>
                                    <p className="font-black text-xl">{t.name}</p>
                                    <p className="text-brand text-sm font-bold uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </GnomCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
