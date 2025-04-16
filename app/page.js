import { Hero } from "../components/sections/hero";
import { Services } from "../components/sections/services";
import { About } from "../components/sections/about";
import { Testimonials } from "../components/sections/testimonials";
import { CTA } from "../components/sections/cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
    </main>
  );
}