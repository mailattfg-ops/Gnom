"use client";

import { whyChooseUsData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GnomCard } from "@/components/ui/GnomCard";
import { ShieldCheck, Trophy, Layers, History } from "lucide-react";

const icons = [ShieldCheck, Trophy, Layers, History];

export function WhyChooseUs() {
    return (
        <section className="py-6 lg:py-10 xl:py-12 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="Why Choose Us"
                    subtitle="Building on decades of experience and deep technical commitment."
                    align="center"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-5">
                    {whyChooseUsData.map((item, idx) => {
                        const Icon = icons[idx];
                        return (
                            <GnomCard key={idx} rotate={idx % 2 === 0 ? "rotate-2" : "-rotate-2"}>
                                <div className="mb-6 h-14 w-14 bg-slate-900 flex items-center justify-center rounded-2xl text-white">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm italic">
                                    "{item.description}"
                                </p>
                            </GnomCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
