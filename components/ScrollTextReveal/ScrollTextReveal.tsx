"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useTranslations } from "next-intl";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span className="gc-reveal-word" style={{ opacity }}>
      {children}
    </motion.span>
  );
};

interface ScrollTextRevealProps {
  /** Which sub-section of the ScrollReveal translation namespace to use */
  variant: "Home" | "About";
}

/**
 * A tall pinned section: the text stays centered on screen while the
 * user scrolls through it, and each word lights up in turn as it does.
 * Once the last word is lit, normal scrolling continues into whatever
 * section follows.
 */
const ScrollTextReveal: React.FC<ScrollTextRevealProps> = ({ variant }) => {
  const t = useTranslations("ScrollReveal");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Ties progress directly to the container's actual pinned scroll
    // room (its own start/end edges vs the viewport's), so progress
    // reaches 1 exactly when the sticky content is about to release —
    // not a moment before, which was cutting the last words off.
    offset: ["start start", "end end"],
  });

  const text = t(`${variant}.text`);
  const eyebrow = t(`${variant}.eyebrow`);
  const words = text.split(" ");

  return (
    <section className="gc-reveal-section" ref={containerRef}>
      <div className="gc-reveal-sticky">
        {eyebrow && <span className="gc-reveal-eyebrow">{eyebrow}</span>}
        <p className="gc-reveal-text">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <React.Fragment key={i}>
                <Word progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>{" "}
              </React.Fragment>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default ScrollTextReveal;
