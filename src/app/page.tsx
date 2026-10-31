import PromoBar from "@/components/PromoBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Features from "@/components/Features";
import CycleStory from "@/components/CycleStory";
import Product from "@/components/Product";
import Compare from "@/components/Compare";
import Testimonials from "@/components/Testimonials";
import TikTokGrid from "@/components/TikTokGrid";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { OrderProvider } from "@/components/order/OrderProvider";

export default function Home() {
  return (
    <OrderProvider>
      <PromoBar />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <CycleStory />
        <Product />
        <Compare />
        <Testimonials />
        <TikTokGrid />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppFloat />
    </OrderProvider>
  );
}
