"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

import dw_h from "./images/dw-h.png";
import digital from "./svg/Digital.svg";
import dw_2 from "./images/dw-2.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import dw_3 from "./images/dw-3.png";
import dw_4 from "./images/dw-4.png";
import HeroBanner from "@/components/HeroBanner";

import worklife from "../Images/worklife.png";
import illustration from "../Images/illustration.png";

import Cloud from "../svg/Cloud1.svg";
import SaaS from "../svg/SaaS1.svg";
import Custom from "../svg/Custom1.svg";

import cloud from "@/Images/cloud.png";
import desktop from "@/Images/desktop.png";
import automation from "@/Images/automation.png";

import bg from "@/Images/ee.jpg";
import ring from "@/Images/ring.png";

import r1 from "@/Images/r1.png";
import r2 from "@/Images/r2.png";

import i1 from "../Images/digitalworkplace/i1.png";
import i2 from "../Images/digitalworkplace/i2.png";
import i3 from "../Images/digitalworkplace/i3.png";

import narrow from "@/svg/Arrow 1.svg";
import InsightSection from "@/components/InsightSection";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function DigitalWorkplace() {
  const swiperRef = useRef<any>(null);

  // Animation helpers (used throughout)
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay },
    viewport: { once: true, amount: 0.2 },
  });

  const scaleIn = (delay = 0) => ({
    initial: { opacity: 0, scale: 0.96 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut", delay },
    viewport: { once: true, amount: 0.2 },
  });



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
      img: desktop,
      title: "Virtual Desktop Solutions",
      desc: "Empower employees to work anywhere with fast, secure, and scalable virtual desktop environments.",
      gradient: "from-[#000000] to-[#A36727]",
      borderColor: "#A36727",
    },
  ];

  const features = [
    {
      title: "Collaboration",
      desc: "Real-time platforms connect teams across locations. This improves teamwork and speeds up decisions.",
    },
    {
      title: "Productivity",
      desc: "Centralized tools cut time wasted on switching apps. Work becomes faster and more efficient.",
    },
    {
      title: "Innovation",
      desc: "Shared platforms spark creativity and fresh ideas. Teams can experiment and innovate quickly.",
    },
    {
      title: "Security & Compliance",
      desc: "Digital safeguards keep data safe and compliant. Businesses stay protected and trustworthy.",
    },
    {
      title: "Flexibility",
      desc: "Teams can work anytime, anywhere with access to digital tools. It ensures adaptability and smooth business flow.",
    },
  ];

  const cards = [
    {
      img: i1,
      title: "COLLABORATION TOOLS",
      desc: "Empowering teams with seamless communication and shared platforms.",
    },
    {
      img: i2,
      title: "REMOTE PRODUCTIVITY",
      desc: "Enabling employees to work efficiently from anywhere.",
    },
    {
      img: i3,
      title: "EMPLOYEE ENGAGEMENT",
      desc: "Enhancing workplace culture with digital-first experiences.",
    },
    {
      img: i2,
      title: "REMOTE PRODUCTIVITY",
      desc: "Enabling employees to work efficiently from anywhere.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black gap-y-28">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <HeroBanner
          img={dw_h}
          svg={digital}
          heading="workplace"
          text="A digital workplace is a virtual work environment that brings together technology, people, and business processes to facilitate communication, collaboration, and productivity within an organisation."
        />
      </motion.div>

      {/* Intro Section */}
      <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="space-y-6">
            <div>
              <motion.h2 className="font-extrabold mb-8" {...fadeUp(0)}>
                <span className="text-[36px] sm:text-[40px] md:text-[44px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent leading-tight">
                  Digital workplace vs. digital workspace
                </span>
              </motion.h2>
            </div>

            <motion.p
              className="text-gray-300 text-base md:text-[18px] leading-relaxed"
              {...fadeUp(0.05)}
            >
              While the terms “digital workplace” and “digital workspace” are often used
              interchangeably, the common thread in both cases is about delivering a positive people
              experience to increase engagement and productivity. Using “digital workplace”
              throughout, this article explores the core functionalities, benefits, and use cases of
              the same and provides recommendations on how a growing company can form its digital
              workplace strategy to drive overall business agility.
            </motion.p>

            {/* CTA */}
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-white font-medium group"
              style={{ marginTop: "24px", fontSize: "16px" }}
              {...fadeUp(0.1)}
              whileHover={{ x: 4 }}
            >
              Get Started
              <div className="relative w-[56px] h-[56px] -ml-[24px]">
                <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                  <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                </span>
              </div>
            </motion.a>
          </div>

          {/* Right Image */}
          <motion.div
            className="rounded-xl overflow-hidden"
            {...scaleIn(0.05)}
            whileHover={{ scale: 1.02 }}
          >
            <img src={dw_2} alt="Team Discussion" className="w-full h-auto object-contain" />
          </motion.div>
        </div>
      </div>

      {/* Business Implications */}
      <motion.div
        className="relative w-full max-w-[1296px] mx-auto rounded-[8px] border border-[#22252B] bg-black overflow-hidden min-h-[700px]"
        style={{
          backgroundImage:
            "linear-gradient(103.31deg, rgba(0,0,0,0) 33.01%, rgba(26,188,254,0.2) 143.6%)",
        }}
        {...scaleIn(0)}
        whileHover={{ scale: 1.005 }}
      >
        <img
          src={dw_3}
          alt="Background accent"
          className="pointer-events-none absolute top-0 right-0 w-[260px] h-[160px] sm:w-[320px] sm:h-[180px] md:w-[380px] md:h-[220px] lg:w-[520px] lg:h-[200px] object-contain opacity-90"
        />

        {/* Content */}
        <div className="relative p-6 md:p-10 lg:p-12">
          <motion.h2
            className="text-white text-[40px] sm:text-[56px] md:text-[64px] font-extrabold leading-tight"
            {...fadeUp(0)}
          >
            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
              Business
              <br /> implications
            </span>
          </motion.h2>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            <motion.div {...fadeUp(0.05)}>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#2CA2FF]" />
                <span className="h-px flex-1 bg-[#2CA2FF]/40" />
              </div>
              <h3 className="mt-8 md:mt-12 text-white text-[20px] md:text-[22px] font-semibold">
                Business agility
              </h3>
              <p className="mt-4 text-[#D1D5DB] text-[16px] md:text-[18px] leading-6">
                Digital workplaces enable businesses to be more agile, quickly adapting to market
                changes and customer needs. The use of digital tools allows for rapid decision-making
                and implementation, essential in a fast-paced business environment.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#FFE8A3]" />
                <span className="h-px flex-1 bg-[#FFE8A3]/40" />
              </div>
              <h3 className="mt-8 md:mt-12 text-white text-[20px] md:text-[22px] font-semibold">
                Data-driven decision-making
              </h3>
              <p className="mt-4 text-[#D1D5DB] text-[16px] md:text-[18px] leading-6">
                Digital workplaces offer ready access to high-quality, unified data that offer
                insights into everything from employee productivity to customer preferences.
                Leveraging this data enables businesses to make informed, strategic decisions,
                tailoring their services and products more effectively to market demands.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#FF8AA1]" />
                <span className="h-px flex-1 bg-[#FF8AA1]/40" />
              </div>
              <h3 className="mt-8 md:mt-12 text-white text-[20px] md:text-[22px] font-semibold">
                Self-service efficiency
              </h3>
              <p className="mt-4 text-[#D1D5DB] text-[16px] md:text-[18px] leading-6">
                Digital workplaces put information and resources at the fingertips of workers,
                enabling them quickly find solutions to business problems and manage their work in
                the way that best suits their needs.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Services We Offer */}
      <section className="w-full bg-black text-white py-20 px-6 md:px-16">
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
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-10 sm:mt-14 overflow-hidden"
          >
            {services.map((service, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="relative bg-[#101010] border border-[#333] rounded-[4px] overflow-hidden flex flex-col 
                           transition hover:shadow-[0_0_20px_rgba(169,92,236,0.25)] border-b-[4px]"
                  style={{ borderBottomColor: service.borderColor }}
                  whileHover={{ y: -4 }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[240px] sm:h-[250px] object-cover"
                  />

                  <div
                    className={`absolute bottom-0 left-0 right-0 h-[45%] z-10 bg-gradient-to-b ${service.gradient} from-black/0 via-black/40 opacity-40`}
                  ></div>

                  <div className="relative z-10 flex flex-col justify-between flex-grow p-6">
                    <div>
                      <h3 className="font-poppins font-semibold text-[22px] sm:text-[24px] leading-[33px] text-[#DADBDD] mb-3">
                        {service.title}
                      </h3>
                      <p className="font-poppins text-[15px] sm:text-[16px] leading-[28px] text-[#DADBDD] opacity-90">
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
                            src={arrow}
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

          {/* Navigation Arrows */}
          <div className="flex justify-end mt-10 space-x-5">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-[48px] h-[48px] border border-[#DC1414] rounded-full flex items-center justify-center hover:bg-[#DC1414] transition"
            >
              <span className="text-[#DC1414] text-xl font-bold hover:text-white">‹</span>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-[48px] h-[48px] border border-[#DC1414] rounded-full flex items-center justify-center hover:bg-[#DC1414] transition"
            >
              <span className="text-[#DC1414] text-xl font-bold hover:text-white">›</span>
            </button>
          </div>
        </div>
      </section>

      {/* Importance + Cards */}
      <section className="w-full bg-black text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Top */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center mb-16">
            <motion.div {...fadeUp(0)}>
              <h2 className="text-[36px] sm:text-[44px] md:text-[48px] font-semibold leading-[1.2]">
                The{" "}
                <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                  importance
                </span>{" "}
                <br /> of a{" "}
                <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                  digital
                </span>{" "}
                workplace
              </h2>
            </motion.div>

            <motion.div className="flex justify-center" {...fadeUp(0.1)}>
              <img
                src={illustration}
                alt="Digital Workplace Illustration"
                className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] object-contain"
              />
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-[4px] w-full max-w-[320px] h-[220px] sm:h-[250px] bg-black/50 flex flex-col justify-end mx-auto"
              style={{
                borderWidth: "1px",
                borderImage: "linear-gradient(180deg, #1E46BC 0%, #8229AB 100%) 1",
              }}
              {...fadeUp(0.15)}
              whileHover={{ y: -4 }}
            >
              <img
                src={worklife}
                alt="Work-life balance"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <h3 className="relative z-10 text-[18px] sm:text-[20px] font-semibold px-5 pb-5">
                Work-life balance
              </h3>
            </motion.div>

            <motion.div
              {...fadeUp(0.2)}
              whileHover={{ y: -4 }}
              className="w-full max-w-[320px] h-[220px] sm:h-[250px] bg-black/50 rounded-[4px] border flex flex-col justify-between p-6 mx-auto"
              style={{
                borderWidth: "1px",
                borderImage: "linear-gradient(180deg, #1E46BC 0%, #8229AB 100%) 1",
              }}
            >
              <div>
                <h4 className="text-[18px] font-semibold text-[#DADBDD] mb-2">Flexibility</h4>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  Teams can work anytime, anywhere with access to digital tools. It ensures
                  adaptability and smooth business flow.
                </p>
              </div>

              <button className="mt-4 flex items-center text-[#ECEDEE] text-[15px] font-medium group transition">
                Learn more
                <div className="relative w-[56px] h-[56px]">
                  <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                  </span>
                </div>
              </button>
            </motion.div>
          </div>

          {/* Bottom Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.slice(0, 4).map((feature, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.25 + i * 0.1)}
                whileHover={{ y: -4, boxShadow: "0 0 20px rgba(130,41,171,0.25)" }}
                className="w-full max-w-[320px] h-[230px] sm:h-[250px] bg-black/50 rounded-[4px] flex flex-col justify-between p-6 transition mx-auto"
                style={{
                  borderWidth: "1px",
                  borderImage: "linear-gradient(180deg, #1E46BC 0%, #8229AB 100%) 1",
                }}
              >
                <div>
                  <h4 className="text-[18px] font-semibold text-[#DADBDD] mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-[15px] leading-relaxed">{feature.desc}</p>
                </div>

                <button className="mt-4 flex items-center text-[#ECEDEE] text-[15px] font-medium group transition">
                  Learn more
                  <div className="relative w-[56px] h-[56px]">
                    <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                    <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                      <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                    </span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How a Digital Workplace Works */}
      <section className="bg-black text-white">
        <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-0 py-12 md:py-16">
          <motion.h2
            className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] leading-[1.05] font-extrabold font-poppins"
            {...fadeUp(0)}
          >
            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
              How does a digital
              <br className="hidden sm:block" /> workplace work?
            </span>
          </motion.h2>

          <motion.p className="mt-6 text-white/80 text-base sm:text-lg max-w-4xl" {...fadeUp(0.05)}>
            A digital workplace works through a combination of technical infrastructure, workflow
            and processes, and AI and automation.
          </motion.p>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            <motion.div {...fadeUp(0.05)}>
              <div className="h-12 w-12">
                <img src={Cloud} alt="Cloud services" className="h-12 w-12 object-contain" />
              </div>
              <div className="mt-6 h-[5.11px] w-full rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,#615BFE_50%,rgba(255,255,255,0)_100%)]" />
              <h3 className="mt-6 text-xl font-[500]">Cloud services</h3>
              <p className="mt-4 text-white/75 leading-7">
                Cloud services form the backbone of the digital workplace, offering scalable and
                flexible resources for hosting applications, data analytics, and more. They
                facilitate remote data storage, access, and management, enabling teams to
                collaborate and work from any location.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <div className="h-12 w-12">
                <img src={SaaS} alt="SaaS platforms" className="h-12 w-12 object-contain" />
              </div>
              <div className="mt-6 h-[5.11px] w-full rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,#615BFE_50%,rgba(255,255,255,0)_100%)]" />
              <h3 className="mt-6 text-xl font-[500]">SaaS platforms</h3>
              <p className="mt-4 text-white/75 leading-7">
                Software as a Service (SaaS) platforms are crucial in the digital workplace,
                offering security, scalability, and access to a range of applications for video
                conferencing, team communications, IT services, streamlining operations, and
                collaboration on demand.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <div className="h-12 w-12">
                <img src={Custom} alt="Custom software" className="h-12 w-12 object-contain" />
              </div>
              <div className="mt-6 h-[5.11px] w-full rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,#615BFE_50%,rgba(255,255,255,0)_100%)]" />
              <h3 className="mt-6 text-xl font-[500]">Custom software</h3>
              <p className="mt-4 text-white/75 leading-7">
                Many organizations invest in custom software tailored to specific worker needs,
                including field and deskless workers. These solutions integrate with existing
                systems and provide unique functionality beyond off-the-shelf software, helping
                businesses gain a competitive edge.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emerging Trends */}
      <div className="w-full bg-black text-white">
        <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-0 py-12">
          <motion.h2
            className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-extrabold leading-none text-center mb-16 sm:mb-20 md:mb-28"
            {...fadeUp(0)}
          >
            <span className="bg-[radial-gradient(39.14%_35817.02%_at_31.18%_23.86%,_#8076F4_29.75%,_#FFFFFF_100%,_#FFFFFF_100%)] bg-clip-text text-transparent">
              Emerging trends
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div className="w-full" {...scaleIn(0)} whileHover={{ scale: 1.01 }}>
              <img
                src={dw_4}
                alt="Emerging trends visual"
                className="w-full h-[280px] sm:h-[420px] md:h-[520px] object-cover rounded-lg"
              />
            </motion.div>

            <div className="space-y-10">
              <motion.div className="space-y-3" {...fadeUp(0.05)}>
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-[#FF5454]" />
                  <h3 className="text-xl sm:text-2xl font-semibold">Artificial intelligence (AI)</h3>
                </div>
                <p className="text-white/80 leading-7 text-base">
                  AI is increasingly integrated into digital workplaces, from chatbots that assist
                  in customer service to algorithms that analyze data for strategic insights. Its
                  ability to automate complex tasks and provide deep learning insights is
                  transforming how businesses operate.
                </p>
              </motion.div>

              <motion.div className="space-y-3" {...fadeUp(0.1)}>
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-[#FF5454]" />
                  <h3 className="text-xl sm:text-2xl font-semibold">Automation</h3>
                </div>
                <p className="text-white/80 leading-7 text-base">
                  Automation tools integrate with digital workplaces so users can receive updates
                  and execute tasks directly. Use cases span from data entry and invoice processing
                  to approvals and IT service delivery.
                </p>
              </motion.div>

              <motion.div className="space-y-3" {...fadeUp(0.15)}>
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-[#FF5454]" />
                  <h3 className="text-xl sm:text-2xl font-semibold">Integration</h3>
                </div>
                <p className="text-white/80 leading-7 text-base">
                  Digital workplaces act as a common access point for critical apps and enterprise
                  data. Integrating tools for project management, communication, and collaboration
                  enables seamless data access and consistency across systems.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Importance of a Digital Workplace (full section) */}
      <section className="bg-black text-white">
        <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-0 py-12 md:py-16">
          {/* Accent */}
          <div className="relative">
            <span className="absolute -top-4 left-0 h-8 w-1 rounded bg-[#7C4DFF]" />
            <span className="absolute -top-4 left-0 ml-4 h-1 w-40 rounded bg-[#7C4DFF]" />
          </div>

          <motion.h2
            className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] font-extrabold max-w-3xl"
            {...fadeUp(0)}
          >
            The importance of a digital workplace
          </motion.h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="space-y-10">
              <motion.div className="space-y-3" {...fadeUp(0.05)}>
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-[#FF5454]" />
                  <h3 className="text-xl sm:text-2xl font-semibold">Work-life balance</h3>
                </div>
                <p className="text-white/80 leading-7 text-base">
                  One of the most significant cultural impacts of a digital workplace is on
                  work-life balance. The flexibility in work hours and locations can lead to a more
                  balanced lifestyle for employees. However, it also poses challenges, such as the
                  blurring of boundaries between work and personal life, requiring careful
                  management and cultural sensitivity.
                </p>
              </motion.div>

              <motion.div className="space-y-3" {...fadeUp(0.1)}>
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-[#FF5454]" />
                  <h3 className="text-xl sm:text-2xl font-semibold">Flexibility</h3>
                </div>
                <p className="text-white/80 leading-7 text-base">
                  With access to digital workplaces, workers have more opportunities to work in ways
                  that best fit their needs. By centralizing work tools for analysis, task
                  execution, collaboration, and team management, digital workplaces give workers the
                  flexibility to work anytime, anywhere. They also meet worker demand for quick
                  access to the tools needed to remain productive and self-sufficient.
                </p>
              </motion.div>
            </div>

            <motion.div className="relative" {...scaleIn(0.05)} whileHover={{ scale: 1.01 }}>
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="mx-auto h-full w-full bg-[radial-gradient(70%_60%_at_70%_45%,rgba(162,84,255,0.25)_0%,rgba(0,0,0,0)_60%)]" />
              </div>
              <img
                src=""
                alt=""
                className="w-full max-w-[540px] lg:max-w-none ml-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flexibility and Productivity */}
      <section className="bg-black text-white">
        <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-0 py-12 md:py-16">
          <motion.h2
            className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-extrabold leading-none mb-10"
            {...fadeUp(0)}
          >
            <span className="text-white">Flexibility</span>{" "}
            <span className="text-[#B6A9FF]">and productivity</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Card 1 */}
            <motion.div
              className="rounded-xl border-[1.5px] border-dashed bg-[#111215] p-6 md:p-7 lg:p-8 w-full"
              style={{ borderColor: "var(--base-500, #444955)" }}
              {...fadeUp(0.05)}
              whileHover={{ scale: 1.03, boxShadow: "0 14px 40px rgba(0,0,0,0.35)" }}
            >
              <h3 className="text-lg md:text-xl font-[500] mb-4 mt-4">Remote work</h3>
              <p className="text-white/75 leading-7 text-sm md:text-base">
                The digital workplace facilitates remote work, which offers employees the flexibility
                to work from locations that suit them best. This flexibility often results in
                increased job satisfaction and can lead to higher productivity levels.
              </p>
            </motion.div>

            {/* Center image */}
            <motion.div className="flex items-stretch justify-center" {...scaleIn(0.05)}>
              <img
                src={bg}
                alt="digital"
                className="w-[518px] h-[220px] sm:h-[300px] md:h-[375px]  object-cover rounded-xl -rotate-90"
              />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="rounded-xl border-[1.5px] border-dashed bg-[#111215] p-6 md:p-7 lg:p-8 w-full"
              style={{ borderColor: "var(--base-500, #444955)" }}
              {...fadeUp(0.1)}
              whileHover={{ scale: 1.03, boxShadow: "0 14px 40px rgba(0,0,0,0.35)" }}
            >
              <h3 className="text-lg md:text-xl font-[500] mb-4 mt-4">Asynchronous collaboration</h3>
              <p className="text-white/75 leading-7 text-sm md:text-base">
                Asynchronous collaboration, a hallmark of digital workplaces, allows team members in
                different time zones to collaborate effectively. This increases productivity while
                respecting individual work rhythms and lifestyles, contributing to a more inclusive
                work culture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry-specific */}
      <section className="bg-black text-white">
        <div className="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-0 py-12 md:py-16">
          <motion.h2
            className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-extrabold leading-none mb-10"
            {...fadeUp(0)}
          >
            <span className="text-white">Industry–</span>
            <span className="text-[#B6A9FF]">specific</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "High Tech",
                desc: "In the tech industry, digital workplaces are almost a default. Companies use an array of digital tools for collaboration, innovation, and communication. Some tech companies see their workplaces as models of efficiency and creativity and often leverage their own products to facilitate work processes.",
                hoverBg: "hover:bg-[linear-gradient(180deg,#7F4CFF_0%,#A95CEC_100%)]",
              },
              {
                title: "Healthcare",
                desc: "Emedicine, digital records, and remote patient monitoring are examples of how digital workplaces have revolutionised healthcare. Hospitals and clinics rely on digital systems for patient care and administrative functions while health system members can set up virtual doctor appointments or phone appointments from their desktops or phones.",
                hoverBg: "hover:bg-[linear-gradient(180deg,#A95CEC_0%,#DA22FF_100%)]",
              },
              {
                title: "Education",
                desc: "The shift to digital workplaces in education has been dramatic, particularly with the rise of e-learning and virtual classrooms. Some institutions offer online courses and digital collaboration platforms, enabling remote learning and global access to education.",
                hoverBg: "hover:bg-[linear-gradient(180deg,#6A6CFF_0%,#C44CF8_100%)]",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -4, boxShadow: "0 0 25px rgba(169,92,236,0.4)" }}
                className={`overflow-hidden flex flex-col justify-between h-full transition-all duration-500 border-b-[4px] border-[#DADBDD] hover:border-[#A95CEC] ${item.hoverBg}`}
              >
                <div className="p-6 md:p-7 lg:p-8 flex flex-col justify-between h-full transition-colors duration-500">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#ECEDEE] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/80 leading-7 text-sm md:text-base mb-8 transition-all duration-300">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="group inline-flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300"
                  >
                    <span className="underline-offset-4 group-hover:underline">Learn more</span>
                    <div className="relative w-[56px] h-[56px] transition-transform duration-300 group-hover:scale-105">
                      <div className="absolute inset-0 border border-[#DC1414] rounded-full group-hover:border-[#FFFFFF] transition-all duration-300"></div>
                      <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                        <img
                          src={arrow}
                          alt="arrow"
                          className="w-[11.5px] h-[20px] transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Insights */}
      <InsightSection
        title="Related Insights"
        cards={cards}
        autoSlideInterval={6000}
      />

      {/* Resources */}
      <section className="bg-black text-white mx-auto">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-6 items-start">
            {/* Left: Title + Illustration */}
            <motion.div className="relative">
              <h2 className="text-[32px] sm:text-[36px] md:text-[44px] font-extrabold mb-6">Resources</h2>
              <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-[#FF5A5A] blur-[10px] opacity-80"></div>
              <img
                src={ring}
                alt="Ring"
                className="w-full max-w-[382px] h-[220px] sm:h-[260px] object-contain"
              />
            </motion.div>

            {/* Card 1 */}
            <motion.article
              className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset] transition"
              whileHover={{ y: -2 }}
            >
              <div className="mb-4">
                <img src={r1} alt="AI 2024" className="h-16 w-16 object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                AI in 2024: Transforming the Digital Workplace
              </h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                Understand how emerging AI trends are redefining user experiences, collaboration,
                and productivity in digital work environments.
              </p>

              <button type="button" className="group mt-6 inline-flex items-center gap-3 text-white/85">
                <span className="underline-offset-4 group-hover:underline">Learn more</span>
                <div className="relative w-[56px] h-[56px]">
                  <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    <img src={narrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                  </span>
                </div>
              </button>
            </motion.article>

            {/* Card 2 */}
            <motion.article
              className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset] transition"
              whileHover={{ y: -2 }}
            >
              <div className="mb-4">
                <img src={r2} alt="Scaling Analytics" className="h-16 w-16 object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                Scaling Analytics and AI for the Modern Workforce
              </h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                Learn how centralized, trusted data can accelerate workplace innovation and support
                scalable AI-driven initiatives.
              </p>

              <button type="button" className="group mt-6 inline-flex items-center gap-3 text-white/85">
                <span className="underline-offset-4 group-hover:underline">Learn more</span>
                <div className="relative w-[56px] h-[56px]">
                  <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    <img src={narrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                  </span>
                </div>
              </button>
            </motion.article>
          </div>
        </div>
      </section>
    </div>
  );
}
