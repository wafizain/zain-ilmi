import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";

import Hero from "@/sections/hero";
import About from "@/sections/about";
import StudentJourney from "@/sections/student-journey";
import Programs from "@/sections/programs";
import Testimonials from "@/sections/testimonials";
import Location from "@/sections/location";
import FAQ from "@/sections/faq";
import CTA from "@/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50">
      <Navbar />
      <Hero />
      <About />
      <StudentJourney />
      <Programs />
      <Testimonials />
      <Location />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
