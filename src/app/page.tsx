import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Header />
      <Hero />

      {/* Placeholder sections for now */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            About Me
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Coming soon...
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Projects
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Coming soon...
          </p>
        </div>
      </section>

      <section
        id="experience"
        className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Experience
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Coming soon...
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Contact
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Coming soon...
          </p>
        </div>
      </section>
    </main>
  );
}
