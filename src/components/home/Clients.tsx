import { prestigiousClients } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GnomCard } from "@/components/ui/GnomCard";

export function Clients() {
    return (
        <section className="py-16 md:py-24 lg:py-32 xl:py-16 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader
                    title="Our Prestigious Clients"
                    subtitle="Trusted by leading institutions and organizations across the region."
                    align="center"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
                    {prestigiousClients.map((client, idx) => (
                        <GnomCard
                            key={idx}
                            rotate={idx % 2 === 0 ? "rotate-1" : "-rotate-1"}
                            padding="p-8"
                            accentColor="bg-transparent"
                        >
                            <div className="flex items-center justify-center text-center h-full">
                                <span className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-tight italic">
                                    {client}
                                </span>
                            </div>
                        </GnomCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
