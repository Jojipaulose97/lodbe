import { cn } from "../../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ className, label, error, ...props }: InputProps) => {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-300 ml-1">
          {label}
        </label>
      )}
      <input 
        className={cn(
          "w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white outline-none transition-all",
          "focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )} 
        {...props} 
      />
      {error && <p className="text-xs text-red-500 ml-1">{error}</p>}
    </div>
  );
};
