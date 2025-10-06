"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* ------------------------------- ASSETS ---------------------------------- */
import threat from "../Images/artificial-img.png";
import threatSvg from "../svg/Artificial.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import In from "../Images/in.jpg";

import img1 from "../Images/artificia-img-2.png";
import blue from "../Images/blue.png";

import MindfulChef from "../Images/ai-img-1.png";
import Thursday from "../Images/ai-img-2.png";
import Gener8 from "../Images/ai-img-3.png";

import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";
import narrow from "@/svg/Arrow 1.svg";
import img3 from "../Images/a2.png";
import sixtypercent from "../Images/four.png";
import thirtypercent from "../Images/thes.png";

import res1 from "@/Images/AI/res1.png";
import res2 from "@/Images/AI/res2.png";
import res3 from "@/Images/AI/res3.png";

import i1 from "../Images/AI/i1.png";
import i2 from "../Images/AI/i2.png";
import i3 from "../Images/AI/i3.png";

/* ----------------------------- ANIM HELPERS ------------------------------ */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});
const pop = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
});

/* ------------------------------ REUSABLE UI ------------------------------ */
const FadeInSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeUp(delay)}>
      {children}
    </motion.div>
  );
};

export default function ArtificialIntelligence() {
  const industries = [
    {
      name: "Healthcare",
      image: In,
      heading: "Healthcare",
      desc: "Empower medical systems with secure, scalable cloud infrastructure — ensuring seamless data sharing, compliance, and faster patient outcomes with real-time analytics.",
    },
    {
      name: "FinTech",
      image: In,
      heading: "FinTech",
      desc: "Transform financial systems with AI-driven automation, real-time fraud detection, and cloud-native scalability for secure, compliant operations.",
    },
    {
      name: "eCommerce",
      image: In,
      heading: "eCommerce",
      desc: "Drive global commerce with AI personalization, real-time inventory sync, and optimized customer experiences on scalable cloud systems.",
    },
    {
      name: "Manufacturing",
      image: In,
      heading: "Manufacturing",
      desc: "Modernize ERP systems and supply chain tools to enable smart manufacturing, real-time analytics, and efficient production workflows on the cloud.",
    },
    {
      name: "EdTech",
      image: In,
      heading: "EdTech",
      desc: "Build engaging, data-driven learning platforms with real-time progress tracking and secure digital infrastructure.",
    },
    {
      name: "Logistics",
      image: In,
      heading: "Logistics",
      desc: "Optimize global supply chains with predictive analytics, IoT integration, and seamless delivery tracking powered by cloud technology.",
    },
  ];
  const [active, setActive] = useState(industries[0]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* -------------------------------- HERO ------------------------------- */}
      <FadeInSection>
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `url(${threat})`,
          }}
        >
          <div
            className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto mt-24">
              <div className="max-w-2xl">
                <h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-1">
                  <img src={threatSvg} alt="Company" />
                </h2>
                <br />
                <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                  Intelligence
                </h2>
                <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                  Turning Intelligence Into Impact
                  <br /> Faster
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ------------------------- SECTION: INTRO COPY ----------------------- */}
      <FadeInSection delay={0.2}>
        <section className="text-white px-4 sm:px-8 lg:px-20 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-extrabold text-[32px] sm:text-[40px] leading-tight">
                <span className="inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                  From Models to
                  <br /> Meaningful Change
                </span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                HPIT’s AI strategy goes beyond algorithms. We help you unlock value from data,
                embed intelligence into operations, and scale responsibly — with human-centered
                outcomes and measurable impact at every stage.
              </p>

              <a
                href="#"
                className="group inline-flex items-center gap-2 text-white font-medium rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A49CFD]"
              >
                <span className="transition-colors group-hover:text-[#A49CFD]">Get Started</span>
                <span className="relative w-14 h-14 -ml-2 inline-flex items-center justify-center">
                  <img src={Ellipse} alt="" className="w-full h-full" />
                  <img src={arrow} alt="" className="absolute w-[11.5px] h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>

            <motion.div
              className="rounded-xl overflow-hidden justify-self-center"
              variants={pop(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={img1}
                alt="Team Discussion"
                className="w-full max-w-[600px] h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-[1.01]"
              />
            </motion.div>
          </div>
        </section>
      </FadeInSection>

      {/* --------------------------- WHAT YOU GAIN --------------------------- */}
      <section className="relative bg-[#050505] py-20 md:py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text */}
          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-left w-full max-w-[680px]"
          >
            <h2 className="text-3xl sm:text-5xl md:text-[56px] font-extrabold leading-tight mb-8">
              <span className="text-white">What </span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                You
              </span>
              <span className="text-white"> Gain with</span>
              <br />
              <span className="text-white">Enterprise AI</span>
            </h2>

            <ul className="space-y-5 text-[#DADBDD] text-base md:text-lg leading-relaxed">
              {[
                "Smarter decision-making, real-time",
                "Intelligent process automation",
                "Predictive risk & opportunity management",
                "Data-driven product & service innovation",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl mt-1">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Illustration */}
          <motion.div
            variants={pop(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <img
              src={blue}
              alt="Enterprise AI Illustration"
              className="w-[320px] sm:w-[420px] lg:w-[520px] h-auto object-contain drop-shadow-[0_0_60px_rgba(93,71,255,0.5)]"
            />
          </motion.div>
        </div>
      </section>

      {/* --------------------------- CAPABILITIES ---------------------------- */}
      <motion.section
        className="w-full bg-black text-white py-20 px-6 md:px-12 mx-auto max-w-[1380px]"
        variants={fadeUp(0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto mb-12">
          <h2 className="text-3xl sm:text-[44px] md:text-[48px] font-extrabold leading-tight">
            HPIT AI{" "}
            <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] text-transparent bg-clip-text">
              Capabilities
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-2 leading-snug max-w-[560px]">
            Scalable AI solutions built with responsibility and precision.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {[
            {
              img: MindfulChef,
              title: "Machine Learning Engineering",
              desc: "Design, train, and deploy custom models with full lifecycle MLOps.",
            },
            {
              img: Thursday,
              title: "Natural Language & Speech AI",
              desc: "Enable smarter interactions with chatbots, voice assistants, and NLP tools.",
            },
            {
              img: Gener8,
              title: "Responsible AI Governance",
              desc: "Ensure fairness, explainability, and compliance across all AI deployments.",
            },
          ].map((card, i) => (
            <motion.article
              key={card.title}
              className="w-full max-w-[416px] min-h-[520px] bg-[#22252B] border-b-4 border-[#DADBDD] rounded-[6px]
                         overflow-hidden flex flex-col justify-between shadow-md transition-all duration-300
                         hover:shadow-[0_0_24px_rgba(169,92,236,0.28)] hover:-translate-y-1"
              variants={pop(0.08 * i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src={card.img} alt={card.title} className="w-full h-[260px] object-cover" />
              <div className="flex flex-col justify-between flex-grow px-6 py-6">
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold mb-3 text-[#ECEDEE]">
                    {card.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-[15px] leading-relaxed">{card.desc}</p>
                </div>
                <div className="flex justify-end items-end">
                  <button
                    className="mt-6 flex items-center text-[#ECEDEE] text-[15px] font-medium
                               hover:text-[#E50000] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50000]/60 rounded-full"
                  >
                    <span>Learn more</span>
                    <span className="relative w-14 h-14 inline-flex items-center justify-center">
                      <img src={Ellipse} alt="" className="w-full h-full" />
                      <img src={narrow} alt="" className="absolute w-[11.5px] h-5" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Nav Arrows */}
        <motion.div
          className="flex justify-end mt-12 space-x-4"
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button
            className="w-12 h-12 border border-[#E50000] rounded-full grid place-items-center
                       hover:bg-[#E50000] transition group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50000]/60"
          >
            <span className="text-[#E50000] group-hover:text-white text-xl leading-none">‹</span>
          </button>
          <button
            className="w-12 h-12 border border-[#E50000] rounded-full grid place-items-center
                       hover:bg-[#E50000] transition group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50000]/60"
          >
            <span className="text-[#E50000] group-hover:text-white text-xl">›</span>
          </button>
        </motion.div>
      </motion.section>

      {/* --------------------------- REAL WORLD IMPACT ----------------------- */}
      <section className="px-4 sm:px-8 lg:px-20">
        <div className="flex justify-center items-center mt-16">
          <h2
            className="text-center font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.15]
                       bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent"
          >
            Real World Impact
          </h2>
        </div>
        <div className="flex justify-center items-center mt-3">
          <p className="text-center font-poppins font-medium text-base md:text-[20px] leading-tight tracking-[1%] text-[#DADBDD] opacity-100 max-w-[520px]">
            Industry use cases with measurable ROI
          </p>
        </div>

        <motion.div
          className="mx-auto bg-[#000] border border-[#333] rounded-[8px] overflow-hidden relative text-white mt-10 mb-20
                     w-full max-w-[1296px] min-h-[420px] md:min-h-[520px] lg:min-h-[600px]"
          variants={fadeUp(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Background Image */}
          <motion.img
            key={(active.image as unknown as string) || "bg"}
            src={active.image || In}
            alt={active.name}
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Text Content */}
          <motion.div
            key={active.name}
            className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 max-w-[680px]"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="font-semibold text-3xl md:text-[40px] lg:text-[48px] leading-tight text-[#F5F6F6]">
              {active.heading}
            </h3>
            <p className="mt-3 md:mt-4 text-sm md:text-[18px] leading-relaxed tracking-[0.3%] text-[#ECEDEE]">
              {active.desc}
            </p>
          </motion.div>

          {/* Category Buttons */}
          <div className="absolute z-10 right-4 md:right-6 bottom-4 md:bottom-6 max-w-[calc(100%-2rem)] md:max-w-[60%]">
            <div className="flex flex-wrap justify-end gap-2 md:gap-3">
              {industries.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => setActive(item)}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-[18px] border text-[12px] md:text-[14px] font-medium transition
                    ${active.name === item.name
                      ? "border-violet-400 text-violet-400"
                      : "border-[#ECEDEE] text-[#ECEDEE] hover:bg-white hover:text-black"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ----------------------------- TOOLS GRID ---------------------------- */}
      <motion.section
        className="w-full bg-black text-white py-16 px-6 md:px-12"
        variants={fadeUp(0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <motion.div variants={fadeUp(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold mb-6 leading-tight">
              <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text">
                Built With the Right Tools for the Job
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-[20px] mb-8 md:mt-6">
              We use cutting-edge frameworks and platforms to ensure top performance.
            </p>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-white font-medium rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A49CFD]"
            >
              <span className="transition-colors group-hover:text-[#A49CFD]">Get Started</span>
              <span className="relative w-14 h-14 -ml-2 inline-flex items-center justify-center">
                <img src={Ellipse} alt="" className="w-full h-full" />
                <img
                  src={narrow}
                  alt=""
                  className="absolute w-[11.5px] h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </motion.div>

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
            <LogoCard logo={group136} label="Databricks" imgClass="w-[120px]" />
            <LogoCard logo={vector3} label="Cloudera" imgClass="w-[120px]" />
            <LogoCard logo={group137} label="SAP" imgClass="w-[60px]" />
            <LogoCard logo={vector4} label="OpenText" imgClass="w-[50px]" />
            <LogoCard logo={group138} label="Dynatrace" imgClass="w-[120px]" />
            <LogoCard logo={group134} label="AWS" imgClass="w-[110px]" />
          </div>
        </div>
      </motion.section>

      {/* ----------------------- RESULTS + ILLUSTRATION ---------------------- */}
      <FadeInSection delay={0.5}>
        <section className="text-white px-4 sm:px-8 lg:px-20 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-extrabold">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] inline-block bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent leading-tight">
                  Resilience That Protects and Propels
                </span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base md:text-[18px] leading-relaxed">
                With HPIT’s enterprise-ready AI solutions, clients achieve faster innovation cycles, reduced operational burdens,
                and smarter customer engagement — all while staying compliant in complex industries.
              </p>

              {/* KPI Bar */}
              <motion.div
                className="relative mt-6 grid grid-cols-1 sm:grid-cols-3 border border-[#333740] rounded-md overflow-hidden"
                variants={fadeUp(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#333740]">
                  <div className="text-center px-4 sm:px-6 py-4">
                    <img src={sixtypercent} alt="" className="w-10 h-auto mx-auto" />
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      reduction in diagnostic turnaround time
                    </p>
                  </div>
                  <div className="text-center px-4 sm:px-6 py-4">
                    <img src={thirtypercent} alt="" className="w-10 h-auto mx-auto" />
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      fewer false negatives in imaging
                    </p>
                  </div>
                  <div className="text-center px-4 sm:px-6 py-4">
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      Enhanced care quality and early disease detection
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={pop(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <img src={img3} alt="Illustration" className="w-full h-auto object-contain rounded-lg" />
            </motion.div>
          </div>
        </section>
      </FadeInSection>

      {/* ---------------------------- RELATED INSIGHTS ----------------------- */}
      <motion.section
        className="w-full bg-black text-white py-20 px-6 md:px-12 mx-auto max-w-[1350px]"
        variants={fadeUp(0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-left mb-8 md:mb-12">
          <h2
            className="font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.15]
                       bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]
                       text-transparent bg-clip-text"
          >
            Related Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {[
            { img: i1, title: "SMART AUTOMATION", desc: "See how AI streamlines workflows and boosts efficiency." },
            { img: i2, title: "PREDICTIVE ANALYTICS", desc: "Discover how data-driven insights help forecast trends and outcomes." },
            { img: i3, title: "INTELLIGENT SOLUTIONS", desc: "Learn how AI innovations create smarter, adaptive applications." },
          ].map((card, i) => (
            <motion.article
              key={card.title}
              className="w-full max-w-[400px] min-h-[520px] bg-[#22252B] border-b-4 border-[#DADBDD] rounded-[6px]
                         overflow-hidden flex flex-col justify-between shadow-md transition-all duration-300
                         hover:shadow-[0_0_24px_rgba(169,92,236,0.28)] hover:-translate-y-1"
              variants={pop(0.08 * i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src={card.img} alt={card.title} className="w-full h-[260px] object-cover" />
              <div className="flex flex-col justify-between flex-grow px-6 py-6">
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold mb-3 text-[#ECEDEE]">
                    {card.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-[15px] leading-relaxed">{card.desc}</p>
                </div>
                <div className="flex justify-end items-end">
                  <button
                    className="mt-6 flex items-center text-[#ECEDEE] text-[15px] font-medium
                               hover:text-[#E50000] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50000]/60 rounded-full"
                  >
                    <span>Learn more</span>
                    <span className="relative w-14 h-14 inline-flex items-center justify-center">
                      <img src={Ellipse} alt="" className="w-full h-full" />
                      <img src={narrow} alt="" className="absolute w-[11.5px] h-5" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="flex justify-end mt-12 space-x-4"
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button
            className="w-12 h-12 border border-[#E50000] rounded-full grid place-items-center
                       hover:bg-[#E50000] transition group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50000]/60"
          >
            <span className="text-[#E50000] group-hover:text-white text-xl leading-none">‹</span>
          </button>
          <button
            className="w-12 h-12 border border-[#E50000] rounded-full grid place-items-center
                       hover:bg-[#E50000] transition group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50000]/60"
          >
            <span className="text-[#E50000] group-hover:text-white text-xl">›</span>
          </button>
        </motion.div>
      </motion.section>

      {/* -------------------------------- RESOURCES -------------------------- */}
      <section className="bg-black text-white mx-auto">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-6 items-start">
            {/* Left: Title + Illustration */}
            <motion.div className="relative" variants={fadeUp(0.05)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold mb-6">Resources</h2>
              <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-[#FF5A5A] blur-[10px] opacity-80" />
              <img src={res1} alt="Ring" className="w-full max-w-[382px] h-auto object-contain" />
            </motion.div>

            {/* Card 1 */}
            <motion.article
              className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset]"
              whileHover={{ y: -3 }}
              variants={pop(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <img src={res2} alt="" className="h-16 w-16 object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">Machine Learning Platforms</h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                Tools like TensorFlow, PyTorch, and AWS SageMaker enable building, training, and deploying machine learning models at scale.
              </p>
              <a href="#" className="group mt-6 inline-flex items-center gap-3 text-white/85">
                <span className="underline-offset-4 group-hover:underline">Learn more</span>
                <span className="relative w-14 h-14">
                  <img src={Ellipse} alt="" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    <img src={narrow} alt="" className="w-[11.5px] h-5" />
                  </span>
                </span>
              </a>
            </motion.article>

            {/* Card 2 */}
            <motion.article
              className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset]"
              whileHover={{ y: -3 }}
              variants={pop(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <img src={res3} alt="" className="h-16 w-16 object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">AI-Powered Automation</h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                AI-driven automation solutions optimize workflows, reduce manual effort, and improve efficiency across business operations.
              </p>
              <a href="#" className="group mt-6 inline-flex items-center gap-3 text-white/85">
                <span className="underline-offset-4 group-hover:underline">Learn more</span>
                <span className="relative w-14 h-14">
                  <img src={Ellipse} alt="" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    <img src={narrow} alt="" className="w-[11.5px] h-5" />
                  </span>
                </span>
              </a>
            </motion.article>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------------------------ SUBCOMPONENTS ---------------------------- */
function LogoCard({ logo, label, imgClass = "" }: { logo: string; label: string; imgClass?: string }) {
  return (
    <div
      className="bg-[#111215] rounded-lg px-6 py-6 flex flex-col items-center justify-center border border-transparent
                 transition-all duration-300 hover:border-[#A49CFD]/40 hover:shadow-[0_0_24px_rgba(164,156,253,0.08)] hover:-translate-y-1 group"
    >
      <img src={logo} alt={label} className={`object-contain transition duration-300 grayscale group-hover:grayscale-0 ${imgClass}`} />
      <p className="text-white text-sm md:text-base mt-4 whitespace-nowrap opacity-80 group-hover:opacity-100">{label}</p>
    </div>
  );
}
