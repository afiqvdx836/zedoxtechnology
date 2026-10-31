import SiteBar from "@/components/SiteBar";
import Hero from "@/components/acts/Hero";
import Inside from "@/components/acts/Inside";
import Peak from "@/components/acts/Peak";
import Facts from "@/components/acts/Facts";
import Finishes from "@/components/acts/Finishes";
import Questions from "@/components/acts/Questions";
import Close from "@/components/acts/Close";
import ScrollCraftMount from "@/components/scroll/ScrollCraftMount";
import { OrderProvider } from "@/components/order/OrderProvider";

// Seven acts, scored in scrollcraft/builds/zedox/BRIEF.md.
export default function Home() {
  return (
    <OrderProvider>
      <div className="sc-grain" aria-hidden />
      <SiteBar />
      <main id="top">
        <Hero />
        <Inside />
        <Peak />
        <Facts />
        <Finishes />
        <Questions />
        <Close />
      </main>
      <ScrollCraftMount />
    </OrderProvider>
  );
}
