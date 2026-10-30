"use client";

import { useEffect, useState } from "react";
import { nav } from "@/config/site";
import Logo from "./ui/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-line bg-ink/85 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div className={`container-page flex items-center justify-between transition-all duration-300 ${scrolled ? "py-3" : "py-6"}`}>
        <a href="#hero" aria-label="Hydrogen by Zedox home">
          <Logo />
        </a>
        <ul className="hidden gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-[0.95rem] font-medium transition-colors hover:text-white ${
                  active === item.href.slice(1) ? "text-white" : "text-fg-2"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#sessions"
          className="hidden items-center gap-2 rounded-xl bg-gradient-to-br from-orange to-[#ff4d4d] px-5 py-2.5 font-heading text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-glow-orange sm:inline-flex"
        >
          <i className="fa-solid fa-calendar-check" aria-hidden /> Book a Session
        </a>
      </div>
    </header>
  );
}
