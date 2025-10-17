"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import digitalImg from "../Images/HPC_main.png";
import DigitalTwin from "../Images/High Performance.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/Group 149 (5).png";
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

import res1 from "@/Images/HPC/r1.png";
import res2 from "@/Images/HPC/r2.png";
import res3 from "@/Images/HPC/r3.png";

import i2 from "../Images/DGT/i2.png";
import InsightSection from "@/components/InsightSection";

import i1 from "../Images/HPC/i1.png";
import i2i from "../Images/HPC/i2.png";
import i3 from "../Images/HPC/i3.png";

import meetingImg from "../Images/Frame 421.png";
import img4 from "../Images/digital-twin-img-6.png";
import img5 from "../Images/digital-twin-img-7.png";
import img6 from "../Images/digital-twin-img-8.png";
import img7 from "../Images/digital-twin-img-9.png";
import img8 from "../Images/digital-twin-img-10.png";

import img11 from "../Images/DA/a1.png";
import img21 from "../Images/DA/a2.png";
import img31 from "../Images/DA/a3.png";
import OutcomesSection from "@/components/OutcomesSection";




export default function HighPerformaceComputing() {

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
            title: "ADVANCED SIMULATIONS",
            desc: "Enabling complex modeling for faster research and innovation",
        },
        {
            img: i2i,
            title: "DATA INTENSIVE TASKS",
            desc: "Handling massive datasets with unmatched processing power.",
        },
        {
            img: i3,
            title: "SCIENTIFIC DISCOVERY",
            desc: "Accelerating breakthroughs across medicine, engineering, and science.",
        },
        {
            img: i2,
            title: "SMART OPERATIONS",
            desc: "They optimize real-time performance by predicting issues before they occur.",
        },
    ];

    const capabilities = [
        {
            title: "Custom HPC Architectures",
            text: "Purpose-built infrastructure aligned to your workload type and performance goals.",
        },
        {
            title: "Cloud-Native & Hybrid Models",
            text: "Burst into cloud when needed, without compromising performance or cost.",
        },
        {
            title: "Workload Optimization",
            text: "Tuning environments for maximum throughput across simulation, rendering, AI, and ML.",
        },
        {
            title: "Managed HPC Services",
            text: "Full lifecycle management, from provisioning to monitoring and cost optimization.",
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
                                Computing
                            </motion.h2>
                            <motion.p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl" >
                                Accelerate Innovation. Scale   <br></br> Insight. Power What’s Next.
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
                                    Compute Power for the Demands of Tomorrow
                                </span>
                            </motion.h2>
                        </div>

                        <motion.p
                            className="text-gray-300 text-base md:text-[18px] leading-relaxed"
                        >
                            From simulation and modeling to AI training and real-time analytics, High Performance Computing enables enterprises to solve complex problems at unmatched speed and scale. HPIT delivers scalable HPC solutions—on-premise, in the cloud, or hybrid—that are optimized for performance, cost, and application needs.                                                  </motion.p>
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

            <section className="bg-gradient-to-r from-black via-[#050509] to-black text-white py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
                <motion.div
                    className="text-center mx-auto mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-[600] text-[36px] sm:text-[42px] md:text-[48px] leading-[46px] sm:leading-[52px] md:leading-[56px] font-[Poppins] mb-4 ml-10">
                        What{' '}
                        <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                            HPIT Offers
                        </span>
                    </h2>

                    <p className="text-[#CCCCCC] text-[18px] sm:text-[20px] leading-[28px] font-[400] font-[Poppins] text-center">
                        Engineered for Data-Heavy, Compute Intensive Workloads
                    </p>
                </motion.div>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">


                    {/* LEFT: Heading + Image */}
                    <motion.div
                        className="flex-1 flex flex-col items-center justify-center text-center"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >


                        {/* Image with glow */}
                        <motion.div
                            className="relative w-full max-w-[452px] h-auto rounded-[4px] mt-6"
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <motion.img
                                src={meetingImg}
                                alt="Team Meeting"
                                className="w-full h-full object-cover rounded-[4px]"
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            />

                            {/* Animated Glow */}
                            <motion.div
                                className="absolute -bottom-[40px] -left-[40px] w-[120px] h-[120px] rotate-45 bg-gradient-to-br from-[#8076F4]/40 to-transparent blur-[60px]"
                                animate={{
                                    opacity: [0.4, 0.7, 0.4],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </motion.div>


                    {/* RIGHT: Bullet Points */}
                    <motion.div
                        className="flex-1 pt-4 max-w-[600px] flex flex-col justify-center gap-[48px] md:gap-[64px] mt-10"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                {/* Animated Red Outlined Circle */}
                                <motion.span
                                    className="w-3 h-3 mt-2 rounded-full border-[1.5px] border-[#DC1414] bg-transparent shrink-0"
                                    animate={{
                                        boxShadow: [
                                            "0 0 5px rgba(220,20,20,0.4)",
                                            "0 0 15px rgba(220,20,20,0.7)",
                                            "0 0 5px rgba(220,20,20,0.4)",
                                        ],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />

                                {/* Text */}
                                <div>
                                    <h3 className="text-lg font-semibold text-[#DADBDD] mb-1">
                                        {cap.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                        {cap.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <div className="w-full bg-black text-white py-16 px-4 sm:px-8 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* Section Title */}
                    <motion.h2
                        className="text-[48px] font-bold"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                            Industry Use Cases
                        </span>
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-[20px] text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Built for the World’s Most Demanding Environments
                    </motion.p>

                    {/* Card Grid */}
                    <div className="mt-12 space-y-6">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {/* Smart Manufacturing */}


                            {/* Healthcare */}
                            <motion.div
                                className="relative md:col-span-1 rounded-lg overflow-hidden min-h-[320px]"
                                whileHover={{ scale: 1.02 }}
                            >
                                <img src={img5} alt="Healthcare Systems" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                    <h3 className="text-[28px] font-semibold mb-2">Life Sciences</h3>
                                    <div className="flex items-end justify-between">
                                        <p className="text-[18px] max-w-[85%]">
                                            Accelerate drug discovery with faster molecular simulations.
                                        </p>
                                        <div className="w-[54px] h-[54px] border border-[#DC1414] rounded-full flex items-center justify-center shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-[23px] h-[14px]"
                                            >
                                                <path d="M5 12h14M13 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Logistics */}
                            <motion.div
                                className="relative md:col-span-1 rounded-lg overflow-hidden min-h-[320px]"
                                whileHover={{ scale: 1.02 }}
                            >
                                <img src={img6} alt="Logistics & Supply Chain" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                    <h3 className="text-[28px] font-semibold mb-2">Financial Services</h3>
                                    <div className="flex items-end justify-between">
                                        <p className="text-[18px] max-w-[85%]">
                                            Enable real-time risk modeling and quantitative analysis.
                                        </p>
                                        <div className="w-[54px] h-[54px] border border-[#DC1414] rounded-full flex items-center justify-center shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-[23px] h-[14px]"
                                            >
                                                <path d="M5 12h14M13 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="relative md:col-span-2 rounded-lg overflow-hidden min-h-[320px]"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={img4} alt="Smart Manufacturing" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                    <h3 className="text-[28px] font-semibold mb-2">Manufacturing</h3>
                                    <div className="flex items-end justify-between">
                                        <p className="text-[18px] max-w-[85%]">
                                            Power CFD, digital twins, and complex design simulations.
                                        </p>
                                        <div className="w-[54px] h-[54px] border border-[#DC1414] rounded-full flex items-center justify-center shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-[23px] h-[14px]"
                                            >
                                                <path d="M5 12h14M13 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Energy */}
                            <motion.div
                                className="relative rounded-lg overflow-hidden min-h-[320px]"
                                whileHover={{ scale: 1.02 }}
                            >
                                <img src={img7} alt="Energy & Utilities" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                                    <h3 className="text-[28px] font-semibold mb-2">Energy & Climate </h3>
                                    <div className="flex items-end justify-between">
                                        <p className="text-[18px] max-w-[85%]">
                                            Model seismic data, weather patterns, and energy forecasts.
                                        </p>
                                        <div className="w-[54px] h-[54px] border border-[#DC1414] rounded-full flex items-center justify-center shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-[23px] h-[14px]"
                                            >
                                                <path d="M5 12h14M13 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Urban Infrastructure */}
                            <motion.div
                                className="relative rounded-lg overflow-hidden min-h-[320px]"
                                whileHover={{ scale: 1.02 }}
                            >
                                <img src={img8} alt="Urban Infrastructure" className="w-full h-full object-cover" />
                                {/* Gradient Overlay with transparency */}
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(38,87,235,0.55)_23.03%,rgba(199,41,207,0.55)_119.13%)] mix-blend-overlay" />
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <h3 className="text-[28px] font-semibold mb-2">Research & Academia</h3>
                                    <div className="flex items-end justify-between">
                                        <p className="text-[18px] max-w-[85%]">
                                            Scale compute for big science, securely and efficiently.
                                        </p>
                                        <div className="w-[54px] h-[54px] border border-[#DC1414] rounded-full flex items-center justify-center shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-[23px] h-[14px]"
                                            >
                                                <path d="M5 12h14M13 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-[#050505] text-white py-20 px-6 sm:px-10 lg:px-24 overflow-hidden relative">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 max-w-xl "
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold mb-6 leading-snug">
                            HPC Expertise.  {" "}
                            <span className="w-full text-transparent bg-clip-text bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]">
                                Scalable Delivery. Trusted Partnership.
                            </span>{" "}
                            
                        </h2>
                        <p className="text-gray-400 text-[16px] sm:text-[18px] leading-relaxed mb-8">
                            At HPIT, we bring deep expertise in HPC architecture—across CPUs, GPUs, interconnects, and storage. Our vendor-neutral solutions work seamlessly in cloud, on-prem, or hybrid environments. Beyond deployment, we continuously optimize for performance, efficiency, and scale, while providing ongoing support to ensure long-term success.
                        </p>

                        {/* CTA Button */}
                        <motion.a
                            href="#"
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="inline-flex items-center gap-2 text-white font-medium group"
                        >

                            Get Started
                            <div className="relative w-[56px] h-[56px]" style={{ marginLeft: "-15px" }}>
                                <img src={Ellipse} alt="ellipse" />
                                <span className="absolute inset-0 flex items-center justify-center text-white text-xl" style={{ marginLeft: "-15px" }}>
                                    <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                                </span>
                            </div>

                        </motion.a>
                    </motion.div>

                
                    {/* Right Image Group */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-row gap-6 flex-1 justify-center lg:justify-end"
                    >
                        {[img11, img21, img31].map((img, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                className={`
        w-[140px] sm:w-[180px] lg:w-[156px]
        h-[280px] sm:h-[340px] lg:h-[340px]
        overflow-hidden rounded-[80px]
        border border-[#1E1E25]
        shadow-[0_0_25px_rgba(128,118,244,0.08)]
        transition-transform duration-700
        ${i === 0 ? "mt-0" : i === 1 ? "mt-10" : "mt-20"}
      `}
                            >
                                <img
                                    src={img}
                                    alt={`industry-${i}`}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>


            </section>
            <OutcomesSection/>
          


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
                            <h3 className="text-lg sm:text-xl font-semibold"> Introduction to HPC for Scientists and Engineers</h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
                                A book covering HPC basics like parallel programming and performance optimization. Great for beginners and researchers.
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
                            <h3 className="text-lg sm:text-xl font-semibold">  Parallel Programming with MPI</h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
                                A practical Coursera course teaching MPI for writing parallel HPC applications on distributed systems.
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
