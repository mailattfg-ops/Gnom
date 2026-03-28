"use client";

import { config } from "@/data/config";
import { Mail, Phone, MapPin, Zap, MessageSquare } from "lucide-react";
import { GnomCard } from "@/components/ui/GnomCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { servicesData } from "@/data/homeData";

export function ContactClient() {
    const searchParams = useSearchParams();
    const serviceParam = searchParams.get("service");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Plumbing Work", // Use first service as default
        message: ""
    });

    useEffect(() => {
        if (serviceParam) {
            const decodedService = decodeURIComponent(serviceParam);
            // Check if the service exists in our data to avoid invalid selection
            const serviceExists = servicesData.some(s => s.title === decodedService);
            if (serviceExists) {
                setFormData(prev => ({ ...prev, service: decodedService }));
            }
        }
    }, [serviceParam]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*New Project Inquiry - GNOM*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Service:* ${formData.service}\n` +
            `*Message:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleFieldChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen bg-white">
            {/* 1. Contact Hero */}
            <section className="relative pt-24 md:pt-40 lg:pt-48 pb-12 md:pb-32 xl:pb-20 overflow-hidden bg-slate-900 text-white min-h-[40vh] md:min-h-[60vh] flex items-center">
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 blur-[120px] rounded-full translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-light/5 blur-[100px] rounded-full -translate-x-1/2" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="font-black mb-10 leading-[0.9] tracking-tighter italic uppercase text-white">
                            <span className="text-4xl md:text-7xl xl:text-8xl block mb-2">Let's</span>
                            <span className="text-brand text-3xl md:text-5xl block">Connect.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium italic opacity-90 max-w-2xl">
                            "Our expert technocrats are ready to bring intelligence to your mission."
                        </p>
                    </div>
                </div>

                {/* Hero Image - Absolute positioned to touch top and bottom */}
                <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block overflow-hidden">
                    <Image
                        src="/images/contact_hero.webp"
                        alt="Contact GNOM Engineering"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Subtle gradient overlay to blend left side */}
                    <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/20 to-transparent" />
                </div>
            </section>

            <section className="py-6 lg:py-10 xl:py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        {/* Contact Form */}
                        <div id="inquiry-form" className="bg-white p-10 md:p-12 rounded-[3.5rem] border-2 border-slate-900 relative overflow-hidden group">
                            {/* Inner Accent Border */}
                            <div className="absolute inset-2 border border-brand/10 rounded-[2.8rem] pointer-events-none" />
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                            <h2 className="text-4xl font-black mb-10 text-slate-900 italic uppercase tracking-tight relative z-10">Project <span className="text-brand">Inquiry.</span></h2>
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => handleFieldChange("name", e.target.value)}
                                            className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all outline-none font-medium"
                                            placeholder="Ex: Rahul S."
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => handleFieldChange("email", e.target.value)}
                                            className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all outline-none font-medium"
                                            placeholder="rahul@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Service Required</label>
                                    <div className="relative">
                                        <select
                                            value={formData.service}
                                            onChange={(e) => handleFieldChange("service", e.target.value)}
                                            className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all outline-none appearance-none font-bold text-slate-900"
                                        >
                                            {servicesData.map((service) => (
                                                <option key={service.id} value={service.title}>
                                                    {service.title}
                                                </option>
                                            ))}
                                            <option value="Other">Other Specific Requirement</option>
                                        </select>
                                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <Zap className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Message</label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) => handleFieldChange("message", e.target.value)}
                                        className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all outline-none font-medium resize-none"
                                        placeholder="Briefly describe your MEP requirements..."
                                    />
                                </div>
                                <button type="submit" className="w-full py-4 lg:py-6 bg-slate-900 text-white font-black text-base lg:text-lg rounded-2xl shadow-xl hover:cursor-pointer active:scale-95 transition-all flex items-center justify-center gap-3 group/btn">
                                    Submit
                                    <Zap className="w-5 h-5 text-brand group-hover/btn:animate-pulse" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Details */}
                        <div className="flex flex-col justify-center space-y-12">
                            <div className="space-y-4 md:space-y-8">
                                <div className="flex items-center gap-2 md:hidden">
                                    <div className="h-0.5 w-6 bg-brand" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand">Core Identity</span>
                                </div>
                                <h2 className="text-2xl md:text-5xl font-black text-slate-900 italic leading-[1.1] tracking-tighter uppercase relative">
                                    "Precision in detail.<br className="hidden md:block" />
                                    <span className="text-brand">Intelligence in design.</span><br className="hidden md:block" />
                                    <span className="md:hidden"> </span>Excellence in execution."
                                </h2>
                                <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-sm">— GNOM Engineering Philosophy</p>
                            </div>

                            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                                <a href={`tel:${config.primaryNumber.replace(/\s/g, "")}`} className="block transition-transform hover:scale-[1.01] active:scale-[0.99]">
                                    <GnomCard rotate="rotate-0" padding="p-10" accentColor="bg-slate-50">
                                        <div className="flex items-start gap-8">
                                            <Phone className="w-12 h-12 text-brand shrink-0" />
                                            <div>
                                                <h4 className="font-black text-slate-900 mb-2 uppercase tracking-tight">Call Experts</h4>
                                                <p className="text-slate-900 font-black italic text-lg">{config.primaryNumber}</p>
                                                <p className="text-slate-400 italic font-medium text-sm">{config.secondaryNumber}</p>
                                                <p className="text-[10px] text-brand font-black uppercase tracking-widest mt-4">Available 24/7 for support</p>
                                            </div>
                                        </div>
                                    </GnomCard>
                                </a>

                                <a href={`mailto:${config.email}`} className="block transition-transform hover:scale-[1.01] active:scale-[0.99]">
                                    <GnomCard rotate="rotate-0" padding="p-10" accentColor="bg-slate-100">
                                        <div className="flex items-start gap-8">
                                            <Mail className="w-12 h-12 text-brand shrink-0" />
                                            <div>
                                                <h4 className="font-black text-slate-900 mb-2 uppercase tracking-tight">Email Us</h4>
                                                <p className="text-slate-500 italic font-medium">{config.email}</p>
                                                <p className="text-[10px] text-brand font-black uppercase tracking-widest mt-2">Get a quote within 24h</p>
                                            </div>
                                        </div>
                                    </GnomCard>
                                </a>

                                <GnomCard rotate="rotate-0" padding="p-10" accentColor="bg-slate-50">
                                    <div className="flex items-start gap-8">
                                        <MapPin className="w-12 h-12 text-brand shrink-0" />
                                        <div>
                                            <h4 className="font-black text-slate-900 mb-2 uppercase tracking-tight">Corporate Office</h4>
                                            <p className="text-slate-500 italic font-medium leading-relaxed">{config.fullAddress}</p>
                                        </div>
                                    </div>
                                </GnomCard>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Operational Excellence Section */}
            <section className="py-6 lg:py-10 xl:py-12 bg-white border-t border-slate-100 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <SectionHeader 
                        title="Operational Excellence"
                        subtitle="Quality assurance and management protocols that define our service delivery."
                        align="center"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                        {[
                            { title: "24/7 Support", desc: "Round-the-clock emergency engineering consulting for critical infrastructure.", icon: MessageSquare },
                            { title: "Regional Hubs", desc: "Strategically located service centers across Kerala for rapid on-site deployment.", icon: MapPin },
                            { title: "Technical Audit", desc: "Annual performance reviews and system health checks for all projects.", icon: Zap }
                        ].map((feature, idx) => (
                            <GnomCard key={idx} rotate={idx % 2 === 0 ? "rotate-1" : "-rotate-1"} padding="p-10">
                                <feature.icon className="w-12 h-12 text-brand mb-6" />
                                <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight italic">{feature.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                            </GnomCard>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
