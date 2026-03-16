import { ContactClient } from "@/components/contact/ContactClient";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Connect with GNOM experts for your next MEP project. Get precision engineering solutions and 24/7 technical support.",
};

export default function Page() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-white italic font-black uppercase tracking-widest text-xl">Loading Intelligence...</div>}>
            <ContactClient />
        </Suspense>
    );
}
