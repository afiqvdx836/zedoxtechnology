"use client";

import { useOrder } from "./OrderProvider";
import { btn } from "../ui/styles";

type Props = {
  variant?: "primary" | "ghost" | "dark";
  size?: "md" | "sm";
  className?: string;
  children: React.ReactNode;
};

export default function OrderButton({ variant = "primary", size = "md", className = "", children }: Props) {
  const { order } = useOrder();
  return (
    <button type="button" onClick={order} className={`${btn.base} ${btn[variant]} ${size === "sm" ? btn.sm : ""} ${className}`}>
      {children}
    </button>
  );
}
