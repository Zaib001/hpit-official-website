"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import digitalImg from "../Images/DA/DA-Main.jpg";
import DigitalTwin from "../Images/DA/Data.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/DA/RD.jpg";
import bgImg from "../Images/TAD_Back.png";


import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";
import narrow from "@/svg/Arrow 1.svg";

import res1 from "@/Images/DA/r1.png";
import res2 from "@/Images/DA/r2.png";
import res3 from "@/Images/DA/r3.png";

import img3 from "../svg/Frame 458.svg";


import i2 from "../Images/DGT/i2.png";
import InsightSection from "@/components/InsightSection";

import i1 from "../Images/DA/i1.png";
import i2i from "../Images/DA/i2.png";
import i3 from "../Images/DA/i3.png";

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


export default function DataAnalytics() {

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
            title: "PREDICTIVE MODELING",
            desc: "Leveraging data patterns to forecast future outcomes with accuracy.",
        },
        {
            img: i2i,
            title: "REAL-TIME INSIGHTS",
            desc: "Transforming raw data into instant, actionable intelligence.",
        },
        {
            img: i3,
            title: "BUSINESS OPTIMIZATION",
            desc: "Driving efficiency and growth through data-driven strategies.",
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
                                Analytics
                            </motion.h2>
                            <motion.p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl" >
                                Turning Data into Decisions,   <br></br> Faster
                            </motion.p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Text Content */}
                    <div className="space-y-6">
                        <div>
                            <motion.h2 className="font-extrabold mb-8">
                                <span className="text-[44px] md:text-[44px] lg:text-[44px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent bg-center bg-[length:100%_100%] leading-tight">
                                    Rethink Decisions with Data-Led Intelligence
                                </span>
                            </motion.h2>
                        </div>

                        <motion.p
                            className="text-gray-300 text-base md:text-[18px] leading-relaxed"
                        >
                            Data is more than numbers—it’s the foundation of smarter, faster, and future-ready decisions. At HPIT, we architect data ecosystems that unify, analyze, and activate your information across silos, functions, and systems. From operational insights to strategic foresight, our data analytics solutions help enterprises evolve with clarity and confidence.
                        </motion.p>
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

            <StrategicAnalytics />

            <section className="w-full bg-black text-white py-20 px-6 md:px-12 mx-auto max-w-[1380px]">
                {/* Heading */}
                <div className="mx-auto mb-12">
                    <h2 className="text-3xl sm:text-[44px] md:text-[48px] font-extrabold leading-tight">

                        <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] text-transparent bg-clip-text">
                            Key Focus Areas{" "}
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg mt-2 leading-snug max-w-[560px]">
                        Focused transformation initiatives that align technology with measurable business outcomes.                    </p>
                </div>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Autoplay, Navigation]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 6000, disableOnInteraction: false }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="overflow-hidden"
                >
                    {cards1.map((card, i) => (
                        <SwiperSlide key={i}>
                            <motion.div
                                className="w-full max-w-[416px] min-h-[520px] bg-[#22252B] border-b-4 border-[#DADBDD] rounded-[6px]
                                     overflow-hidden flex flex-col justify-between shadow-md transition-all duration-300
                                     hover:shadow-[0_0_24px_rgba(169,92,236,0.28)] hover:-translate-y-1"
                                whileHover={{ y: -4 }}
                            >
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-[260px] object-cover"
                                />
                                <div className="flex flex-col justify-between flex-grow px-6 py-6">
                                    <div>
                                        <h3 className="text-[18px] md:text-[20px] font-semibold mb-3 text-[#ECEDEE]">
                                            {card.title}
                                        </h3>
                                        <p className="text-[#A0A0A0] text-[15px] leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>

                                    <div className="flex justify-end items-end">
                                        <button className="mt-6 flex items-center text-[#ECEDEE] text-[15px] font-medium hover:text-[#E50000] transition">
                                            <span>Learn more</span>
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
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Arrows */}
                <div className="flex justify-end mt-12 space-x-4">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-[48px] h-[48px] border border-[#E50000] rounded-full flex items-center justify-center hover:bg-[#E50000] transition duration-300 group"
                    >
                        <span className="text-[#E50000] text-xl group-hover:text-white">‹</span>
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-[48px] h-[48px] border border-[#E50000] rounded-full flex items-center justify-center hover:bg-[#E50000] transition duration-300 group"
                    >
                        <span className="text-[#E50000] text-xl group-hover:text-white">›</span>
                    </button>
                </div>
            </section>

            <AnalyticsTailored />



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
                            <h3 className="text-lg sm:text-xl font-semibold">Data Analytics Specialization</h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
                                A multi-course program covering data wrangling, visualization, and machine learning basics.
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
                            <h3 className="text-lg sm:text-xl font-semibold">Storytelling with Data</h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
                                Focuses on how to effectively communicate insights through data visualization and storytelling techniques.
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
