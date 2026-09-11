import { useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { target: 15, suffix: "+", label: "Years of experience" },
  { target: 8000, suffix: "+", label: "Smiles treated" },
  { target: 4.9, suffix: "/5", label: "Average rating", decimals: 1 },
];

// A simple count-up number that starts animating the first time it
// scrolls into view. This is the same "animated stat" effect used on
// a lot of premium clinic websites.
function Counter({
  target,
  suffix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  function start() {
    if (started.current) return;
    started.current = true;

    const duration = 1200;
    const startTime = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(progress * target);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  return (
    <motion.span onViewportEnter={start} viewport={{ once: true }}>
      {value.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-teal-light/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex h-64 items-center justify-center rounded-3xl bg-white text-teal-dark md:h-full"
        >
          <span className="text-sm font-medium">Photo of Dr. Ahmadi goes here</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Meet Your Dentist
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">Dr. Sara Ahmadi</h2>
          <p className="mt-4 text-ink-soft">
            Dr. Ahmadi has spent over 15 years perfecting smiles in Pasadena,
            with advanced training in cosmetic and restorative dentistry. She
            believes a great smile should look completely natural — never
            "done."
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-teal-dark">
                  <Counter target={stat.target} suffix={stat.suffix} decimals={stat.decimals} />
                </p>
                <p className="mt-1 text-xs text-ink-soft">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
