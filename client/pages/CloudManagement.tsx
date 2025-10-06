import React from "react";
import { motion } from "framer-motion";
import cloudManagement from "../Images/photoManagement.png"
import cloud from "../svg/Cloud.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/Pexels Photo by Christina Morillo.png";
import sv1 from "../svg/streamline-plump_graph-bar-increase copy.svg"
import sv2 from "../svg/streamline-plump_graph-bar-increase (1) copy.svg"
import sv3 from "../svg/streamline-plump_graph-bar-increase (2) copy.svg"
import sv4 from "../svg/streamline-plump_graph-bar-increase (3) copy.svg"
import sv5 from "../svg/streamline-plump_graph-bar-increase (4) copy.svg"
import sv6 from "../svg/streamline-plump_graph-bar-increase (5) copy.svg"
import group134 from "../svg/Group 134.svg";
import group136 from "../svg/Group 136.svg";
import group137 from "../svg/Group 137.svg";
import vector3 from "../svg/Vector (3).svg";
import fauxals from "../Images/Pexels Photo by fauxels.png";
import ic1 from "../svg/approx100.svg";
import ic2 from "../svg/satpratishat.svg";
import ic3 from "../svg/thirty.svg";
import ic4 from "../svg/7.svg";
import img from "../Images/Frame 415.png";
import one from "../svg/Frame 273 (1).svg";
import two from "../svg/Frame 277 (2).svg";
import three from "../svg/Frame 278 (2).svg";
import four from "../svg/Frame 279 (2).svg";
import five from "../svg/Frame 280 (2).svg";
import verticalLine from "../svg/Line 30 (2).svg";

