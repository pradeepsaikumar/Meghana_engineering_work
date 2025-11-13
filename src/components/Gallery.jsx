import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ['/images/gallery/img1.jpg','/images/gallery/img2.jpg','/images/gallery/img3.jpg','/images/gallery/img4.jpg'];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 text-white"
    >
      {/* Glowing animated background */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"
        animate={{ x: [0, 60, -40, 0], y: [0, 40, -30, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Workshop Gallery
        </motion.h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden rounded-xl border border-gray-800 shadow-lg cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(src)}
            >
              <motion.img
                src={src}
                alt={`gallery-${idx}`}
                className="w-full h-48 md:h-56 object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center">
                <span className="text-sm text-orange-300 font-semibold mb-3">
                  View Work
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-gray-400 mt-10 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          “A glimpse into our precision welding and fabrication work.”
        </motion.p>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="fullscreen"
              className="max-w-3xl w-full rounded-xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
