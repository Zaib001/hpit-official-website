"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import Ellipse from "@/svg/Ellipse 10.svg";
import narrow from "@/svg/Arrow 1.svg";
import cloud from "@/Images/cloud.png";
import desktop from "@/Images/desktop.png";
import automation from "@/Images/automation.png";

export default function ServicesCarousel() {
  const swiperRef = useRef(null);

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
      title: "Data Intelligence",
      desc: "Transform raw data into meaningful insights through AI-driven analytics and real-time reporting.",
      gradient: "from-[#000000] to-[#5EC1FF]",
      borderColor: "#5EC1FF",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-16 overflow-hidden">
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
          className="mt-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative bg-[#101010] border border-[#333] rounded-[4px] overflow-hidden flex flex-col transition hover:shadow-[0_0_20px_rgba(169,92,236,0.25)] border-b-[4px]"
                style={{ borderBottomColor: service.borderColor }}
                whileHover={{ y: -4 }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[240px] sm:h-[250px] object-cover z-0"
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[45%] z-10 bg-gradient-to-b ${service.gradient} from-black/0 via-black/40 opacity-40`}
                ></div>

                {/* Card content */}
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <div className="flex justify-end mt-10 space-x-5">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-[48px] h-[48px] border border-[#DC1414] rounded-full flex items-center justify-center hover:bg-[#DC1414] transition"
          >
            <span className="text-[#DC1414] text-xl font-bold hover:text-white">
              ‹
            </span>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
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
