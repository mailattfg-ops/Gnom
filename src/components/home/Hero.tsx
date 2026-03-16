"use client";

import { heroData } from "@/data/homeData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 text-white pt-20">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 blur-[120px] rounded-full translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-light/5 blur-[100px] rounded-full -translate-x-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="font-black mb-10 leading-[0.9] tracking-tighter italic">
                        <span className="text-5xl md:text-9xl xl:text-8xl block mb-2">{heroData.title.main}</span>
                        <span className="text-brand uppercase text-3xl md:text-5xl block">{heroData.title.highlight}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-medium italic opacity-90 mb-12">
                        "{heroData.description}"
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-8 items-center">
                        <Link
                            href="/contact#inquiry-form"
                            className="group relative px-10 py-5 bg-brand text-white rounded-2xl font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 italic uppercase tracking-tighter inline-flex items-center"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start a Project <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-linear-to-r from-brand-dark to-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        <Link
                            href="/services"
                            className="px-10 py-5 bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-2xl font-black text-xl text-white transition-all hover:bg-white/10 hover:border-white/20 italic uppercase tracking-tighter inline-flex items-center"
                        >
                            View Our Services
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hero Image - Absolute positioned to touch top and bottom */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 overflow-hidden z-0 lg:z-0">
                <Image
                    src="/images/home_hero.png"
                    alt="GNOM Engineering Excellence"
                    fill
                    className="object-cover opacity-40 lg:opacity-100"
                    priority
                />
                {/* Subtle gradient overlay to blend left side */}
                <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-900/40 to-slate-900 lg:bg-linear-to-r lg:from-slate-900 lg:via-slate-900/20 lg:to-transparent" />
            </div>
        </section>
    );
}
