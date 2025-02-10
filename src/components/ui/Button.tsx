interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  onClick,
  fullWidth,
  className = "",
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-accent text-white hover:bg-accent/90",
    secondary: "bg-white text-accent border border-accent hover:bg-accent/5",
  };

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center gap-2 rounded-xl font-medium transition-colors
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {icon && (
        <span
          className={`${
            variant === "primary" ? "brightness-0 invert" : "text-accent"
          }`}
        >
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
