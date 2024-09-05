"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  text,
  className = "",
  filter = true,
  duration = 1,
  fontFamily = "PT Serif, serif", 
}: {
  text: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  fontFamily?: string;
}) => {
  const [scope, animate] = useAnimate();
  const lettersArray = text.split(""); // Split text into individual letters

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.5), // Stagger for letter-by-letter effect
      }
    );
  }, [scope, animate, filter, duration]);

  const renderLetters = () => {
    return (
      <motion.div ref={scope} className="flex justify-center">
        {lettersArray.map((letter, idx) => (
          <motion.span
            key={letter + idx}
            className={`opacity-0 ${filter ? 'blur-[10px]' : ''}`}
            style={{ fontFamily }} // Apply custom font
          >
            {letter === " " ? "\u00A0" : letter}{" "} {/* Handle spaces */}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={`font-bold text-6xl ${className}`} style={{ fontFamily }}>
      <div className="flex items-center justify-center h-screen mt-4">
        <div className="leading-snug tracking-wide text-center">
          {renderLetters()}
        </div>
      </div>
    </div>
  );
};
