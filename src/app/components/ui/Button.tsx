import { cn } from "../../lib/utils"; // Updated to use @ alias

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  className, variant = 'primary', size = 'md', ...props 
}: ButtonProps) => {
  const variants = {
    // Primary: Clean White
    primary: "bg-white text-black hover:bg-gray-200",
    // Secondary: Brand Yellow
    secondary: "bg-brand-yellow text-black hover:opacity-90", 
    // Outline: Tech Zinc
    outline: "border border-zinc-800 text-white hover:border-brand-yellow hover:text-brand-yellow transition-colors",
    // Ghost: Subtle Zinc
    ghost: "text-zinc-400 hover:text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-95", 
        variants[variant], 
        sizes[size], 
        className
      )} 
      {...props} 
    />
  );
};
