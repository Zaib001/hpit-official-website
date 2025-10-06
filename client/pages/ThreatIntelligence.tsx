"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import threat from "../Images/Pexels Photo by Steve Johnson.png";
import threatSvg from "../svg/Threat.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/Pexels Photo by Vika Glitter.png";
import img2 from "../Images/img.png";
import line from "../svg/new-line.svg";
import karuka from "../Images/Pexels Photo by Canva Studio.png";
import icon1 from "../svg/cardIcon1.svg";
import icon2 from "../svg/cardIcon2.svg";
import icon3 from "../svg/cardIcon3.svg";
import icon4 from "../svg/cardIcon4.svg";
import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";
import MindfulChef from "../Images/ai-img-1.png";
import Thursday from "../Images/ai-img-2.png";
import Gener8 from "../Images/ai-img-3.png";
import ring from "@/Images/ring.png";

import r1 from "@/Images/r1.png";
import r2 from "@/Images/r2.png";

import narrow from "@/svg/Arrow 1.svg";

import res1 from "@/Images/TI/res1.png";
import res2 from "@/Images/TI/res2.png";
import res3 from "@/Images/TI/res3.png";

import i1 from "../Images/TI/i1.png";
import i2 from "../Images/TI/i2.png";
import i3 from "../Images/TI/i3.png";



/* ----------------------------- Animation Helpers ---------------------------- */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const pop = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
});

/* ----------------------------- Reusable Pieces ----------------------------- */
const FadeInSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
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

const GradientHeading: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h2
    className={`font-extrabold text-balance bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text ${className}`}
  >
    {children}
  </h2>
);

