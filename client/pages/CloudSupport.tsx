import React from "react";
import { motion } from "framer-motion";
import cloudSupport from "../Images/Pexels Photo by Pachon in Motion.png";
import cloud from "../svg/Cloud.svg";
import pix15 from "../Images/Group 139.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import centerImage from "../Images/Pexels Photo by Yan Krukau.png";
import img1 from "../svg/98percent.svg";
import img2 from "../svg/15min.svg";
import img3 from "../svg/30-40.svg";
import img4 from "../svg/approx100.svg";
import reverseArrow from "../svg/reverseArrow.svg";
import frame383 from "../Images/Pexels Photo by Daniel Frank.png";
import karuka from "../Images/Pexels Photo by Yan Krukau (1).png";
import line from "../svg/Line 30 (1).svg";

const Card = ({ title, description }) => {
    const words = title.trim().split(" ");
    const length = words.length;

    const firstLine = words.slice(0, length - 1).join(" ");
    const lastWord = words[length - 1];

    return (
        <div
            className="w-[405px] h-[240px] rounded-md border border-[#444955] bg-[#111215] relative"
            style={{
                borderWidth: "1.5px",
                borderStyle: "dashed",
                paddingTop: "40px", // heading 40px from top
                paddingLeft: "24px",
                paddingRight: "24px",
                paddingBottom: "24px",
            }}
        >
            <h3 className="text-[24px] font-semibold mb-[30px] leading-snug">
                {firstLine && <>{firstLine}<br /></>}
                {lastWord}
            </h3>
            <p className="text-gray-400 text-[16px] leading-relaxed">{description}</p>
        </div>
    );
};



