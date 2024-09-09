import React, { useState } from "react";

interface ExpandButtonProps {
  children: React.ReactNode;
}

export default function ExpandButton({ children }: ExpandButtonProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className={`relative flex flex-col gap-4 max-sm:!h-auto md:after:absolute md:after:bottom-0 md:after:h-12 md:after:w-full md:after:bg-gradient-to-t md:after:from-black md:after:content-[''] ${
          expanded ? "after:hidden" : ""
        }`}
        style={{ maxHeight: expanded ? "none" : "50px", overflow: "hidden" }}
      >
        {children}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="group/more flex w-fit cursor-pointer items-center justify-center gap-1.5 text-xs text-neutral-400 underline transition-all hover:text-neutral-200"
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
