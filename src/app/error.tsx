"use client";

import { useEffect } from "react";
import { RefreshCcw, AlertTriangle } from "lucide-react";
import { GnomCard } from "@/components/ui/GnomCard";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container max-w-xl relative z-10 text-center">
                <GnomCard rotate="-rotate-2" padding="p-16" accentColor="bg-slate-900">
                    <div className="flex flex-col items-center">
                        <div className="h-20 w-20 bg-brand rounded-3xl flex items-center justify-center text-white mb-8 shadow-2xl">
                            <AlertTriangle className="w-10 h-10" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight italic">System Malfunction</h2>
                        <p className="text-slate-600 leading-relaxed italic text-lg font-medium mb-12">
                            "An unexpected engineering anomaly occurred. We have logged the incident and are ready to retry the execution."
                        </p>
                        <button
                            onClick={() => reset()}
                            className="inline-flex items-center gap-4 px-10 py-5 bg-brand text-white font-black text-lg rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all italic uppercase"
                        >
                            <RefreshCcw className="w-6 h-6" /> Retry Connection
                        </button>
                    </div>
                </GnomCard>
            </div>
        </div>
    );
}
