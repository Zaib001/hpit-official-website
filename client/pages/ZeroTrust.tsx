"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import unplash from "../Images/unsplash_mT7lXZPjk7U.png";
import zero from "../svg/Zero.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/Pexels Photo by Tima Miroshnichenko.png";
import sv1 from "../svg/svg1.svg";
import sv2 from "../svg/svg2.svg";
import sv3 from "../svg/svg3.svg";
import sv4 from "../svg/svg4.svg";
import sv5 from "../svg/svg5.svg";
import sv6 from "../svg/svg6.svg";
import fauxals from "../Images/unsplash_oyXis2kALVg.png";
import centerImage from "../Images/Pixabay-3119879.png";
import christine from "../Images/Pexels Photo by Christina Morillo.png";
import sixtypercent from "../svg/sixtypercent.svg";
import thirtypercent from "../svg/thirty.svg";

// ✅ Reusable animation wrapper
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

export default function ZeroThrust() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Hero Section */}
      <FadeInSection>
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `url(${unplash})`,
          }}
        >
          <div
            className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8"
            style={{ marginTop: "45px", marginLeft: "50px" }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="max-w-2xl">
                <h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-1">
                  <img src={zero} alt="Company" />
                </h2>
                <br />
                <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                  Trust
                </h2>
                <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                  Secure access. Always verified. Never
                  <br /> assumed safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Modern Framework Section */}
      <FadeInSection delay={0.1}>
        <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div className="space-y-6">
              <h2 className="font-extrabold mb-6">
                <span className="text-[42px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                  A Modern Framework for Relentless Cyber Defense
                </span>
              </h2>
              <p
                className="text-gray-300 text-[18px] leading-relaxed"
                style={{ marginTop: "30px" }}
              >
                Zero Trust is a modern cybersecurity approach that assumes no
                user or device inside or outside the network is trustworthy by
                default. It requires continuous verification and enforces strict
                access controls based on identity, behaviour, and context.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-medium group"
                style={{ marginTop: "60px", fontSize: "16px" }}
              >
                Get Started
                <div className="relative w-[56px] h-[56px]" style={{ marginLeft: "-15px" }}>
                  <img src={Ellipse} alt="ellipse" />
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl" style={{ marginLeft: "-15px" }}>
                    <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                  </span>
                </div>
              </a>
            </div>

            {/* Right Image */}
            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={img1}
                alt="Team Discussion"
                className="w-[552px] h-[368px] object-cover rounded-l-sm"
              />
            </motion.div>
          </div>
        </div>
      </FadeInSection>

      {/* Secure Every Layer */}
      <FadeInSection delay={0.2}>
        <div className="bg-black text-white py-20 px-6 lg:px-24" style={{ marginLeft: "-30px" }}>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column */}
            <div className="lg:w-3/5 flex flex-col justify-between">
              <div>
                <h2 className="text-[48px] sm:text-5xl font-extrabold leading-snug">
                  <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                    Built to Secure Every Layer, Continuously
                  </span>
                </h2>
                <p className="mt-4 text-gray-400 text-base sm:text-[14px] max-w-md">
                  Zero Trust isn’t a single tool — it’s a security architecture
                  composed of interlocking capabilities. Each one reinforces the
                  other, ensuring your environment remains protected, adaptive,
                  and breach-resilient in real time.
                </p>
              </div>
              {/* Cards */}
              <div className="mt-10 grid grid-cols-2 gap-6 auto-rows-fr">
                {[{icon: sv3, title: "Micro Segmentation", desc: "Isolate systems to prevent lateral threat movement."},
                  {icon: sv4, title: "Policy-Based Access", desc: "Grant access based on context and behavior."}]
                  .map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                  >
                    <img src={item.icon} alt="icon" className="w-[64px] h-[64px] mb-4" />
                    <h3 className="text-[22px] font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-[16px]">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column Cards */}
            <div className="lg:w-3/5 grid grid-cols-2 gap-6 auto-rows-fr">
              {[{icon: sv1, title: "Identity & Access Intelligence", desc: "Verify every user with adaptive authentication checks."},
                {icon: sv2, title: "Device Trust", desc: "Allow only compliant and secured devices access."},
                {icon: sv5, title: "Continuous Monitoring", desc: "Detect and respond to threats in real-time."},
                {icon: sv6, title: "Visibility & Analytics", desc: "Gain deep insights from user and system activity."}]
                .map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                >
                  <img src={item.icon} alt="icon" className="w-[64px] h-[64px] mb-4" />
                  <h3 className="text-[22px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-[16px]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Benefits Section */}
      <FadeInSection delay={0.25}>
        <div className="text-white px-4 sm:px-8 lg:px-20 py-16" style={{ marginTop: "160px", marginLeft: "-40px" }}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-start relative" style={{ marginLeft: "25px" }}>
            <div className="relative">
              <h2 className="absolute top-[-180px] left-6 text-[48px] sm:text-5xl font-extrabold leading-tight z-10" style={{ marginLeft: "-24px" }}>
                <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                  Benefits That Matter
                </span>
              </h2>
              <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl" style={{ marginTop: "-120px", marginBottom: "50px" }}>
                Enhanced security, seamless user experience, continuous threat detection, adaptive access control, and scalable solutions that grow with your business needs.
              </p>
              <motion.img
                src={fauxals}
                alt="Migration Support"
                className="rounded-md w-[511px] h-[578px] object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* Right Cards */}
            <div style={{ marginTop: "30px" }}>
              <div className="space-y-14">
                {["Lift and Shift (Rehosting)", "Replatforming", "Refactoring / Re-architecting", "Hybrid and Multi-cloud"].map((title, i) => (
                  <motion.div
                    key={i}
                    className="border border-dashed border-gray-700 rounded-xl px-6 py-4 max-w-[95%]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.2 }}
                  >
                    <h4 className="font-semibold text-[20px] mb-1">{title}</h4>
                    <p className="text-gray-400 text-[16px]">
                      {[
                        "Move apps as-is for speed and minimal change.",
                        "Adapt existing apps to better leverage cloud capabilities.",
                        "Redesign apps to be cloud-native for scalability, flexibility, and automation.",
                        "Modernize with flexible, multi-platform deployment.",
                      ][i]}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Why Choose Section */}
      <FadeInSection delay={0.3}>
        <div className="text-white px-4 sm:px-10 py-16 flex flex-col items-center" style={{ marginLeft: "-60px" }}>
          <h2 className="text-3xl sm:text-[48px] font-extrabold text-center mb-4">
            <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
              Why Choose HPIT
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-12 text-[20px]">
            Adaptive, scalable, and guided from first assessment to
            <br />full Zero Trust deployment.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-7xl items-center">
            {/* Left Cards */}
            <div className="flex flex-col gap-8">
              <Card
                title="Certified Multi Cloud Experts"
                description="In-house teams certified across AWS, Azure, and GCP."
              />
              <Card
                title="Tailored Support Plans"
                description="Flexible engagement models built around your operational needs."
              />
            </div>
            {/* Center Image */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={centerImage}
                alt="Team Collaboration"
                className="rounded-xl w-[375px] h-[512px] object-cover shadow-xl"
              />
            </motion.div>
            {/* Right Cards */}
            <div className="flex flex-col gap-8">
              <Card
                title="SLA-Backed Guarantees"
                description="Response times and uptime metrics you can rely on."
              />
              <Card
                title="Transparent Reporting"
                description="Access real-time dashboards and monthly performance insights."
              />
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

const Card = ({ title, description }) => {
  const words = title.trim().split(" ");
  const length = words.length;
  const firstLine = words.slice(0, length - 1).join(" ");
  const lastWord = words[length - 1];

  return (
    <motion.div
      className="w-[380px] h-[240px] rounded-md border border-[#444955] bg-[#111215] relative"
      style={{
        borderWidth: "1.5px",
        borderStyle: "dashed",
        paddingTop: "40px",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingBottom: "24px",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-[24px] font-semibold mb-[30px] leading-snug">
        {firstLine && (
          <>
            {firstLine}
            <br />
          </>
        )}
        {lastWord}
      </h3>
      <p className="text-gray-400 text-[16px] leading-relaxed">{description}</p>
    </motion.div>
  );
};
