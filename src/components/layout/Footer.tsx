import { config } from "@/data/config";
import { companyProfile } from "@/data/homeData";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-white tracking-tight">
                            {config.companyName}<span className="text-brand">.</span>
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-400">
                            {companyProfile.about.substring(0, 150)}...
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-brand hover:text-white transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "About Us", "Services", "Contact"].map((link) => (
                                <li key={link}>
                                    <a href={`/${link.toLowerCase().replace(" ", "")}`} className="hover:text-brand transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white">Our Services</h4>
                        <ul className="space-y-4 text-sm">
                            <li>PLUMBING WORK</li>
                            <li>ELECTRICAL WORK</li>
                            <li>HVAC</li>
                            <li>SOLAR</li>
                            <li>CCTV & SECURITY</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand shrink-0" />
                                <span>Kodakara, Kerala, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-brand shrink-0" />
                                <span>{config.whatsappNumber}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-brand shrink-0" />
                                <span>{config.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-800 text-center text-sm text-slate-500">
                    <p>© {currentYear} {config.companyName}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
