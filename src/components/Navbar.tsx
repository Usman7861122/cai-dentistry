import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur border-b border-ink/5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="inline-flex items-baseline gap-1.5">
          <span className="font-display text-2xl font-bold tracking-tight text-ink">CAI</span>
          <span className="font-display text-lg italic text-teal">Dentistry</span>
        </a>

        {/* Links for larger screens */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-soft">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-teal transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#appointment"
          className="hidden md:inline-block rounded-full bg-teal px-5 py-2 text-sm font-semibold text-cream hover:bg-teal-dark transition-colors"
        >
          Book Consultation
        </a>

        {/* Hamburger button for small screens */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
          <span className="h-0.5 w-6 bg-ink" />
        </button>
      </nav>

      {/* Mobile menu, animated open/close with Framer Motion */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-cream border-t border-ink/5"
          >
            {[...links, { href: "#appointment", label: "Book Consultation" }].map((link) => (
              <li key={link.href} className="border-b border-ink/5">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-ink-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
