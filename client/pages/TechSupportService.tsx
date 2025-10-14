"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import digitalImg from "../Images/TSS-main.png";
import DigitalTwin from "../Images/Technology.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/Group 149 (4).png";
import sv2 from "../Images/DA/sv1.svg";
import sv4 from "../Images/DA/sv2.svg";
import sv3 from "../Images/DA/sv3.svg";
import sv1 from "../Images/DA/sv4.svg";
import sv5 from "../Images/DA/sv5.svg";

import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";
import narrow from "@/svg/Arrow 1.svg";

import res1 from "@/Images/TSS/r1.png";
import res2 from "@/Images/TSS/r2.png";
import res3 from "@/Images/TSS/r3.png";

import img3 from "../svg/Frame 458.svg";


import i2 from "../Images/DGT/i2.png";
import InsightSection from "@/components/InsightSection";

import i1 from "../Images/TSS/i1.png";
import i2i from "../Images/TSS/i2.png";
import i3 from "../Images/TSS/i3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



import MindfulChef from "../Images/ai-img-1.png";
import k1 from "../Images/DA/k1.png";
import k2 from "../Images/DA/k2.png";
import k3 from "../Images/DA/k3.png";
import StrategicAnalytics from "@/components/StrategicAnalytics";
import AnalyticsTailored from "@/components/AnalyticsTailored";



import sixtypercent from "../Images/n.png";
import thirtypercent from "../Images/hun.png";
import threex from "../Images/three.png";
import ServiceDeliverSection from "@/components/ServiceDeliverSection";
import HpitDeliverSection from "@/components/HpitDeliverSection";




const cards1 = [
    {
        img: k1,
        title: "Data Engineering",
        desc: "Build scalable pipelines and data lakes that enable seamless analysis.",
    },
    {
        img: k2,
        title: "Visualization & Storytelling",
        desc: "Transform raw data into clear, executive-ready visual narratives.",
    },
    {
        img: k3,
        title: "Machine Learning Integration",
        desc: "Use custom ML models to automate insight generation and decision-making.",
    },
    {
        img: MindfulChef,
        title: "AI Infrastructure Optimization",
        desc: "Build scalable pipelines and manage GPU workloads efficiently across environments.",
    },
];


export default function TechSupportService() {

    const swiperRef = useRef<any>(null);

    const fadeUp = (delay = 0) => ({
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
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
            img: i1,
            title: "INCIDENT MANAGEMENT",
            desc: "Resolving technical issues swiftly to minimize downtime.",
        },
        {
            img: i2i,
            title: "INFRASTRUCTURE SUPPORT",
            desc: "Keeping systems, networks, and devices optimized for performance.",
        },
        {
            img: i3,
            title: "CONTINUOUS IMPROVEMENT",
            desc: "Enhancing support processes with data-driven insights and updates.",
        },
        {
            img: i2,
            title: "SMART OPERATIONS",
            desc: "They optimize real-time performance by predicting issues before they occur.",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Hero Section */}
            <motion.div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative bg-opacity-40"
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
                                Support Service
                            </motion.h2>
                            <motion.p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl" >
                                End-to-End Technical Assistance to  <br></br> Keep Your Business Always On
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div>
                            <motion.h2 className="font-extrabold mb-8">
                                <span className="text-[44px] md:text-[44px] lg:text-[44px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent bg-center bg-[length:100%_100%] leading-tight">
                                    Support That Powers Continuity and Confidence
                                </span>
                            </motion.h2>
                        </div>

                        <motion.p
                            className="text-gray-300 text-base md:text-[18px] leading-relaxed"
                        >
                            HPIT’s Technology Support Service ensures your IT environment — from infrastructure to applications to end-user devices — runs without disruption. It’s not just reactive helpdesk. It’s proactive, structured, and insight-driven support that prevents problems before they impact performance.                        </motion.p>
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
            </div>
            <ServiceDeliverSection />
            <section className="bg-[#050505] text-white py-20 px-6 sm:px-10 lg:px-24 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Combined container to align heading + large card */}
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                        {/* Left: Heading + Paragraph */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-2xl flex-1"
                        >
                            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-snug">
                                <span className="text-transparent bg-clip-text leading-snug bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]">
                                    How HPIT Supports<br /> Your Operations
                                </span>{" "}
                            </h2>
                            <p className="text-gray-400 mt-4 text-[16px] sm:text-[18px] max-w-md">
                                Comprehensive, Scalable Support for Modern Enterprises
                            </p>
                        </motion.div>

                        {/* Right: Large Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#0B0B0D] hover:bg-[#111215] transition-all p-8 rounded-xl border border-[#1E1E25] shadow-[0_0_15px_rgba(128,118,244,0.1)] flex-1 max-w-[520px] min-w-[300px]"
                        >
                            <img
                                src={sv1}
                                alt="Real-Time Business Intelligence"
                                className="w-[48px] h-[48px] mb-4"
                            />
                            <h3 className="text-[22px] font-semibold mb-2">
                                Full-Stack<br /> Coverage
                            </h3>
                            <p className="text-gray-400 text-[16px] leading-relaxed">
                                Comprehensive support for infrastructure, networks, applications, and user environments.
                            </p>
                        </motion.div>
                    </div>


                    {/* Bottom 4 Cards */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[sv2, sv4, sv3, sv5].map((icon, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="bg-[#0B0B0D] hover:bg-[#111215] transition-all p-6 sm:p-8 rounded-xl border border-[#1E1E25] shadow-[0_0_15px_rgba(128,118,244,0.1)] flex flex-col justify-between min-h-[240px]"
                            >
                                <img src={icon} alt="icon" className="w-[48px] h-[48px] mb-4" />
                                <h3 className="text-[20px] sm:text-[22px] font-semibold mb-2">
                                    {["Seamless Multi-Channel Access", "24/7 Expert Assistance", "Real-Time Visibility & Control", "Escalation Without Delay"][i]}
                                </h3>
                                <p className="text-gray-400 text-[15px] sm:text-[16px] leading-relaxed">
                                    {[
                                        "Support via email, phone, chat, or integrated directly with your ITSM tools.",
                                        "Round-the-clock support from certified specialists across all service tiers.",
                                        "Integrated ticketing, SLA tracking, and actionable insights in a single view.",
                                        "Immediate access to engineering expertise for rapid resolution of complex issues.",
                                    ][i]}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Background Glow */}
                <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(128,118,244,0.15)_0%,_transparent_70%)] blur-3xl pointer-events-none"></div>
            </section>

            <HpitDeliverSection />


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
                            <h3 className="text-lg sm:text-xl font-semibold">ITIL Foundation</h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
Guide to IT service management best practices for delivering effective tech support.
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
                            <h3 className="text-lg sm:text-xl font-semibold"> Technology Support</h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
Course covering essential troubleshooting and customer service skills for IT support roles.
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
