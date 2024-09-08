import React, { useState, useEffect } from "react";

interface GridProps {
  className?: string;
}

const Boxes: React.FC<GridProps> = ({ className = "" }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const getCellSize = () => {
    if (dimensions.width < 640) return 20; // sm
    if (dimensions.width < 768) return 30; // md
    if (dimensions.width < 1024) return 45; // lg
    return 88; // xl
  };

  const cellSize = getCellSize();
  const columns = Math.ceil(dimensions.width / cellSize);
  const rows = Math.ceil(dimensions.height / 2 / cellSize); // Only half the screen height

  return (
    <div
      className={`absolute h-1/2 w-full overflow-hidden ${className}`}
      style={{ zIndex: -1 }}
    >
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 h-full w-1/2">
        <div className="absolute inset-0 z-30 bg-gradient-to-tl from-black from-50% via-transparent via-90% to-transparent to-100%" />
        <div className="flex h-full w-full flex-col divide-y divide-dashed divide-neutral-700 border-l border-t border-black">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="relative flex w-full divide-x divide-dashed divide-neutral-700"
              style={{ height: `${cellSize}px` }}
            >
              {Array.from({ length: columns / 2 }).map((_, colIndex) => (
                <div key={colIndex} className="relative w-full bg-black">
                  <div className="absolute inset-0.5 bg-black" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 h-full w-1/2">
        <div className="absolute inset-0 z-30 bg-gradient-to-tr from-black from-50% via-transparent via-90% to-transparent to-100%" />
        <div className="flex h-full w-full flex-col divide-y divide-dashed divide-neutral-700 border-l border-t border-black">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="relative flex w-full divide-x divide-dashed divide-neutral-700"
              style={{ height: `${cellSize}px` }}
            >
              {Array.from({ length: columns / 2 }).map((_, colIndex) => (
                <div key={colIndex} className="relative w-full bg-black">
                  <div className="absolute inset-0.5 bg-black" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boxes;
