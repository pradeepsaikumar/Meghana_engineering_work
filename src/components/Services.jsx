import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Trolleys and Trailers Welding",
    description: "Strong and durable welding for tractors, trailers & trolleys.",
    image:
      "https://i.pinimg.com/1200x/50/85/71/508571f9bd4867f77f8a5701627bb93f.jpg",
  },
  {
    title: "New Tractor Trolleys Fabrication",
    description: "Custom-built trailers for heavy loads and farm use.",
    image:
      "https://i.pinimg.com/736x/13/4c/8f/134c8fb316202619521018c153053299.jpg",
  },
  {
    title: "Agricultural Machine Repair",
    description: "Repair of ploughs, tillers, rotavators, and farm tools.",
    image:
      "https://i.pinimg.com/736x/40/2e/d0/402ed03eccaf616d3d558fbcfcb42ade.jpg",
  },
  {
    title: "Cutting Blades & Tools",
    description: "Manufacturing and sharpening of cutting blades and tools.",
    image:
      "https://i.pinimg.com/736x/75/cb/f9/75cbf99d69bc045dc85a0279b9f6b1f8.jpg",
  },
  {
    title: "Shed & Structure Welding",
    description: "We build strong sheds, gates, and farm structures.",
    image:
      "https://i.pinimg.com/736x/98/4f/e3/984fe3cc2a9d18306b52286d9aaa16f1.jpg",
  },
  {
    title: "Custom Iron Works",
    description: "Any custom fabrication for your agricultural needs.",
    image:
      "https://i.pinimg.com/736x/b1/cf/4c/b1cf4ca4161c1a77d76af93bd8896ec5.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-orange-400"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-orange-400"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col items-center text-center space-y-3">
                <h3 className="text-xl font-semibold text-orange-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {service.description}
                </p>

                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 py-2 font-semibold transition-all duration-300"
                >
                  Contact Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