export default function CloudSupport() {
    return (
        <div className="min-h-screen flex flex-col bg-black">
           <motion.div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${cloudSupport})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8" style={{ marginTop: "120px" }}>
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal mb-1">
                <img src={cloud} alt="Application" />
              </h2>
              <h2 className="text-white text-[56px] font-bold mb-8">Support</h2>
              <p className="text-white text-[20px] leading-relaxed max-w-xl">
                Reliable support for your cloud. <br /> Anytime. Every time.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Section: Intro */}
      <motion.div
        className="text-white px-4 sm:px-8 lg:px-20 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-[72px] font-extrabold mb-2">
              <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                Built for Cloud <br /> Reliability
              </span>
            </h2>
            <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "20px" }}>
              HPIT’s Cloud Support services are designed to ensure stability, security, and performance across your cloud environments.<br /> From real-time monitoring to rapid issue resolution, we help you<br /> stay ahead of disruptions.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-white font-medium group" style={{ marginTop: "60px", fontSize: "16px" }}>
              Get Started
              <div className="relative w-[56px] h-[56px]" style={{ marginLeft: "-15px" }}>
                <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                <span className="absolute inset-0 flex items-center justify-center text-white text-xl" style={{ marginLeft: "-15px" }}>
                  <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                </span>
              </div>
            </a>
          </div>

          <motion.div
            className="rounded-xl overflow-hidden"
            style={{ marginTop: "20px", marginLeft: "40px" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={pix15} alt="Team Discussion" className="w-[578px] h-[451px] object-cover rounded-l-sm" />
          </motion.div>
        </div>
      </motion.div>

      {/* Section: Comprehensive Support */}
      <motion.div
        className="bg-black text-white px-6 py-16 sm:px-12 lg:px-[120px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl">
          <h2 className="text-[32px] sm:text-[48px] font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]">
              Comprehensive Support for<br /> Every Cloud Environment
            </span>
          </h2>
          <p className="text-gray-400 text-[14px] mt-2 max-w-xl">
            From configuration to crisis, we cover every aspect of<br /> cloud support.
          </p>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row gap-10 items-start">
          <motion.div
            className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src={karuka} alt="Cloud Support Team" className="w-[485px] h-[591px] object-cover" />
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <img src={line} alt="Vertical Line" className="h-[56px] w-auto mt-1" />
              <p className="text-gray-300 text-[20px]">Stay ahead with continuous insights and proactive<br /> issue detection</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ marginTop: "80px" }}>
              {[
                { title: "Rapid Incident Resolution", desc: "Structured escalation protocols with defined SLAs for critical issue handling." },
                { title: "Configuration Assistance", desc: "Support with setup, scaling, networking, and service integrations." },
                { title: "Performance & Cost Optimization", desc: "Identify inefficiencies, reduce costs, and maximize cloud ROI." },
                { title: "Security & Compliance Guidance", desc: "Maintain regulatory compliance and secure cloud workloads with confidence." },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="rounded-lg border border-[#444955] bg-[#111215] p-5 min-h-[210px]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-[22px] mb-2">{card.title}</h3>
                  <p className="text-[16px] text-gray-400">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
           
          

<div className="bg-black text-white px-6 sm:px-16 py-20 relative">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">
    {/* Left Section */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-[48px] font-extrabold leading-tight text-transparent bg-clip-text bg-[radial-gradient(425.56%_425.56%_at_50%_50%,#8076F4_0%,#FFFFFF_9.96%)]">
        Proven Impact with <br /> Measurable Outcomes
      </h2>

      <motion.p
        className="text-gray-300 text-[20px] mt-6 max-w-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Our cloud support isn’t just responsive — it’s <br /> results driven. These metrics reflect the <br />
        efficiency, reliability, and trust our clients <br /> experience every day.
      </motion.p>

      <motion.a
        href="#"
        className="inline-flex items-center gap-2 text-white font-medium group"
        style={{ marginTop: "60px", fontSize: "16px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Get Started
        <div className="relative w-[56px] h-[56px]" style={{ marginLeft: "-15px" }}>
          <img src={Ellipse} alt="ellipse" className="w-full h-full" />
          <span className="absolute inset-0 flex items-center justify-center text-white text-xl" style={{ marginLeft: "-15px" }}>
            <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
          </span>
        </div>
      </motion.a>
    </motion.div>

    {/* Right Section */}
    <motion.div
      className="grid grid-cols-2 gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 }
        }
      }}
    >
      {[ 
        { img: img1, text: "First-Contact <br /> Resolution Rate", bg: "bg-black border border-dotted border-[#444955]" },
        { img: img2, text: "Avg. Critical <br /> Response Time", bg: "bg-[#6C40D6]" },
        { img: img3, text: "Reduction in Support <br /> Overhead", bg: "bg-[#2DA67C]" },
        { img: img4, text: "Client Uptime <br /> Achieved", bg: "bg-black border border-dotted border-[#444955]" }
      ].map((card, index) => (
        <motion.div
          key={index}
          className={`w-[296px] h-[183px] rounded-[8px] p-6 flex flex-col items-center justify-center text-center ${card.bg}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <img src={card.img} alt="Stat Icon" className="mb-8" />
          <p className={`text-[18px] ${card.bg.includes("bg-black") ? "text-gray-300" : "text-white"}`} dangerouslySetInnerHTML={{ __html: card.text }} />
        </motion.div>
      ))}
    </motion.div>

    {/* Arrow Image between columns */}
    <motion.img
      src={reverseArrow}
      alt="Middle Arrow"
      className="absolute w-[79.6px] h-[69px] top-[150px] left-[450px]"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
    />
  </div>
</div>


<div
  className="mx-auto w-[1296px] h-[564px] bg-black px-6 py-10 text-white"
  style={{ marginTop: "60px", marginBottom: "120px" }}
>
  {/* Heading */}
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-center text-[48px] font-extrabold">
      <span className="text-transparent bg-clip-text bg-[radial-gradient(254%_254%_at_50%_50%,#A49CFD_0%,#FFFFFF_9.99%)]">
        Industries We Support
      </span>
    </h2>

    <p className="text-gray-400 text-[20px] mt-2 leading-snug">
      From regulatory compliance to seasonal <br /> traffic spikes we’ve supported it all.
    </p>
  </motion.div>

  {/* Image Card */}
  <motion.div
    className="relative rounded-xl overflow-hidden shadow-lg w-full h-[360px] bg-gray-800 border border-gray-400"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9 }}
    viewport={{ once: true }}
  >
    <motion.img
      src={frame383}
      alt="Industry Background"
      className="w-[1296px] h-[564px] object-cover"
      initial={{ scale: 1.1 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    />

    {/* Text Overlay */}
    <motion.div
      className="absolute left-8 bottom-28 text-left max-w-[480px]"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-[48px] font-semibold text-white">Healthcare</h3>
      <p className="text-[20px] text-white mt-2 leading-relaxed">
        Support tailored for data-sensitive environments with strict compliance like <br /> HIPAA and high
        availability demands.
      </p>
    </motion.div>

    {/* Sector Buttons */}
    <motion.div
      className="absolute right-6 bottom-6 flex flex-wrap gap-3 justify-end"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      viewport={{ once: true }}
    >
      {["FinTech", "Healthcare", "eCommerce", "Manufacturing", "EdTech", "Logistics"].map((item, index) => (
        <motion.button
          key={item}
          className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
            item === "Manufacturing"
              ? "border-violet-400 text-violet-400"
              : "border-white text-white hover:bg-white hover:text-black"
          }`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          viewport={{ once: true }}
        >
          {item}
        </motion.button>
      ))}
    </motion.div>
  </motion.div>
</div>

        </div>
    );
};
