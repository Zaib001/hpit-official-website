"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import digitalImg from "../Images/infra-main.jpg";
import DigitalTwin from "../Images/Infrastructure.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/Group 149 (2).png";
import quantumImg from '../Images/Why.jpg';

import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";
import narrow from "@/svg/Arrow 1.svg";

import res1 from "@/Images/IA/r1.png";
import res2 from "@/Images/IA/r2.png";
import res3 from "@/Images/IA/r3.png";

import img3 from "../svg/Frame 458.svg";


import i2 from "../Images/DGT/i2.png";
import InsightSection from "@/components/InsightSection";

import i1 from "../Images/IA/i1.png";
import i2i from "../Images/IA/i2.png";
import i3 from "../Images/IA/i3.png";




import MindfulChef from "../Images/ai-img-1.png";
import k1 from "../Images/IA/k1.png";
import k2 from "../Images/IA/k2.png";
import k3 from "../Images/IA/k3.png";

import CoreInfrastructure from "@/components/CoreInfrastructure";
import InfrastructureSector from "@/components/InfrastructureSector";
import HPITDifference from "@/components/HPITDifference";
import PerformanceStats from "@/components/PerformanceStats";
import ModernInfrastructureApproach from "@/components/ModernInfrastructureApproach";
import AutomationMethodology from "@/components/AutomationMethodology";
import AutomationMetrics from "@/components/AutomationMetrics";




