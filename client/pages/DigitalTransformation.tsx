"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import digitalImg from "../Images/DT-main.jpg";
import DigitalTwin from "../Images/Digital.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/TAD.jpg";
import bgImg from "../Images/TAD_Back.png";




import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";
import narrow from "@/svg/Arrow 1.svg";

import res1 from "@/Images/DT/r1.png";
import res2 from "@/Images/DT/r2.png";
import res3 from "@/Images/DT/r3.png";

import downArrow from "../Images/DT/down.png";
import upArrow from "../Images/DT/up.png";


import i2 from "../Images/DGT/i2.png";
import InsightSection from "@/components/InsightSection";

import i1 from "../Images/DT/i1.png";
import i2i from "../Images/DT/i2.png";
import i3 from "../Images/DT/i3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



import MindfulChef from "../Images/ai-img-1.png";
import k1 from "../Images/DT/k1.png";
import k2 from "../Images/DT/k2.png";
import k3 from "../Images/DT/k3.png";
import NavigatingChangeSection from "@/components/NavigatingChangeSection";








const cards1 = [
    {
        img: k1,
        title: "Legacy Modernization",
        desc: "De-risk transformation by evolving critical systems without business disruption.",
    },
    {
        img: k2,
        title: "Innovation",
        desc: "Move to scalable, secure infrastructure with clear business value.",
    },
    {
        img: k3,
        title: "AI-Driven Automation",
        desc: "Improve productivity with intelligent process redesign.",
    },
    {
        img: MindfulChef,
        title: "AI Infrastructure Optimization",
        desc: "Build scalable pipelines and manage GPU workloads efficiently across environments.",
    },
];


export default function DigitalTransformation() {

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
            title: "CLOUD ADOPTION",
            desc: "Accelerating scalability and flexibility through secure cloud integration.",
        },
        {
            img: i2i,
            title: "AI INTEGRATION",
            desc: "Enhancing decision-making and automation with intelligent solutions.",
        },
        {
            img: i3,
            title: "CUSTOMER EXPERIENCE",
            desc: "Driving engagement and loyalty with seamless digital interactions.",
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
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
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
                                Transformation
                            </motion.h2>
                            <motion.p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl" >
                                Rethink Operations. Rewire  <br></br> Technology. Reinvent Value.
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
                                    Technology Alone Doesn't Transform Strategy Does.
                                </span>
                            </motion.h2>
                        </div>

                        <motion.p
                            className="text-gray-300 text-base md:text-[18px] leading-relaxed"
                        >
                            Digital transformation is not about adopting the latest tools. It's about reimagining how your business creates value. HPIT partners with you to align technology with enterprise strategy — modernizing core systems, empowering teams, and unlocking new sources of growth.
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
                        className="relative rounded-xl overflow-visible"
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* Background image (top-right corner) */}
                        <img
                            src={bgImg}
                            alt="background"
                            className="absolute -top-16 -right-16 w-[330px] h-[330px] object-contain opacity-25 z-0 pointer-events-none"
                        />

                        {/* Foreground image */}
                        <img
                            src={img1}
                            alt="Team Discussion"
                            className="relative w-full h-auto object-contain z-10"
                        />
                    </motion.div>


                </div>
            </div>

            <section className="relative bg-black text-white px-4 sm:px-10 lg:px-28 py-16 mx-auto">
                {/* Heading Section */}
                <div className="mb-10 sm:mb-14">
                    <h2 className="text-3xl sm:text-[56px] font-extrabold leading-tight mb-3 sm:mb-4">
                        <span
                            className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent inline-block"
                        >
                            Transformation That
                        </span><br />
                        Moves the Needle
                    </h2>

                    <p className="text-gray-300 text-base sm:text-lg">
                        roven Value Across Critical Domains
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
                                    Faster Go to Market
                                </h3>
                                <p className="text-[#ECEDEE] text-base md:text-[20px] leading-7 md:leading-8">
                                    Accelerate time from idea to execution across business and IT teams.
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
                            style={{ minHeight: "258px" }}
                        >
                            <h3 className="text-2xl md:text-[28px] leading-8 font-semibold text-white mb-2">
                                Operational Agility
                            </h3>
                            <p className="text-white/90 text-base md:text-[20px] leading-7 md:leading-8">
                                Adapt core processes to market shifts with speed and confidence.
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
                                Innovation at Scale
                            </h3>
                            <p className="text-[#ECEDEE] text-base md:text-[20px] leading-7 md:leading-8 w-full lg:w-[675px]">
                                Enable sustainable innovation through cloud, AI, and automated digital workflows.
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
                                        Customer Centric Design
                                    </h3>
                                    <p className="text-gray-400 text-base md:text-[20px] leading-7 md:leading-8">
                                        Deliver tailored experiences that drive loyalty, retention, and brand equity.
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

                                <div className="mt-28 gap-3">
                                    <h3 className="text-[28px] leading-8 font-semibold text-[#DADBDD] mb-2 relative z-10">
                                        Data-Driven Decisions
                                    </h3><br />
                                    <p className="text-gray-400 text-[20px] leading-8 relative z-10">
                                        Turn real-time insights into enterprise-wide strategic and tactical actions.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

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

            <div className="bg-[#050505] text-white px-4 sm:px-8 lg:px-20 py-16">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-[48px] font-extrabold">
                        <span className="text-transparent bg-clip-text bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)]">
                            Our Transformation Framework
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-4 text-[18px] sm:text-[20px]">
                        Strategy Led. Technology Powered.
                    </p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Connector Images (exact pixel positions) */}
                    <img
                        src={downArrow}
                        alt="connector line"
                        className="hidden lg:block absolute top-[15px] left-[74px] w-[170px]  -rotate-[7deg]"
                    />
                    <img
                        src={upArrow}
                        alt="connector line"
                        className="hidden lg:block absolute top-[10px] left-[340px] w-[170px] opacity-80 rotate-[12deg] "
                    />
                    <img
                        src={downArrow}
                        alt="connector line"
                        className="hidden lg:block absolute top-[15px] left-[610px] w-[170px]  -rotate-[7deg]"
                    />
                    <img
                        src={upArrow}
                        alt="connector line"
                        className="hidden lg:block absolute top-[15px] left-[870px] w-[170px] opacity-80 rotate-[12deg]"
                    />

                    {/* Steps */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10 text-center lg:text-left">
                        {[
                            {
                                title: "Diagnose",
                                desc: "Deep-dive into business model, culture, and readiness.",
                            },
                            {
                                title: "Design",
                                desc: "Craft a transformation blueprint aligned to business goals.",
                            },
                            {
                                title: "Modernise",
                                desc: "Upgrade tech stack, automate workflows, improve data access.",
                            },
                            {
                                title: "Empower",
                                desc: "Enable teams through training, change management, and tools.",
                            },
                            {
                                title: "Scale & Sustain",
                                desc: "Drive continuous improvement and long-term agility.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className={`flex flex-col items-center lg:items-start ${i % 2 === 0 ? "lg:mt-0" : "lg:mt-20"
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                            >
                                {/* Number circle */}
                                <div className="w-[56px] h-[56px] flex items-center justify-center border-2 border-[#8076F4] rounded-full mb-4 text-[20px] font-semibold text-[#A49CFD]">
                                    {i + 1}
                                </div>

                                {/* Content */}
                                <h4 className="font-semibold text-[22px] mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-[16px] leading-relaxed max-w-[250px] mx-auto lg:mx-0">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>



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

                        <NavigatingChangeSection />


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
        </div>
    );
}
