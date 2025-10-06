"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import threat from "../Images/advanceThreat.png";
import advance from "../svg/Advance.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/advanceThreatBanner.png";
import MindfulChef from "../Images/ai-img-1.png";
import Thursday from "../Images/ai-img-2.png";
import Gener8 from "../Images/ai-img-3.png";
import ring from "@/Images/ring.png";

import r1 from "@/Images/r1.png";
import r2 from "@/Images/r2.png";

import narrow from "@/svg/Arrow 1.svg";


// ✅ Reusable FadeIn wrapper
const FadeInSection = ({ children, delay = 0 }) => {
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

export default function AdvanceThreat() {
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  });
  return (
    <div className="min-h-screen flex flex-col bg-black mx-auto">
      {/* Hero Section */}
      <FadeInSection>
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `url(${threat})`,
          }}
        >
          <div
            className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8 mt-24"
          >
            <div className="max-w-7xl mx-auto">
              <div className="max-w-2xl">
                <h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-1">
                  <img src={advance} alt="Company" />
                </h2>
                <br />
                <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                  Threat
                </h2>
                <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                  Outsmart Sophisticated Threats. Stay <br />
                  Resilient. Stay Ahead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Defend Section */}
      <FadeInSection delay={0.2}>
        <div className="text-white px-4 sm:px-8 lg:px-20 py-16 ml-12">
          <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-36 items-center">
            {/* Left Text Content */}
            <div className="space-y-6">
              <h2 className="font-extrabold mb-6">
                <span className="text-[42px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                  Defend Against What You Can’t Predict
                </span>
              </h2>
              <p
                className="text-gray-300 text-[18px] leading-relaxed"
                style={{ marginTop: "30px" }}
              >
                Cyberattacks today are stealthy, adaptive, and designed to bypass
                traditional defenses. Advanced Threat Protection (ATP) is your
                proactive shield — identifying hidden threats, detecting unknown
                attack patterns, and responding in real time before damage is
                done.
              </p>
              {/* Know more link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-medium group"
                style={{ marginTop: "60px", fontSize: "16px" }}
              >
                Get Started
                <div
                  className="relative w-[56px] h-[56px]"
                  style={{ marginLeft: "-15px" }}
                >
                  <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                  <span
                    className="absolute inset-0 flex items-center justify-center text-white text-xl"
                    style={{ marginLeft: "-15px" }}
                  >
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-[11.5px] h-[20px]"
                    />
                  </span>
                </div>
              </a>
            </div>

            {/* Right Image */}
            <motion.div
              className="rounded-xl overflow-hidden"
              style={{ marginTop: "20px" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={img1}
                alt="Team Discussion"
                className="w-[512px] h-[368px] object-cover rounded-l-sm"
              />
            </motion.div>
          </div>
        </div>
      </FadeInSection>

      <motion.section
        className="w-full bg-black text-white py-20 px-6 md:px-12 mx-auto max-w-[1350px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <div className="text-left mb-12 w-[400px] h-[34px] opacity-100">
          <h2
            className="font-poppins font-semibold text-[48px] leading-[56px] tracking-[0]
            bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]
            text-transparent bg-clip-text"
          >
            Related Insights
          </h2>
        </div>



        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {[
            {
              img: MindfulChef,
              title: "INDUSTRY TRENDS",
              desc: "We share insights on emerging trends shaping the future of business and technology.",
            },
            {
              img: Thursday,
              title: "CASE STUDIES",
              desc: "We highlight real success stories that showcase our impact and expertise.",
            },
            {
              img: Gener8,
              title: "RESEARCH REPORT",
              desc: "We provide in-depth analysis to guide smarter strategies and decisions.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="w-[400px] h-[556px] bg-[#22252B] border-b-4 border-[#DADBDD] rounded-[4px] overflow-hidden flex flex-col justify-between shadow-md hover:shadow-[0_0_15px_rgba(169,92,236,0.3)] transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-[300px] object-cover"
              />

              {/* Content */}
              <div className="flex flex-col justify-between flex-grow px-6 py-6">
                <div>
                  <h3 className="text-[20px] font-semibold mb-3 text-[#ECEDEE]">
                    {card.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-[15px] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="flex justify-end items-end">
                  <button className="mt-6 flex items-center text-[#ECEDEE] text-[15px] font-medium hover:text-[#E50000] transition">
                    <span >Learn more</span>
                    <div className="relative w-[56px] h-[56px] flex items-center justify-center">
                      <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                      <img
                        src={narrow}
                        alt="arrow"
                        className="absolute w-[11.5px] h-[20px]"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Navigation Arrows */}
        <motion.div
          className="flex justify-end mt-12 space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            className="w-[48px] h-[48px] border border-[#E50000] rounded-full flex items-center justify-center 
                     hover:bg-[#E50000] transition duration-300 group"
          >
            <span
              className="inline-block text-[#E50000] text-xl group-hover:text-white w-4 h-6 leading-none"
            >
              ‹
            </span>
          </button>

          {/* Right Arrow */}
          <button
            className="w-[48px] h-[48px] border border-[#E50000] rounded-full flex items-center justify-center 
                     hover:bg-[#E50000] transition duration-300 group"
          >
            <span className="text-[#E50000] text-xl group-hover:text-white">›</span>
          </button>
        </motion.div>
      </motion.section>


      <section className="bg-black text-white mx-auto">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-6 items-start">
            {/* Left: Title + Illustration */}
            <motion.div className="relative">
              <h2 className="text-[36px] sm:text-[44px] font-extrabold mb-6">Resources</h2>

              {/* Red ellipse accent */}
              <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-[#FF5A5A] blur-[10px] opacity-80"></div>

              {/* Big illustration (replace src) */}
              <img
                src={ring}
                alt="Ring"
                className="w-full max-w-[382px] h-[310px] sm:h-[260px] object-contain"
              />
            </motion.div>

            {/* Card 1 */}
            <motion.article className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset]" whileHover={{ y: -2 }}>
              <div className="mb-4">
                <img src={r1} alt="" className="h-16 w-16 object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                AI in 2024: Transforming the Digital Workplace
              </h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                Understand how emerging AI trends are redefining user experiences, collaboration,
                and productivity in digital work environments.
              </p>

              <button
                type="button"
                className="group mt-6 inline-flex items-center gap-3 text-white/85"
              >
                <span className="underline-offset-4 group-hover:underline">Learn more</span>
                <div className="relative w-[56px] h-[56px]">
                  <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                  {/* Arrow centered inside ellipse */}
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    <img src={narrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                  </span>
                </div>
              </button>
            </motion.article>

            {/* Card 2 */}
            <motion.article className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset]" whileHover={{ y: -2 }}>
              <div className="mb-4">
                <img src={r2} alt="" className="h-16 w-16 object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                Scaling Analytics and AI for the Modern Workforce
              </h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                Learn how centralized, trusted data can accelerate workplace innovation and support
                scalable AI-driven initiatives.
              </p>

              <button
                type="button"
                className="group mt-6 inline-flex items-center gap-3 text-white/85"
              >
                <span className="underline-offset-4 group-hover:underline">Learn more</span>
                <div className="relative w-[56px] h-[56px]">
                  <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                  {/* Arrow centered inside ellipse */}
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
