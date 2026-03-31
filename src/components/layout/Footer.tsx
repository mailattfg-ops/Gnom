import { config } from "@/data/config";
import { companyProfile } from "@/data/homeData";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 py-6 md:py-8 lg:py-10 xl:py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                    {/* 1. Quick Links */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-white uppercase tracking-wider text-xs">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "About Us", "Services", "Contact"].map((link) => {
                                const firstword = link.split(" ")[0];
                                return (
                                    <li key={link}>
                                        <a href={`/${firstword.toLowerCase()}`} className="hover:text-brand transition-colors text-sm font-medium">
                                            {link}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* 2. Services */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-white uppercase tracking-wider text-xs">Our Services</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-400">
                            {[
                                { name: "PLUMBING", href: "/services#plumbing-work" },
                                { name: "ELECTRICAL", href: "/services#electrical-work" },
                                { name: "HVAC", href: "/services#hvac" },
                                { name: "SOLAR", href: "/services#solar-&-power-solutions" },
                                { name: "CCTV & SECURITY", href: "/services#cctv-security" }
                            ].map((s) => (
                                <li key={s.name} className="hover:text-brand cursor-pointer transition-colors">
                                    <a href={s.href}>{s.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Contact Info */}
                    <div className="col-span-2 lg:col-span-1 space-y-6">
                        <h4 className="font-bold text-white uppercase tracking-wider text-xs">Contact Us</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                            <ul className="space-y-5 text-sm">
                                <li className="flex items-start gap-4">
                                    <div className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center text-brand shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-slate-400 leading-relaxed">
                                        {config.address.line1}, {config.address.line2},<br />
                                        {config.address.line3}, {config.address.line4},<br />
                                        PIN {config.address.pin}
                                    </span>
                                </li>
                            </ul>
                            <ul className="space-y-5 text-sm">
                                <li className="flex items-start gap-4">
                                    <div className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center text-brand shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <a href={`tel:${config.primaryNumber.replace(/\s/g, "")}`} className="hover:text-brand transition-colors font-bold text-white">
                                            {config.primaryNumber}
                                        </a>
                                        <a href={`tel:${config.secondaryNumber.replace(/\s/g, "")}`} className="hover:text-brand transition-colors text-xs text-slate-400 font-medium">
                                            {config.secondaryNumber}
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center text-brand shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <a href={`mailto:${config.email}`} className="hover:text-brand transition-colors font-medium text-slate-400">
                                        {config.email}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 4. Google Map */}
                    <div className="col-span-2 lg:col-span-1 space-y-6">
                        <h4 className="font-bold text-white uppercase tracking-wider text-xs">Our Location</h4>
                        <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 group">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31413.598185581308!2d76.16241395473483!3d10.205018029375294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081b13432bc127%3A0xac513e9f17de56fa!2sTIME%20INTERIORS%20-Interior%20Designer%2C%20Modular%20Kitchen%2C%20Building%20Contractors%2C%20Aluminium%20Fabrication%2CDoor%20Dealers%2C%20Home%20Builders!5e0!3m2!1sen!2sin!4v1773807604348!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="group-hover:scale-110 transition-transform duration-700"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="pt-6 md:pt-8 lg:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {currentYear} {config.companyName}. All rights reserved.</p>
                    <p className="flex items-center gap-1.5 uppercase tracking-widest text-[10px] font-black">
                        Powered by <a href="https://thinkforgeglobal.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand transition-colors italic">Think Forge Global</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
