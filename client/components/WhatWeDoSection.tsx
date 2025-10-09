"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { motion } from "framer-motion";
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
  const swiperRef = useRef(null);

  return (
    <section className="relative py-20 px-6 sm:px-10 lg:px-20">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
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

      {/* Carousel */}
      <Swiper
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="overflow-hidden"
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-[416px] h-[480px] sm:h-[520px] rounded-lg overflow-hidden group shadow-lg transition-all duration-500 mx-auto"
            >
              {/* Background Image */}
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500" />

              {/* Card Content */}
              <div className="absolute bottom-0 p-6 sm:p-8 text-white">
                <h3 className="font-poppins font-semibold text-[20px] sm:text-[22px] leading-[30px] mb-2 hover:text-[#8B7BFF] transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="text-[15px] sm:text-[16px] leading-[24px] text-[#DADBDD] mb-6">
                  {card.text}
                </p>

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
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <div className="flex justify-end gap-3 sm:gap-4 mt-10 sm:mt-12 pr-2 sm:pr-6 lg:pr-0">
        {/* Prev Button */}
        <motion.div
          whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
          transition={{ duration: 0.3 }}
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] lg:w-[60px] lg:h-[60px]
               rounded-full border border-gray-400 flex items-center justify-center cursor-pointer
               transition-all duration-300"
        >
          <span className="text-[16px] sm:text-[18px] md:text-[20px] leading-none text-gray-300">
            ←
          </span>
        </motion.div>

        {/* Next Button */}
        <motion.div
          whileHover={{ scale: 1.1, backgroundColor: "#EF4444" }}
          transition={{ duration: 0.3 }}
          onClick={() => swiperRef.current?.slideNext()}
          className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] lg:w-[60px] lg:h-[60px]
               rounded-full border border-red-500 flex items-center justify-center cursor-pointer
               transition-all duration-300"
        >
          <span className="text-[16px] sm:text-[18px] md:text-[20px] leading-none text-white">
            →
          </span>
        </motion.div>
      </div>

    </section>
  );
}
