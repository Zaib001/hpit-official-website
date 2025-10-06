"use client";
import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import digitalImg from "../Images/digital-twin-hero-img.png";
import DigitalTwin from "../svg/Digital Twin.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/digital-img-2.png";
import img3 from "../Images/digital-twin-img-2.png";
import one from "../svg/1.svg";
import two from "../svg/2.svg";
import three from "../svg/3.svg";
import four from "../svg/4.svg";
import img4 from "../Images/digital-twin-img-6.png";
import img5 from "../Images/digital-twin-img-7.png";
import img6 from "../Images/digital-twin-img-8.png";
import img7 from "../Images/digital-twin-img-9.png";
import img8 from "../Images/digital-twin-img-10.png";

import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";
import narrow from "@/svg/Arrow 1.svg";

import res1 from "@/Images/DGT/res1.png";
import res2 from "@/Images/DGT/res2.png";
import res3 from "@/Images/DGT/res3.png";

import i1 from "../Images/DGT/i1.png";
import i2 from "../Images/DGT/i2.png";
import i3 from "../Images/DGT/i3.png";

export default function DigitalTwinTechnology() {
  /* ----------------------------- ANIM HELPERS ------------------------------ */
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  });
  const pop = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
  });
  // ✅ Added: used once below and was causing a ReferenceError
  const scaleIn = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
  });

  /* -------------------------- REUSABLE COMPONENTS -------------------------- */

  // Card for capabilities (keeps your dashed look, adds subtle hover + focus)
  const CapabilityCard: React.FC<{ title: string; description: string }> = ({
    title,
    description,
  }) => {
    const words = title.trim().split(" ");
    const firstLine = words.slice(0, -1).join(" ");
    const lastWord = words[words.length - 1];
    return (
      <motion.div
        className="w-full max-w-[380px] h-[240px] rounded-md border border-[#444955] bg-[#111215] relative focus-within:ring-2 focus-within:ring-[#A49CFD]/50"
        style={{
          borderWidth: "1.5px",
          borderStyle: "dashed",
          paddingTop: "40px",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingBottom: "24px",
        }}
        variants={pop(0.06)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{
          translateY: -4,
          boxShadow: "0px 14px 40px rgba(0,0,0,0.35)",
        }}
        transition={{ duration: 0.35 }}
        tabIndex={0}
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
          className={`object-contain transition duration-300 grayscale group-hover:grayscale-0 ${
            tiny ? "w-[48px]" : small ? "w-[64px]" : "w-[120px]"
          }`}
        />
        <p className="text-white text-sm md:text-base mt-4 whitespace-nowrap opacity-80 group-hover:opacity-100">
          {label}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Hero Section */}
       <motion.div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${digitalImg})`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto mt-24">
                        <div className="max-w-2xl">
                            <motion.h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-2">
                                <img
                                    src={DigitalTwin}
                                    alt="Company"
                                />
                            </motion.h2>
                            <motion.h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8" >
                                Technology
                            </motion.h2>
                            <motion.p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl" >
                                Turning Intelligence Into Impact <br></br> Faster
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.div>

      <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="space-y-6">
            <div>
              <motion.h2 className="font-extrabold mb-8">
                <span className="text-[44px] md:text-[44px] lg:text-[44px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent bg-center bg-[length:100%_100%] leading-tight">
                  Technology Alone Doesn't Transform Strategy Does.
                </span>
              </motion.h2>
            </div>

            <motion.p
              className="text-gray-300 text-base md:text-[18px] leading-relaxed"
            >
              Digital transformation is not about adopting the latest tools. It's about reimagining how your business creates value. HPIT partners with you to align technology with enterprise strategy — modernizing core systems, empowering teams, and unlocking new sources of growth.
            </motion.p>
            {/* Know more link */}
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-white font-medium group"
              style={{ marginTop: "60px", fontSize: "16px" }}
              whileHover={{ x: 4 }}
            >
              Get Started
              {/* Ellipse + Arrow */}
              <div className="relative w-[56px] h-[56px] -ml-[24px]">
                <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                {/* Arrow centered inside ellipse */}
                <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                  <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                </span>
              </div>
            </motion.a>
          </div>
          {/* Right Image */}
          <motion.div className="rounded-xl overflow-hidden" whileHover={{ scale: 1.02 }}>
            <img
              src={img1}
              alt="Team Discussion"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-black text-white py-16 px-4 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.h2
            className="text-[48px] font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
              Where Digital Twins <br /> Create Impact
            </span>
          </motion.h2>
          <motion.p
            className="mt-4 text-[20px] text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Proven Value Across Critical Domains
          </motion.p>

          {/* Card Grid */}
          <div className="mt-12 space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Smart Manufacturing */}
              <motion.div
                className="relative md:col-span-2 rounded-lg overflow-hidden min-h-[320px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img src={img4} alt="Smart Manufacturing" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <h3 className="text-[28px] font-semibold mb-2">Smart Manufacturing</h3>
                  <div className="flex items-end justify-between">
                    <p className="text-[18px] max-w-[85%]">
                      Boost efficiency and reduce downtime with real-time equipment modeling.
                    </p>
                    <div className="w-[54px] h-[54px] border border-[#DC1414] rounded-full flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[23px] h-[14px]"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Healthcare */}
              <motion.div
                className="relative md:col-span-1 rounded-lg overflow-hidden min-h-[320px]"
                whileHover={{ scale: 1.02 }}
              >
                <img src={img5} alt="Healthcare Systems" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <h3 className="text-[28px] font-semibold mb-2">Healthcare Systems</h3>
                  <div className="flex items-end justify-between">
                    <p className="text-[18px] max-w-[85%]">
                      Improve care by modeling patient flows and facility operations.
                    </p>
                    <div className="w-[54px] h-[54px] border border-[#DC1414] rounded-full flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[23px] h-[14px]"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Logistics */}
              <motion.div
                className="relative md:col-span-1 rounded-lg overflow-hidden min-h-[320px]"
                whileHover={{ scale: 1.02 }}
              >
                <img src={img6} alt="Logistics & Supply Chain" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <h3 className="text-[28px] font-semibold mb-2">Logistics & Supply Chain</h3>
                  <div className="flex items-end justify-between">
                    <p className="text-[18px] max-w-[85%]">
                      Gain end-to-end visibility into complex, fast-moving supply networks.
                    </p>
                    <div className="w-[54px] h-[54px] border border-[#DC1414] rounded-full flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[23px] h-[14px]"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Energy */}
              <motion.div
                className="relative rounded-lg overflow-hidden min-h-[320px]"
                whileHover={{ scale: 1.02 }}
              >
                <img src={img7} alt="Energy & Utilities" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <h3 className="text-[28px] font-semibold mb-2">Energy & Utilities</h3>
                  <div className="flex items-end justify-between">
                    <p className="text-[18px] max-w-[85%]">
                      Predict failures and optimize grid performance with digital replicas.
                    </p>
                    <div className="w-[54px] h-[54px] border border-[#DC1414] rounded-full flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[23px] h-[14px]"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Urban Infrastructure */}
              <motion.div
                className="relative rounded-lg overflow-hidden min-h-[320px]"
                whileHover={{ scale: 1.02 }}
              >
                <img src={img8} alt="Urban Infrastructure" className="w-full h-full object-cover" />
                {/* Gradient Overlay with transparency */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(38,87,235,0.55)_23.03%,rgba(199,41,207,0.55)_119.13%)] mix-blend-overlay" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-[28px] font-semibold mb-2">Urban Infrastructure</h3>
                  <div className="flex items-end justify-between">
                    <p className="text-[18px] max-w-[85%]">
                      Digital replicas of transportation, energy, and utilities enable city planners to simulate
                      changes, optimize traffic flows, manage energy distribution, and enhance citizen services.
                    </p>
                    <div className="w-[54px] h-[54px] border border-[#DC1414] rounded-full flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[23px] h-[14px]"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[796px] text-white py-16 px-4 sm:px-8 lg:px-20 overflow-hidden">
        {/* Bottom Left Ellipse */}
        <div className="absolute w-[500px] h-[500px] left-[-250px] bottom-0 bg-[radial-gradient(circle,rgba(26,188,254,0.3)_0%,rgba(255,255,255,0.3)_100%)] blur-[200px] pointer-events-none z-0"></div>

        {/* Top Right Ellipse */}
        <div className="absolute w-[500px] h-[500px] right-[-250px] top-[-100px] bg-[radial-gradient(circle,rgba(26,188,254,0.3)_0%,rgba(255,255,255,0.3)_100%)] blur-[200px] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div className="mb-12 relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text:[48px] font-semibold">
              Our Strategic{" "}
              <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                Twin
              </span>{" "}
              Framework
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl text-base md:text-[16px]">
              Transform raw data into intelligent action with a living, learning digital twin model.
            </p>
          </motion.div>

          {/* Cards - Responsive Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.12 }}
          >
            {/* Card 1 */}
            <motion.div
              className="w-full max-w-[300px] mx-auto h-[362px] relative rounded-lg border border-[#444955] p-6 overflow-hidden"
              style={{
                background:
                  "linear-gradient(179.93deg, rgba(2, 2, 3, 0.3) 68.46%, rgba(220, 20, 20, 0.3) 201.19%), #111215",
              }}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl md:text-[40px] font-semibold mb-16">Capture</h3>
              <p className="text-gray-400 text-lg md:text-[20px] pr-8">
                Collect real-time data from IoT, machines, and operations.
              </p>
              <img
                src={one}
                className="absolute bottom-4 -right-[10px] w-[155px] h-[197px] opacity-80"
                alt="Step 1"
              />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="w-full max-w-[300px] mx-auto h-[362px] relative rounded-lg border border-[#444955] p-6 overflow-hidden"
              style={{
                background:
                  "linear-gradient(179.93deg, rgba(2, 2, 3, 0.3) 68.46%, rgba(97, 91, 254, 1) 201.19%), #111215",
              }}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl md:text-[40px] font-semibold mb-16">Model</h3>
              <p className="text-gray-400 text-lg md:text-[20px] pr-8">
                Build accurate digital replicas enriched with business logic.
              </p>
              <img
                src={two}
                className="absolute bottom-4 -right-[10px] w-[155px] h-[197px] opacity-80"
                alt="Step 2"
              />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="w-full max-w-[300px] mx-auto h-[362px] relative rounded-lg border border-[#444955] p-6 overflow-hidden"
              style={{
                background:
                  "linear-gradient(179.93deg, rgba(2, 2, 3, 0.3) 68.46%, rgba(220, 20, 20, 0.3) 201.19%), #111215",
              }}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl md:text-[40px] font-semibold mb-16">Analyze</h3>
              <p className="text-gray-400 text-lg md:text-[20px] pr-8">
                Use AI/ML to detect anomalies, simulate scenarios, and predict outcomes.
              </p>
              <img
                src={three}
                className="absolute bottom-4 -right-[10px] w-[155px] h-[197px] opacity-80"
                alt="Step 3"
              />
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="w-full max-w-[300px] mx-auto h-[362px] relative rounded-lg border border-[#444955] p-6 overflow-hidden"
              style={{
                // ✅ Fixed typo: dev → deg (this was breaking the gradient)
                background:
                  "linear-gradient(179.93deg, rgba(2, 2, 3, 0.3) 68.46%, rgba(97, 91, 254, 1) 201.19%), #111215",
              }}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl md:text-[40px] font-semibold mb-16">Evolve</h3>
              <p className="text-gray-400 text-lg md:text-[20px] pr-8">
                Continuously refine
                <br />
                models as systems scale and conditions change.
              </p>
              <img
                src={four}
                className="absolute bottom-4 -right-[10px] w-[155px] h-[197px] opacity-80"
                alt="Step 4"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.section
        className="w-full bg-black text-white py-16 px-6 md:px-12"
        variants={fadeUp(0.05)}
        initial="hidden"
        whileInView="visible"
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

      <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div className="mb-12" >
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold">
              <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                How We Help You Lead
              </span>
            </h2>
            <p className="text-gray-400 mt-2 text-lg md:text-[20px]">
              A Partner in Transformation, Not Just Implementation
            </p>
          </motion.div>

          {/* Image + Features Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Image */}
            <motion.div className="w-full"  whileHover={{ scale: 1.01 }}>
              <img
                src={img3}
                alt="Team discussing security"
                className="w-full h-auto max-w-[642px] max-h-[434px] object-cover rounded-lg"
              />
            </motion.div>

            {/* Right Features with underlines */}
            <div className="space-y-8 md:space-y-12">
              <motion.div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                <h3 className="font-semibold text-lg md:text-[20px]">Architected for Scale</h3>
                <p className="text-gray-400 text-base md:text-[16px]">From proof of concept to enterprise rollout</p>
              </motion.div>

              <motion.div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                <h3 className="font-semibold text-lg md:text-[20px]">Accelerated Time-to-Value</h3>
                <p className="text-gray-400 text-base md:text-[16px]">Rapid integration with existing platforms</p>
              </motion.div>

              <motion.div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                <h3 className="font-semibold text-lg md:text-[20px]">Industry-Aligned Models</h3>
                <p className="text-gray-400 text-base md:text-[16px]">Built for your KPIs, not generic metrics</p>
              </motion.div>

              <motion.div className="pb-4 border-b" style={{ borderColor: "#22252B" }}>
                <h3 className="font-semibold text-lg md:text-[20px]">Secure & Compliant by Design</h3>
                <p className="text-gray-400 text-base md:text-[16px]">
                  Data sovereignty, privacy, and risk control from day one
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

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
              img: i1,
              title: "VIRTUAL PROTOTYPING",
              desc:
                "Digital twins enable faster product testing & refinement through accurate virtual models.",
            },
            {
              img: i2,
              title: "SMART OPERATIONS",
              desc: "They optimize real-time performance by predicting issues before they occur.",
            },
            {
              img: i3,
              title: "DATA-DRIVEN INNOVATION",
              desc:
                "Insights from digital twins drive continuous improvement and new business models.",
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
              <img src={card.img} alt={card.title} className="w-full h-[300px] object-cover" />

              {/* Content */}
              <div className="flex flex-col justify-between flex-grow px-6 py-6">
                <div>
                  <h3 className="text-[20px] font-semibold mb-3 text-[#ECEDEE]">{card.title}</h3>
                  <p className="text-[#A0A0A0] text-[15px] leading-relaxed">{card.desc}</p>
                </div>

                {/* Learn More Button */}
                <div className="flex justify-end items-end">
                  <button className="mt-6 flex items-center text-[#ECEDEE] text-[15px] font-medium hover:text-[#E50000] transition">
                    <span>Learn more</span>
                    <div className="relative w-[56px] h-[56px] flex items-center justify-center">
                      <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                      <img src={narrow} alt="arrow" className="absolute w-[11.5px] h-[20px]" />
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
            <span className="inline-block text-[#E50000] text-xl group-hover:text-white w-4 h-6 leading-none">
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
                src={res1}
                alt="Ring"
                className="w-full max-w-[382px] h-[310px] sm:h-[260px] object-contain"
              />
            </motion.div>

            {/* Card 1 */}
            <motion.article
              className="rounded-xl min-h-[320px] bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset]"
              whileHover={{ y: -2 }}
            >
              <div className="mb-4">
                <img src={res2} alt="" className="h-16 w-16 object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Introduction to Digital Twins</h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                The basics of digital twin technology, its benefits, and how it integrates with IoT and cloud platforms.
              </p>

              <button type="button" className="group mt-6 inline-flex items-center gap-3 text-white/85">
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
            <motion.article
              className="rounded-xl min-h-[320px] bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset]"
              whileHover={{ y: -2 }}
            >
              <div className="mb-4">
                <img src={res3} alt="" className="h-16 w-16 object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Digital Twins Explained</h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                An easy-to-understand article that covers what digital twins are, their business benefits, and real-world examples.
              </p>

              <button type="button" className="group mt-6 inline-flex items-center gap-3 text-white/85">
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
