import React from 'react';
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean; // Added this prop
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    
    // Choose between the 'Slot' or a standard 'button' tag
    const Comp = asChild ? Slot : "button";

    const variants = {
      primary: "bg-white text-black hover:bg-gray-200",
      secondary: "bg-brand-yellow text-black hover:opacity-90", 
      outline: "border border-zinc-800 text-white hover:border-brand-yellow hover:text-brand-yellow transition-colors",
      ghost: "text-zinc-400 hover:text-white",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-95 cursor-pointer", 
          variants[variant], 
          sizes[size], 
          className
        )} 
        {...props} 
      />
    );
  }
);

Button.displayName = "Button";