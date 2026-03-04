"use client";

import Link from "next/link";
import { MoveLeft, ShieldAlert } from "lucide-react";
import { GnomCard } from "@/components/ui/GnomCard";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 overflow-hidden relative pt-20">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/10 blur-[150px] rounded-full" />
            </div>

            <div className="container max-w-2xl relative z-10 text-center">
                <GnomCard rotate="rotate-2" padding="p-16" accentColor="bg-brand">
                    <div className="flex flex-col items-center">
                        <div className="h-20 w-20 bg-slate-900 rounded-3xl flex items-center justify-center text-white mb-8 shadow-2xl">
                            <ShieldAlert className="w-10 h-10" />
                        </div>
                        <h1 className="text-8xl font-black text-slate-900 mb-4 italic uppercase tracking-tighter">404</h1>
                        <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">Mission Out of Bounds</h2>
                        <p className="text-slate-700 leading-relaxed italic text-lg font-medium mb-12">
                            "The coordinates you are looking for do not exist in the GNOM database. Let's get you back on track."
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white font-black text-lg rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all italic uppercase"
                        >
                            <MoveLeft className="w-6 h-6" /> Back to Mission
                        </Link>
                    </div>
                </GnomCard>
            </div>
        </div>
    );
}
