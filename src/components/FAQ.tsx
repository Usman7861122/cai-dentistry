import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long do veneers or whitening results last?",
    answer:
      "Porcelain veneers typically last 10-15 years with good care. Whitening results usually last 6-12 months, depending on your diet and habits.",
  },
  {
    question: "Is cosmetic dentistry painful?",
    answer:
      "Most cosmetic treatments involve little to no discomfort. We use local anesthesia when needed and walk you through every step beforehand.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes, we offer flexible monthly payment plans so you can get the smile you want without paying all at once. Ask our front desk for details.",
  },
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "Book a consultation — Dr. Ahmadi will examine your smile and walk you through the options that fit your goals and budget, no pressure.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-ink/10 py-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left font-display font-semibold text-ink"
      >
        {question}
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-2xl leading-none text-teal">
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden text-sm text-ink-soft"
          >
            <span className="block pt-3">{answer}</span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-teal-light/60">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Good To Know
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
