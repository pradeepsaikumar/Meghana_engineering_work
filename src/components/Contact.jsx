import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-20 text-white"
    >
      {/* Glowing animated background */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"
        animate={{ x: [0, 100, -50, 0], y: [0, 50, -50, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-800 p-8 shadow-lg hover:shadow-orange-500/10 transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold text-orange-400">
              Get in Touch
            </h3>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Visit us at <br />
              <span className="font-medium text-orange-300">
                Gubbalamangama Thalli Temple Road,
              </span>{" "}
              <br />
              Ramaraopeta Center - Jangareddygudem
            </p>

            <p className="mt-4 text-gray-300">
              Phone:{" "}
              <a
                href="tel:+919502470689"
                className="text-orange-400 hover:underline"
              >
                +91 95024 70689
              </a>
            </p>

            {/* Animated Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <motion.a
                href="https://wa.me/919502470689"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-green-500/20 border border-green-500 text-green-400 rounded-lg shadow-md hover:bg-green-500/30 transition-all duration-300"
              >
                💬 WhatsApp
              </motion.a>

              <motion.a
                href="tel:+919502470689"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 border border-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                📞 Call Now
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-800 p-8 shadow-lg hover:shadow-orange-500/10 transition-all duration-500"
          >
            {/* ✅ Web3Forms Integration */}
            <motion.form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="grid gap-5"
            >
              {/* Hidden Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="958fde3e-2de3-4463-aaec-6761073cdc4d"
              />

              {["Your Name", "Phone / WhatsApp"].map((placeholder, index) => (
                <motion.input
                  key={index}
                  type="text"
                  name={index === 0 ? "name" : "phone"}
                  placeholder={placeholder}
                  whileFocus={{ scale: 1.03, borderColor: "#fb923c" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 rounded-md bg-gray-800/70 border border-gray-700 focus:border-orange-400 focus:outline-none text-gray-100 placeholder-gray-400 transition-all duration-300"
                  required
                />
              ))}

              <motion.textarea
                name="message"
                rows={4}
                placeholder="Briefly describe your requirement"
                whileFocus={{ scale: 1.03, borderColor: "#fb923c" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-3 rounded-md bg-gray-800/70 border border-gray-700 focus:border-orange-400 focus:outline-none text-gray-100 placeholder-gray-400 transition-all duration-300"
                required
              />

              {/* Animated buttons */}
              <div className="flex gap-4">
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px #fb923c55",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300"
                >
                  Send ✉️
                </motion.button>

                <motion.button
                  type="reset"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Reset ↻
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
