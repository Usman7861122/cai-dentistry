import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Cosmetic Dentistry Specialists
          </p>
          <p className="font-display text-2xl italic text-ink-soft">Confidence,</p>
          <h1 className="mt-1 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Starts With Your Smile
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink-soft">
            Veneers, whitening, Invisalign, and full smile makeovers — crafted
            with an artist's eye and a specialist's precision.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#appointment"
              className="rounded-full bg-teal px-6 py-3 font-semibold text-cream shadow-lg shadow-teal/20 hover:bg-teal-dark transition-colors"
            >
              Book a Consultation
            </a>
            <a
              href="tel:+16265551234"
              className="rounded-full border border-ink/15 px-6 py-3 font-semibold text-ink hover:border-ink/30 transition-colors"
            >
              Call (626) 555-1234
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          {/* Swap this placeholder for a real photo of your office or a patient smile */}
          <div className="flex h-72 w-full max-w-md items-center justify-center rounded-3xl bg-teal-light text-teal-dark sm:h-96">
            <span className="text-sm font-medium">Your smile photo goes here</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
