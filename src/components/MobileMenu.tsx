import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  children: React.ReactNode;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="ml-4 flex h-6 w-6 cursor-pointer items-center justify-center sm:hidden"
      >
        <motion.svg
          className="h-6 w-6 text-neutral-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            variants={{
              open: { d: "M6 18L18 6M6 6l12 12" },
              closed: { d: "M4 6h16M4 12h16M4 18h16" },
            }}
          />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 top-14 z-40 w-full flex-col items-end justify-start bg-neutral-900/95 pb-4 pt-2 text-sm sm:hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
