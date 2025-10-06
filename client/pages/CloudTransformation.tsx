"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import cloudTransformation from "../Images/Pexels Photo by Johannes Plenio.png";
import cloud from "../svg/Cloud.svg";
import pix15 from "../Images/Group 139 (1).png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import table from "../Images/Frame 416.png";
import img from "../Images/Frame 417.png";
import ClientExperience from "@/components/ClientExperience";
import fiftypercent from "../svg/fiftypercent.svg";
import eightypercent from "../svg/eightypercent.svg";

// ✅ Reusable scroll wrapper
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

// ✅ Card component with animation
const Card = ({ title, description }) => {
  const words = title.trim().split(" ");
  const length = words.length;
  const firstLine = words.slice(0, length - 1).join(" ");
  const lastWord = words[length - 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-[405px] h-[240px] rounded-md border border-[#444955] bg-[#111215] relative"
      style={{
        borderWidth: "1.5px",
        borderStyle: "dashed",
        padding: "40px 24px 24px 24px",
      }}
    >
      <h3 className="text-[24px] font-semibold mb-[30px] leading-snug">
        {firstLine && <>{firstLine}<br /></>}
        {lastWord}
      </h3>
      <p className="text-gray-400 text-[16px] leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function CloudTransformation() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* HERO */}
      <FadeInSection>
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${cloudTransformation})` }}
        >
          <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8 mt-20">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-2xl">
                <motion.h2
                  className="text-white text-4xl md:text-5xl lg:text-6xl font-normal mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={cloud} alt="Application" />
                </motion.h2>
                <motion.h2
                  className="text-white text-[56px] font-bold mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Transformation
                </motion.h2>
                <motion.p
                  className="text-white text-[20px] leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Modernize your cloud for speed, scale,<br /> and agility.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* MAKE CLOUD FUTURE READY */}
      <FadeInSection delay={0.1}>
        <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[60px] font-extrabold">
                <span className="bg-[radial-gradient(425%_425%_at_50%_50%,#8076F4_0%,#FFFFFF_9.96%)] bg-clip-text text-transparent">
                  Make Your Cloud Future-Ready
                </span>
              </h2>
              <p className="text-gray-300 text-[18px] leading-relaxed mt-5">
                HPIT’s Cloud Transformation services help businesses modernize their cloud infrastructure, streamline operations, and adopt next-gen capabilities.
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-white font-medium group mt-10 text-[16px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Get Started
                <div className="relative w-[56px] h-[56px] -ml-4">
                  <img src={Ellipse} alt="ellipse" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                  </span>
                </div>
              </motion.a>
            </motion.div>

            {/* Right */}
            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src={pix15} alt="Team" className="w-[578px] h-[451px] object-cover rounded-l-sm" />
            </motion.div>
          </div>
        </div>
      </FadeInSection>

      {/* SERVICES */}
      <FadeInSection delay={0.15}>
        <div className="bg-black text-white py-16 px-4 sm:px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[48px] font-bold leading-tight">
                <span className="bg-[radial-gradient(425%_425%_at_50%_50%,#8076F4_0%,#FFFFFF_9.96%)] bg-clip-text text-transparent">
                  Services Built for Modernization
                </span>
              </h2>
              <p className="text-gray-400 mt-10 max-w-md text-[20px]">
                We help you shift from legacy systems to modern, cloud-native architectures with speed, precision, and minimal disruption.
              </p>
            </motion.div>

            {/* Right Grid */}
            <motion.div
              className="w-[700px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative grid grid-cols-2 grid-rows-2 rounded-xl text-sm bg-[#111215]">
                {[
                  { title: "Assessment & Strategy", desc: "We analyze your current environment and define a transformation roadmap." },
                  { title: "Architecture Design", desc: "Build a secure, and cloud native architecture tailored to your goals." },
                  { title: "Execution & Migration", desc: "Move workloads with minimal disruption and complete visibility." },
                  { title: "Optimization & Enablement", desc: "Post migration tuning and team training for long term efficiency." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="p-6 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                  >
                    <h3 className="font-semibold text-white text-[20px]">{item.title}</h3>
                    <p className="text-gray-400 text-[16px] mt-5">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </FadeInSection>

      {/* WHY CHOOSE */}
      <FadeInSection delay={0.2}>
        <div className="text-white py-20 rounded-xl">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 min-h-[600px]">
            {/* Left */}
            <motion.div
              className="self-center px-4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[48px] font-extrabold leading-tight">
                <span className="bg-[radial-gradient(425%_425%_at_50%_50%,#8076F4_0%,#FFFFFF_9.96%)] text-transparent bg-clip-text">
                  Why Choose HPIT for Cloud Transformation
                </span>
              </h2>
              <motion.img
                src={table}
                alt="arrow"
                className="w-[575px] h-[647px] rounded-md mt-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>

            {/* Right Bullets */}
            <motion.ul
              className="space-y-14 text-white"
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              {[
                "Cloud-Native by Design",
                "End-to-End Delivery",
                "Zero Downtime Approach",
                "Cross-Industry Expertise",
              ].map((title, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <span className="text-red-500 mt-1">○</span>
                  <div>
                    <h4 className="font-semibold text-[20px]">{title}</h4>
                    <p className="text-gray-400 text-[16px]">Description for {title} goes here.</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </FadeInSection>

      {/* RESULTS */}
      <FadeInSection delay={0.25}>
        <div className="text-white px-4 sm:px-8 lg:px-20 py-16 mb-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[48px] font-extrabold">
                <span className="bg-[radial-gradient(254%_254%_at_50%_50%,#A49CFD_0%,#FFFFFF_9.99%)] bg-clip-text text-transparent">
                  Results That Speak for Themselves
                </span>
              </h2>
              <p className="text-gray-300 text-[20px] mt-10">
                Our clients move from complex, aging systems to agile, cloud-native environments—setting the stage for rapid growth and innovation.
              </p>
            </motion.div>

            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={img} alt="Team" className="w-[568px] h-[300px] object-cover" />
              {/* Stats */}
              <motion.div
                className="relative w-[568px] border border-[#333740] rounded-md mt-6 flex"
                initial="hidden"
                whileInView="visible"
                variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              >
                {[
                  { icon: fiftypercent, text: "First-Contact Resolution Rate" },
                  { icon: eightypercent, text: "Lower legacy costs" },
                  { icon: null, text: "AI-ready modern architecture" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 text-center px-6 py-4"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  >
                    {item.icon && <img src={item.icon} className="mx-auto mb-2" />}
                    <p className="text-[14px] text-gray-400">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </FadeInSection>

      {/* CLIENT EXPERIENCE */}
      <FadeInSection delay={0.3}>
        <ClientExperience />
      </FadeInSection>
    </div>
  );
}
