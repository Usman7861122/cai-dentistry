import { useRef, type RefObject } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

interface SmoothScrollHeroProps {
  /** Height of the scroll-through effect in pixels. Bigger = longer scroll before it settles. */
  scrollHeight?: number;
  /** Background image URL for desktop view */
  desktopImage?: string;
  /** Background image URL for mobile view */
  mobileImage?: string;
  /** Initial clip path percentage (how "zoomed/cropped in" it starts) */
  initialClipPercentage?: number;
  /** Final clip path percentage (fully revealed) */
  finalClipPercentage?: number;
}

interface BackgroundProps extends SmoothScrollHeroProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

function SmoothScrollHeroBackground({
  containerRef,
  desktopImage = "/images/Main.png",
  mobileImage = "/images/Main.png",
  initialClipPercentage = 25,
  finalClipPercentage = 75,
}: BackgroundProps) {
  // Tracking scroll progress AGAINST THIS SECTION (not the whole page) is
  // what lets this effect work no matter where the section sits on the
  // page. "start start" -> "end end" means: 0 = the section's top just
  // reached the top of the screen, 1 = the section's bottom just reached
  // the bottom of the screen -- which is the exact moment the section
  // naturally stops being pinned and the page resumes scrolling. That
  // keeps the reveal finishing right as the page starts to move again,
  // instead of getting cut off early.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const clipStart = useTransform(
    scrollYProgress,
    [0, 1],
    [initialClipPercentage, 0],
  );
  const clipEnd = useTransform(
    scrollYProgress,
    [0, 1],
    [finalClipPercentage, 100],
  );

  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

  const backgroundSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["170%", "100%"],
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full bg-ink"
      style={{
        clipPath,
        willChange: "transform, opacity",
      }}
    >
      {/* Mobile background */}
      <motion.div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${mobileImage})`,
          backgroundSize,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Desktop background */}
      <motion.div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${desktopImage})`,
          backgroundSize,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </motion.div>
  );
}

/**
 * A scroll-driven hero: as the visitor scrolls through this section, the
 * photo "unclips" from a cropped-in rectangle to the full image, with a
 * subtle zoom-out. Originally from 21st.dev; adapted here (no "use client",
 * since that's Next.js-only, and scroll progress is measured against this
 * section itself so it works no matter where it sits on the page).
 */
export default function SmoothScrollHero({
  scrollHeight = 1000,
  desktopImage = "/images/Main.png",
  mobileImage = "/images/Main.png",
  initialClipPercentage = 25,
  finalClipPercentage = 75,
}: SmoothScrollHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      style={{ height: `calc(${scrollHeight}px + 100vh)` }}
      className="relative w-full"
    >
      <SmoothScrollHeroBackground
        containerRef={containerRef}
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        initialClipPercentage={initialClipPercentage}
        finalClipPercentage={finalClipPercentage}
      />
    </div>
  );
}
