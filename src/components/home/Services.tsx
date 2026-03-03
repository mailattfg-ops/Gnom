"use client";

import { servicesData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
    Droplets,
    Zap,
    Wind,
    Sun,
    Shield,
    Flame,
    Lock,
    Cpu,
    ArrowRight
} from "lucide-react";

const serviceIcons: Record<number, any> = {
    1: Droplets,
    2: Zap,
    3: Wind,
    4: Sun,
    5: Shield,
    6: Flame,
    7: Lock,
    8: Cpu,
};

export function Services() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="services">
            {/* Decorative background circle */}
            <div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-brand-light/20 blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader
                    title="MEP Solutions"
                    subtitle="Precision engineering for high-complexity projects, delivered with infinite intelligence."
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service) => {
                        const Icon = serviceIcons[service.id];
                        return (
                            <div
                                key={service.id}
                                className="group relative h-full bg-white p-8 rounded-[2rem] border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-brand/5 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Hover Background Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-light/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light/50 text-brand group-hover:bg-brand group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
                                        <Icon className="h-8 w-8" />
                                    </div>

                                    <h3 className="mb-4 text-2xl font-extrabold text-slate-900 leading-tight">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                                        {service.description}
                                    </p>

                                    <button className="flex items-center gap-2 text-brand font-bold group-hover:gap-4 transition-all uppercase text-xs tracking-widest">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
