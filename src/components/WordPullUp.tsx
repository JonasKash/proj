"use client";

import { motion, Variants } from "framer-motion";
import { memo, useMemo } from "react";
import { cn } from "@/lib/utils";

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

const WordPullUp = memo(({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
  framerProps = {
    hidden: { y: 15, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  },
  className,
}: WordPullUpProps) => {
  const wordArray = useMemo(() => words.split(" "), [words]);

  return (
    <motion.h1
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className,
      )}
    >
      {wordArray.map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
});

WordPullUp.displayName = 'WordPullUp';

export { WordPullUp };
