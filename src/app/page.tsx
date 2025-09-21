import FeaturedProducts from "@/components/featuredProducts/featuredProducts";
import Hero from "@/components/hero/Hero";
import Process from "@/components/process/process";
import Testimonial from "@/components/testimonials/Testimonial";
import TrustSection from "@/components/trustSection/trustSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Process />
      <TrustSection/>
      <Testimonial/>
    </div>
  );
}
