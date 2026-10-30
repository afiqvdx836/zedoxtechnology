import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LeadMagnet from "@/components/LeadMagnet";
import Science from "@/components/Science";
import Sessions from "@/components/Sessions";
import Audience from "@/components/Audience";
import Education from "@/components/Education";
import Comparison from "@/components/Comparison";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <>
      {/* Ambient glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-[10%] -left-[200px] size-[450px] rounded-full bg-cyan/12 blur-[120px]" />
        <div className="absolute top-[40%] -right-[250px] size-[500px] rounded-full bg-orange/8 blur-[120px]" />
        <div className="absolute bottom-[5%] left-[15%] size-[400px] rounded-full bg-rose/8 blur-[120px]" />
      </div>

      <Header />
      <main className="relative">
        <Hero />
        <LeadMagnet />
        <Sessions />
        <Science />
        <Audience />
        <Education />
        <Comparison />
        <Faq />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
