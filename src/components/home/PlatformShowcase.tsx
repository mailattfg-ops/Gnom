"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GnomCard } from "@/components/ui/GnomCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Binary, Layers, Network, Zap } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function PlatformShowcase() {
    return (
        <section className="py-6 lg:py-10 xl:py-12 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
   

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <SectionHeader 
                        title="Business Management Excellence"
                        prefix="Cluster Mode Engineering"
                        align="center"
                        className="mb-8 md:mb-12"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal direction="right">
                            <div className="relative">
                                {/* Large background blurred image for depth */}
                                <div className="absolute inset-0 scale-125 opacity-10 blur-[120px] overflow-hidden rounded-[4rem]">
                                    <Image 
                                        src="/images/showcase_platform.webp"
                                        alt="Background blur"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Glassy Grid Cluster */}
                                <div className="relative grid grid-cols-2 gap-4 lg:gap-6 p-4">
                                    {[
                                        { label: "Platform", image: "/images/showcase_platform.webp", rotate: "-rotate-2" },
                                        { label: "Digital", image: "/images/showcase_digital.webp", rotate: "rotate-1" },
                                        { label: "Cluster", image: "/images/showcase_cluster.webp", rotate: "rotate-2" },
                                        { label: "Precision", image: "/images/showcase_precision.webp", rotate: "-rotate-1" }
                                    ].map((box, i) => (
                                        <div 
                                            key={i}
                                            className={cn(
                                                "relative aspect-square rounded-4xl overflow-hidden border border-white/20 transition-all duration-500",
                                                box.rotate
                                            )}
                                        >
                                            {/* Blurred Image Background Texture */}
                                            <div className="absolute inset-0">
                                                <Image 
                                                    src={box.image}
                                                    alt={box.label}
                                                    fill
                                                    className="object-cover opacity-[0.15] blur-3xl scale-125"
                                                />
                                                <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-2xl" />
                                            </div>
                                            
                                            {/* Primary Image Content */}
                                            <div className="relative h-full w-full p-6 flex flex-col items-center justify-center">
                                                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                                                    <Image 
                                                        src={box.image}
                                                        alt={box.label}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                                                    <span className="bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full text-white font-black italic text-[8px] uppercase tracking-[0.3em] border border-white/10">
                                                        {box.label}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    
                                    {/* Central Connecting Element */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand rounded-full blur-2xl opacity-40 animate-pulse" />
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="left" delay={0.2}>
                            <div className="space-y-8">
                                <p className="text-2xl md:text-4xl font-black italic leading-tight text-slate-900 relative">
                                    <span className="text-brand font-black text-8xl absolute -top-12 -left-8 opacity-10">"</span>
                                    GNOM is more than a company—it is a <span className="text-brand underline decoration-brand decoration-8 underline-offset-8">creative platform</span>.
                                </p>
                                
                                <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-brand pl-8 py-2">
                                    A cluster mode engineering ecosystem where technicians, entrepreneurs, and experts converge to deliver precision-grade MEP solutions.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                                    <GnomCard accentColor="bg-slate-900" rotate="-rotate-1" padding="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand border border-brand/20">
                                                <Binary className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-slate-900 font-black italic text-sm uppercase">Integrated</p>
                                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Digital Hub</p>
                                            </div>
                                        </div>
                                    </GnomCard>
                                    <GnomCard accentColor="bg-brand" rotate="rotate-1" padding="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-xl bg-slate-900/10 flex items-center justify-center text-slate-900 border border-slate-900/20">
                                                <Network className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-slate-900 font-black italic text-sm uppercase">Global</p>
                                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Network</p>
                                            </div>
                                        </div>
                                    </GnomCard>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
