"use client";

import { motion } from "framer-motion";

interface PhotoCircleProps {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  sizeClasses?: string;
}

export default function Logo({ lightSrc, darkSrc, alt }: PhotoCircleProps) {
  return (
    <div className={`xl:w-150 xl:h-150 h-75 w-75 relative`}>
      <div className="h-full w-full">
        <img
          src={lightSrc}
          alt={alt}
          className="block h-full w-full rounded-full object-cover dark:hidden"
        />
        <img
          src={darkSrc}
          alt={alt}
          className="hidden h-full w-full rounded-full object-cover dark:block"
        />
      </div>
      <motion.svg
        className="absolute left-1/2 top-1/2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] -translate-x-1/2 -translate-y-1/2"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
}
