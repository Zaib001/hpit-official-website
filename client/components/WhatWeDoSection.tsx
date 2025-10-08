"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import techImg from "../Images/tech.jpg";
import businessImg from "../Images/business.jpg";
import consultingImg from "../Images/consulting.jpg";
import Ellipse from "@/svg/Ellipse 10.svg";
import narrow from "@/svg/Arrow 1.svg";

const cardsData = [
  {
    img: techImg,
    title: "TECHNOLOGY SOLUTIONS",
    text: "We create cutting-edge web and mobile apps, ensuring scalability, security, and innovation.",
  },
  {
    img: businessImg,
    title: "BUSINESS TRANSFORMATION",
    text: "We help organizations adapt, digitize operations, and grow efficiently in a connected world.",
  },
  {
    img: consultingImg,
    title: "CONSULTING SERVICES",
    text: "Our experts design and optimize strategies that boost ROI and operational excellence.",
  },
  {
    img: businessImg,
    title: "INNOVATION LABS",
    text: "We experiment, prototype, and validate forward-thinking digital products with emerging tech.",
  },
  {
    img: consultingImg,
    title: "STRATEGY & AUTOMATION",
    text: "We craft intelligent automation systems and business roadmaps that drive long-term success.",
  },
];

export default function WhatWeDoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const visibleCards = 3;
  const totalCards = cardsData.length;
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-slide
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => handleNext(), 6000);
      return () => clearInterval(timer);
    }
  }, [isPaused, activeIndex]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalCards);
    resetAutoSlide();
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 7000);
  };

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  });

  // Compute visible cards circularly
  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(cardsData[(activeIndex + i) % totalCards]);
    }
    return visible;
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <section
      className="relative py-20 px-6 sm:px-10 lg:px-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Title */}
      <motion.h2
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-left mb-12"
      >
        <motion.span
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="bg-gradient-to-r from-purple-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent"
        >
          What
        </motion.span>{" "}
        <span className="text-white">We Do</span>
      </motion.h2>

      {/* Carousel Cards */}
      <div className="overflow-hidden">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 120, damping: 20 },
              opacity: { duration: 0.4 },
            }}
            ref={containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          >
            {getVisibleCards().map((card, i) => (
              <motion.div
                key={`${card.title}-${i}`}
                variants={fadeUp(i * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                className="relative w-full max-w-[416px] h-[480px] sm:h-[520px] rounded-lg overflow-hidden group shadow-lg transition-all duration-500"
              >
                {/* Background Image */}
                <motion.img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-black/50 group-hover:bg-black/60"
                />

                {/* Card Content */}
                <div className="absolute bottom-0 p-6 sm:p-8 text-white">
                  <motion.h3
                    className="font-poppins font-semibold text-[20px] sm:text-[22px] leading-[30px] mb-2"
                    whileHover={{ color: "#8B7BFF" }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.title}
                  </motion.h3>

                  <motion.p
                    className="text-[15px] sm:text-[16px] leading-[24px] text-[#DADBDD] mb-6"
                    whileInView={{ opacity: [0, 1], x: [20, 0] }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    {card.text}
                  </motion.p>

                  {/* Learn More Button */}
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <span className="text-[16px] text-white/90 group-hover:text-white">
                      Learn more
                    </span>
                    <div className="relative w-[56px] h-[56px] -ml-3 transition-transform duration-300 group-hover:rotate-6">
                      <img
                        src={Ellipse}
                        alt="ellipse"
                        className="w-full h-full transition-all duration-500 group-hover:opacity-80"
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-white text-xl -ml-3">
                        <img
                          src={narrow}
                          alt="arrow"
                          className="w-[11.5px] h-[20px]"
                        />
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-end gap-4 mt-12 pr-2 sm:pr-6 lg:pr-0">
        <motion.div
          whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
          transition={{ duration: 0.3 }}
          onClick={handlePrev}
          className="w-[50px] h-auto sm:w-[50px] md:h-[50px] sm:h-[70px] rounded-full border border-gray-400 flex items-center justify-center cursor-pointer"
        >
          <span className="text-[20px] sm:text-[20px] leading-[19px] text-gray-300">
            ←
          </span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, backgroundColor: "#EF4444" }}
          transition={{ duration: 0.3 }}
          onClick={handleNext}
          className="w-[50px] h-auto sm:w-[50px] md:h-[50px] sm:h-[70px] rounded-full border border-red-500 flex items-center justify-center cursor-pointer"
        >
          <span className="text-[20px] sm:text-[20px] leading-[19px] text-white">
            →
          </span>
        </motion.div>
      </div>
    </section>
  );
}
