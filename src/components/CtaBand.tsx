import { ctaBand } from "@/config/site";
import OrderButton from "./order/OrderButton";

export default function CtaBand() {
  return (
    <div className="mx-5 rounded-[28px] bg-grad px-6 py-[60px] text-center text-ink">
      <h2 className="mb-3 text-[clamp(26px,3.6vw,38px)] leading-tight tracking-tight">{ctaBand.title}</h2>
      <p className="mb-6 font-medium">{ctaBand.body}</p>
      <OrderButton variant="dark">{ctaBand.cta}</OrderButton>
    </div>
  );
}
