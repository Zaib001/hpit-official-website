"use client";
import { motion } from "framer-motion";
import decoImg from "../Images/weDO.png";

export default function HowWeWork({ cards = [] }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative py-16 sm:py-20 px-6 sm:px-10 lg:px-20 max-w-[1480px] mx-auto overflow-hidden">
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-left mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <span
          className="bg-gradient-to-r from-purple-400 to-blue-400 bg-[length:300%_300%] bg-clip-text text-transparent inline-block animate-gradientFlow"
          style={{
            backgroundImage:
              "linear-gradient(to right, #A78BFA, #60A5FA, #A78BFA)",
          }}
        >
          How
        </span>{" "}
        <span className="text-white">We Work</span>
      </motion.h2>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="group relative w-full max-w-[340px] min-h-[280px]
              p-[1px] bg-gradient-to-b from-[#2d55d0] to-[#8229AB] 
              hover:shadow-[0_8px_35px_rgba(128,118,244,0.25)] transition-all duration-500"
          >
            {/* Inner Card with dark background */}
            <div className="bg-gradient-to-b from-[#0A0A0A] to-[#111111] p-6 flex flex-col justify-between min-h-[278px]">
              <div className="flex justify-between items-start mb-6">
                <motion.img
                  src={card.icon}
                  alt={card.title}
                  className="w-10 h-10 sm:w-12 sm:h-10 object-contain"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
                <div
                  className="w-8 h-8 rounded-full border border-red-500 flex items-center justify-center 
                  cursor-pointer transition-all duration-300 group-hover:bg-[#EF4444] 
                  group-hover:border-[#EF4444] group-hover:rotate-45"
                >
                  <span className="text-sm text-gray-200 transition-transform duration-500 group-hover:translate-x-0.5">
                    ➔
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h4 className="font-poppins font-semibold text-[18px] md:text-[20px] lg:text-[22px] text-[#DADBDD] leading-[28px] md:leading-[30px] transition-colors duration-300 group-hover:text-[#8076F4]">
                  {card.title}
                </h4>
                <p className="font-poppins text-[15px] md:text-[16px] text-[#B8B9BB] leading-[24px]">
                  {card.text}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Element */}
      <motion.div
        className="absolute z-0 right-[-28px] sm:right-[-40px] top-[40px] sm:top-[50px] w-[160px] sm:w-[220px] md:w-[250px] lg:w-[280px] opacity-80"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={decoImg}
          alt="Decorative Element"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
