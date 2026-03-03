import { cn } from "@/lib/utils";

interface GnomCardProps {
    children: React.ReactNode;
    className?: string;
    accentColor?: string;
    rotate?: string;
    padding?: string;
}

export function GnomCard({
    children,
    className,
    accentColor = "bg-brand",
    rotate = "rotate-2",
    padding = "p-8"
}: GnomCardProps) {
    return (
        <div className="relative group h-full">
            {/* Background Accent Layer */}
            <div className={cn(
                "absolute inset-0 rounded-[2.5rem] transition-transform duration-500",
                accentColor,
                rotate
            )} />

            {/* Main Content Layer */}
            <div className={cn(
                "relative h-full bg-white border-2 border-slate-900 rounded-[2.5rem] shadow-xl transition-all duration-300",
                padding,
                className
            )}>
                {children}
            </div>
        </div>
    );
}
