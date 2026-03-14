import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    prefix?: string;
    className?: string;
    align?: "left" | "center";
    dark?: boolean;
}

export function SectionHeader({ title, subtitle, prefix, className, align = "center", dark = false }: SectionHeaderProps) {
    const initial = title.charAt(0).toUpperCase();

    return (
        <div className={cn(
            "relative",
            "mb-6 md:mb-8 lg:mb-10",
            align === "center" ? "mx-auto text-center" : "text-left",
            className
        )}>
            <div className={cn(
                "inline-flex flex-col relative z-10",
                align === "center" ? "items-center" : "items-start"
            )}>
                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <div className="h-px w-6 md:w-8 bg-brand opacity-50" />
                    <span className="text-brand font-black text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em]">
                        {prefix || "GNOM Excellence"}
                    </span>
                    <div className="h-px w-6 md:w-8 bg-brand opacity-50" />
                </div>
                
                <h2 className={cn(
                    "font-black mb-6 md:mb-8 leading-[0.9] md:leading-none tracking-tighter italic uppercase",
                    "text-3xl md:text-5xl lg:text-6xl",
                    dark ? "text-white" : "text-slate-900"
                )}>
                    {title}
                </h2>
                
                {/* Refined Accent Line */}
                <div className={cn(
                    "flex gap-1 md:gap-1.5 mb-4 md:mb-6",
                    align === "center" ? "justify-center" : "justify-start"
                )}>
                    <div className="h-1.5 md:h-2 w-12 md:w-16 bg-brand rounded-full" />
                    <div className="h-1.5 md:h-2 w-2 md:w-3 bg-brand rounded-full opacity-40" />
                    <div className="h-1.5 md:h-2 w-2 md:w-3 bg-brand rounded-full opacity-20" />
                </div>
            </div>
            
            {subtitle && (
                <p className={cn(
                    "italic font-medium leading-relaxed relative z-10",
                    "text-base md:text-xl lg:text-2xl",
                    dark ? "text-slate-300" : "text-slate-500",
                    align === "center" ? "mx-auto max-w-2xl px-4 md:px-0" : "max-w-xl"
                )}>
                    "{subtitle}"
                </p>
            )}
        </div>
    );
}
