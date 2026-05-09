"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandButtonProps {
  children: React.ReactNode;
}

export default function ExpandButton({ children }: ExpandButtonProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative flex flex-col gap-3">
      <AnimatePresence initial={false}>
        <motion.div
          key="content"
          initial="collapsed"
          animate={expanded ? "expanded" : "collapsed"}
          exit="collapsed"
          variants={{
            expanded: { height: "auto", opacity: 1 },
            collapsed: { height: "40px", opacity: 0.6 },
          }}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="relative overflow-hidden"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="group/more flex w-fit cursor-pointer items-center justify-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <span>{expanded ? "Show less" : "Show more"}</span>
        <motion.svg
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="size-3.5 transition-transform group-hover/more:translate-y-0.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </motion.svg>
      </button>
    </div>
  );
}
