import { cn } from "../../lib/utils"; // Updated to use @ alias
import { ReactNode, ElementType } from "react"; // Import ElementType

type TypographyProps = {
    children: ReactNode;
    className?: string;
    variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'p'
    | 'p-muted'
    | 'label'
    | 'caption';
};

export const Typography = ({ children, className, variant }: TypographyProps) => {
    const styles = {
        h1: "text-4xl md:text-6xl lg:text-6xl font-bold tracking-tighter leading-tight",
        h2: "text-3xl md:text-5xl font-bold tracking-tight leading-tight",
        h3: "text-xl md:text-2xl font-semibold tracking-tight",
        p: "text-base md:text-lg leading-relaxed text-zinc-300",
        'p-muted': "text-base md:text-lg leading-relaxed text-zinc-500",
        label: "text-sm font-medium tracking-wide uppercase text-brand-yellow",
        caption: "text-xs text-zinc-500 leading-normal",
    };

    // FIX: Explicitly type the mapping object as Record<string, ElementType>
    const componentMap: Record<string, ElementType> = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        p: 'p',
        'p-muted': 'p',
        label: 'span',
        caption: 'span',
    };

    // Assign the mapped element to a Capitalized variable
    const Component = componentMap[variant];

    return (
        <Component className={cn(styles[variant], className)}>
            {children}
        </Component>
    );
};