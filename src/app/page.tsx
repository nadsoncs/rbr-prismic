import Image from "next/image";
import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Numbers } from "@/components/Numbers";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Testimonial } from "@/components/Testimonial";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative">
        <Header />
        <main>
          <div id="header-full" className="relative w-full">
            <Hero />
            <Numbers />
          </div>
          <Services />
          <Testimonial />
          <Cta />
          <About />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}
