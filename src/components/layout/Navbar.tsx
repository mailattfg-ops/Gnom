"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Rocket, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

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

    // Determine if we should use light or dark text based on page and scroll
    const isDarkBase = pathname === "/" || pathname === "/about" || pathname === "/services" || pathname === "/contact";
    const useLightText = (isDarkBase && !scrolled) || scrolled; // In this design, we'll aim for a dark premium navbar when scrolled

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-100 transition-all duration-500 px-6",
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
                            "text-2xl font-black tracking-tighter uppercase transition-colors duration-300",
                            scrolled || isDarkBase ? "text-white" : "text-slate-900"
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
                                "text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-brand relative group/link",
                                (scrolled || isDarkBase) ? "text-white/80" : "text-slate-600",
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
                        href="/contact"
                        className="group relative px-8 py-3 bg-white text-slate-900 rounded-xl font-black text-xs tracking-[0.2em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl uppercase italic"
                    >
                        <span className="relative z-10">Inquiry</span>
                        <div className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-10 transition-opacity" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "md:hidden transition-colors",
                        scrolled || isDarkBase ? "text-white" : "text-slate-900"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "absolute top-full left-0 right-0 bg-slate-900 border-t border-white/10 transition-all duration-500 overflow-hidden md:hidden shadow-3xl",
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="flex flex-col p-8 gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-xl font-black uppercase tracking-[0.2em] italic",
                                pathname === link.href ? "text-brand" : "text-white"
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="w-full py-5 bg-brand text-white text-center rounded-2xl font-black tracking-[0.2em] text-lg italic shadow-2xl shadow-brand/40"
                        onClick={() => setIsOpen(false)}
                    >
                        GET IN TOUCH
                    </Link>
                </div>
            </div>
        </nav>
    );
}
