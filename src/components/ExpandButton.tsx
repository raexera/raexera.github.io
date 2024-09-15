import React, { useState } from "react";

interface ExpandButtonProps {
  children: React.ReactNode;
}

export default function ExpandButton({ children }: ExpandButtonProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className={`relative flex flex-col gap-4 after:absolute after:bottom-0 after:h-12 after:w-full after:bg-gradient-to-t after:from-white after:content-[''] dark:after:from-black max-sm:!h-auto ${
          expanded ? "after:hidden" : ""
        }`}
        style={{ maxHeight: expanded ? "none" : "50px", overflow: "hidden" }}
      >
        {children}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="group/more flex w-fit cursor-pointer items-center justify-center gap-1.5 text-xs underline transition-all hover:text-black dark:hover:text-white"
      >
        <span>{expanded ? "Show less" : "Show more"}</span>
        <svg
          className={`h-4 w-4 duration-200 ease-out group-hover/more:translate-y-0.5 ${
            expanded ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
  );
}
