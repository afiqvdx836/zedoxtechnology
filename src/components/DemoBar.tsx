import { demo } from "@/config/site";

export default function DemoBar() {
  if (!demo.enabled) return null;
  return <div className="bg-promo px-4 py-2 text-center text-[13px] font-semibold text-[#2a2000]">{demo.banner}</div>;
}
