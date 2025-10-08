"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import backgroundImage from "@/Images/frame1.png";
import cloud from "@/Images/cloud.png";
import desktop from "@/Images/desktop.png";
import automation from "@/Images/automation.png";

import decoImg1 from "../Images/decoimg.png";
import arrow from "@/svg/arrow.svg";
import icon11 from "@/svg/11.svg";
import icon22 from "@/svg/22.svg";
import icon33 from "@/svg/33.svg";
import astronaut from "@/Images/Astronaut.jpg";
import frame from "@/svg/Frame75.svg";
import g2m from "@/svg/g2m.svg";
import Group from "@/svg/Group.svg";
import Ellipse from "@/svg/Ellipse 10.svg";
import company from "@/svg/Company.svg";
import narrow from "@/svg/Arrow 1.svg";

import CLG from "@/Images/clg.jpg";
import top from "../Images/top.png";
import bgjourney from "../Images/bg-journey.jpg";

import icon1 from "../svg/01.svg";
import icon2 from "../svg/02.svg";
import icon3 from "../svg/03.svg";
import icon4 from "../svg/04.svg";

import decoImg from "../Images/weDO.png";
import decoImg2 from "../Images/stay.png";
import techImg from "../Images/tech.jpg";
import businessImg from "../Images/business.jpg";
import consultingImg from "../Images/consulting.jpg";

import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";

import award1 from "../Images/award1.png";
import award2 from "../Images/award2.png";
import award3 from "../Images/award3.png";

import MindfulChef from "../Images/ai-img-1.png";
import Thursday from "../Images/ai-img-2.png";
import Gener8 from "../Images/ai-img-3.png";

import ring from "@/Images/ring.png";
import r1 from "@/Images/r1.png";
import r2 from "@/Images/r2.png";
import WhatWeDoSection from "../components/WhatWeDoSection";
import InsightSection from "@/components/InsightSection";
import AwardsSection from "@/components/AwardsSection";
import ServicesCarousel from "@/components/ServicesCarousel";

/* ----------------------------- Anim helpers ----------------------------- */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

const pop = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: [0.44, 1, 0.36, 1],
      duration: 0.6,
      staggerChildren: 0.18,
      delayChildren: 0.6,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 70, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const hoverEffect = {
  scale: 1.05,
  y: -6,
  boxShadow: "0 12px 32px rgba(128,118,244,0.3)",
  borderColor: "#8076F4",
  transition: { duration: 0.4, ease: "easeOut" },
};

/* ----------------------------- Data ----------------------------- */
const awards = [
  { img: award1, alt: "Washington Technology" },
  { img: award2, alt: "Defense News Top 100" },
  { img: award3, alt: "Bloomberg Government" },
];

const values = [
  { title: "Flexibility", text: "Adaptability to changing needs.", color: "#1ABCFE" },
  { title: "Integrity", text: "Honesty and transparency", color: "#F5D97F" },
  { title: "Respect", text: "Valuing diversity and inclusivity", color: "#FA7B7B" },
  { title: "Service", text: "Adaptability to changing needs.", color: "#7DF59A" },
  { title: "Teamwork", text: "Adaptability to changing needs.", color: "#B77DFA" },
];

const cards1 = [
  { icon: icon1, title: "COLLABORATION", text: "We work hand-in-hand with clients and teams to achieve shared goals." },
  { icon: icon2, title: "INNOVATION", text: "We embrace creativity and technology to deliver smarter solutions." },
  { icon: icon3, title: "QUALITY COMMITMENT", text: "We ensure high standards to deliver reliable and impactful results." },
  { icon: icon4, title: "CUSTOMER FOCUS", text: "We prioritize client needs to create lasting value and trust." },
];

/* ----------------------------- Reusable Pieces ----------------------------- */
const FadeInSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
      }}
    >
      {children}
    </motion.div>
  );
};

const GradientHeading = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={`font-extrabold text-balance bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text ${className}`}
  >
    {children}
  </h2>
);