export default function InfrastructureAutomation() {

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
            title: "SMART DEPLOYMENT",
            desc: "Automated rollouts speed delivery, reduce errors, and ensure consistency across environments.",
        },
        {
            img: i2i,
            title: "CLOUD ORCHESTRATION",
            desc: "Orchestration simplifies hybrid cloud management, improving efficiency and scalability.",
        },
        {
            img: i3,
            title: "SMART CONNECTIVITY",
            desc: "Enhancing performance through faster and smarter network solution",
        },
        {
            img: i2,
            title: "SMART OPERATIONS",
            desc: "They optimize real-time performance by predicting issues before they occur.",
        },
    ];


    const cards1 = [
        {
            img: k1,
            title: "Retail Cloud Platform",
            desc: "Automated cloud provisioning led to 80% faster campaign rollouts.",
        },
        {
            img: k2,
            title: "BFSI Compliance Framework",
            desc: "Continuous patching and audit enforcement saved 150+ hours/month.",
        },
        {
            img: k3,
            title: "Manufacturing IT Ops",
            desc: "Self-healing infrastructure reduced system downtime by 60%.",
        },
        {
            img: MindfulChef,
            title: "AI Infrastructure Optimization",
            desc: "Build scalable pipelines and manage GPU workloads efficiently across environments.",
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
                {/* Overlay with opacity */}
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto mt-24">
                        <div className="max-w-2xl">
                            <motion.h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-2">
                                <img src={DigitalTwin} alt="Company" />
                            </motion.h2>
                            <motion.h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                                Automation
                            </motion.h2>
                            <motion.p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                                From Manual Burden to <br />Intelligent Backbone
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
                                    Why Automation Is Now Mission-Critical
                                </span>
                            </motion.h2>
                        </div>

                        <motion.p
                            className="text-gray-300 text-base md:text-[18px] leading-relaxed"
                        >
                            Manual infrastructure is slow, costly, and prone to errors. As environments grow more complex, automation ensures resilience, consistency, and agility — turning IT from a bottleneck into a business driver.
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

            <section className="relative text-white py-12 md:py-16 ">
                <div className="hidden md:block absolute w-[446px] h-[346px] right-[10%] top-[90px] bg-[#42C3FF] opacity-15 blur-[150px] pointer-events-none" />

                <div className="px-4 sm:px-8 lg:px-2">
                    <div className="max-w-[1480px] mx-auto relative">
                        <div className="md:absolute md:left-[8%] md:top-0 md:max-w-[500px]">
                            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold mb-3 md:mb-4">
                                <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                                    Pain Points <br />Holding You Back
                                </span>
                            </h2>

                            {/* Image replacing the paragraph */}
                            <motion.img
                                src={quantumImg}
                                alt="Quantum Computing"
                                className="w-full max-w-[420px] rounded-lg object-contain rounded-br-[64px] mt-4 shadow-lg"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            />
                        </div>


                        {/* ===== Mobile/Tablet layout (stacked grid). Desktop version stays absolute below ===== */}
                        <div className="mt-6 md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Gradient card */}
                            <div className="w-full rounded-lg transform -rotate-2 bg-gradient-to-b from-[#2657EB] to-[#C729CF] px-6 sm:px-8 py-6">
                                <h3 className="text-[20px] sm:text-[22px] font-bold mb-3 leading-tight">
                                    Repetitive Tasks<br /> Everywhere
                                </h3>
                                <p className="text-[14px] sm:text-[16px]">
                                    Critical time lost to provisioning, patching, and configs
                                </p>
                            </div>

                            {/* Dark cards (same styling as desktop, fluid width) */}
                            <div
                                className="w-full rounded-lg border border-[#444955] px-6 py-6"
                                style={{ background: "linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215" }}
                            >
                                <h3 className="text-[20px] sm:text-[22px] font-bold mb-3 leading-tight">
                                    Ops Teams Always<br /> in Firefighting Mode
                                </h3>
                                <p className="text-[14px] sm:text-[16px]">
                                    Downtime, outages, and security incidents overwhelm capacity.
                                </p>
                            </div>

                            <div
                                className="w-full rounded-lg border border-[#444955] px-6 py-6"
                                style={{ background: "linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215" }}
                            >
                                <h3 className="text-[20px] sm:text-[22px] font-bold mb-3 leading-tight">
                                    Fragmented Tools<br /> and Siloed Systems

                                </h3>
                                <p className="text-[14px] sm:text-[16px]">
                                    Lack of orchestration blocks agility
                                </p>
                            </div>

                            <div
                                className="w-full rounded-lg border border-[#444955] px-6 py-6"
                                style={{ background: "linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215" }}
                            >
                                <h3 className="text-[20px] sm:text-[22px] font-bold mb-3 leading-tight">
                                    Inconsistent<br /> Environments
                                </h3>
                                <p className="text-[14px] sm:text-[16px]">
                                    One change = five bugs. Nothing behaves the same twice.
                                </p>
                            </div>
                        </div>

                        {/* ===== Desktop layout (EXACT original absolute positions/sizes) ===== */}
                        <div className="hidden md:block relative">
                            {/* Gradient tile */}
                            <div className="absolute w-[300px] sm:w-[326px] h-[220px] right-[32%] top-[4px] bg-gradient-to-b from-[#2657EB] to-[#C729CF] rounded-lg transform -rotate-2 flex flex-col justify-center px-12">
                                <h3 className="text-[22px] font-bold mb-6">Repetitive Tasks<br /> Everywhere</h3>
                                <p className="text-[16px]">Critical time lost to provisioning, patching, and configs</p>
                            </div>

                            {/* Dark tiles */}
                            <div
                                className="absolute w-[300px] sm:w-[326px] h-[220px] right-[8%] top-[10px] bg-[#111215] border border-[#444955] rounded-lg flex flex-col justify-center px-6"
                                style={{ background: "linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215" }}
                            >
                                <h3 className="text-[22px] font-bold mb-6">Ops Teams Always <br /> in Firefighting Mode</h3>
                                <p className="text-[16px]">Downtime, outages, and security incidents overwhelm capacity.</p>
                            </div>

                            <div
                                className="absolute w-[300px] sm:w-[326px] h-[220px] right-[32%] top-[262px] bg-[#111215] border border-[#444955] rounded-lg flex flex-col justify-center px-6"
                                style={{ background: "linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215" }}
                            >
                                <h3 className="text-[22px] font-bold mb-6">Fragmented Tools <br />and Siloed Systems</h3>
                                <p className="text-[16px]">Lack of orchestration blocks agility</p>
                            </div>

                            <div
                                className="absolute w-[300px] sm:w-[326px] h-[220px] right-[8%] top-[262px] bg-[#111215] border border-[#444955] rounded-lg flex flex-col justify-center px-6"
                                style={{ background: "linear-gradient(179.93deg, rgba(2, 2, 3, 0.2) 68.46%, rgba(97, 91, 254, 0.2) 201.19%), #111215" }}
                            >
                                <h3 className="text-[22px] font-bold mb-6">Inconsistent <br /> Environments</h3>
                                <p className="text-[16px]">One change = five bugs. Nothing behaves the same twice.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spacer for desktop (keeps original height); mobile uses natural flow */}
                <div className="hidden md:block h-[500px]" />
            </section>

            <AutomationMethodology />

            <section className="w-full bg-black text-white py-20 px-6 md:px-12 mx-auto max-w-[1380px]">
                {/* Heading */}
                <div className="mx-auto mb-12">
                    <h2 className="text-3xl sm:text-[44px] md:text-[48px] font-extrabold leading-tight">

                        <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] text-transparent bg-clip-text">
                            What Automation <br />Looks Like in Action{" "}
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg mt-2 leading-snug max-w-[560px]">
                        Real-World Automation That <br />Transforms Performance at Scale                   </p>
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


            {/* <CoreInfrastructure />

            <InfrastructureSector />

            <ModernInfrastructureApproach /> */}
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

            <AutomationMetrics />



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
                            <h3 className="text-lg sm:text-xl font-semibold">Infrastructure as Code </h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
                                Book on automating infrastructure with tools like Terraform and Ansible.
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
                            <h3 className="text-lg sm:text-xl font-semibold">  Infrastructure Automation</h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">

                                LinkedIn Learning course on automating provisioning and configuration.
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
