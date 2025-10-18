"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import unplash from "../Images/unsplash_mT7lXZPjk7U.png";
import zero from "../svg/Zero.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/lock1.png";
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
      <PaddingWrapper>
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
                  {[{ icon: sv3, title: "Micro Segmentation", desc: "Isolate systems to prevent lateral threat movement." },
                  { icon: sv4, title: "Policy-Based Access", desc: "Grant access based on context and behavior." }]
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
                {[{ icon: sv1, title: "Identity & Access Intelligence", desc: "Verify every user with adaptive authentication checks." },
                { icon: sv2, title: "Device Trust", desc: "Allow only compliant and secured devices access." },
                { icon: sv5, title: "Continuous Monitoring", desc: "Detect and respond to threats in real-time." },
                { icon: sv6, title: "Visibility & Analytics", desc: "Gain deep insights from user and system activity." }]
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
