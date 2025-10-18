import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Sparks() {
  const sparks = Array.from({ length: 15 }).map((_, i) => ({
    left: Math.random() * 100 + "%",
    top: 60 + Math.random() * 30 + "%",
    delay: Math.random() * 2,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparks.map((s, idx) => (
        <motion.div
          key={idx}
          className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-60"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: `${s.delay}s`,
          }}
          animate={{
            y: [0, -60],
            opacity: [0.8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: s.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  useEffect(() => {
    const el = document.querySelector("#hero-bg");
    const onMove = (e) => {
      if (!el) return;
      const x = (e.clientX - window.innerWidth / 2) / 60;
      const y = (e.clientY - window.innerHeight / 2) / 80;
      el.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <header className="relative pt-32 pb-16 overflow-hidden">
      {/* Background */}
      <motion.div
        id="hero-bg"
        className="absolute inset-0 z-0 bg-gradient-to-br from-gray-950 via-[#0b1220] to-black"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* Sparks Animation */}
      <Sparks />

      {/* Overlay Glow */}
      <motion.div
        className="absolute -bottom-40 left-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-3xl rounded-full"
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Forging <span className="text-orange-400">Strength</span>. <br />
              <span className="text-yellow-400">Building Trust.</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-gray-300 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Meghana Engineering Works delivers heavy-duty tractor welding and
              precision farm equipment manufacturing — built to last in the
              toughest fields.
            </motion.p>

            <motion.div
              className="mt-6 flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <a href="tel:+919502470689" className="btn-glow">
                Call Now
              </a>
              <a
                href="#gallery"
                className="px-6 py-3 border border-gray-700 rounded-md hover:border-orange-400 transition"
              >
                View Work
              </a>
            </motion.div>

            <motion.div
              className="mt-8 flex gap-4 text-sm text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="card p-3 rounded-lg border border-gray-700 bg-gray-900/30">
                Established: <strong>2021</strong>
              </div>
              <div className="card p-3 rounded-lg border border-gray-700 bg-gray-900/30">
                Owner: <strong>Pallem Nagaraju</strong>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-gray-700 shadow-[0_0_25px_rgba(255,165,0,0.2)]">
              <motion.img
                src="/images/hero-welding.jpg"
                alt="welding"
                className="w-full h-80 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
