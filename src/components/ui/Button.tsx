type Variant = "orange" | "outline";

const variants: Record<Variant, string> = {
  orange:
    "bg-gradient-to-br from-orange to-[#ff4d4d] text-white shadow-[0_4px_15px_rgb(255_123_0/0.2)] hover:-translate-y-0.5 hover:shadow-glow-orange",
  outline: "border border-line-strong text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/5",
};

type Props = {
  href: string;
  icon?: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Button({ href, icon, variant = "orange", external, className = "", children }: Props) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex items-center justify-center gap-2.5 rounded-2xl px-9 py-4 font-heading font-semibold transition duration-300 ${variants[variant]} ${className}`}
    >
      {icon && <i className={icon.startsWith("fa-brands") ? icon : `fa-solid ${icon}`} aria-hidden />}
      {children}
    </a>
  );
}
