import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { CaseStudies } from "@/components/sections/case-studies";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
