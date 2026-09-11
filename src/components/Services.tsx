import { motion } from "framer-motion";

const services = [
  {
    title: "Porcelain Veneers",
    description: "Thin, custom shells that reshape and brighten your smile.",
    emoji: "✨",
  },
  {
    title: "Teeth Whitening",
    description: "Safe, in-office whitening for noticeably brighter results.",
    emoji: "🦷",
  },
  {
    title: "Invisalign & Aligners",
    description: "Straighten teeth discreetly, without traditional braces.",
    emoji: "😁",
  },
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking replacements for missing teeth.",
    emoji: "🩺",
  },
  {
    title: "Smile Makeovers",
    description: "A full, personalized plan combining multiple treatments.",
    emoji: "💎",
  },
  {
    title: "Cosmetic Bonding",
    description: "Fast, affordable fixes for chips, gaps, and discoloration.",
    emoji: "🪄",
  },
  {
    title: "Gum Contouring",
    description: "Reshape an uneven gum line for a more balanced smile.",
    emoji: "🌿",
  },
  {
    title: "Dental Crowns",
    description: "Restore a damaged tooth's strength, shape, and look.",
    emoji: "👑",
  },
];

// Container + item variants let Framer Motion animate the cards
// one after another ("staggered") instead of all at once.
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
          What We Offer
        </p>
        <h2 className="mt-2 font-display text-3xl text-ink">Our Services</h2>
        <p className="mt-3 text-ink-soft">
          Every treatment your smile needs, under one roof.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={item}
            className="rounded-2xl border border-ink/8 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-3xl">{service.emoji}</div>
            <h3 className="mt-4 font-display text-ink">{service.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
