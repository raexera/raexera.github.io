import { useState } from "react";

interface CollapseButtonProps {
  children: React.ReactNode;
}

const CollapseButton: React.FC<CollapseButtonProps> = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative flex flex-col gap-4">
      <div className={expanded ? "block" : "hidden"}>{children}</div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="group/more flex w-fit cursor-pointer items-center justify-center gap-1.5 text-xs text-skin-muted underline transition-all hover:text-skin-base print:hidden"
      >
        <span>{expanded ? "Show less" : "Show more"}</span>
        <svg
          className={`h-4 w-4 duration-200 ease-out ${
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
};

export default CollapseButton;
