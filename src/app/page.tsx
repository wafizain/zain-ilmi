import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";

import Hero from "@/sections/hero";
import WhyUs from "@/sections/why-us";
import Programs from "@/sections/programs";
import Gallery from "@/sections/gallery";
import Testimonials from "@/sections/testimonials";
import Location from "@/sections/location";
import FAQ from "@/sections/faq";
import CTA from "@/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50">
      <Navbar />
      <Hero />
      <WhyUs />
      <Programs />
      <Gallery />
      <Testimonials />
      <Location />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
