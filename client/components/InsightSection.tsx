"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import Ellipse from "@/svg/Ellipse 10.svg";
import narrow from "@/svg/Arrow 1.svg";

interface Card {
  img: string;
  title: string;
  desc: string;
}

interface Props {
  title?: string;
  cards: Card[];
  autoSlideInterval?: number;
}

const InsightSection = ({
  title = "Related Insights",
  cards = [],
  autoSlideInterval = 8000,
}: Props) => {
  const swiperRef = useRef<any>(null);

  return (
    <motion.section
      className="w-full bg-black text-white py-16 md:py-20 px-4 sm:px-6 md:px-12 mx-auto max-w-[1380px] overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <h2
        className="font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.15]
        bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]
        text-transparent bg-clip-text mb-8"
      >
        {title}
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={24}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: autoSlideInterval,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="overflow-hidden"
      >
        {cards.map((card, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-[#22252B] rounded-[4px] overflow-hidden flex flex-col justify-between shadow-md
              border-b-4 border-[#DADBDD] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] w-full h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover transition-transform duration-700 ease-out hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-grow px-5 sm:px-6 py-5 sm:py-6">
                <div>
                  <h3 className="text-[18px] sm:text-[20px] font-semibold mb-2 sm:mb-3 text-[#ECEDEE]">
                    {card.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-[14px] sm:text-[15px] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Learn More */}
                <div className="flex justify-end items-end">
                  <button className="mt-5 sm:mt-6 flex items-center text-[#ECEDEE] text-[14px] sm:text-[15px] font-medium hover:text-[#E50000] transition group">
                    <span>Learn more</span>
                    <div className="relative w-[48px] sm:w-[56px] h-[48px] sm:h-[56px] flex items-center justify-center ml-1 sm:ml-2">
                      <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                      <img
                        src={narrow}
                        alt="arrow"
                        className="absolute w-[10px] sm:w-[11.5px] h-[18px] sm:h-[20px] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </button>
                </div>
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

    </motion.section>
  );
};

export default InsightSection;
