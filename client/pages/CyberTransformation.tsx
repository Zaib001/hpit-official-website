"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import negartive from "../Images/Pexels Photo by Negative Space.png";
import cyber from "../svg/Cyber.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/Pexels Photo by fauxels (1).png";
import img2 from "../Images/a2 1.png";
import icon1 from "../svg/one.svg";
import icon2 from "../svg/two.svg";
import icon3 from "../svg/three.svg";
import icon4 from "../svg/four.svg";
import christine from "../Images/Pexels Photo by MART  PRODUCTION.png";
import christine2 from "../Images/Pexels Photo by Christina Morillo new.png";
import sixtypercent from "../svg/sixtypercent.svg";
import thirtypercent from "../svg/thirty.svg";
import line from "../svg/Line 30 (1).svg";

// ✅ Reusable FadeIn wrapper
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

export default function CyberTransformation() {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <FadeInSection>
                <div
                    className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                    style={{
                        backgroundImage: `url(${negartive})`,
                    }}
                >
                    <div
                        className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8"
                        style={{ marginTop: "45px", marginLeft: "50px" }}
                    >
                        <div className="max-w-7xl mx-auto">
                            <div className="max-w-2xl">
                                <h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-1">
                                    <img src={cyber} alt="Company" />
                                </h2>
                                <br />
                                <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                                    Transformation
                                </h2>
                                <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                                    Stay resilient, secure, and future-ready
                                    <br /> through cyber transformation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            {/* Transforming Security Section */}
            <FadeInSection delay={0.1}>
                <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Text Content */}
                        <div className="space-y-6">
                            <h2 className="font-extrabold mb-6">
                                <span className="text-[42px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                                    Transforming Security Into a Business Advantage
                                </span>
                            </h2>
                            <p
                                className="text-gray-300 text-[18px] leading-relaxed"
                                style={{ marginTop: "30px" }}
                            >
                                Forget outdated security models. Cyber transformation weaves
                                security into every step of your digital journey making it a
                                catalyst for innovation, not a hurdle.
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
                                    <img src={Ellipse} alt="ellipse" />
                                    <span
                                        className="absolute inset-0 flex items-center justify-center text-white text-xl"
                                        style={{ marginLeft: "-15px" }}
                                    >
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
                                className="w-[512px] h-[368px] object-cover rounded-l-sm"
                            />
                        </motion.div>
                    </div>
                </div>
            </FadeInSection>

            {/* Why Now Section */}
            <FadeInSection delay={0.2}>
                <div
                    className="bg-black text-white px-6 py-16 max-w-[1440px] mx-auto flex flex-col md:flex-row items-start gap-10"
                    style={{ marginLeft: "50px" }}
                >
                    {/* Left Section */}
                    <div className="w-full md:w-2/5 space-y-6">
                        <h2 className="text-[48px] w-[1200px] font-extrabold leading-snug">
                            <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] text-transparent bg-clip-text">
                                Why Now? The Rising
                                <br />Stakes
                            </span>
                        </h2>
                        <motion.img
                            src={christine2}
                            alt="Woman with Laptop"
                            className="rounded-lg w-[568px] h-[300px] object-cover"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        />
                        {/* Stats */}
                        <motion.div
                            className="relative w-[510px] border border-[#333740] rounded-md mt-6 flex"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="absolute top-[6px] bottom-[6px] left-1/3 w-px bg-[#333740]" />
                            <div className="absolute top-[6px] bottom-[6px] left-2/3 w-px bg-[#333740]" />
                            <div className="flex-1 text-center px-6 py-[15px]">
                                <img src={sixtypercent} className="w-[127px] h-[17px] mx-auto" />
                                <p className="text-[14px] text-gray-400 mt-[5px]">
                                    breaches: cloud misconfig
                                </p>
                            </div>
                            <div className="flex-1 text-center px-6 py-[15px]">
                                <img src={thirtypercent} className="w-[127px] h-[17px] mx-auto" />
                                <p className="text-[14px] text-gray-400 mt-[5px]">
                                    slowdown: legacy security
                                </p>
                            </div>
                            <div className="flex-1 text-center px-6 py-[15px]">
                                <p className="text-[14px] text-gray-400 leading-tight mt-[10px]">
                                    Fines rising: data breaches
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Section */}
                    <div
                        className="w-full md:w-3/5 space-y-6 flex flex-col justify-start mt-0 self-start"
                        style={{ marginTop: "220px", marginLeft: "60px" }}
                    >
                        <div className="flex items-start gap-3">
                            <img src={line} alt="Vertical Line" className="w-1 h-14 mt-1" />
                            <h3 className="text-gray-300 text-[24px] font-semibold leading-snug">
                                Cyber Risks Are Evolving,
                                <br />
                                So Should You
                            </h3>
                        </div>
                        <p className="text-gray-300 text-[18px] font-semibold leading-snug">
                            Every advancement in technology opens new doors for growth
                            <br /> but also for threats. As businesses embrace cloud,
                            <br /> automation, and remote access, traditional security models
                            <br /> fall short. Without cyber transformation, organizations
                            face <br />higher risks, slower progress, and growing regulatory
                            pressure.
                        </p>
                    </div>
                </div>
            </FadeInSection>

            {/* Four Pillars Section */}
            <FadeInSection delay={0.3}>
                <div className="bg-black text-white py-16 px-4 sm:px-8 lg:px-20">
                    <div className="text-center mb-12">
                        <h2 className="text-[48px] font-bold">
                            <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                                Our Approach: Four Pillars of Change
                            </span>
                        </h2>
                        <p className="text-gray-400 text-[20px] mt-2">
                            From Strategy to Execution — Seamlessly Integrated
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {[{ icon: icon1, title: "AssesAdaptive Securitys", desc: "Real-time risk assessment and response" },
                        { icon: icon2, title: "Automation Everywhere", desc: "Free your team from manual, repetitive tasks" },
                        { icon: icon3, title: "Integrated Visibility", desc: "Holistic view across cloud, network, endpoints" },
                        { icon: icon4, title: "Collaborative Culture", desc: "Security aligned with business goals, across teams" }]
                            .map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-[#111215] rounded-xl p-6 space-y-3 shadow-lg border border-[#444955]"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: i * 0.15 }}
                                >
                                    <img src={item.icon} alt="icon" className="w-[64px] h-[64px]" />
                                    <h3 className="text-[22px] font-semibold">{item.title}</h3>
                                    <p className="text-gray-400 text-[16px]">{item.desc}</p>
                                </motion.div>
                            ))}
                    </div>
                </div>
            </FadeInSection>

            {/* Quick Self-Check */}
            <FadeInSection delay={0.35}>
                <div className="bg-[#111215] text-white px-6 py-10 rounded-lg max-w-[1220px] mx-auto flex flex-col md:flex-row gap-8 border border-purple-800">
                    {/* Left Section - 40% */}
                    <div className="w-full md:w-2/5 flex flex-col justify-start">
                        <div className="space-y-6">
                            <h2 className="text-[48px]  min-w-[1220px] font-bold mt-0">
                                <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] text-transparent bg-clip-text">
                                    Quick Self–Check
                                </span>
                            </h2>
                            <p className="text-gray-300 text-[28px]">How Ready Is Your Organization?</p>
                            <ul className="space-y-4 text-sm">
                                <li className="flex text-[20px] items-start gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 mt-1 text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <circle cx="12" cy="12" r="6" />
                                    </svg>
                                    <span>Do you have real-time threat<br></br> <br></br> detection?</span>
                                </li>
                                <li className="flex text-[20px] items-start gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 mt-1 text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <circle cx="12" cy="12" r="6" />
                                    </svg>
                                    <span>Is security embedded in your development<br></br><br></br> lifecycle?</span>
                                </li>
                                <li className="flex text-[20px] items-start gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 mt-1 text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <circle cx="12" cy="12" r="6" />
                                    </svg>
                                    <span>Are you confident in your compliance <br></br><br></br>reporting?</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section - 60% */}
                    <div className="w-full md:w-3/5" style={{ marginLeft: "120px" }}>
                        <img
                            src={christine}
                            alt="Team Discussion"
                            className="rounded-lg w-[594px] h-[453px] object-cover"
                        />
                    </div>
                </div>
            </FadeInSection>

            {/* Partner Section */}
            <FadeInSection delay={0.4}>
                <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Text Content */}
                        <div className="space-y-6">
                            <h2 className="font-extrabold mb-6">
                                <span className="text-[42px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                                    HPIT : More Than a Provider A Transformation Partner
                                </span>
                            </h2>
                            <p
                                className="text-gray-300 text-[18px] leading-relaxed"
                                style={{ marginTop: "30px" }}
                            >
                                We bring deep expertise, innovative tools, and a <br />partnership
                                mindset — committed to your ongoing
                                <br /> success, not just quick fixes.
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
                                        <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                                    </span>
                                </div>
                            </a>
                        </div>
                        {/* Right Image */}
                        <motion.div
                            className="rounded-xl overflow-hidden"
                            style={{ marginTop: "20px", marginLeft: "60px" }}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={img2}
                                alt="Team Discussion"
                                className="w-[461px] h-[461px] object-cover rounded-l-sm"
                            />
                        </motion.div>
                    </div>
                </div>
            </FadeInSection>
        </div>
    );
}
