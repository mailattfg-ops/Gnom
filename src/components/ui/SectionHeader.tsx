import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, className, align = "center" }: SectionHeaderProps) {
    return (
        <div className={cn(
            "mb-12 space-y-4",
            align === "center" ? "text-center" : "text-left",
            className
        )}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <div className={cn(
                "h-1.5 w-20 rounded-full bg-brand",
                align === "center" ? "mx-auto" : "mr-auto"
            )} />
        </div>
    );
}
