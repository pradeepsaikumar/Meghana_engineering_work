import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed w-full z-50 backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? "bg-black/70 shadow-[0_0_15px_rgba(255,165,0,0.2)] border-b border-orange-500/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Name */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-black flex items-center justify-center border border-orange-500/40 shadow-md shadow-orange-500/20">
            <motion.svg
              className="w-6 h-6 text-orange-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
            >
              <path
                d="M3 12h18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6 7l6-4 6 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </motion.svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white leading-tight tracking-wide">
              Meghana Engineering Works
            </h1>
            <p className="text-xs text-gray-400">
              Precision Welding & Fabrication
            </p>
          </div>
        </motion.div>

        {/* Right Buttons */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="tel:+919502470689"
            className="btn-glow px-5 py-2 text-sm font-medium rounded-md"
          >
            Call: +91 95024 70689
          </a>
          <a
            href="#contact"
            className="px-5 py-2 text-sm border border-gray-700 rounded-md hover:border-orange-500 hover:text-orange-400 transition"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
}
