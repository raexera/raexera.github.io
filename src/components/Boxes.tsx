"use client";

import { useState, useEffect, useRef } from "react";

interface GridProps {
  className?: string;
}

export default function Boxes({ className = "" }: GridProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { scrollHeight } = document.documentElement;
        setDimensions({
          width: window.innerWidth,
          height: Math.max(window.innerHeight, scrollHeight),
        });
      }
    };

    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", updateDimensions);
    updateDimensions();

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", updateDimensions);
    };
  }, []);

  const getCellSize = () => {
    if (dimensions.width < 640) return 20; // sm
    if (dimensions.width < 768) return 30; // md
    if (dimensions.width < 1024) return 45; // lg
    return 88; // xl
  };

  const cellSize = getCellSize();
  const columns = Math.ceil(dimensions.width / cellSize);
  const rows = Math.ceil(dimensions.height / cellSize);

  return (
    <section className="relative h-screen w-full">
      <div
        ref={containerRef}
        className={`absolute flex h-full w-full justify-center overflow-hidden bg-black ${className}`}
        style={{ height: `${dimensions.height}px`, zIndex: -1 }}
      >
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 h-full w-1/2">
          <div className="absolute inset-0 z-50 bg-gradient-to-tl from-black from-50% via-transparent via-90% to-transparent to-100%" />
          <div className="flex h-full w-full flex-col divide-y divide-dashed divide-neutral-700 border-l border-t border-black">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="relative flex w-full divide-x divide-dashed divide-neutral-700"
                style={{ height: `${cellSize}px` }}
              >
                {Array.from({ length: Math.ceil(columns / 2) }).map(
                  (_, colIndex) => (
                    <div key={colIndex} className="relative w-full bg-black">
                      <div className="absolute inset-0.5 bg-black" />
                    </div>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 h-full w-1/2">
          <div className="absolute inset-0 z-50 bg-gradient-to-tr from-black from-50% via-transparent via-90% to-transparent to-100%" />
          <div className="flex h-full w-full flex-col divide-y divide-dashed divide-neutral-700 border-l border-t border-black">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="relative flex w-full divide-x divide-dashed divide-neutral-700"
                style={{ height: `${cellSize}px` }}
              >
                {Array.from({ length: Math.ceil(columns / 2) }).map(
                  (_, colIndex) => (
                    <div key={colIndex} className="relative w-full bg-black">
                      <div className="absolute inset-0.5 bg-black" />
                    </div>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
