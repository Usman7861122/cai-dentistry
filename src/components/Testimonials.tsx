import { motion } from "framer-motion";

const reviews = [
  {
    name: "Maria G.",
    text: "My veneers look completely natural. People ask what I've changed but can't figure it out — I just look like myself, only better.",
  },
  {
    name: "James T.",
    text: "I was self-conscious about my smile for years. The whole team made the process easy, and the results speak for themselves.",
  },
  {
    name: "Priya K.",
    text: "Invisalign here was faster than I expected, and Dr. Ahmadi explained every step. Worth every penny.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
          Patient Stories
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-ink">
          What Our Patients Say
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.map((review, i) => (
          <motion.figure
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl bg-white border border-ink/8 p-6"
          >
            <p className="text-teal">★★★★★</p>
            <blockquote className="mt-3 font-display italic text-ink-soft">
              "{review.text}"
            </blockquote>
            <figcaption className="mt-4 font-semibold text-ink">— {review.name}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
