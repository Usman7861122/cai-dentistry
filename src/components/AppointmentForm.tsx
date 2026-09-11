import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  // This demo just shows a success message. To really receive bookings,
  // connect this form to a service like Formspree or Web3Forms (see the
  // "Make the form actually work" step in the guide.)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="appointment" className="mx-auto max-w-2xl px-6 py-20">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
          Get Started
        </p>
        <h2 className="mt-2 font-display text-3xl text-ink">Book a Consultation</h2>
        <p className="mt-3 text-ink-soft">
          Fill out the form and our front desk will confirm a time with you.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mt-10 rounded-3xl border border-ink/8 bg-white p-8 shadow-sm"
      >
        {submitted ? (
          <p className="text-center font-medium text-teal-dark">
            Thank you! We received your request and will call you shortly to
            confirm your consultation.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="text-sm font-medium text-ink">Full name</label>
              <input
                required
                type="text"
                className="mt-1 w-full rounded-lg border border-ink/15 px-4 py-2 focus:border-teal focus:outline-none"
              />
            </div>

            <div className="sm:col-span-1">
              <label className="text-sm font-medium text-ink">Phone number</label>
              <input
                required
                type="tel"
                className="mt-1 w-full rounded-lg border border-ink/15 px-4 py-2 focus:border-teal focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-ink">Email</label>
              <input
                required
                type="email"
                className="mt-1 w-full rounded-lg border border-ink/15 px-4 py-2 focus:border-teal focus:outline-none"
              />
            </div>

            <div className="sm:col-span-1">
              <label className="text-sm font-medium text-ink">Preferred date</label>
              <input
                type="date"
                className="mt-1 w-full rounded-lg border border-ink/15 px-4 py-2 focus:border-teal focus:outline-none"
              />
            </div>

            <div className="sm:col-span-1">
              <label className="text-sm font-medium text-ink">I'm interested in</label>
              <input
                type="text"
                placeholder="e.g. Veneers, whitening"
                className="mt-1 w-full rounded-lg border border-ink/15 px-4 py-2 focus:border-teal focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-full bg-teal px-6 py-3 font-semibold text-cream hover:bg-teal-dark transition-colors"
              >
                Request Consultation
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}
