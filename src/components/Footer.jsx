import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-t border-orange-500/30 py-8 text-gray-400">
      {/* Moving gradient lights */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"
        animate={{ x: [0, 100, -50, 0], y: [0, -50, 50, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Top Row */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left: Logo / Title */}
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 bg-orange-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <span className="text-gray-300 text-sm md:text-base">
              © {new Date().getFullYear()}{" "}
              <span className="text-orange-400 font-semibold">
                Meghana Engineering Works
              </span>
            </span>
          </div>

          {/* Center: Quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#services"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Right: Credit */}
          <div className="text-sm md:text-base">
            Designed & Managed by{" "}
            <span className="text-orange-400 font-semibold hover:underline">
              Pradeep
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>

        {/* Bottom Note */}
        <motion.p
          className="text-center text-xs text-gray-500 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          “Quality welding, trusted by farmers — since 2021”
        </motion.p>
      </div>
    </footer>
  );
}
