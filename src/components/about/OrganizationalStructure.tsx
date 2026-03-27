"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShieldCheck, Users, HardHat } from "lucide-react";

export function OrganizationalStructure() {
    // Structured data: A (GNOM) -> B (Providers) -> C (Customers)
    const structure = [
        { 
            provider: "Electrical", 
            customers: ["Industrial"] 
        },
        { 
            provider: "Plumbing", 
            customers: ["Residential"] 
        },
        { 
            provider: "HVAC", 
            customers: ["Healthcare"] 
        },
        { 
            provider: "Fire & Safety", 
            customers: ["Commercial"] 
        },
        { 
            provider: "CCTV", 
            customers: ["Security"] 
        },
        { 
            provider: "Architecture", 
            customers: ["Design & Planning"] 
        }
    ];

    return (
        <section className="py-6 lg:py-10 xl:py-12 bg-white relative overflow-hidden org-structure-root">
            {/* 
                GLOBAL RADIUS VARIABLES
                This ensures all nodes and background rings use the exact same measurements.
            */}
            <style jsx>{`
                .org-structure-root {
                    --gnom-r: 45px;
                    --p-r: 105px;
                    --c-r: 175px;
                    --p-node-r: 25px;
                    --c-node-r: 18px;
                }
                @media (min-width: 768px) {
                    .org-structure-root {
                        --gnom-r: 96px;
                        --p-r: 210px;
                        --c-r: 350px;
                        --p-node-r: 50px;
                        --c-node-r: 38px;
                    }
                }
                @media (min-width: 1024px) {
                    .org-structure-root {
                        --p-r: 250px;
                        --c-r: 420px;
                    }
                }
            `}</style>

            {/* Background Accents - Removed as per user request */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(234,179,8,0.03)_0%,transparent_70%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader 
                    title="Cluster Mode"
                    prefix="Organizational Structure"
                    subtitle="A dynamic ecosystem where the mother company interlinks expertise with infrastructure requirements."
                    align="center"
                    className="mb-4 sm:mb-6 lg:mb-24"
                />

                <div className="relative max-w-5xl mx-auto h-[420px] md:h-[750px] flex items-center justify-center">
                    
                    {/* 1. MOTHER COMPANY (CENTER) */}
                    <div className="relative z-30 group">
                        <div className="absolute -inset-8 bg-brand/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000" />
                        <div className="relative w-32 h-32 md:w-48 md:h-48 bg-slate-900 rounded-full border-4 border-brand flex flex-col items-center justify-center text-center p-4 shadow-[0_0_50px_rgba(234,179,8,0.3)] transform transition-transform duration-500 hover:scale-105">
                            <ShieldCheck className="w-10 h-10 md:w-16 md:h-16 text-brand mb-2" />
                            <span className="text-white font-black italic uppercase text-lg md:text-2xl tracking-tighter leading-none">GNOM</span>
                            <span className="text-brand text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mt-1">Mother Company</span>
                        </div>
                    </div>

                    {/* 2. HIERARCHICAL NODES (Providers & Customers) */}
                    <div className="absolute inset-0 z-10 pointer-events-none overflow-visible">
                        {structure.map((item, pIdx) => {
                            const pAngle = (pIdx / structure.length) * 2 * Math.PI;
                            
                            return (
                                <div key={pIdx} className="absolute inset-0 pointer-events-none">
                                    {/* Connection Line: GNOM -> Provider */}
                                    <div 
                                        className="absolute top-1/2 left-1/2 h-0.5 bg-brand/30 origin-left"
                                        style={{
                                            width: "calc(var(--p-r) - var(--gnom-r) - var(--p-node-r))", 
                                            transform: `rotate(${pAngle}rad) translateX(var(--gnom-r))`
                                        }}
                                    >
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand rounded-full" />
                                    </div>

                                    {/* Provider Node (B) */}
                                    <div 
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                                        style={{
                                            transform: `translate(calc(var(--p-r) * ${Math.cos(pAngle)}), calc(var(--p-r) * ${Math.sin(pAngle)}))`
                                        }}
                                    >
                                        <ScrollReveal delay={0.1 * pIdx}>
                                            <div className="relative w-14 h-14 md:w-24 md:h-24 bg-white border-2 border-slate-900 rounded-2xl flex flex-col items-center justify-center text-center p-2 shadow-xl group hover:border-brand transition-colors duration-300">
                                                <HardHat className="w-5 h-5 md:w-8 md:h-8 text-slate-900 mb-1" />
                                                <span className="text-slate-900 font-black uppercase text-[6px] md:text-[8px] tracking-widest">{item.provider}</span>
                                            </div>
                                        </ScrollReveal>
                                    </div>

                                    {/* Customer Nodes (C) connected to this Provider */}
                                    {item.customers.map((customer, cIdx) => {
                                        // Spread customers slightly around the provider angle
                                        const cAngleSpread = 0.4; // radians
                                        const cAngle = pAngle + (cIdx - (item.customers.length - 1) / 2) * cAngleSpread;
                                        
                                        return (
                                            <div key={cIdx} className="absolute inset-0 pointer-events-none">
                                                {/* Connection Line: Provider -> Customer (Matching the provider path) */}
                                                <div 
                                                    className="absolute top-1/2 left-1/2 h-0.5 bg-brand/20 origin-left transition-all duration-500 group-hover:bg-brand/50"
                                                    style={{
                                                        width: "calc(var(--c-r) - var(--p-r) - var(--p-node-r) - var(--c-node-r))",
                                                        transform: `rotate(${cAngle}rad) translateX(calc(var(--p-r) + var(--p-node-r)))`
                                                    }}
                                                />

                                                {/* Customer Node */}
                                                <div 
                                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                                                    style={{
                                                        transform: `translate(calc(var(--c-r) * ${Math.cos(cAngle)}), calc(var(--c-r) * ${Math.sin(cAngle)}))`
                                                    }}
                                                >
                                                    <ScrollReveal delay={0.15 * (pIdx + cIdx)}>
                                                        <div className="relative w-10 h-10 md:w-18 md:h-18 bg-slate-50 border border-slate-200 rounded-full flex flex-col items-center justify-center text-center p-1 shadow-md hover:bg-slate-900 hover:text-white transition-all duration-300 group">
                                                            <Users className="w-3 h-3 md:w-6 md:h-6 mb-1 text-slate-400 group-hover:text-brand" />
                                                            <span className="font-bold uppercase text-[4px] md:text-[7px] tracking-tight">{customer}</span>
                                                        </div>
                                                    </ScrollReveal>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
