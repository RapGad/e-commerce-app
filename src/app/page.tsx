import FeaturedProducts from "@/components/featuredProducts/featuredProducts";
import Hero from "@/components/hero/Hero";
import Process from "@/components/process/process";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Process/>
      <FeaturedProducts/>
    </div>
  );
}
