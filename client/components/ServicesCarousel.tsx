"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import Ellipse from "@/svg/Ellipse 10.svg";
import narrow from "@/svg/Arrow 1.svg";
import cloud from "@/Images/cloud.png";
import desktop from "@/Images/desktop.png";
import automation from "@/Images/automation.png";

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const visibleCards = 3;

  
  const services = [
    {
      img: cloud,
      title: "Cloud Collaboration",
      desc: "Seamlessly connect teams with secure cloud tools for real-time communication and file sharing.",
      gradient: "from-[#000000] to-[#A95CEC]",
      borderColor: "#A95CEC",
    },
    {
      img: desktop,
      title: "Virtual Desktop Solutions",
      desc: "Empower employees to work anywhere with fast, secure, and scalable virtual desktop environments.",
      gradient: "from-[#000000] to-[#A36727]",
      borderColor: "#A36727",
    },
    {
      img: automation,
      title: "Workflow Automation",
      desc: "Streamline daily operations by automating repetitive tasks for higher efficiency and productivity.",
      gradient: "from-[#000000] to-[#FF6967]",
      borderColor: "#FF6967",
    },
    {
      img: automation,
      title: "Workflow Automation",
      desc: "Streamline daily operations by automating repetitive tasks for higher efficiency and productivity.",
      gradient: "from-[#000000] to-[#FF6967]",
      borderColor: "#FF6967",
    },
  ];

  // ✅ FIXED typing
  const slides = useMemo(() => {
    const grouped: (typeof services[number])[][] = [];
    for (let i = 0; i < services.length; i += visibleCards) {
      grouped.push(services.slice(i, i + visibleCards));
    }
    return grouped;
  }, [services]);

  const totalSlides = slides.length;

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  const resetAutoSlide = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 7000);
  };

  useEffect(() => {
    if (!isPaused && totalSlides > 1) {
      const timer = setInterval(() => nextSlide(), 6000);
      return () => clearInterval(timer);
    }
  }, [isPaused, currentIndex, totalSlides]);

  return (
    <section
      className="w-full bg-black text-white py-20 px-6 md:px-16 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          className="font-poppins font-semibold text-[40px] sm:text-[56px] md:text-[64px] leading-[1.1] text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Service we offer{" "}
          <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
            in digital
            <br className="hidden sm:block" /> workplaces
          </span>
        </motion.h2>

        <div className="relative mt-10 sm:mt-14 overflow-hidden">
          <motion.div
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)]"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((group, slideIndex) => (
              <div
                key={slideIndex}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full flex-shrink-0 px-2"
                style={{ width: "100%" }}
              >
                {group.map((service, i) => (
                  <motion.div
                    key={i}
                    className="relative bg-[#101010] border border-[#333] rounded-[4px] overflow-hidden flex flex-col transition hover:shadow-[0_0_20px_rgba(169,92,236,0.25)] border-b-[4px]"
                    style={{
                      borderBottomColor: service.borderColor,
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                    whileHover={{ y: -4 }}
                  >
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-[240px] sm:h-[250px] object-cover z-0"
                    />

                    <div
                  className={`absolute bottom-0 left-0 right-0 h-[45%] z-10 bg-gradient-to-b ${service.gradient} from-black/0 via-black/40 opacity-40`}
                ></div>

                    <div className="relative z-20 flex flex-col justify-between flex-grow p-6">
                      <div>
                        <h3 className="font-poppins font-semibold text-[22px] sm:text-[24px] leading-[33px] tracking-[1%] text-[#DADBDD] mb-3">
                          {service.title}
                        </h3>
                        <p className="font-poppins text-[15px] sm:text-[16px] leading-[28px] sm:leading-[30px] tracking-[1%] text-[#DADBDD] opacity-90">
                          {service.desc}
                        </p>
                      </div>

                      <motion.button
                        whileHover={{ x: 2 }}
                        className="mt-8 flex items-center text-[#ECEDEE] text-[15px] font-medium group transition"
                      >
                        Learn more
                        <div className="relative w-[56px] h-[56px] ml-3">
                          <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                          <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                            <img
                              src={narrow}
                              alt="arrow"
                              className="w-[11.5px] h-[20px] group-hover:translate-x-1 transition-transform"
                            />
                          </span>
                        </div>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Arrows */}
        <div className="flex justify-end mt-10 space-x-5">
          <button
            onClick={() => {
              prevSlide();
              resetAutoSlide();
            }}
            className="w-[48px] h-[48px] border border-[#DC1414] rounded-full flex items-center justify-center hover:bg-[#DC1414] transition"
          >
            <span className="text-[#DC1414] text-xl font-bold hover:text-white">
              ‹
            </span>
          </button>
          <button
            onClick={() => {
              nextSlide();
              resetAutoSlide();
            }}
            className="w-[48px] h-[48px] border border-[#DC1414] rounded-full flex items-center justify-center hover:bg-[#DC1414] transition"
          >
            <span className="text-[#DC1414] text-xl font-bold hover:text-white">
              ›
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
