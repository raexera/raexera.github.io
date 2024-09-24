"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandButtonProps {
  children: React.ReactNode;
}

export default function ExpandButton({ children }: ExpandButtonProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <AnimatePresence initial={false}>
        <motion.div
          key="content"
          initial="collapsed"
          animate={expanded ? "expanded" : "collapsed"}
          exit="collapsed"
          variants={{
            expanded: { height: "auto" },
            collapsed: { height: "50px" },
          }}
          transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="relative flex flex-col gap-4 overflow-hidden"
        >
          {children}
          {!expanded && (
            <motion.div
              className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-white dark:from-black"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </motion.div>
      </AnimatePresence>
      <button
        onClick={() => setExpanded(!expanded)}
        className="group/more flex w-fit cursor-pointer items-center justify-center gap-1.5 text-xs text-black/80 underline duration-300 hover:text-black hover:transition-colors dark:text-white/80 dark:hover:text-white"
      >
        <span>{expanded ? "Show less" : "Show more"}</span>
        <motion.svg
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="h-4 w-4 duration-200 ease-out group-hover/more:translate-y-0.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </motion.svg>
      </button>
    </div>
  );
}