export default function CloudManagement() {

    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Hero Section */}
            <motion.div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${cloudManagement})`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div
                    className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8"
                    style={{ marginTop: "55px" }}
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="max-w-2xl"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-1">
                                <img src={cloud} alt="Company" />
                            </h2>
                            <br />
                            <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                                Management
                            </h2>
                            <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                                HPIT delivers secure, seamless cloud migration <br />
                                tailored for performance and built for the future.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-extrabold mb-6">
                            <span className="text-[60px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                                Managing Complex <br /> Environments
                            </span>
                        </h2>
                        <p className="text-gray-300 text-[18px] leading-relaxed mt-6">
                            HPIT provides end-to-end cloud management services that <br />
                            ensure your infrastructure stays secure, cost-effective, and{" "}
                            <br />
                            fully optimized — every day, around the clock.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-white font-medium group"
                            style={{ marginTop: "60px", fontSize: "16px" }}
                        >
                            Get Started
                            <div className="relative w-[56px] h-[56px]" style={{ marginLeft: "-15px" }}>
                                <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                                <span className="absolute inset-0 flex items-center justify-center">
                                    <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                                </span>
                            </div>
                        </a>
                    </motion.div>

                    <motion.div
                        className="rounded-xl overflow-hidden"
                        style={{ marginTop: "20px", marginLeft: "200px" }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={img1}
                            alt="Team Discussion"
                            className="w-[454px] h-[303px] object-cover rounded-l-sm"
                        />
                    </motion.div>
                </div>
            </div>
            <div className="bg-black text-white py-20 px-6 lg:px-24">
                <motion.div
                    className="flex flex-col lg:flex-row gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
                    }}
                >
                    {/* Left Column */}
                    <div className="lg:w-3/5 flex flex-col justify-between">
                        <h2 className="text-[48px] sm:text-5xl font-extrabold leading-snug">
                            What{" "}
                            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                                We Handle
                            </span>{" "}
                            For You
                        </h2>
                        <p className="mt-4 text-gray-400 text-base sm:text-[14px] max-w-md">
                            HPIT manages every layer of your cloud — from security and performance
                            to cost control and uptime — across AWS, Azure, GCP, and hybrid setups.
                        </p>

                        {/* Cards */}
                        <div className="mt-10 grid grid-cols-2 gap-6 auto-rows-fr">
                            {[sv3, sv4].map((icon, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    <img src={icon} className="w-[64px] h-[64px] mb-4" />
                                    <h3 className="text-[22px] font-semibold mb-2">
                                        {i === 0 ? "Cost Efficiency" : "Performance Optimization"}
                                    </h3>
                                    <p className="text-gray-400 text-[16px]">
                                        {i === 0
                                            ? "Identify unused resources, right-size workloads, and control spend."
                                            : "Tune compute, storage, and traffic to keep everything smooth and fast."}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column Cards */}
                    <div className="lg:w-3/5 grid grid-cols-2 gap-6 auto-rows-fr">
                        {[sv1, sv2, sv5, sv6].map((icon, i) => (
                            <motion.div
                                key={i}
                                className="bg-[#111215] p-6 rounded-lg shadow-md h-full flex flex-col min-h-[300px]"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <img src={icon} className="w-[64px] h-[64px] mb-4" />
                                <h3 className="text-[22px] font-semibold mb-2">
                                    {["Monitoring & Uptime", "Security & Compliance", "Backup & Recovery", "Configuration Management"][i]}
                                </h3>
                                <p className="text-gray-400 text-[16px]">
                                    {[
                                        "Real-time tracking with instant alerts and 24/7 coverage.",
                                        "Automated patching, threat detection, and audit-ready logs.",
                                        "Ensure business continuity with automated backups and rapid restore.",
                                        "Keep systems consistent and stable across environments.",
                                    ][i]}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

<div className="bg-black text-white py-20 px-4 sm:px-8 lg:px-20 text-center">
  {/* Heading */}
  <motion.h2
    className="text-[48px] font-extrabold mb-2"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Clouds{" "}
    <span className="inline-block bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
      We Manage
    </span>
  </motion.h2>

  <motion.p
    className="text-gray-400 text-[20px] sm:text-base mb-10"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
    Built for Every Cloud. Optimized for Yours.
  </motion.p>

  {/* Cloud Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-6">
    {[
      { img: group134, label: "AWS", w: "w-[64px] h-[39px]" },
      { img: group136, label: "Google Cloud Platform", w: "w-[44px] h-[28px]" },
      { img: group137, label: "Microsoft Azure", w: "w-[40px] h-[30px]" },
      { img: vector3, label: "IBM Cloud Platform", w: "w-[80px] h-[32px]" },
    ].map((cloud, index) => (
      <motion.div
        key={cloud.label}
        className="bg-[#111111] border border-[#333] rounded-lg p-6 w-full max-w-[320px] flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        viewport={{ once: true }}
      >
        <img src={cloud.img} alt={cloud.label} className={`${cloud.w} mb-4`} />
        <p className="text-[22px] font-medium">{cloud.label}</p>
      </motion.div>
    ))}
  </div>
</div>


<div className="bg-black text-white px-6 py-16 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Left: Heading and Image */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-[72px] font-extrabold leading-snug mb-8">
        How{" "}
        <span className="inline-block text-transparent bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text">
          We Deliver
        </span>{" "}
        Value
      </h2>
      <motion.img
        src={img}
        alt="Team Working"
        className="rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      />
    </motion.div>

    {/* Right: Steps */}
    <motion.div
      className="space-y-12 mt-2"
      style={{ marginTop: "260px", marginLeft: "120px" }}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Line SVG beside paragraph */}
      <motion.div
        className="flex items-start gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img src={verticalLine} alt="Vertical Line" className="w-4 h-[56px] mt-1" />
        <p className="text-[20px] text-gray-300 leading-relaxed">
          A step-by-step approach to smarter,<br />stronger cloud operations.
        </p>
      </motion.div>

      {/* Steps with SVG Icons */}
      {[
        [one, "Discover", "We audit your existing environment"],
        [two, "Design", "Tailored cloud management plan"],
        [three, "Deploy", "Tools, automations, alerts, and dashboards"],
        [four, "Deliver", "24/7 monitoring, tuning, and improvements"],
        [five, "Refine", "Ongoing reviews and strategy updates"],
      ].map(([icon, title, desc], index) => (
        <motion.div
          key={title}
          className="flex items-start gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Step SVG Icon */}
          <img src={icon} alt={title} className="w-[64px] h-[64px] mt-1" />
          {/* Step Text */}
          <div>
            <h3 className="font-semibold text-[24px] text-white">{title}</h3>
            <p className="text-gray-400 text-[16px]">{desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</div>

<div className="text-white px-4 sm:px-8 lg:px-20 py-16">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    {/* Left Text Content */}
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div>
        <h2 className="text-[48px] font-extrabold mb-2">
          <span className="text-transparent bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text">
            Cloud Management <br />
            That Never Sleeps
          </span>
        </h2>
      </div>

      <motion.p
        className="text-gray-300 text-[18px] leading-relaxed"
        style={{ marginTop: "40px" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        At HPIT, we believe that cloud operations should work just as hard as
        you do — even when you're offline. Our proactive support model combines
        real-time monitoring, intelligent automation, and 24/7 expert
        intervention to ensure uninterrupted cloud performance.
        <br />
        <br />
        Whether it's detecting anomalies before they become problems,
        fine-tuning workloads for peak hours, or responding instantly to
        incidents, we’ve got you covered — around the clock, across every cloud
        platform.
      </motion.p>

      {/* Know more link */}
      <motion.a
        href="#"
        className="inline-flex items-center gap-2 text-white font-medium group"
        style={{ marginTop: "60px", fontSize: "16px" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Get Started

        {/* Ellipse + Arrow */}
        <div className="relative w-[56px] h-[56px]" style={{ marginLeft: "-15px" }}>
          <img src={Ellipse} alt="ellipse" className="w-full h-full" />
          {/* Arrow centered inside ellipse */}
          <span className="absolute inset-0 flex items-center justify-center text-white text-xl" style={{ marginLeft: "-15px" }}>
            <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
          </span>
        </div>
      </motion.a>
    </motion.div>

    {/* Right Image */}
    <motion.div
      className="rounded-xl overflow-hidden"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <img
        src={fauxals}
        alt="Team Discussion"
        className="w-[679px] h-[543px] object-cover rounded-l-sm"
      />
    </motion.div>
  </div>
</div>

           import { motion } from "framer-motion";

<motion.div
  className="bg-black text-white px-4 lg:gap-x-18 sm:px-8 py-12 border-t border-b border-gray-700"
  style={{ marginBottom: "120px" }}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-700 text-center">
    {[
      { img: ic1, ml: "120px", text: "Uptime SLA" },
      { img: ic4, ml: "130px", text: "Incident Response" },
      { img: ic3, ml: "130px", text: "Avg. Cost Reduction" },
      { img: ic2, ml: "130px", text: "Client Retention" },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="px-4 py-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.15 }}
        viewport={{ once: true }}
      >
        <img
          src={item.img}
          alt="stat"
          className="w-auto h-[23px]"
          style={{ marginLeft: item.ml, marginBottom: "20px" }}
        />
        <p className="mt-2 text-[18px] text-gray-300 font-poppins leading-snug">
          {item.text}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>

        </div>
    );
}
