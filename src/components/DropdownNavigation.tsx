import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, type LucideIcon } from "lucide-react";

type SubMenuItem = {
  label: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

type SubMenu = {
  title: string;
  items: SubMenuItem[];
};

export type NavItem = {
  id: number;
  label: string;
  subMenus?: SubMenu[];
  link?: string;
};

interface Props {
  navItems: NavItem[];
}

// Adapted from a 21st.dev community component. Changes made for this
// project: dropped the shadcn/Tailwind theme-variable classes (bg-background,
// text-foreground, border-border, etc. -- this project doesn't use shadcn)
// in favor of our own teal/cream/ink theme, removed the full-page <main>
// demo wrapper so it fits inline in the navbar, and made plain links
// (no submenu) render as real <a> tags so they actually navigate.
export function DropdownNavigation({ navItems }: Props) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | null>(null);

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel);
  };

  return (
    <ul className="relative flex items-center">
      {navItems.map((navItem) => (
        <li
          key={navItem.label}
          className="relative"
          onMouseEnter={() => handleHover(navItem.label)}
          onMouseLeave={() => handleHover(null)}
        >
          {navItem.subMenus ? (
            <button
              className="group relative flex cursor-pointer items-center justify-center gap-1 px-5 py-2 text-base text-ink-soft transition-colors duration-300 hover:text-ink"
              onMouseEnter={() => setIsHover(navItem.id)}
              onMouseLeave={() => setIsHover(null)}
            >
              <span>{navItem.label}</span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 group-hover:rotate-180 ${
                  openMenu === navItem.label ? "rotate-180" : ""
                }`}
              />
              {(isHover === navItem.id || openMenu === navItem.label) && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 size-full bg-teal/10"
                  style={{ borderRadius: 99 }}
                />
              )}
            </button>
          ) : (
            <a
              href={navItem.link ?? "#"}
              className="relative flex cursor-pointer items-center justify-center px-5 py-2 text-base text-ink-soft transition-colors duration-300 hover:text-ink"
              onMouseEnter={() => setIsHover(navItem.id)}
              onMouseLeave={() => setIsHover(null)}
            >
              <span>{navItem.label}</span>
              {isHover === navItem.id && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 size-full bg-teal/10"
                  style={{ borderRadius: 99 }}
                />
              )}
            </a>
          )}

          <AnimatePresence>
            {openMenu === navItem.label && navItem.subMenus && (
              <div className="absolute left-1/2 top-full w-auto -translate-x-1/2 pt-2">
                <motion.div
                  layoutId="menu"
                  className="w-max rounded-2xl border border-ink/8 bg-white p-5 shadow-lg"
                >
                  <div className="flex w-fit shrink-0 space-x-9 overflow-hidden">
                    {navItem.subMenus.map((sub) => (
                      <motion.div layout className="w-full" key={sub.title}>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                          {sub.title}
                        </h3>
                        <ul className="space-y-5">
                          {sub.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <li key={item.label}>
                                <a
                                  href={item.href}
                                  className="group flex items-start space-x-3"
                                >
                                  <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-ink/10 text-teal-dark transition-colors duration-300 group-hover:bg-teal-light">
                                    <Icon className="h-5 w-5 flex-none" />
                                  </div>
                                  <div className="w-max leading-5">
                                    <p className="shrink-0 text-base font-medium text-ink">
                                      {item.label}
                                    </p>
                                    <p className="shrink-0 text-sm text-ink-soft transition-colors duration-300 group-hover:text-ink">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}
