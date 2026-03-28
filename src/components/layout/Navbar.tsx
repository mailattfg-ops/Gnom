"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShieldCheck, Home, Info, Settings, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";

const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Services", href: "/services", icon: Settings },
    { name: "Contact", href: "/contact", icon: Phone },
];

const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(config.whatsappMessage)}`;

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

        // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 px-6",
                scrolled
                    ? "bg-slate-900/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl"
                    : "bg-transparent py-8"
            )}
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="h-12 w-12 bg-brand rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-brand/40 border border-white/20">
                        <ShieldCheck className="w-7 h-7" />
                    </div>
                    <div className="flex flex-col -space-y-1">
                        <span className={cn(
                            "text-2xl font-black tracking-tighter uppercase transition-colors duration-300 text-white",

                        )}>
                            {config.companyName}<span className="text-brand">.</span>
                        </span>
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-brand opacity-80">Intelligence</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand relative group/link text-white",

                                pathname === link.href && "text-brand!"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-2 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover/link:w-full",
                                pathname === link.href && "w-full"
                            )} />
                        </Link>
                    ))}

                    <Link
                        href={whatsappUrl}
                        className="group relative px-8 py-3 bg-white text-slate-900 rounded-xl font-black text-xs tracking-[0.2em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl uppercase italic"
                    >
                        <span className="relative z-10">Inquiry</span>
                        <div className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-10 transition-opacity" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden h-14 w-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white active:scale-95 transition-all hover:bg-white/10"
                    onClick={() => setIsOpen(true)}
                    aria-label="Toggle Menu"
                >
                    <Menu className="w-8 h-8" />
                </button>
            </div>


        </nav>

        {/* Mobile Menu Overlay - Moved OUTSIDE <nav> for absolute stacking priority */}
        <div
            className={cn(
                "fixed inset-0 bg-slate-950 z-[99999] lg:hidden transition-all duration-500",
                isOpen 
                    ? "opacity-100 visible pointer-events-auto" 
                    : "opacity-0 invisible pointer-events-none"
            )}
        >
            {/* Technical Decorative Background */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="h-full flex flex-col p-6 relative z-10 overflow-y-auto">
                <div className="flex flex-col min-h-full">
                    {/* Header in Menu */}
                    <div className="flex items-center justify-between mb-8 pt-2">
                        <div className="flex flex-col -space-y-1">
                            <span className="text-3xl font-black tracking-tighter uppercase text-white">
                                {config.companyName}<span className="text-brand">.</span>
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand">Intelligence</span>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="h-14 w-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white active:scale-90 transition-transform shadow-lg"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-1 gap-4 mb-8">
                        {navLinks.map((link, idx) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "flex items-center justify-between p-6 rounded-[2rem] border-2 transition-all group",
                                        pathname === link.href 
                                            ? "bg-brand border-brand text-slate-900" 
                                            : "bg-white/5 border-white/5 text-white hover:border-white/20"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={cn(
                                            "h-12 w-12 rounded-2xl flex items-center justify-center shadow-lg transition-colors",
                                            pathname === link.href ? "bg-slate-900/20 text-slate-900" : "bg-brand/10 text-brand"
                                        )}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-2xl font-black uppercase italic tracking-tighter">{link.name}</span>
                                    </div>
                                    <ChevronRight className={cn(
                                        "w-6 h-6 transition-transform group-hover:translate-x-2",
                                        pathname === link.href ? "opacity-40" : "text-brand"
                                    )} />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Quick Contacts */}
                    <div className="mt-auto space-y-8 pb-6">
                        <div className="space-y-4">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1">Direct Connect</p>
                            <div className="grid grid-cols-2 gap-4">
                                <a href={`tel:${config.primaryNumber.replace(/\s/g, "")}`} className="flex items-center gap-4 p-5 bg-white/5 rounded-[1.5rem] border border-white/5">
                                    <Phone className="w-5 h-5 text-brand" />
                                    <span className="text-xs font-bold text-white uppercase italic tracking-wider">Call Now</span>
                                </a>
                                <a href={`mailto:${config.email}`} className="flex items-center gap-4 p-5 bg-white/5 rounded-[1.5rem] border border-white/5">
                                    <Mail className="w-5 h-5 text-brand" />
                                    <span className="text-xs font-bold text-white uppercase italic tracking-wider">Email</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
