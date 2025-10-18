import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-16">
      {/* Glowing Background */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl"
        animate={{ x: [0, 50, -50, 0], y: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 15 }}
      />

      <motion.div
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Text Section */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 text-transparent bg-clip-text">
            About Us
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong>Meghana Engineering Works</strong> was founded by{" "}
            <span className="text-orange-400 font-semibold">
              Pallem Nagaraju
            </span>{" "}
            in 2021, bringing over 16 years of expertise in welding, fabrication,
            and farm machinery design.
          </p>
          <p className="text-gray-400">
            We’re proud to support local farmers with reliable equipment, durable
            builds, and custom metal works. From tractor repairs to fabrication
            of unique tools, our precision and commitment ensure long-lasting
            performance in every project.
          </p>

          <motion.div
            className="mt-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl text-white font-medium shadow-lg shadow-orange-500/20 transition-all duration-300">
              Know More →
            </button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Breathing animation on the image */}
          <motion.div
            className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-orange-400 shadow-2xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            whileHover={{ rotate: 2 }}
          >
            <img
              src="/images/owner.jpg"
              alt="Owner"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Glowing animated ring */}
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-orange-500/30"
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.3, 0.8] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
