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
import PaddingWrapper from "@/components/PaddingWrapper";
import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";
import narrow from "@/svg/Arrow 1.svg";
import InsightSection from "@/components/InsightSection";
import i1 from "../Images/AD/i1.jpg";
import i2i from "../Images/AD/i2.jpg";
import i3 from "../Images/AD/i3.jpg";
import i2 from "../Images/DGT/i2.png";
import res1 from "@/Images/AD/r1.png";
import res2 from "@/Images/AD/r2.png";
import res3 from "@/Images/AD/r3.png";



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

// Reusable animation helpers
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.2 },
});
const pop = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
});


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

const cards = [
  {
    img: i2i,
    title: "AGILE METHODS",
    desc: "Discover how agile practices speed up development and reduce risks.",
  },
  {
    img: i3,
    title: "CLOUD-NATIVE APPS",
    desc: "Learn why modern apps thrive on cloud-native architecture.",
  },
  {
    img: i1,
    title: "USER-CENTRIC DESIGN",
    desc: "See how focusing on users drives better adoption and success.",
  },
  {
    img: i2,
    title: "SMART OPERATIONS",
    desc: "They optimize real-time performance by predicting issues before they occur.",
  },
];



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
<PaddingWrapper>
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
              className="w-[600px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative grid bg-gradient-to-t from-[#DA22FF11] to-[#6A94FF11] grid-cols-2 grid-rows-2 rounded-xl text-sm bg-[#111215]">
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

      <InsightSection
        title="Related Insights"
        cards={cards}
        autoSlideInterval={6000}
      />

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
              <h3 className="text-lg sm:text-xl font-semibold">HBR’s Digital Transformation</h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                A curated set of Harvard Business Review articles on digital innovation, strategy, and leadership in the digital age.
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
              <h3 className="text-lg sm:text-xl font-semibold">Digital Transformation</h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                An insightful report covering trends, challenges, and best practices for driving digital transformation.
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
      </PaddingWrapper>
    </div>
  );
}
