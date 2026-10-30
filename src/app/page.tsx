import DemoBar from "@/components/DemoBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Product from "@/components/Product";
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
      <DemoBar />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Steps />
        <Product />
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
