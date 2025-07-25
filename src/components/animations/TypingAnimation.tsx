"use client";

import { motion } from "framer-motion";
import { heroTitle, heroTitleChar } from "@/lib/animations";

interface TypingAnimationProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TypingAnimation({ text, className = "", delay = 0 }: TypingAnimationProps) {
  const words = text.split(" ");
  const firstTwoWords = words.slice(0, 2);
  const lastTwoWords = words.slice(2);

  return (
    <motion.h1
      className={className}
      variants={heroTitle}
      initial="hidden"
      animate="visible"
      custom={delay}
    >
      {/* First part with gradient */}
      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {firstTwoWords.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                variants={heroTitleChar}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            {wordIndex < firstTwoWords.length - 1 && (
              <motion.span variants={heroTitleChar} className="inline-block">
                &nbsp;
              </motion.span>
            )}
          </span>
        ))}
      </span>
      
      <br />
      
      {/* Second part with normal text */}
      <span className="text-foreground">
        {lastTwoWords.map((word, wordIndex) => (
          <span key={wordIndex + firstTwoWords.length} className="inline-block">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${wordIndex + firstTwoWords.length}-${charIndex}`}
                variants={heroTitleChar}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            {wordIndex < lastTwoWords.length - 1 && (
              <motion.span variants={heroTitleChar} className="inline-block">
                &nbsp;
              </motion.span>
            )}
          </span>
        ))}
      </span>
    </motion.h1>
  );
}