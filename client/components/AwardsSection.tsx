"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import award1 from "../Images/award1.png";
import award2 from "../Images/award2.png";
import award3 from "../Images/award3.png";
import { motion } from "framer-motion";

const awards = [
    { img: award1, alt: "Washington Technology" },
    { img: award2, alt: "Defense News Top 100" },
    { img: award3, alt: "Bloomberg Government" },
    { img: award1, alt: "Bloomberg Government" },
    { img: award2, alt: "Bloomberg Government" },
];

export default function AwardsSection() {
    const swiperRef = useRef(null);

    return (
        <section className="relative w-full py-20 px-6 sm:px-10 lg:px-20 mx-auto text-white overflow-hidden">
            {/* Title */}
            <div className="mx-auto ml-0 sm:ml-8 md:ml-16">
                <div className="text-left mb-10 md:mb-16">
                    <h2
                        className="font-poppins font-semibold text-[36px] sm:text-[44px] md:text-[48px] leading-[1.15]
            bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]
            text-transparent bg-clip-text"
                    >
                        Awards and Recognition
                    </h2>
                </div>
            </div>

            {/* Carousel */}
            <Swiper
                modules={[Autoplay, Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="max-w-7xl mx-auto"
            >
                {awards.map((award, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-[400px] h-[220px] sm:h-[250px] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(128,118,244,0.25)]">
                                <img
                                    src={award.img}
                                    alt={award.alt}
                                    className="object-contain w-full h-full p-6"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-500" />
                            </div>
                        </div>
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
