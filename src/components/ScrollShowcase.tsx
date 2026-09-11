import { motion } from "framer-motion";
import SmoothScrollHero from "./SmoothScrollHero";

export default function ScrollShowcase() {
  return (
    <section className="relative">
      <SmoothScrollHero
        scrollHeight={1000}
        desktopImage="/images/Main.png"
        mobileImage="/images/Main.png"
        initialClipPercentage={20}
        finalClipPercentage={80}
      />

      {/* Text stays pinned on top of the animating photo while the user
          scrolls through the effect (same "sticky" trick as the image). */}
      <div className="pointer-events-none sticky top-0 -mt-[100vh] flex h-screen items-center">
        <div className="pointer-events-auto max-w-xl rounded-3xl bg-gradient-to-r from-cream/95 via-cream/80 to-transparent px-6 py-10 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Cosmetic Dentistry Specialists
            </p>
            <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              Look Radiant.
              <br /> Feel Empowered.
            </h2>
            <p className="mt-5 max-w-sm text-lg text-ink-soft">
              Cutting-edge cosmetic treatments with natural, lasting results.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#appointment"
                className="rounded-full bg-teal px-8 py-3.5 text-center font-semibold text-cream shadow-lg shadow-teal/20 hover:bg-teal-dark transition-colors"
              >
                Book Consultation
              </a>
              <a
                href="tel:+16265551234"
                className="rounded-full border border-ink/15 bg-white px-8 py-3.5 text-center font-semibold text-ink hover:border-ink/30 transition-colors"
              >
                (626) 555-1234
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
