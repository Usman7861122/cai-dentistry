import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink">
      <div className="grid md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16"
        >
          <h2 className="font-display text-3xl uppercase leading-tight tracking-wide text-cream sm:text-4xl">
            Meet Dr. Sara Ahmadi, DDS
          </h2>
          <p className="mt-6 max-w-xl text-cream-dark/80">
            {/* Placeholder bio, replace with the real one when ready. */}
            Dr. Ahmadi earned her Bachelor of Science from the University of
            Southern California and her Doctor of Dental Surgery degree from
            the UCLA School of Dentistry, establishing a strong academic and
            clinical foundation. After completing advanced training in
            cosmetic and restorative dentistry, she combined her clinical
            precision with an artist's eye for natural-looking results. Her
            continued education in modern veneer, whitening, and smile-design
            techniques keeps her at the forefront of cosmetic dentistry. As a
            member of the American Academy of Cosmetic Dentistry, she
            maintains the highest professional standards. With over 15 years
            of clinical experience, she provides personalized, detail-oriented
            care in her Pasadena practice, ensuring every patient leaves with
            a smile they love.
          </p>
          <span className="mt-8 inline-block w-fit rounded-md bg-teal-light px-6 py-3 font-semibold text-ink">
            Premier Cosmetic Dentistry Specialist
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative h-[420px] md:h-auto"
        >
          <img
            src="/images/Doctor.jpg"
            alt="Dr. Sara Ahmadi"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
