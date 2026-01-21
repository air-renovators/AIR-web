import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white group";
  
  const variants = {
    primary: "border-transparent text-blue-600 bg-white hover:bg-blue-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] shadow-xl",
    secondary: "border-transparent text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30",
    outline: "border-white/30 text-white hover:bg-white/10 hover:border-white/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {/* Shimmer effect overlay */}
      <span className="absolute inset-0 w-full h-full -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"></span>
      <span className="relative flex items-center">{children}</span>
    </button>
  );
};