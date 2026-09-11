import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Sun, Smile, Wand2, ShieldCheck, Move, Wrench, Layers } from "lucide-react";
import { DropdownNavigation, type NavItem } from "./DropdownNavigation";

const NAV_ITEMS: NavItem[] = [
  { id: 1, label: "Home", link: "/" },
  {
    id: 2,
    label: "Services",
    subMenus: [
      {
        title: "Cosmetic",
        items: [
          {
            label: "Porcelain Veneers",
            description: "Reshape and brighten your smile",
            icon: Sparkles,
            href: "/services/cosmetic",
          },
          {
            label: "Teeth Whitening",
            description: "Noticeably brighter in one visit",
            icon: Sun,
            href: "/services/cosmetic",
          },
          {
            label: "Smile Makeovers",
            description: "A full, personalized plan",
            icon: Smile,
            href: "/services/cosmetic",
          },
          {
            label: "Gum Contouring",
            description: "A more balanced gum line",
            icon: Wand2,
            href: "/services/cosmetic",
          },
        ],
      },
      {
        title: "Restorative",
        items: [
          {
            label: "Dental Implants",
            description: "Permanent, natural-looking",
            icon: ShieldCheck,
            href: "/services/restorative",
          },
          {
            label: "Invisalign & Aligners",
            description: "Straighten teeth discreetly",
            icon: Move,
            href: "/services/restorative",
          },
          {
            label: "Cosmetic Bonding",
            description: "Fast fixes for chips and gaps",
            icon: Wrench,
            href: "/services/restorative",
          },
          {
            label: "Dental Crowns",
            description: "Restore strength and shape",
            icon: Layers,
            href: "/services/restorative",
          },
        ],
      },
    ],
  },
  { id: 3, label: "About", link: "/#about" },
  { id: 4, label: "Reviews", link: "/#testimonials" },
  { id: 5, label: "FAQ", link: "/#faq" },
];

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur border-b border-ink/5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="inline-flex items-baseline gap-1.5">
          <span className="font-display text-3xl tracking-tight text-ink">CAI</span>
          <span className="font-display text-xl italic text-teal">Dentistry</span>
        </a>

        {/* Dropdown navigation for larger screens */}
        <div className="hidden md:block">
          <DropdownNavigation navItems={NAV_ITEMS} />
        </div>

        <a
          href="/#appointment"
          className="hidden md:inline-block rounded-full bg-teal px-6 py-2.5 text-base font-semibold text-cream hover:bg-teal-dark transition-colors"
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
            {[...mobileLinks, { href: "/#appointment", label: "Book Consultation" }].map((link) => (
              <li key={link.href} className="border-b border-ink/5">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-base text-ink-soft"
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
