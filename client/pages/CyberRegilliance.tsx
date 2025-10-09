"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img3 from "../svg/Frame 458.svg";

import threat from "../Images/reg-img1.png";
import threatSvg from "../svg/Cyber.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/reg-img2.png";
import img from "../Images/reg-img3.png";
import forwardArrow from "../svg/Group 15 (1).svg";
import one from "../svg/Frame 275.svg";
import two from "../svg/Frame 277 (1).svg";
import three from "../svg/Frame 278 (1).svg";
import four from "../svg/Frame 279 (1).svg";
import five from "../svg/Frame 280 (1).svg";
import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import card from "../Images/el.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";
import sixtypercent from "../Images/n.png";
import thirtypercent from "../Images/hun.png";
import threex from "../Images/three.png";

import narrow from "@/svg/Arrow 1.svg";

import res1 from "@/Images/CR/res1.png";
import res2 from "@/Images/CR/res2.png";
import res3 from "@/Images/CR/res3.png";

import i1 from "../Images/CR/i1.png";
import i2 from "../Images/CR/i2.jpg";
import i3 from "../Images/CR/i3.png";
import InsightSection from "@/components/InsightSection";


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
    className={`group inline-flex text-white items-center gap-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A49CFD] rounded-full ${className}`}
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

const cards = [
  {
    img: i1,
    title: "BUSINESS CONTINUITY",
    desc: "Ensure operations stay uninterrupted during cyber disruptions.",
  },
  {
    img: i2,
    title: "ADAPTIVE DEFENSE",
    desc: "Learn how flexible strategies strengthen protection against evolving threats.",
  },
  {
    img: i3,
    title: "RAPID RECOVERY",
    desc: "Discover approaches to quickly restore systems after an attack.",
  },
    {
    img: i2,
    title: "ADAPTIVE DEFENSE",
    desc: "Learn how flexible strategies strengthen protection against evolving threats.",
  },
];


