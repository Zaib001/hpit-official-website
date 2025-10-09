"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* ------------------------------- ASSETS ---------------------------------- */
import quantumImg from "../Images/quantum-computing.png";
import quantum from "../svg/Quantum.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/quantum-img-2.png";
import img2 from "../Images/quantum-img-3.png";
import img3 from "../Images/quantum-img-4.png";
import img4 from "../Images/quantum-img-5.png";

import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";

import narrow from "@/svg/Arrow 1.svg";

import res1 from "@/Images/QC/res1.png";
import res2 from "@/Images/QC/res2.png";
import res3 from "@/Images/QC/res3.png";

import i1 from "../Images/QC/i1.png";
import i2 from "../Images/QC/i2.png";
import i3 from "../Images/QC/i3.png";
import InsightSection from "@/components/InsightSection";

/* ----------------------------- ANIM HELPERS ------------------------------ */
const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});
const pop = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
});

/* -------------------------- REUSABLE COMPONENTS -------------------------- */
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
const cards = [
    {
        img: i1,
        title: "NEXT-GEN PROCESSING",
        desc: "Discover how quantum power accelerates complex problem-solving.",
    },
    {
        img: i2,
        title: "INNOVATION AT SCALE",
        desc: "Learn how industries leverage quantum to unlock new possibilities.",
    },
    {
        img: i3,
        title: "FUTURE IMPACT",
        desc: "See how quantum computing is shaping tomorrow’s digital landscape.",
    },
     {
        img: i1,
        title: "NEXT-GEN PROCESSING",
        desc: "Discover how quantum power accelerates complex problem-solving.",
    },
];

