"use client";

import { servicesData } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GnomCard } from "@/components/ui/GnomCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicePreview() {
    const previewServices = servicesData.slice(0, 3);

    return (
        <section className="py-16 md:py-24 lg:py-32 xl:py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <SectionHeader
                    title="MEP Services"
                    subtitle="Reliable solutions for high-complexity infrastructure."
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20 pt-10">
                    {previewServices.map((service, idx) => (
                        <GnomCard key={idx} rotate={idx % 2 === 0 ? "rotate-2" : "-rotate-2"}>
                            <div className="text-left">
                                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-600 mb-8 line-clamp-2 italic leading-relaxed">"{service.description}"</p>
                                <Link href="/services" className="text-brand font-black text-sm uppercase flex items-center gap-2 hover:gap-4 transition-all">
                                    Details <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </GnomCard>
                    ))}
                </div>

                <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white font-black rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                    View All Services <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section>
    );
}