const CTAButton = ({ label, className = "" }: { label: string; className?: string }) => (
  <a
    href="#"
    className={`group inline-flex items-center gap-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A49CFD] rounded-full ${className}`}
  >
    <span className="transition-colors group-hover:text-[#A49CFD]">{label}</span>
    <span className="relative w-14 h-14 -ml-3 inline-flex items-center justify-center">
      <img src={Ellipse} alt="" className="w-full h-full" />
      <img
        src={arrow}
        alt=""
        className="absolute w-[11.5px] h-5 transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </span>
  </a>
);

const ToolBadge = ({
  logo,
  label,
  imgClass = "",
}: {
  logo: string;
  label: string;
  imgClass?: string;
}) => (
  <div
    className="bg-[#111215] rounded-lg px-6 py-6 flex flex-col items-center justify-center border border-transparent
               transition-all duration-300 hover:border-[#A49CFD]/40 hover:shadow-[0_0_24px_rgba(164,156,253,0.08)]
               hover:-translate-y-1 group"
  >
    <img
      src={logo}
      alt={label}
      className={`object-contain transition duration-300 grayscale group-hover:grayscale-0 ${imgClass}`}
    />
    <p className="text-white text-sm md:text-base mt-4 whitespace-nowrap opacity-80 group-hover:opacity-100">
      {label}
    </p>
  </div>
);

const journeyData = [
  {
    year: 2021,
    text: "We adopted modern tools to drive flexibility and enable the secure deployment of a distributed ecosystem.",
  },
  {
    year: 2022,
    text: "We advanced to agile development, building data-intensive applications and reducing deployment time from weeks to days.",
  },
  {
    year: 2023,
    text: "We scaled our infrastructure globally, enhancing system resilience and implementing full CI/CD automation pipelines.",
  },
  {
    year: 2024,
    text: "We integrated AI-driven analytics to power smarter decisions, optimize performance, and enhance user experiences.",
  },
  {
    year: 2025,
    text: "We are focusing on innovation, creating next-gen digital products that redefine speed, scalability, and sustainability.",
  },
];

/* ======================================================================== */

export default function Company() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const nextIndex = activeIndex === journeyData.length - 1 ? 0 : activeIndex + 1;

  let slideInterval;

  useEffect(() => {
    if (!isPaused) {
      slideInterval = setInterval(() => {
        setActiveIndex((prev) =>
          prev === journeyData.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }

    return () => clearInterval(slideInterval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? journeyData.length - 1 : prev - 1
    );
    resetAutoSlide();
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === journeyData.length - 1 ? 0 : prev + 1
    );
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    setIsPaused(true);
    clearInterval(slideInterval);
    setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };



  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax motion for background & top image
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yTop = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const cards = [
    { img: MindfulChef, title: "INDUSTRY TRENDS", desc: "Emerging trends shaping the future of business and technology." },
    { img: Thursday, title: "CASE STUDIES", desc: "Real success stories showcasing our impact and expertise." },
    { img: Gener8, title: "RESEARCH REPORT", desc: "In-depth analysis to guide smarter strategies and decisions." },
    { img: MindfulChef, title: "AI & AUTOMATION", desc: "Exploring how AI is transforming industries worldwide." },
    { img: Thursday, title: "DIGITAL FUTURE", desc: "Innovations driving the next wave of digital transformation." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* ===================== HERO ===================== */}
      <FadeInSection>
        <div
          className="h-[620px] sm:h-[680px] lg:h-[756px] bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-black"
          />
          <div className="relative z-10 pt-40 sm:pt-48 lg:pt-60 pb-12 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="max-w-3xl"
                style={{ marginTop: "60px" }}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
              >
                <motion.h2 variants={item} className="mb-1">
                  <img src={company} alt="Company" className="w-[220px] sm:w-[260px] md:w-[300px]" />
                </motion.h2>

                <motion.h2
                  variants={item}
                  className="text-white text-[40px] sm:text-[44px] md:text-5xl lg:text-6xl font-bold mb-6"
                >
                  Overview
                </motion.h2>

                <motion.p
                  variants={item}
                  className="text-white text-base md:text-lg leading-relaxed max-w-[770px]"
                >
                  We are a dynamic company focused on innovation and delivering
                  quality solutions that meet our clients’ needs.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ===================== MISSION & VISION ===================== */}
      <FadeInSection delay={0.1}>
        <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              className="space-y-6 mt-6 lg:mt-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2
                className="font-semibold leading-tight sm:leading-[56px] text-[32px] sm:text-[40px] md:text-[48px] tracking-[0]"
                style={{ fontFamily: "Poppins" }}
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "radial-gradient(425.56% 425.56% at 50% 50%, #8076F4 0%, #FFFFFF 9.96%)",
                  }}
                >
                  Our Mission &amp; Vision
                </span>
              </h2>

              <p
                className="text-[#DADBDD] font-normal text-base sm:text-[17px] md:text-[18px] leading-[28px] sm:leading-[30px] tracking-[0.01em] max-w-[46rem]"
                style={{ fontFamily: "Poppins" }}
              >
                Our mission is to provide innovative, reliable, and high-quality solutions that
                help businesses achieve their objectives efficiently. We envision a future
                where our expertise drives meaningful growth and transformation for our
                clients. By focusing on excellence, sustainability, and continuous
                improvement, we aim to create long-term value for our clients, employees, and
                the communities we serve, while staying adaptable to the ever-changing
                business landscape
              </p>

              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-white font-medium group mt-10 sm:mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                Get Started
                <div className="relative w-[56px] h-[56px] flex items-center justify-center -ml-4">
                  <img src={Ellipse} alt="ellipse" className="absolute inset-0 w-full h-full" />
                  <svg
                    className="w-4 h-4 text-white transform rotate-0 group-hover:rotate-45 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-xl overflow-hidden mt-10 lg:mt-20 flex justify-center lg:justify-end"
            >
              <img
                src={CLG}
                alt="Team Discussion"
                className="w-full h-auto max-w-[560px] lg:max-w-[520px] xl:max-w-[560px] object-cover rounded-l-sm"
              />
            </motion.div>
          </div>
        </div>
      </FadeInSection>

      {/* ===================== WHAT WE BELIEVE ===================== */}
      <div className="py-16 sm:py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "PURPOSE",
                text:
                  "We believe in creating meaningful impact through our work, helping businesses grow while contributing positively to the communities we serve. Our purpose drives every decision and action we take.",
              },
              {
                title: "MISSION",
                text:
                  "We believe in delivering innovative, reliable, and high-quality solutions that empower our clients to achieve their goals efficiently. Our mission guides us to focus on excellence, customer satisfaction, and continuous improvement.",
              },
              {
                title: "VISION",
                text:
                  "We believe in a future of sustainable growth and transformative solutions. Our vision inspires us to adapt, innovate, and create lasting value for our clients, employees, and stakeholders.",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                className="relative rounded-xl p-6 sm:p-7 min-h-[260px] flex flex-col overflow-hidden group cursor-pointer transition-all duration-500 border border-transparent bg-[#1a1a1a]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-xl" />
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none"
                  whileHover={{
                    borderColor: "rgba(255,255,255,0.15)",
                    boxShadow: "0 0 25px rgba(99,102,241,0.5)",
                    scale: 1.02,
                    transition: { duration: 0.35, ease: "easeOut" },
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-white mb-4 sm:mb-5">
                    {card.title}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed text-gray-400 group-hover:text-white transition">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== CORE VALUES ===================== */}
      <FadeInSection delay={0.3}>
        <div
          ref={ref}
          className="relative py-20 px-4 sm:px-8 lg:px-10 flex justify-center items-center"
        >
          <motion.div
            style={{ y: yBg }}
            className="relative w-full lg:w-[1296px] min-h-[560px] lg:h-[650px] rounded-[8px] border border-[#22252B] overflow-hidden backdrop-blur-sm"
          >
            {/* Background gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, #000000, #000000), linear-gradient(103.31deg, rgba(0, 0, 0, 0) 33.01%, rgba(26, 188, 254, 0.2) 143.6%)",
              }}
            />

            {/* Top decorative image with parallax */}
            <motion.div
              style={{ y: yTop }}
              className="absolute z-10 right-0 -top-8 w-[60%] max-w-[520px] h-auto lg:w-[657px] lg:h-[315px] lg:top-[-142px] lg:left-[851px]"
            >
              <img
                src={top}
                alt="Decorative Top Right"
                className="w-full h-full object-contain opacity-90 hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>

            {/* Giant Background Text */}
            <div
              className="hidden lg:block absolute z-0"
              style={{ top: "525px", left: "122px" }}
            >
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.06 }}
                transition={{ duration: 1 }}
                className="font-poppins font-semibold select-none"
                style={{
                  fontSize: "398px",
                  lineHeight: "110px",
                  color: "#FFFFFF",
                  letterSpacing: "0px",
                  position: "absolute",
                }}
              >
                FIRST
              </motion.h1>
            </div>

            {/* Foreground content */}
            <div className="relative z-10 mx-auto px-6 py-10 lg:py-12 w-full">
              {/* Animated shimmer title */}
              <motion.h2
                className="text-left font-poppins font-semibold text-4xl md:text-5xl relative lg:absolute"
                style={{
                  top: "65px",
                  left: "40px",
                  background:
                    "radial-gradient(425.56% 425.56% at 50% 50%, #8076F4 0%, #FFFFFF 9.96%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <span className="block lg:hidden mb-6">Our Core Value</span>
                <span className="hidden lg:block">Our Core Value</span>
              </motion.h2>

              {/* Value grid */}
              <div
                className="grid text-left gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-24 sm:mt-28 lg:mt-0 relative lg:absolute"
                style={{
                  width: "1145px",
                  height: "157px",
                  top: "225px",
                  left: "76px",
                  gap: "95px",
                }}
              >
                {values.map((val, i) => (
                  <motion.div
                    key={val.title}
                    className="flex flex-col items-start group cursor-pointer relative"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{
                      scale: 1.05,
                      y: -6,
                      transition: { type: "spring", stiffness: 200 },
                    }}
                  >
                    {/* Hover glow */}
                    <motion.div
                      className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-30 blur-xl"
                      style={{ backgroundColor: val.color }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Line indicator */}
                    <div
                      className="flex items-center mb-4 w-full max-w-[200px] transition-all duration-500"
                      style={{ height: "20px", gap: "5px", opacity: 1 }}
                    >
                      <motion.div
                        className="w-[12px] h-[12px] rounded-full flex-shrink-0"
                        style={{ backgroundColor: val.color }}
                        whileHover={{ scale: 1.4 }}
                      />
                      <motion.div
                        className="h-[2px] flex-1"
                        style={{ backgroundColor: val.color }}
                        whileHover={{ width: "120%" }}
                      />
                    </div>

                    <h3 className="font-semibold text-[#DADBDD] text-lg md:text-xl group-hover:text-white transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-[#DADBDD] mt-2 text-base md:text-[18px] leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                      {val.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </FadeInSection>

      {/* ===================== JOURNEY ===================== */}
      <div className="py-16 sm:py-20 px-6 md:px-12 lg:px-24 mx-auto">
        {/* Title */}
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-4xl md:text-5xl font-bold text-left mb-4"
        >
          <span
            className="font-poppins font-semibold text-transparent bg-clip-text select-none"
            style={{
              background:
                "radial-gradient(425.56% 425.56% at 50% 50%, #8076F4 0%, #FFFFFF 9.96%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Journey
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="font-poppins text-[#DADBDD] text-base md:text-lg max-w-[900px] leading-relaxed select-none"
        >
          Our company journey is defined by continuous growth, innovation, and a
          commitment to creating lasting value.
        </motion.p>

        {/* Journey Card */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative w-full h-[55vh] max-w-[1296px] rounded-lg border border-[#444955] p-6 sm:p-8 md:p-12 bg-cover mt-10 sm:mt-14 md:mt-16 overflow-hidden"
          style={{ backgroundImage: `url(${bgjourney})` }}
        >
          {/* Side Controls */}
          <div className="absolute left-4 sm:left-6 md:left-[80px] top-6 bottom-6 flex flex-col items-center">
            <motion.div
              whileHover={{ y: -4, scale: 1.1 }}
              onClick={handlePrev}
              className="mb-4 cursor-pointer text-gray-400 hover:text-[#f4a076] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </motion.div>

            {/* Timeline line */}
            <div className="flex-1 w-[2px] bg-gray-500 relative">
              <motion.div
                animate={{
                  y: `${(activeIndex / (journeyData.length - 1)) * 100}%`,
                }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className="absolute -ml-[10px] w-6 h-6 rounded-full border-2 border-red-500 bg-black flex items-center justify-center shadow-[0_0_15px_rgba(255,0,0,0.5)]"
              >
                <motion.div
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-red-500"
                />
              </motion.div>
            </div>

            <motion.div
              whileHover={{ y: 4, scale: 1.1 }}
              onClick={handleNext}
              className="mt-4 cursor-pointer text-gray-400 hover:text-[#8076F4] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </div>

          {/* Years Data */}
          <div className="flex flex-col gap-8 ml-14 sm:ml-24 md:ml-40 mt-10 sm:mt-12 md:mt-16 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={journeyData[activeIndex].year}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-start gap-5 sm:gap-6 md:gap-8 relative"
              >
                {/* Active Year */}
                <div className="w-full md:w-[180px] relative">
                  <motion.h2
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-[40px] sm:text-[48px] md:text-[64px] leading-[1.1] md:leading-[72px] font-poppins font-semibold text-[#ECEDEE]"
                  >
                    {journeyData[activeIndex].year}
                  </motion.h2>

                  {/* Faint Next Year */}
                  <motion.h3
                    key={journeyData[nextIndex].year}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.15, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-6 text-base font-poppins leading-relaxed text-[40px] sm:text-[48px] md:text-[64px] font-poppins font-semibold text-[#ECEDEE] select-none pointer-events-none"
                  >
                    {journeyData[nextIndex].year}
                  </motion.h3>
                </div>

                {/* Description for both */}
                <div className="flex-grow">
                  {/* Active Year Text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-base md:text-[20px] text-[#ECEDEE] font-poppins leading-relaxed"
                  >
                    {journeyData[activeIndex].text}
                  </motion.p>

                  {/* Faint Next Year Text */}
                  <motion.p
                    key={journeyData[nextIndex].text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.2, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-14 text-base md:text-[18px] text-[#ECEDEE] font-poppins leading-relaxed select-none"
                  >
                    {journeyData[nextIndex].text}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* ===================== HOW WE WORK ===================== */}
      <section className="relative py-16 sm:py-20 px-6 sm:px-10 lg:px-20 max-w-[1480px] mx-auto overflow-hidden">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-4xl md:text-5xl font-bold text-left mb-8 sm:mb-12"
        >
          <motion.span
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="bg-gradient-to-r from-purple-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent"
          >
            How
          </motion.span>{" "}
          <span className="text-white">We Work</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center relative z-10">
          {cards1.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={hoverEffect}
              className="group relative w-full max-w-[340px] min-h-[280px] rounded-xl border border-[#22252B] bg-gradient-to-b from-[#0A0A0A] to-[#111111] p-6 flex flex-col justify-between shadow-md transition duration-300 hover:shadow-[0_8px_35px_rgba(128,118,244,0.15)]"
            >
              <div className="flex justify-between items-start mb-6">
                <motion.img
                  src={card.icon}
                  alt={card.title}
                  className="w-10 h-10 sm:w-12 sm:h-10 object-contain"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  whileHover={{
                    backgroundColor: "#EF4444",
                    rotate: 45,
                    borderColor: "#EF4444",
                    transition: { duration: 0.3 },
                  }}
                  className="w-8 h-8 rounded-full border border-red-500 flex items-center justify-center cursor-pointer transition"
                >
                  <motion.span
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-sm text-gray-200"
                  >
                    ➔
                  </motion.span>
                </motion.div>
              </div>

              <div className="flex flex-col gap-3">
                <motion.h4
                  className="font-poppins font-semibold text-[18px] md:text-[20px] lg:text-[22px] text-[#DADBDD] leading-[28px] md:leading-[30px]"
                  whileHover={{ color: "#8076F4", transition: { duration: 0.3 } }}
                >
                  {card.title}
                </motion.h4>
                <motion.p
                  className="font-poppins text-[15px] md:text-[16px] text-[#B8B9BB] leading-[24px]"
                  whileInView={{ opacity: [0, 1], x: [10, 0] }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {card.text}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 140 }}
          whileInView={{ opacity: 0.9, scale: 1, rotate: 157 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="absolute z-0 right-[-28px] sm:right-[-40px] top-[40px] sm:top-[50px] w-[160px] sm:w-[220px] md:w-[250px] lg:w-[280px]"
        >
          <motion.img
            src={decoImg}
            alt="Decorative Element"
            className="w-full h-full object-contain"
            animate={{ rotate: [157, 160, 157], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* {=================Services we offer====================} */}
      <ServicesCarousel />

      {/* ===================== WHAT WE DO ===================== */}
      <WhatWeDoSection />

      {/* ===================== TOOLS ===================== */}
      <motion.section
        className="w-full bg-black text-white py-16 px-6 md:px-12"
        variants={fadeUp(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold mb-6 leading-tight">
              <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text">
                Built With the Right Tools for the Job
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-[20px] mb-8">
              We use cutting-edge frameworks and platforms to ensure top performance.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white font-medium group rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A49CFD]/60"
              style={{ fontSize: "16px" }}
            >
              Get Started
              <span className="relative w-[56px] h-[56px] -ml-4 inline-flex items-center justify-center">
                <img src={Ellipse} alt="" className="w-full h-full" />
                <img
                  src={narrow}
                  alt=""
                  className="absolute w-[11.5px] h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </div>

          <motion.div
            className="hidden md:flex justify-center items-center"
            variants={pop(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={reverseArrow} alt="Arrow Illustration" className="w-[150px] h-[130px]" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <LogoCard logo={group136} label="Databricks" />
            <LogoCard logo={vector3} label="Cloudera" />
            <LogoCard logo={group137} label="SAP" small />
            <LogoCard logo={vector4} label="OpenText" tiny />
            <LogoCard logo={group138} label="Dynatrace" />
            <LogoCard logo={group134} label="AWS" />
          </div>
        </div>
      </motion.section>

      <div className="relative">
        <img
          src={decoImg1}
          alt="Decoration"
          className="absolute right-10 -top-14 w-[110px] md:w-[160px] object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]"
        />
      </div>

      {/* ===================== AWARDS ===================== */}
      <AwardsSection />

      {/* ===================== RELATED INSIGHTS ===================== */}
      <InsightSection title="Related Insights" cards={cards} />
      {/* {==============Stay Connected===============} */}
      <div className="relative">
        <img
          src={decoImg2}
          alt="Decoration"
          className="absolute right-10 -top-14 w-[110px] md:w-[240px] md:h-[426px] object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]"
        />
      </div>
      {/* ===================== STAY CONNECTED ===================== */}
      <section className="px-4 sm:px-6 lg:px-20 py-16 md:py-20 text-white overflow-hidden">
        <div className="text-left mb-8 md:mb-12">
          <h2
            className="font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.15]
                       bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]
                       text-transparent bg-clip-text"
          >
            Stay Connected
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row justify-start md:justify-between items-stretch gap-8 md:gap-10 lg:gap-[80px] max-w-[1292px] mx-auto">
          {[
            { icon: icon11, title: "Join our Talent Community", text: "Connect with us and be part of a network that values growth and innovation." },
            { icon: icon22, title: "Latest Opportunities", text: "Explore exciting roles that match your skills and career goals." },
            { icon: icon33, title: "Job Alerts", text: "Stay updated with personalized alerts on new openings and opportunities." },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                background: "linear-gradient(180deg, rgba(99,102,241,1) 0%, rgba(168,85,247,1) 100%)",
                boxShadow: "0px 10px 40px rgba(128,118,244,0.3), 0px 2px 10px rgba(255,255,255,0.1)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="relative flex flex-col justify-between text-center rounded-xl p-8 sm:p-10 w-full max-w-[380px] mx-auto min-h-[380px] sm:min-h-[420px] border border-[#2b2f36] bg-[#111215] transition-all duration-500"
            >
              <motion.div className="flex justify-center mb-6" whileHover={{ scale: 1.06, rotate: 1 }} transition={{ duration: 0.25 }}>
                <img src={card.icon} alt={card.title} className="w-[84px] sm:w-[110px] md:w-[128px] h-auto object-contain" />
              </motion.div>

              <div>
                <h3 className="text-white font-poppins font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-snug mb-3 sm:mb-4">
                  {card.title}
                </h3>
                <p className="font-poppins text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px]">{card.text}</p>
              </div>

              <motion.div whileHover={{ x: 6 }} transition={{ duration: 0.25 }} className="flex items-center justify-center sm:justify-end mt-6 sm:mt-8 gap-2 cursor-pointer">
                <span className="text-[15px] sm:text-[16px] font-medium">Learn more</span>
                <div className="relative w-[44px] sm:w-[56px] h-[44px] sm:h-[56px] -ml-2 sm:-ml-3">
                  <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl -ml-2 sm:-ml-3">
                    <img src={narrow} alt="arrow" className="w-[9px] sm:w-[11.5px] h-[17px] sm:h-[20px] transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== RESOURCES ===================== */}
      <section className="bg-black text-white mx-auto">
        <div className="max-w-[1338px] mx-auto px-4 sm:px-6 lg:px-0 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-8 md:gap-10 items-start">
            <motion.div
              className="relative"
              variants={fadeUp(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold mb-6">Resources</h2>
              <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-[#FF5A5A] blur-[10px] opacity-80" />
              <img src={ring} alt="Ring" className="w-full max-w-[382px] h-[220px] sm:h-[260px] object-contain" />
            </motion.div>

            <motion.article
              className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset] transition-transform"
              variants={fadeUp(0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -3 }}
            >
              <div className="mb-4">
                <img src={r1} alt="" className="h-14 w-14 sm:h-16 sm:w-16 object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">AI in 2024: Transforming the Digital Workplace</h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                Understand how emerging AI trends are redefining user experiences, collaboration,
                and productivity in digital work environments.
              </p>
              <button type="button" className="group mt-6 inline-flex items-center gap-3 text-white/85">
                <span className="underline-offset-4 group-hover:underline">Learn more</span>
                <div className="relative w-[48px] sm:w-[56px] h-[48px] sm:h-[56px]">
                  <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    <img src={narrow} alt="arrow" className="w-[10px] sm:w-[11.5px] h-[18px] sm:h-[20px]" />
                  </span>
                </div>
              </button>
            </motion.article>

            <motion.article
              className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset] transition-transform"
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -3 }}
            >
              <div className="mb-4">
                <img src={r2} alt="" className="h-14 w-14 sm:h-16 sm:w-16 object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Scaling Analytics and AI for the Modern Workforce</h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                Learn how centralized, trusted data can accelerate workplace innovation and support
                scalable AI-driven initiatives.
              </p>
              <button type="button" className="group mt-6 inline-flex items-center gap-3 text-white/85">
                <span className="underline-offset-4 group-hover:underline">Learn more</span>
                <div className="relative w-[48px] sm:w-[56px] h-[48px] sm:h-[56px]">
                  <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    <img src={narrow} alt="arrow" className="w-[10px] sm:w-[11.5px] h-[18px] sm:h-[20px]" />
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


function LogoCard({
  logo,
  label,
  small,
  tiny,
}: {
  logo: string;
  label: string;
  small?: boolean;
  tiny?: boolean;
}) {
  return (
    <div
      className="bg-[#111215] rounded-lg px-6 py-6 flex flex-col items-center justify-center border border-transparent
                 transition-all duration-300 hover:border-[#A49CFD]/40 hover:shadow-[0_0_24px_rgba(164,156,253,0.08)] hover:-translate-y-1 group"
    >
      <img
        src={logo}
        alt={label}
        className={`object-contain transition duration-300 grayscale group-hover:grayscale-0 ${tiny ? "w-[48px]" : small ? "w-[64px]" : "w-[120px]"
          }`}
      />
      <p className="text-white text-sm md:text-base mt-4 whitespace-nowrap opacity-80 group-hover:opacity-100">
        {label}
      </p>
    </div>
  );
}