export default function CyberRegilliance() {
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
            <div className="mt-24 max-w-7xl mx-auto">
              <div className="max-w-2xl">
                <h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-1">
                  <img src={threatSvg} alt="Company" />
                </h2>
                <br />
                <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                  Resilience
                </h2>
                <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                  Recover Smarter. Operate Stronger.
                  <br /> Evolve Continuously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Section 2 */}
      <FadeInSection delay={0.2}>
        <div className="w-full relative bg-black text-white px-6 sm:px-10 lg:px-28 py-20 mx-auto max-w-[1480px]  ">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="w-full font-extrabold mb-6">
                <span className="text-[44px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                  Building Cyber Resilience Beyond Compliance
                </span>
              </h2>
              <p
                className="text-gray-300 text-[18px] leading-relaxed"
              >
                Cyber threats are no longer rare events—they’re persistent,
                evolving, and business-disruptive. HPIT’s Cyber Resilience
                service helps you withstand, respond to, and recover from
                attacks while maintaining critical operations. We go beyond
                cybersecurity to ensure operational continuity under pressure.
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
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-[11.5px] h-[20px]"
                    />
                  </span>
                </div>
              </a>
            </div>

            <motion.div
              className="rounded-xl overflow-hidden mx-auto max-w-[1480px]"
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

      {/* === Real-World Risks (same layout on LG+, responsive on small, with motion & hover) === */}
      <section className="relative bg-black text-white px-4 sm:px-10 lg:px-28 py-16 mx-auto">
        {/* Heading Section */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-[56px] font-extrabold leading-tight mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Real-World Risks
            </span>{" "}
            We Help You With
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Designed for Today’s Most Disruptive Scenarios
          </p>
        </div>

        {/* Grid Section (LG keeps your exact flex layout; below LG stacks cleanly) */}
        <div className="grid grid-cols-1 gap-6 lg:flex lg:gap-6">
          {/* Column 1 */}
          <div className="flex flex-col">
            {/* Ransomware Outbreaks */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-[457px] rounded-[4px] border border-[#333] bg-[#0A0A0A]
                   p-6 sm:p-8 flex flex-col justify-center transition hover:shadow-lg hover:-translate-y-1"
              style={{ minHeight: "307px" }} // preserve feel on smaller screens
            >
              <div className="mt-10 sm:mt-16 lg:mt-28 space-y-3">
                <h3 className="text-2xl md:text-[28px] leading-8 font-semibold text-[#DADBDD]">
                  Ransomware Outbreaks
                </h3>
                <p className="text-[#ECEDEE] text-base md:text-[20px] leading-7 md:leading-8">
                  Protect data with backups, rapid response, and recovery workflows.
                </p>
              </div>
            </motion.div>

            <br className="hidden lg:block" />

            {/* Supply Chain Incidents */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="col-span-1 lg:col-span-1 p-6 sm:p-8 w-full lg:w-[457px] rounded-md border border-[#333]
                   bg-gradient-to-r from-[#A95CEC] to-[#DA22FF] flex flex-col justify-center
                   transition hover:shadow-lg hover:-translate-y-1"
              style={{ minHeight: "236px" }}
            >
              <h3 className="text-2xl md:text-[28px] leading-8 font-semibold text-white mb-2">
                Supply Chain Incidents
              </h3>
              <p className="text-white/90 text-base md:text-[20px] leading-7 md:leading-8">
                Contain risks from third-party software and partners.
              </p>
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {/* Critical Infrastructure Downtime */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="col-span-1 lg:col-span-2 rounded-md border border-[#333] bg-[#0A0A0A]
                   p-6 sm:p-8 w-full lg:w-[807px] flex flex-col justify-center
                   transition hover:shadow-lg hover:-translate-y-1"
              style={{ minHeight: "214px" }}
            >
              <h3 className="text-2xl md:text-[28px] leading-8 font-semibold text-[#DADBDD] mb-2">
                Critical Infrastructure Downtime
              </h3>
              <p className="text-[#ECEDEE] text-base md:text-[20px] leading-7 md:leading-8 w-full lg:w-[675px]">
                Ensure 24/7 access to essential systems — including OT, ICS, and ERP —
                even during widespread outages or targeted cyberattacks.
              </p>
            </motion.div>



            {/* Two cards row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cloud Failures */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="rounded-md border border-[#333] bg-[#0A0A0A] p-6 sm:p-8 w-full lg:w-[389.5px]
                     flex flex-col justify-center transition hover:shadow-lg hover:-translate-y-1"
                style={{ minHeight: "328px" }}
              >
                <div className="mt-10 sm:mt-16 lg:mt-28 space-y-3">
                  <h3 className="text-2xl md:text-[28px] leading-8 font-semibold text-[#DADBDD]">
                    Cloud Failures
                  </h3>
                  <p className="text-gray-400 text-base md:text-[20px] leading-7 md:leading-8">
                    Ensure multi-region recovery and cloud failover strategies.
                  </p>
                </div>
              </motion.div>

              {/* Insider Breaches */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-md border border-[#333] bg-[#0A0A0A] p-6 sm:p-8 w-full lg:w-[389.5px]
                     flex flex-col justify-center overflow-hidden transition hover:shadow-lg hover:-translate-y-1"
                style={{ minHeight: "328px" }}
              >
                <img
                  src={card}
                  alt="Decoration"
                  className="absolute -top-10 -right-10 w-[202px] h-[202px] object-contain opacity-90"
                />
                <div className="mt-28 gap-3">
                  <h3 className="text-[28px] leading-8 font-semibold text-[#DADBDD] mb-2 relative z-10">
                    Insider Breaches
                  </h3><br />
                  <p className="text-gray-400 text-[20px] leading-8 relative z-10">
                    Minimize damage from credential abuse and rogue access.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>





      {/* Why Choose HPIT */}
      <FadeInSection delay={0.3}>
        <div
          className="bg-black text-white py-16 px-4 sm:px-8 lg:px-20"
          style={{ marginLeft: "40px" }}
        >
          <div className="mb-12">
            <h2 className="text-[48px] font-bold">
              <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                Why Choose HPIT
              </span>
            </h2>
            <p className="text-gray-400 mt-2 text-[20px]">
              Resilience Experts with Operational Depth
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={img}
                alt="Team discussing security"
                className="rounded-xl object-cover w-[621px] h-[414px]"
              />
            </motion.div>
            <div className="space-y-12">
              {[
                {
                  title: "Multi-Layer Expertise",
                  desc: "Integrated strategies across IT, OT, and cloud environments.",
                },
                {
                  title: "Tailored for Every Scale",
                  desc: "Resilience solutions designed for both startups and global enterprises.",
                },
                {
                  title: "Practical Execution",
                  desc: "Hands-on support that turns strategy into action.",
                },
                {
                  title: "Compliance Ready",
                  desc: "Aligned with NIST, ISO 22301, DORA, and more.",
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  className="pb-4 border-b"
                  style={{ borderColor: "#22252B" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <h3 className="font-semibold text-[20px]">{f.title}</h3>
                  <p className="text-gray-400 text-[16px]">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Framework Steps */}
      <FadeInSection delay={0.4}>
        <div
          className="text-white px-4 sm:px-8 lg:px-20 py-16"
          style={{ marginLeft: "50px" }} // kept to preserve your design
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-[48px] font-extrabold">
              <span className="text-transparent bg-clip-text bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)]">
                {" "}
                Our Cyber Resilience Framework
              </span>
            </h2>
            <p className="text-gray-400 mt-4 text-[20px] max-w-3xl mx-auto">
              A Proven Lifecycle Approach to
              <br /> Resilience
            </p>
          </div>

          {/* Made responsive without changing visual design */}
          <div className="relative mt-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[one, two, three, four, five].map((icon, i) => (
                <motion.div
                  key={i}
                  className={`flex flex-col items-start ${i % 2 !== 0 ? "sm:mt-10 md:mt-12 lg:mt-16" : ""}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                >
                  <img
                    src={icon}
                    alt={`Step ${i + 1}`}
                    className="w-[64px] h-[64px] mb-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-[24px]">
                      {["Assess", "Design", "Test", "Deploy", "improve"][i]}
                    </h4>
                    <p className="text-[16px] text-gray-400 mt-1">
                      {
                        [
                          "Identify critical assets, dependencies, and threats.",
                          "Build resilience plans and recovery architecture.",
                          "Run simulations, war games, and table-top drills.",
                          "Implement resilient infrastructure and playbooks.",
                          "Post-incident learning and resilience upgrades.",
                        ][i]
                      }
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Arrows remain visually the same, only show on md+ to avoid overlap on small screens */}
            <motion.img
              src={reverseArrow}
              alt="arrow"
              className="hidden md:block absolute left-[10%] top-[200px] w-[80px] h-[69px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.img
              src={forwardArrow}
              alt="arrow"
              className="hidden md:block absolute left-[33%] top-[105px] w-[80px] h-[69px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.img
              src={reverseArrow}
              alt="arrow"
              className="hidden md:block absolute left-[53%] top-[200px] w-[80px] h-[69px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
            <motion.img
              src={forwardArrow}
              alt="arrow"
              className="hidden md:block absolute left-[73%] top-[105px] w-[80px] h-[69px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
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
            <GradientHeading className="text-3xl md:text-5xl leading-tight ">
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
      <FadeInSection delay={0.5}>
        <section className="text-white px-4 sm:px-8 lg:px-20 py-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Copy + KPIs */}
            <div className="space-y-6">
              <h2 className="font-extrabold mb-2 md:mb-4">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                  Resilience That Protects and Propels
                </span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base md:text-[18px] leading-relaxed">
                HPIT helps you maintain uptime, reduce disruption costs, meet compliance goals, and build
                trust even during major incidents.
              </p>

              {/* KPI Bar — fully responsive, no fixed width */}
              <motion.div
                className="relative mt-6 grid grid-cols-1 sm:grid-cols-3 border border-[#333740] rounded-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Use divide-x only when in a row */}
                <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#333740]">
                  <div className="text-center px-4 sm:px-6 py-4">
                    <img src={sixtypercent} alt="60% icon" className="w-10 h-auto mx-auto" />
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      reduction in recovery time
                    </p>
                  </div>
                  <div className="text-center px-4 sm:px-6 py-4">
                    <img src={thirtypercent} alt="100% icon" className="w-10 h-auto mx-auto" />
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      backup verification success rate
                    </p>
                  </div>
                  <div className="text-center px-4 sm:px-6 py-4">
                    <img src={threex} alt="3x icon" className="w-10 h-auto mx-auto" />
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      faster crisis response coordination
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Illustration */}
            <motion.div
              className="rounded-xl overflow-hidden justify-self-center w-full"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={img3}
                alt="Resilience illustration"
                className="w-full max-w-[640px] h-auto object-contain"
              />
            </motion.div>
          </div>
        </section>
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
            <motion.article className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset]" whileHover={{ y: -2 }}>
              <div className="mb-4">
                <img src={res2} alt="" className="h-16 w-16 object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                Anticipate
              </h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                Identify risks, monitor threats, and predict potential disruptions.
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
                <img src={res3} alt="" className="h-16 w-16 object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">
                Withstand
              </h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                Maintain operations during an incident with robust security controls and redundancies.
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

