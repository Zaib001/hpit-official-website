"use client";
import { motion } from "framer-motion";

export default function WhatWeBelieve() {
  const cards = [
    {
      title: "PURPOSE",
      text: "We believe in creating meaningful impact through our work, helping businesses grow while contributing positively to the communities we serve. Our purpose drives every decision and action we take.",
    },
    {
      title: "MISSION",
      text: "We believe in delivering innovative, reliable, and high-quality solutions that empower our clients to achieve their goals efficiently. Our mission guides us to focus on excellence, customer satisfaction, and continuous improvement.",
    },
    {
      title: "VISION",
      text: "We believe in a future of sustainable growth and transformative solutions. Our vision inspires us to adapt, innovate, and create lasting value for our clients, employees, and stakeholders.",
    },
  ];

  return (
    <div className="py-16 sm:py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-[34px] sm:text-[48px] md:text-6xl font-extrabold leading-tight text-white">
            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text">
              What We Believe
            </span>
          </h2>
          <p
            className="mt-4 text-[#DADBDD] font-medium text-base sm:text-[18px] md:text-[20px] leading-snug tracking-[0.01em] max-w-[51.3rem]"
            style={{ fontFamily: "Poppins" }}
          >
            We believe in innovation, integrity, and delivering value that drives success
            for our clients and communities.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 sm:p-7 min-h-[260px] flex flex-col overflow-hidden group cursor-pointer transition-all duration-500 bg-[#1a1a1a] border-b-4 border-[#DADBDD]"
            >
              {/* Gradient only visible on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(38, 87, 235, 0.8) 23.03%, rgba(199, 41, 207, 0.8) 119.13%)",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-white mb-4 sm:mb-5 transition-all duration-500">
                  {card.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed text-gray-400 group-hover:text-white transition-all duration-500">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
