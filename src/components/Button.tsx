import type { AnchorHTMLAttributes } from "react";
import { MessageCircle } from "lucide-react";
import clsx from "clsx";

type BaseProps = {
  variant?: "solid" | "ghost" | "whatsapp";
  size?: "md" | "lg";
  withIcon?: boolean;
};

type ButtonLinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ButtonLink({
  variant = "solid",
  size = "md",
  withIcon = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-all duration-300 whitespace-nowrap",
        size === "lg" ? "px-7 py-3.5 text-[15px] sm:text-base" : "px-5 py-2.5 text-sm",
        variant === "solid" &&
          "bg-navy text-parchment hover:bg-navy-deep active:scale-[0.98] shadow-[0_1px_0_rgba(255,255,255,0.08)_inset]",
        variant === "ghost" &&
          "border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/[0.03] active:scale-[0.98]",
        variant === "whatsapp" &&
          "bg-whatsapp text-white hover:bg-whatsapp-deep active:scale-[0.98]",
        className
      )}
      {...props}
    >
      {withIcon && <MessageCircle size={18} strokeWidth={2.2} />}
      {children}
    </a>
  );
}
