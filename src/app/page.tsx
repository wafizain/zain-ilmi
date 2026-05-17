import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";

import Hero from "@/sections/hero";
import WhyUs from "@/sections/why-us";
import Programs from "@/sections/programs";
import Testimonials from "@/sections/testimonials";
import CTA from "@/sections/cta";
import Location from "@/sections/location";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50">
      <Navbar />
      <Hero />
      <WhyUs />
      <Programs />
      <Testimonials />
      <Location />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
