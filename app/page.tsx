import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import About from "@/components/sections/About";
import WhySGS from "@/components/sections/WhySGS";
import Programs from "@/components/sections/Programs";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import CTABanner from "@/components/sections/CTABanner";
import Resources from "@/components/sections/Resources";
import Shop from "@/components/sections/Shop";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Trust />
      <About />
      <WhySGS />
      <Programs />
      <Pricing />
      <Testimonials />
      <Stats />
      <CTABanner />
      <Resources />
      <Shop />
      <Contact />
      <Footer />
    </main>
  );
}
