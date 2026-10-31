import { site } from "@/config/site";

export default function Logo() {
  return (
    <span className="zx-logo">
      <span className="zx-logo__mark" aria-hidden>
        {site.brand[0]}
      </span>
      <span className="zx-logo__word">
        {site.brand}
        <small>{site.brandSub}</small>
      </span>
    </span>
  );
}