const CTAButton: React.FC<{ label: string; className?: string }> = ({ label, className = "" }) => (
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

const InfoCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <motion.div
    className="rounded-lg border border-dashed border-[#444955] bg-[#0E0F12] p-6 md:p-8 relative overflow-hidden
               transition-all duration-300 hover:border-[#A49CFD]/60 hover:shadow-[0_0_0_1px_rgba(164,156,253,0.25)]
               hover:-translate-y-1"
    variants={pop()}
    whileHover={{ y: -4 }}
  >
    <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-[#A49CFD]/10 blur-2xl" />
    <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const Capability: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex gap-4">
    <div className="w-11 h-11 shrink-0 rounded-md bg-[#111] border border-[#333] grid place-items-center">
      <img src={icon} alt="" className="w-5 h-6 object-contain" />
    </div>
    <div>
      <h3 className="text-base md:text-lg font-semibold text-[#DADBDD]">{title}</h3>
      <p className="text-sm text-gray-400 mt-1 leading-relaxed">{text}</p>
    </div>
  </div>
);

const ToolBadge: React.FC<{ logo: string; label: string; imgClass?: string }> = ({ logo, label, imgClass = "" }) => (
  <div
    className="bg-[#111215] rounded-lg px-6 py-6 flex flex-col items-center justify-center border border-transparent
               transition-all duration-300 hover:border-[#A49CFD]/40 hover:shadow-[0_0_24px_rgba(164,156,253,0.08)]
               hover:-translate-y-1 group"
  >
    <img src={logo} alt={label} className={`object-contain transition duration-300 grayscale group-hover:grayscale-0 ${imgClass}`} />
    <p className="text-white text-sm md:text-base mt-4 whitespace-nowrap opacity-80 group-hover:opacity-100">{label}</p>
  </div>
);

export default function ThreatIntelligence() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Hero Section */}
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
                  Anticipate Attacks. Neutralize Risk.
                  <br /> Strengthen Resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Actionable Intelligence Section */}
      <FadeInSection delay={0.2}>
        <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Text Content */}
            <div className="space-y-6">
              <h2 className="font-extrabold mb-6">
                <span className="text-[42px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                  Actionable Intelligence for Proactive Cyber Defense
                </span>
              </h2>
              <p
                className="text-gray-300 text-[18px] leading-relaxed"
                style={{ marginTop: "30px" }}
              >
                Modern threats evolve faster than traditional defenses can
                respond. HPIT’s Threat Intelligence service empowers
                organizations with real-time insights into threat actors,
                tactics, and vulnerabilities — enabling informed, preventive
                action instead of reactive recovery.
              </p>
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

      {/* Know the Threat Section */}
      <FadeInSection delay={0.3}>
        <div className="bg-black text-white px-6 py-16 sm:px-12 lg:px-[120px]">
          <div className="max-w-6xl">
            <h2 className="text-[32px] sm:text-[48px] font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]">
                Know the Threat Before
                <br /> It Hits
              </span>
            </h2>
            <p className="text-gray-400 text-[14px] mt-2 max-w-xl">
              Anticipate adversaries, decode their tactics,
              <br /> and disrupt attacks before they begin.
            </p>
          </div>

          <div className="mt-12 flex flex-col lg:flex-row gap-10 items-start">
            <motion.div
              className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={karuka}
                alt="Cloud Support Team"
                className="w-[485px] h-[591px] object-cover"
              />
            </motion.div>

            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex items-start gap-4">
                <img
                  src={line}
                  alt="Vertical Line"
                  className="h-[56px] w-auto mt-1"
                />
                <p className="text-gray-300 text-[20px]">
                  Understanding the evolving nature of cyber threats
                  <br /> is key to staying protected and ahead of the curve.
                </p>
              </div>

              {/* Cards */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                style={{ marginTop: "80px" }}
              >
                {[
                  {
                    title: "Rise of Targeted Threats",
                    desc: "APTs and industry-specific attacks are becoming more frequent and precise.",
                    icon: icon2,
                  },
                  {
                    title: "Constantly Evolving Global Risks",
                    desc: "New malware and exploits appear daily across regions and sectors.",
                    icon: icon1,
                  },
                  {
                    title: "Better Insight, Faster Decisions",
                    desc: "Intelligence-driven response improves prioritization and reduces noise.",
                    icon: icon3,
                  },
                  {
                    title: "Proactive Defense Saves More",
                    desc: "Preventing breaches reduces cost, downtime, and reputation loss.",
                    icon: icon4,
                  },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-lg border border-[#444955] bg-[#111215] p-5 min-h-[210px] overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.2 }}
                  >
                    <img
                      src={card.icon}
                      className="absolute bottom-5 right-0 top-[100px] w-[120px] h-[120px] pointer-events-none z-0"
                    />
                    <div className="relative z-10">
                      <h3 className="font-semibold text-[20px] mb-2">
                        {card.title}
                      </h3>
                      <p className="text-[16px] text-gray-400">{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Capabilities Section */}
      <FadeInSection delay={0.4}>
        <div className="text-white px-4 sm:px-8 lg:px-20 py-16 bg-black">
          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <div className="mb-12">
              <h2 className="text-[48px] font-extrabold leading-snug">
                <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">Our <br></br> Capabilities</span>
              </h2>
              <p className="text-gray-300 mt-4 text-[20px] max-w-xl">
                HPIT transforms raw threat data into real-time insights that empower decisive security action across your organization.
              </p>
            </div>

            {/* Cards Grid with Border */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-600 rounded-md overflow-hidden" style={{ padding: "25px", marginTop: "80px" }}>

              {/* Card 1 */}
              <div className="relative p-6">
                <div className="absolute top-10 bottom-10 right-0 border-r border-dotted border-gray-400 w-0" />
                <div className="absolute bottom-0 left-10 right-40 h-0 border-b border-dotted border-gray-400" />
                <div className="pr-4 pb-4">
                  <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Threat Actor<br></br> Profiling</h3>
                  <p className="text-[14px] text-gray-400">Understand attacker behaviour, tools,<br></br> and intent to anticipate threats.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative p-6">
                <div className="absolute top-10 bottom-10 right-0 border-r border-dotted border-gray-400 w-0" />
                <div className="absolute bottom-0 left-10 right-40 h-0 border-b border-dotted border-gray-400" />
                <div className="pr-4 pb-4">
                  <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Real-Time Threat<br></br> Feeds</h3>
                  <p className="text-[14px] text-gray-400">Stay ahead with continuous updates<br></br> on IOCs and emerging risks.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative p-6">
                <div className="absolute bottom-0 left-10 right-40 h-0 border-b border-dotted border-gray-400" />
                <div className="pr-4 pb-4">
                  <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Dark Web<br></br> Monitoring</h3>
                  <p className="text-[14px] text-gray-400">Detect leaked data and malicious activity<br></br> targeting your organisation.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="relative p-6">
                <div className="absolute top-10 bottom-10 right-0 border-r border-dotted border-gray-400 w-0" />
                <div className="pr-4 pb-4">
                  <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Sector-Specific<br></br> Intelligence</h3>
                  <p className="text-[14px] text-gray-400">Receive tailored insights aligned with<br></br> your industry’s threat profile.</p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="relative p-6">
                <div className="absolute top-10 bottom-10 right-0 border-r border-dotted border-gray-400 w-0" />
                <div className="pr-4 pb-4">
                  <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Threat Correlation & <br></br>Alerting</h3>
                  <p className="text-[14px] text-gray-400">Enhance detection by linking threat<br></br> intel to security events.</p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="relative p-6">
                <div className="pr-4 pb-4">
                  <h3 className="font-semibold text-[20px] mb-2" style={{ fontWeight: "400" }}>Threat Trend <br></br>Analytics</h3>
                  <p className="text-[14px] text-gray-400">Visualize attack patterns and<br></br> forecast risks for better planning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <motion.section
        className="w-full py-16 md:py-20 px-4 sm:px-8 lg:px-20"
        variants={fadeUp(0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <GradientHeading className="text-3xl md:text-5xl leading-tight">
              Built With the Right Tools for the Job
            </GradientHeading>
            <p className="text-gray-400 text-base md:text-lg mt-6">
              We use cutting-edge platforms and frameworks to ensure top performance.
            </p>
            <div className="mt-8">
              <CTAButton label="Get Started" />
            </div>
          </div>

          <motion.div
            className="hidden md:flex justify-center items-center"
            variants={pop(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={reverseArrow} alt="" className="w-28 h-24 opacity-80" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ToolBadge logo={group136} label="Databricks" imgClass="w-[120px] h-auto" />
            <ToolBadge logo={vector3} label="Cloudera" imgClass="w-[120px] h-auto" />
            <ToolBadge logo={group137} label="SAP" imgClass="w-[64px] h-auto" />
            <ToolBadge logo={vector4} label="OpenText" imgClass="w-[54px] h-auto" />
            <ToolBadge logo={group138} label="Dynatrace" imgClass="w-[120px] h-auto" />
            <ToolBadge logo={group134} label="AWS" imgClass="w-[110px] h-auto" />
          </div>
        </div>
      </motion.section>

      {/* Final Section */}
      <FadeInSection delay={0.5}>
        <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left: Heading + Copy + CTA */}
            <div className="space-y-6">
              <h2 className="font-extrabold">
                <span className="inline-block text-[32px] sm:text-[36px] md:text-[42px] lg:text-[42px] leading-tight bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                  Smarter Intelligence. Stronger Cyber Outcomes.
                </span>
              </h2>

              <p className="text-gray-300 text-base sm:text-[17px] md:text-[18px] leading-relaxed mt-4 sm:mt-6">
                HPIT’s Threat Intelligence delivers contextual
                <br className="hidden sm:block" /> insights to detect threats early, reduce response
                <br className="hidden sm:block" /> time, and strengthen overall security posture.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-medium group mt-10 sm:mt-12 text-[15px] sm:text-[16px]"
              >
                Get Started
                <div className="relative w-[56px] h-[56px] -ml-4">
                  <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl group-hover:translate-x-0.5 transition-transform">
                    <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                  </span>
                </div>
              </a>
            </div>

            {/* Right: Image (responsive sizing + spacing) */}
            <motion.div
              className="rounded-xl overflow-hidden flex justify-center lg:justify-end mt-6 lg:mt-0 lg:ml-20"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={img2}
                alt="Team Discussion"
                className="w-full max-w-[460px] sm:max-w-[500px] md:max-w-[520px] lg:max-w-[440px] h-auto object-cover rounded-l-sm"
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
              img: i1,
              title: "REAL-TIME INSIGHTS",
              desc: "Gain timely visibility into emerging cyber threats worldwide.",
            },
            {
              img: i2,
              title: "DATA-DRIVEN DEFENSE",
              desc: "Leverage intelligence to strengthen security decisions and responses.",
            },
            {
              img: i3,
              title: "PROACTIVE PROTECTION",
              desc: "Stay ahead of attackers with predictive threat analysis.",
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

              {/* Illustration */}
              <img
                src={res1}
                alt="Ring"
                className="w-full max-w-[382px] h-[310px] sm:h-[260px] object-contain"
              />
            </motion.div>

            {/* Card 1 */}
            <motion.article
              className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] 
        p-6 flex flex-col justify-between min-h-[320px] 
        shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset]
        transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,90,90,0.2)]"
              whileHover={{ y: -2 }}
            >
              <div>
                <div className="mb-4">
                  <img src={res2} alt="" className="h-16 w-16 object-contain" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">Quantum Falcon</h3>
                <p className="mt-3 text-white/75 text-sm leading-6">
                  Offers tiered packages for model protection: from basic risk dashboards
                  to full-scale quantum-driven insights with checks and SIEM integration.
                </p>
              </div>

              <button
                type="button"
                className="group mt-6 inline-flex items-center gap-3 text-white/85 self-start"
              >
                <span className="underline-offset-4 group-hover:underline">
                  Learn more
                </span>
                <div className="relative w-[56px] h-[56px]">
                  <img src={Ellipse} alt="ellipse" className="w-full h-full transition-transform duration-500 group-hover:scale-110" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={narrow}
                      alt="arrow"
                      className="w-[11.5px] h-[20px] transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </button>
            </motion.article>

            {/* Card 2 */}
            <motion.article
              className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] 
        p-6 flex flex-col justify-between min-h-[320px] 
        shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset]
        transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,90,90,0.2)]"
              whileHover={{ y: -2 }}
            >
              <div>
                <div className="mb-4">
                  <img src={res3} alt="" className="h-16 w-16 object-contain" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Vulnerability Assessment
                </h3>
                <p className="mt-3 text-white/75 text-sm leading-6">
                  Analysis of your cryptographic infrastructure to find
                  quantum-exposed weaknesses.
                </p>
              </div>

              <button
                type="button"
                className="group mt-6 inline-flex items-center gap-3 text-white/85 self-start"
              >
                <span className="underline-offset-4 group-hover:underline">
                  Learn more
                </span>
                <div className="relative w-[56px] h-[56px]">
                  <img src={Ellipse} alt="ellipse" className="w-full h-full transition-transform duration-500 group-hover:scale-110" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={narrow}
                      alt="arrow"
                      className="w-[11.5px] h-[20px] transition-transform duration-500 group-hover:translate-x-1"
                    />
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
