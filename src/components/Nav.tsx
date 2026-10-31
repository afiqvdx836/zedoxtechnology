import { nav } from "@/config/site";
import Logo from "./ui/Logo";
import OrderButton from "./order/OrderButton";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#" aria-label="Zedox Technology">
          <Logo />
        </a>
        <div className="hidden gap-7 text-sm text-muted min-[900px]:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-fg">
              {n.label}
            </a>
          ))}
        </div>
        <OrderButton size="sm">Order Sekarang</OrderButton>
      </div>
    </nav>
  );
}