/* ================================= PAGE ================================== */
export default function QuantumComputing() {
    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            {/* -------------------------------- HERO ------------------------------- */}
            <FadeInSection>
                <div
                    className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                    style={{ backgroundImage: `url(${quantumImg})` }}
                >
                    <div className="relative z-10 pt-60 pb-20 px-4 sm:px-8 lg:px-20">
                        <div className="max-w-7xl mx-auto mt-24">
                            <div className="max-w-2xl">
                                <h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-2">
                                    <img src={quantum} alt="Company" />
                                </h2>
                                <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                                    Computing
                                </h2>
                                <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                                    Powering the Next Leap in<br /> Enterprise Innovation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            {/* --------------------------- INTRO BLOCK ----------------------------- */}
            <FadeInSection delay={0.2}>
                <section className="text-white px-4 sm:px-8 lg:px-20 py-16">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="font-extrabold">
                                <span className="text-3xl md:text-4xl lg:text-[44px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent leading-tight">
                                    Rethink Possibility with Quantum
                                </span>
                            </h2>
                            <p className="text-gray-300 text-base md:text-[18px] leading-relaxed">
                                Quantum computing is reshaping what's possible. At HPIT, we help enterprises
                                explore, experiment, and prepare for a future where quantum advantage redefines
                                security, optimization, and data science.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-white font-medium group rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A49CFD]/60"
                                style={{ marginTop: "20px", fontSize: "16px" }}
                            >
                                Get Started
                                <span className="relative w-[56px] h-[56px] -ml-6 inline-flex items-center justify-center">
                                    <img src={Ellipse} alt="" className="w-full h-full" />
                                    <img
                                        src={arrow}
                                        alt=""
                                        className="absolute w-[11.5px] h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                                    />
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
                                className="w-full max-w-[620px] h-auto object-contain rounded-lg shadow-lg transition-transform duration-500 hover:scale-[1.01]"
                            />
                        </motion.div>
                    </div>
                </section>
            </FadeInSection>

            {/* ------------- WHAT QUANTUM MEANS (RESPONSIVE; SAME DESKTOP LAYOUT) ------- */}
            <FadeInSection delay={0.3}>
                <section className="relative text-white py-12 md:py-16 ">
                    {/* Background Blur Ellipse (desktop only) */}
                    <div className="hidden md:block absolute w-[446px] h-[346px] right-[10%] top-[90px] bg-[#42C3FF] opacity-15 blur-[150px] pointer-events-none" />

                    {/* ===== Heading: normal flow on mobile, absolute on md+ (same coords) ===== */}
                    <div className="px-4 sm:px-8 lg:px-2">
                        <div className="max-w-[1480px] mx-auto relative">
                            <div className="md:absolute md:left-[8%] md:top-0 md:max-w-[500px]">
                                <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold mb-3 md:mb-4">
                                    <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                                        What Quantum Means for You
                                    </span>
                                </h2>
                                <p className="text-base sm:text-lg md:text-[20px] text-gray-400">
                                    Quantum computing opens new possibilities across industries — enabling faster, smarter, and more secure decision-making where classical systems fall short.
                                </p>
                            </div>

                            {/* ===== Mobile/Tablet layout (stacked grid). Desktop version stays absolute below ===== */}
                            <div className="mt-6 md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Gradient card */}
                                <div className="w-full rounded-lg transform -rotate-2 bg-gradient-to-b from-[#2657EB] to-[#C729CF] px-6 sm:px-8 py-6">
                                    <h3 className="text-[20px] sm:text-[22px] font-bold mb-3 leading-tight">
                                        Quantum-Safe<br /> Security
                                    </h3>
                                    <p className="text-[14px] sm:text-[16px]">
                                        Prepare encryption systems for post-quantum threats.
                                    </p>
                                </div>

                                {/* Dark cards (same styling as desktop, fluid width) */}
                                <div
                                    className="w-full rounded-lg border border-[#444955] px-6 py-6"
                                    style={{ background: "linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215" }}
                                >
                                    <h3 className="text-[20px] sm:text-[22px] font-bold mb-3 leading-tight">
                                        Logistics<br /> Optimization
                                    </h3>
                                    <p className="text-[14px] sm:text-[16px]">
                                        Solve complex routing, inventory, and supply chain problems at unprecedented speed.
                                    </p>
                                </div>

                                <div
                                    className="w-full rounded-lg border border-[#444955] px-6 py-6"
                                    style={{ background: "linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215" }}
                                >
                                    <h3 className="text-[20px] sm:text-[22px] font-bold mb-3 leading-tight">
                                        Pharma & Life<br /> Sciences
                                    </h3>
                                    <p className="text-[14px] sm:text-[16px]">
                                        Accelerate drug discovery through molecule simulation and pattern matching.
                                    </p>
                                </div>

                                <div
                                    className="w-full rounded-lg border border-[#444955] px-6 py-6"
                                    style={{ background: "linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215" }}
                                >
                                    <h3 className="text-[20px] sm:text-[22px] font-bold mb-3 leading-tight">
                                        Financial<br /> Modeling
                                    </h3>
                                    <p className="text-[14px] sm:text-[16px]">
                                        Enhance risk prediction and portfolio analysis with advanced probabilistic computing.
                                    </p>
                                </div>
                            </div>

                            {/* ===== Desktop layout (EXACT original absolute positions/sizes) ===== */}
                            <div className="hidden md:block relative">
                                {/* Gradient tile */}
                                <div className="absolute w-[300px] sm:w-[326px] h-[220px] right-[32%] top-[4px] bg-gradient-to-b from-[#2657EB] to-[#C729CF] rounded-lg transform -rotate-2 flex flex-col justify-center px-12">
                                    <h3 className="text-[22px] font-bold mb-6">Quantum-Safe<br /> Security</h3>
                                    <p className="text-[16px]">Prepare encryption systems for post-quantum threats.</p>
                                </div>

                                {/* Dark tiles */}
                                <div
                                    className="absolute w-[300px] sm:w-[326px] h-[220px] right-[8%] top-[10px] bg-[#111215] border border-[#444955] rounded-lg flex flex-col justify-center px-6"
                                    style={{ background: "linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215" }}
                                >
                                    <h3 className="text-[22px] font-bold mb-6">Logistics<br /> Optimization</h3>
                                    <p className="text-[16px]">Solve complex routing, inventory, and supply chain problems at unprecedented speed.</p>
                                </div>

                                <div
                                    className="absolute w-[300px] sm:w-[326px] h-[220px] right-[32%] top-[262px] bg-[#111215] border border-[#444955] rounded-lg flex flex-col justify-center px-6"
                                    style={{ background: "linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215" }}
                                >
                                    <h3 className="text-[22px] font-bold mb-6">Pharma & Life<br /> Sciences</h3>
                                    <p className="text-[16px]">Accelerate drug discovery through molecule simulation and pattern matching.</p>
                                </div>

                                <div
                                    className="absolute w-[300px] sm:w-[326px] h-[220px] right-[8%] top-[262px] bg-[#111215] border border-[#444955] rounded-lg flex flex-col justify-center px-6"
                                    style={{ background: "linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215" }}
                                >
                                    <h3 className="text-[22px] font-bold mb-6">Financial<br /> Modeling</h3>
                                    <p className="text-[16px]">Enhance risk prediction and portfolio analysis with advanced probabilistic computing.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Spacer for desktop (keeps original height); mobile uses natural flow */}
                    <div className="hidden md:block h-[500px]" />
                </section>
            </FadeInSection>


            {/* ----------------------------- CAPABILITIES -------------------------- */}
            <FadeInSection delay={0.4}>
                <section className="text-white px-4 sm:px-8 lg:px-20 py-16">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-center mb-4">
                            <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                                Our Quantum Capabilities
                            </span>
                        </h2>
                        <p className="text-gray-400 text-center mb-10 md:mb-12 text-lg md:text-[20px]">
                            HPIT brings quantum know-how together with enterprise-grade engineering to turn
                            potential into progress
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center place-items-center">
                            <div className="flex flex-col gap-8 order-2 lg:order-1 items-center lg:items-start">
                                <CapabilityCard
                                    title="Quantum Readiness Assessment"
                                    description="Identify where quantum fits in your roadmap and evaluate technical preparedness."
                                />
                                <CapabilityCard
                                    title="Hybrid Algorithm Design"
                                    description="Develop quantum-inspired solutions that combine classical and quantum computing for early value."
                                />
                            </div>

                            <motion.div
                                className="flex justify-center order-1 lg:order-2"
                                variants={pop(0.08)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <img
                                    src={img2}
                                    alt="Team Collaboration"
                                    className="rounded-xl w-full max-w-[375px] h-auto object-cover shadow-xl"
                                />
                            </motion.div>

                            <div className="flex flex-col gap-8 order-3 items-center lg:items-start">
                                <CapabilityCard
                                    title="Simulation & Testing"
                                    description="Run and validate quantum algorithms using emulators and cloud-based quantum processors."
                                />
                                <CapabilityCard
                                    title="Post-Quantum Cryptography"
                                    description="Modernize encryption systems to withstand future quantum attacks before they arrive."
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInSection>

            {/* --------------------------- WHY CHOOSE HPIT ------------------------- */}
            <FadeInSection delay={0.3}>
                <section className="relative text-white py-16 px-4 sm:px-8 lg:px-20 overflow-hidden">
                    {/* decorative bg image */}
                    <div className="absolute left-0 bottom-0 w-[320px] h-[220px] md:w-[713px] md:h-[443px] pointer-events-none z-0 opacity-50">
                        <img src={img4} className="w-full h-full object-cover" alt="Background" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto">
                        <div
                            className="relative border border-[#22252B] rounded-[8px] p-6 md:p-10"
                            style={{
                                background:
                                    "linear-gradient(103.31deg, rgba(0,0,0,0) 33.01%, rgba(26,188,254,0.2) 143.6%), #000000",
                            }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-4">
                                <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                                    Why Choose HPIT
                                </span>
                            </h2>
                            <p className="text-gray-400 mb-8 md:mb-10 max-w-2xl text-lg md:text-[20px]">
                                We combine quantum expertise with practical strategy to deliver scalable,
                                compliant, and platform-agnostic solutions that evolve with your business.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-white">
                                <WhyItem
                                    dot="#1ABCFE"
                                    title="Enterprise-Aligned Solutions"
                                    text="We don't just explore — we implement with purpose and compliance."
                                />
                                <WhyItem
                                    dot="#F5D97F"
                                    title="Technology Agnostic"
                                    text="We work across IBM Q, Microsoft Azure Quantum, and more."
                                />
                                <WhyItem
                                    dot="#FA7B7B"
                                    title="Continuous Innovation"
                                    text="Stay future-ready as quantum hardware and frameworks evolve."
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </FadeInSection>

            {/* ---------------------------- LOGO GRID ------------------------------ */}
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

            {/* ------------------------------ CTA BLOCK ---------------------------- */}
            <FadeInSection delay={0.5}>
                <section className="text-white px-4 sm:px-8 lg:px-20 py-16">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="font-extrabold">
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent leading-tight">
                                    Lead the Quantum Shift with Confidence
                                </span>
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base md:text-[18px] leading-relaxed">
                                Quantum transformation isn't a leap — it's a journey. HPIT ensures you start with
                                clarity and move with purpose. From securing today's data against tomorrow's threats
                                to accelerating innovation across R&D and operations, we help you stay ahead without
                                falling behind.
                            </p>
                        </div>

                        <motion.div variants={pop(0.08)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <img src={img3} alt="Team Discussion" className="w-full h-auto object-contain rounded-lg" />
                        </motion.div>
                    </div>
                </section>
            </FadeInSection>

            {/* --------------------------- RELATED INSIGHTS ------------------------ */}
            <InsightSection
                title="Related Insights"
                cards={cards}
                autoSlideInterval={6000}
            />

            {/* -------------------------------- RESOURCES -------------------------- */}
            <section className="bg-black text-white mx-auto">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-6 items-start">
                        {/* Left: Title + Illustration */}
                        <motion.div
                            className="relative"
                            variants={fadeUp(0.05)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
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
                            <h3 className="text-lg sm:text-xl font-semibold">Computing Platforms</h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
                                IBM Quantum, Google Cirq, and Microsoft Quantum offer cloud-based access to quantum
                                computers, allowing developers and researchers to run experiments and collaborate globally.
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
                            <h3 className="text-lg sm:text-xl font-semibold">Quantum Programming</h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
                                Explore programming languages like Qiskit and Cirq, and stay updated with research
                                papers and tutorials for advancing quantum computing knowledge.
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

/* ============================== SUBCOMPONENTS ============================ */
function InfoTile({
    title,
    text,
    gradient = false,
}: {
    title: [string, string];
    text: string;
    gradient?: boolean;
}) {
    return (
        <motion.div
            className={`w-full h-auto rounded-lg border ${gradient ? "border-transparent" : "border-[#444955]"
                } flex flex-col justify-center px-6 py-6`}
            style={
                gradient
                    ? {
                        background: "linear-gradient(180deg,#2657EB 0%, #C729CF 100%)",
                    }
                    : {
                        background:
                            "linear-gradient(179.93deg, rgba(2,2,3,0.2) 68.46%, rgba(97,91,254,0.2) 201.19%), #111215",
                    }
            }
            variants={pop(0.02)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(82,80,255,0.24)" }}
            transition={{ duration: 0.35 }}
        >
            <h3 className="text-[20px] sm:text-[22px] font-bold mb-3 leading-tight">
                {title[0]} <br />
                {title[1]}
            </h3>
            <p className="text-[14px] sm:text-[16px] opacity-90">{text}</p>
        </motion.div>
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

function WhyItem({ dot, title, text }: { dot: string; title: string; text: string }) {
    return (
        <motion.div variants={fadeUp(0.06)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center mb-4 py-4 md:py-6 w-full">
                <div className="w-3 h-3 rounded-full mr-2 flex-shrink-0" style={{ background: dot }} />
                <div className="h-px flex-1 max-w-[280px]" style={{ background: dot }} />
            </div>
            <h3 className="font-semibold text-lg md:text-[22px] py-2 md:py-4">{title}</h3>
            <p className="text-gray-400 mt-2 text-base md:text-[18px]">{text}</p>
        </motion.div>
    );
}
