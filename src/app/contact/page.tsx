import { config } from "@/data/config";
import { Mail, Phone, MapPin, Zap, MessageSquare } from "lucide-react";
import { GnomCard } from "@/components/ui/GnomCard";
import Image from "next/image";


export default function Page() {
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
                            <span className="text-5xl md:text-9xl xl:text-8xl block mb-2">Let's</span>
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
                        src="/images/contact_hero.png"
                        alt="Contact GNOM Engineering"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Subtle gradient overlay to blend left side */}
                    <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/20 to-transparent" />
                </div>
            </section>

            <section className="py-16 md:py-24 lg:py-32 xl:py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                        {/* Contact Form */}
                        <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                            <h2 className="text-4xl font-black mb-10 text-slate-900 italic uppercase tracking-tight">Project <span className="text-brand">Inquiry.</span></h2>
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                                        <input type="text" className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all outline-none font-medium" placeholder="Ex: Rahul S." />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                        <input type="email" className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all outline-none font-medium" placeholder="rahul@company.com" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Service Required</label>
                                    <div className="relative">
                                        <select className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all outline-none appearance-none font-bold text-slate-900">
                                            <option>Industrial MEP Solutions</option>
                                            <option>Commercial HVAC Systems</option>
                                            <option>Electrical Infrastructure</option>
                                            <option>Smart Automation</option>
                                            <option>Technical Audit</option>
                                        </select>
                                        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                            <Zap className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Message</label>
                                    <textarea rows={4} className="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/5 transition-all outline-none font-medium resize-none" placeholder="Briefly describe your MEP requirements..."></textarea>
                                </div>
                                <button className="w-full py-6 bg-slate-900 text-white font-black text-lg rounded-2xl shadow-xl hover:bg-brand hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group/btn">
                                    Submit Mission Brief
                                    <Zap className="w-5 h-5 text-brand group-hover/btn:animate-pulse" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Details */}
                        <div className="flex flex-col justify-center space-y-12">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic leading-[1.1] tracking-tighter uppercase">
                                    "Precision in detail.<br />
                                    <span className="text-brand">Intelligence in design.</span><br />
                                    Excellence in execution."
                                </h2>
                                <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">— GNOM Engineering Philosophy</p>
                            </div>

                            <div className="flex flex-col gap-6">
                                <a href={`tel:${config.whatsappNumber}`} className="block transition-transform hover:scale-[1.01] active:scale-[0.99]">
                                    <GnomCard rotate="rotate-0" padding="p-10" accentColor="bg-slate-50">
                                        <div className="flex items-start gap-8">
                                            <Phone className="w-12 h-12 text-brand shrink-0" />
                                            <div>
                                                <h4 className="font-black text-slate-900 mb-2 uppercase tracking-tight">Call Experts</h4>
                                                <p className="text-slate-500 italic font-medium">{config.whatsappNumber}</p>
                                                <p className="text-[10px] text-brand font-black uppercase tracking-widest mt-2">Available 24/7 for support</p>
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
                                            <p className="text-slate-500 italic font-medium leading-relaxed">Kodakara, Thrissur Dist., Kerala, India - Premium MEP Solutions Regional Center.</p>
                                        </div>
                                    </div>
                                </GnomCard>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Operational Excellence Section */}
            <section className="py-16 md:py-24 lg:py-32 xl:py-16 bg-white border-t border-slate-100 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-5xl font-black text-slate-900 mb-8 italic uppercase tracking-tighter">
                            Operational <span className="text-brand">Excellence.</span>
                        </h2>
                        <p className="text-xl text-slate-600 italic font-medium">
                            "Beyond design and installation, we provide a lifetime of engineering reliability and immediate technical response."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
