import { trust } from "@/config/site";
import Icon from "./ui/Icon";

export default function TrustBar() {
  return (
    <div className="border-y border-line bg-bg-2 py-[22px]">
      <ul className="wrap flex flex-wrap justify-around gap-5 text-sm font-medium text-muted">
        {trust.map((t) => (
          <li key={t} className="flex items-center gap-2">
            <span className="text-mint">
              <Icon name="check" size={18} strokeWidth={2.5} />
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
