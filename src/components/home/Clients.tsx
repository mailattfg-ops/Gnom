import { prestigiousClients } from "@/data/homeData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GnomCard } from "@/components/ui/GnomCard";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Clients() {
    return (
        <section className="py-6 lg:py-10 xl:py-12 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-brand/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader
                    title="Our Prestigious Clients"
                    subtitle="Trusted by leading institutions and organizations across the region."
                    align="center"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                    {prestigiousClients.map((client, idx) => (
                        <div key={idx} className="group relative">
                            <GnomCard
                                rotate={idx % 2 === 0 ? "rotate-1" : "-rotate-1"}
                                padding="p-0"
                                accentColor="bg-transparent"
                                className="overflow-hidden border-white/20 h-full aspect-square md:aspect-auto md:h-48"
                            >
                                <div className="relative h-full w-full">
                                    {/* Blurred Background Image */}
                                    <div className="absolute inset-0 opacity-[0.15] blur-3xl scale-125 transition-transform duration-700">
                                        <Image
                                            src={client.image}
                                            alt=""
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    
                                    {/* Glass Overlay */}
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl" />

                                    {/* Clear Logo/Name Content */}
                                    <div className="relative h-full w-full p-8 flex flex-col items-center justify-center text-center group-hover:scale-105 transition-transform duration-500">
                                        <div className="relative h-20 w-full mb-4">
                                            <Image
                                                src={client.image}
                                                alt={client.name}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 100vw, 25vw"
                                            />
                                        </div>
                                        <span className="text-[10px] md:text-xs font-black text-slate-900 uppercase tracking-widest leading-tight italic opacity-60">
                                            {client.name}
                                        </span>
                                    </div>
                                </div>
                            </GnomCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
