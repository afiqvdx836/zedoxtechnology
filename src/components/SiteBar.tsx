import { site } from "@/config/site";
import Logo from "./ui/Logo";
import CycleGlass from "./CycleGlass";

// Fixed minimal bar: wordmark, the cycle glass, one action. The glass sits in the
// bar on phones and moves to the right edge of the screen on wider screens.
export default function SiteBar() {
  return (
    <header className="zx-bar" data-sc-shot-fixed>
      <a
        href="#top"
        className="zx-bar__home"
        aria-label={`${site.brand} ${site.brandSub}, ke atas`}
      >
        <Logo />
      </a>
      <CycleGlass />
      <a href="#order" className="zx-btn zx-btn--sm">
        {site.cta}
      </a>
    </header>
  );
}
