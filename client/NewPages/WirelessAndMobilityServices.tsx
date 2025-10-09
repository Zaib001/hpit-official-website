"use client";
import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import wams_img from "./images/wams-img1.png";
import ws from "./svg/Wireless and.svg";
import wasm2 from "./images/wasm-2.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import wasm3 from "./images/wasm-3.png";
import HeroBanner from "@/components/HeroBanner";
import wasm4 from "./images/wasm-4.png";
import one from "./svg/Vector (10).svg";
import two from "./svg/Vector (11).svg";
import three from "./svg/Vector (13).svg";
import four from "./svg/Vector (12).svg";
import five from "./svg/Group (4).svg";

import MindfulChef from "../Images/ai-img-1.png";
import Thursday from "../Images/ai-img-2.png";
import Gener8 from "../Images/ai-img-3.png";
import ring from "@/Images/ring.png";

import r1 from "@/Images/r1.png";
import r2 from "@/Images/r2.png";

import narrow from "@/svg/Arrow 1.svg";

import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";

import solution from "../Images/page30.png";
import circle from "../Images/Group 186.png";

import i1 from "../Images/wireless/i1.png";
import i2 from "../Images/wireless/i2.png";
import i3 from "../Images/wireless/i3.png";
import wifi from "../Images/wireless/w30.png";
import res1 from "../Images/wireless/r1.png";
import res2 from "../Images/wireless/r2.png";
import InsightSection from "@/components/InsightSection";

export default function WirelessAndMobilityServices() {
    // Reusable animation helpers
    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut", delay },
        viewport: { once: true, amount: 0.2 },
    });

    const scaleIn = (delay = 0) => ({
        initial: { opacity: 0, scale: 0.96 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, ease: "easeOut", delay },
        viewport: { once: true, amount: 0.2 },
    });



    const pop = (delay = 0) => ({
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
    });

    const cards = [
        {
            img: i1,
            title: "UNIFIED CONNECTIVITY",
            desc: "Delivering seamless access across devices and networks.",
        },
        {
            img: i2,
            title: "SECURE MOBILITY",
            desc: "Protecting data while enabling flexible mobile operations.",
        },
        {
            img: i3,
            title: "SCALABLE NETWORKS",
            desc: "Expanding wireless infrastructure to support growing demands.",
        },
          {
            img: i2,
            title: "SECURE MOBILITY",
            desc: "Protecting data while enabling flexible mobile operations.",
        },
    ];




    return (
        <div className="min-h-screen flex flex-col bg-black gap-y-28">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <HeroBanner img={wams_img} svg={ws} heading="Mobility Services" text="" />
            </motion.div>

            <div className="text-white px-4 sm:px-8 lg:px-20 py-8">
                <div className="max-w-7xl mx-auto grid gap-12 lg:gap-16 mt-24">
                    {/* Row 1: Full-width Heading */}
                    <div>
                        <motion.h2 className="font-extrabold mb-0" {...fadeUp(0)}>
                            <span className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[72px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent bg-center bg-[length:100%_100%] leading-tight">
                                Our Engineering Excellence <br />
                                is Your Strategic Advantage
                            </span>
                        </motion.h2>
                    </div>

                    {/* Row 2: Left (text+CTA) and Right (image) */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text + CTA */}
                        <div className="order-1 space-y-6">
                            <motion.p
                                className="text-gray-300 text-base md:text-[18px] leading-relaxed"
                                {...fadeUp(0.05)}
                            >
                                After meeting with your IT team to fully comprehend your company’s technical
                                requirements, our wireless engineers mitigate environmental challenges to ensure an
                                optimized, speedy, and secure infrastructure. Our services are based on years of
                                experience; we install complex networks across diverse industries: Cruise lines,
                                Performing Arts Venues, Higher Ed, and Financial Institutions to name a few.
                            </motion.p>

                            <motion.a
                                href="#"
                                className="inline-flex items-center gap-2 text-white font-medium group"
                                style={{ fontSize: "16px" }}
                                {...fadeUp(0.1)}
                                whileHover={{ x: 4 }}
                            >
                                Get Started
                                <div className="relative w-[56px] h-[56px] -ml-[24px]">
                                    <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                                    <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                                        <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                                    </span>
                                </div>
                            </motion.a>
                        </div>

                        {/* Right: Image */}
                        <motion.div
                            className="order-2 rounded-xl overflow-hidden"
                            {...scaleIn(0.05)}
                            whileHover={{ scale: 1.02 }}
                        >
                            <img src={wasm2} alt="Team Discussion" className="w-full h-auto object-contain" />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="text-white px-4 sm:px-8 lg:px-20 xl:px-28 py-8">
                {/* Grid wrapper */}
                <div className="grid gap-5 md:gap-6">
                    {/* Row 1 */}
                    <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                        {/* Card 1 */}
                        <motion.article
                            className="relative rounded-lg border border-[#444955] min-h-[290px] md:min-h-[300px] bg-[#111215] [background:linear-gradient(179.93deg,rgba(2,2,3,0.3)_68.46%,rgba(220,20,20,0.3)_201.19%),#111215]"
                            {...fadeUp(0)}
                            whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.35)" }}
                        >
                            <div className="p-5 md:p-6 lg:p-7 relative">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-[64px] h-[64px] rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center shrink-0">
                                        <img src={one} alt="icon" className="w-[24px] h-[24px]" />
                                    </div>
                                    <img
                                        src={wasm4}
                                        alt=""
                                        className="w-[180px] h-[110px] sm:w-[220px] sm:h-[130px] md:w-[243px] md:h-[147px] object-contain -mt-[20px]"
                                    />
                                </div>

                                <h3 className="mt-4 text-[16px] md:text-[17px] font-semibold leading-snug">
                                    Increase Operational Performance with a CSPi WLAN Assessment
                                </h3>
                                <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-white/75">
                                    Our engineers will evaluate your existing WLAN infrastructure and provide a report
                                    that identifies deficiencies that prohibit optimal performance. This assessment
                                    focuses on network architecture design, wireless performance, connectivity
                                    stability, signal strength, and client security posture.
                                </p>
                            </div>
                        </motion.article>

                        {/* Card 2 */}
                        <motion.article
                            className="relative rounded-lg border border-[#444955] min-h-[290px] md:min-h-[300px] bg-[#111215] [background:linear-gradient(179.93deg,rgba(2,2,3,0.3)_68.46%,rgba(97,91,254,0.3)_201.19%),#111215]"
                            {...fadeUp(0.05)}
                            whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.35)" }}
                        >
                            <div className="p-5 md:p-6 lg:p-7">
                                <div className="w-[64px] h-[64px] rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                    <img src={two} alt="icon" className="w-[24px] h-[24px]" />
                                </div>

                                <h3 className="mt-20 text-[16px] md:text-[17px] font-semibold leading-snug">
                                    Optimize your WLAN with CSPi Site Surveys
                                </h3>
                                <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-white/75">
                                    A thorough site survey provides potent information to ensure an optimum architected
                                    wireless solution. We conduct Predictive Site Surveys to determine AP and antenna
                                    placements and quantities; we conduct Active and Passive Site surveys to determine
                                    actual RF propagation patterns of specific AP and antenna models; and we conduct
                                    Post-Installation Site Surveys to validate new implementation.
                                </p>
                            </div>
                        </motion.article>
                    </div>

                    {/* Row 2 */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {/* Card 3 */}
                        <motion.article
                            className="relative rounded-lg border border-[#444955] min-h-[360px] bg-[#111215] [background:linear-gradient(179.93deg,rgba(2,2,3,0.3)_68.46%,rgba(218,34,255,0.3)_201.19%),#111215]"
                            {...fadeUp(0)}
                            whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.35)" }}
                        >
                            <div className="p-5 md:p-6 lg:p-7">
                                <div className="w-[64px] h-[64px] rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                    <img src={three} alt="icon" className="w-[24px] h-[24px]" />
                                </div>

                                <h3 className="mt-4 text-[16px] md:text-[17px] font-semibold leading-snug">
                                    Achieve Your Business Goals with CSPi Wireless & Mobility Design and Architecture
                                    Services
                                </h3>
                                <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-white/75">
                                    Our experts work closely with your staff to align with your business and technical
                                    requirements, so you can get the best value from your WLAN infrastructure. We
                                    evaluate your current environment, identify areas of risk, highlight opportunities
                                    for improvement, and help determine a plan for successful migration.
                                </p>
                            </div>
                        </motion.article>

                        {/* Card 4 */}
                        <motion.article
                            className="relative rounded-lg border border-[#444955] min-h-[360px] bg-[#111215] [background:linear-gradient(179.93deg,rgba(2,2,3,0.3)_68.46%,rgba(40,92,246,0.258)_201.19%),#111215]"
                            {...fadeUp(0.05)}
                            whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.35)" }}
                        >
                            <div className="p-5 md:p-6 lg:p-7">
                                <div className="w-[64px] h-[64px] rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                    <img src={four} alt="icon" className="w-[24px] h-[24px]" />
                                </div>

                                <h3 className="mt-4 text-[16px] md:text-[17px] font-semibold leading-snug">
                                    Accelerate Time to Market with CSPi Wireless and Mobility Implementation Services
                                </h3>
                                <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-white/75">
                                    Our wireless and mobility experts have widespread experience across diverse
                                    industries within public and private sectors and fully understand the complexities
                                    of implementing wireless technology. You can rely on our Implementation Services
                                    for WLAN to deliver a secure and high-performing solution that maintains reliable
                                    connectivity.
                                </p>
                            </div>
                        </motion.article>

                        {/* Card 5 */}
                        <motion.article
                            className="relative rounded-lg border border-[#444955] min-h-[360px] bg-[#111215] [background:linear-gradient(179.93deg,rgba(2,2,3,0.3)_68.46%,rgba(251,188,5,0.3)_201.19%),#111215]"
                            {...fadeUp(0.1)}
                            whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.35)" }}
                        >
                            <div className="p-5 md:p-6 lg:p-7 relative">
                                <div className="w-[64px] h-[64px] rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                    <img src={five} alt="icon" className="w-[24px] h-[24px]" />
                                </div>

                                <h3 className="mt-4 text-[16px] md:text-[17px] font-semibold leading-snug">
                                    Avoid Scope Creep with Dedicated Project Management
                                </h3>
                                <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-white/75">
                                    Avoid Scope Creep with Dedicated Project Management – Our seasoned project managers
                                    oversee every detail of your implementation: they efficiently allocate pertinent
                                    resources to scale your logistical, technical, and management needs, while
                                    delivering your projects within time, scope, and budget.
                                </p>
                            </div>
                        </motion.article>
                    </div>

                    {/* CTA row */}
                    <motion.div className="pt-2" {...fadeUp(0)}>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-white font-medium group"
                            style={{ fontSize: "16px" }}
                        >
                            Schedule a consultation with an IT expert
                            <div className="relative w-[56px] h-[56px] -ml-[24px]">
                                <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                                <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                                    <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                                </span>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>

            <div className="text-white px-4 sm:px-8 lg:px-20 py-8">
                <div className="max-w-7xl mx-auto grid gap-12 lg:gap-16">
                    {/* Row 1: Full-width Heading */}
                    <div>
                        <motion.h2 className="font-extrabold mb-0" {...fadeUp(0)}>
                            <span className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[56px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent bg-center bg-[length:100%_100%] leading-tight">
                                Increase Productivity with High Performance, Availability, and Reliably secure
                                connections
                            </span>
                        </motion.h2>
                    </div>

                    {/* Row 2 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text */}
                        <div className="order-1 space-y-6">
                            <motion.p
                                className="text-gray-300 text-base md:text-[20px] leading-relaxed"
                                {...fadeUp(0.05)}
                            >
                                We have the experience and technology resources to be your single wireless solutions
                                provider. We carefully customize comprehensive wireless and mobile platforms that
                                will address your unique business requirements. The goal: keep your end users
                                securely and continuously connected for an optimum experience.
                            </motion.p>
                            <motion.p
                                className="text-gray-300 text-base md:text-[20px] leading-relaxed"
                                {...fadeUp(0.1)}
                            >
                                From assessments, site surveys, design to deployment, to ongoing support, we provide
                                end-to-end, personalized wireless solutions that deliver today and well into the
                                future.
                            </motion.p>
                        </div>

                        {/* Right: Image */}
                        <motion.div
                            className="order-2 rounded-xl overflow-hidden"
                            {...scaleIn(0.05)}
                            whileHover={{ scale: 1.02 }}
                        >
                            <img src={wasm3} alt="Team Discussion" className="w-full h-auto object-contain" />
                        </motion.div>
                    </div>
                </div>
            </div>

            <section className="text-white">
                <div className="mx-auto max-w-[1380px] px-4 sm:px-8 lg:px-20 py-12">
                    <motion.h2
                        className="text-center text-indigo-400 text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight"
                        {...fadeUp(0)}
                    >
                        Other Solution Focus Areas
                    </motion.h2>

                    {/* 3-column layout */}
                    <div className="mt-10 grid lg:grid-cols-3 gap-8">
                        {/* Left column */}
                        <div className="grid gap-8 auto-rows-[1fr]">
                            {/* Card 1 */}
                            <motion.article
                                className="relative rounded-lg border border-dashed flex flex-col min-h-[220px] sm:min-h-[240px] md:min-h-[260px] bg-transparent"
                                style={{ borderColor: "#444955" }}
                                {...fadeUp(0.05)}
                                whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.35)" }}
                            >
                                <div className="p-6 grow flex flex-col gap-4">
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Mobile Security</h3>
                                        <img src={circle} alt="Mobile Security" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
                                    </div>
                                    <p className="text-base-50 text-base leading-normal">
                                        Protect devices and data with secure mobile management and compliance solutions.
                                    </p>
                                </div>
                            </motion.article>

                            {/* Card 2 */}
                            <motion.article
                                className="relative rounded-lg border border-dashed flex flex-col min-h-[220px] sm:min-h-[240px] md:min-h-[260px] bg-transparent"
                                style={{ borderColor: "#444955" }}
                                {...fadeUp(0.1)}
                                whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.35)" }}
                            >
                                <div className="p-6 grow flex flex-col gap-4">
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Advanced Security</h3>
                                        <img src={circle} alt="Advanced Security" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
                                    </div>
                                    <p className="text-base-50 text-base leading-normal">
                                        Plan and design a secure infrastructure by incorporating threat intelligence and
                                        compliance rigor.
                                    </p>
                                </div>
                            </motion.article>
                        </div>

                        {/* Middle panel */}
                        <motion.div className="grid auto-rows-[1fr]" {...scaleIn(0.05)}>
                            <div
                                className="relative rounded-lg overflow-hidden border border-dashed flex flex-col min-h-[260px]"
                                style={{ borderColor: "#444955" }}
                            >
                                <div className="relative w-full h-full">
                                    <img src={solution} alt="" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right column */}
                        <div className="grid gap-8 auto-rows-[1fr]">
                            {/* Card 3 */}
                            <motion.article
                                className="relative rounded-lg border border-dashed flex flex-col min-h-[220px] sm:min-h-[240px] md:min-h-[260px] bg-transparent"
                                style={{ borderColor: "#444955" }}
                                {...fadeUp(0.05)}
                                whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.35)" }}
                            >
                                <div className="p-6 grow flex flex-col gap-4">
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Data Center Services</h3>
                                        <img src={circle} alt="Data Center Services" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
                                    </div>
                                    <p className="text-base-50 text-base leading-normal">
                                        Address compute, storage, virtualization, and cloud requirements with one
                                        provider for facilities and management.
                                    </p>
                                </div>
                            </motion.article>

                            {/* Card 4 */}
                            <motion.article
                                className="relative rounded-lg border border-dashed flex flex-col min-h-[220px] sm:min-h-[240px] md:min-h-[260px] bg-transparent"
                                style={{ borderColor: "#444955" }}
                                {...fadeUp(0.1)}
                                whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.35)" }}
                            >
                                <div className="p-6 grow flex flex-col gap-4">
                                    <div className="flex items-center justify-between gap-4">
                                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                                            Unified Communication &amp; Collaboration
                                        </h3>
                                        <img src={circle} alt="UCC" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
                                    </div>
                                    <p className="text-base-50 text-base leading-normal">
                                        Trust the experts to help you choose the right Unified Communications tools,
                                        deployment model, and implementation approach.
                                    </p>
                                </div>
                            </motion.article>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo row / tools */}
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
                            <h2 className="text-[32px] sm:text-[36px] md:text-[44px] font-extrabold mb-6">Resources</h2>

                            {/* Red ellipse accent */}
                            <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-[#FF5A5A] blur-[10px] opacity-80"></div>

                            {/* Big illustration */}
                            <img src={wifi} alt="Ring" className="w-full max-w-[382px] h-[220px] sm:h-[260px] object-contain" />
                        </motion.div>

                        {/* Card 1 */}
                        <motion.article
                            className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset] transition"
                            whileHover={{ y: -2 }}
                        >
                            <div className="mb-4">
                                <img src={res1} alt="" className="h-16 w-16 object-contain" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold">Wireless and Mobility Services</h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
                                Wireless and Mobility Services enable seamless, secure, and scalable connectivity for users and
                                devices across various networks, enhancing productivity and accessibility on the go.
                            </p>

                            <button type="button" className="group mt-6 inline-flex items-center gap-3 text-white/85">
                                <span className="underline-offset-4 group-hover:underline">Learn more</span>
                                <div className="relative w-[56px] h-[56px]">
                                    <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                                    <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                                        <img src={narrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                                    </span>
                                </div>
                            </button>
                        </motion.article>

                        {/* Card 2 */}
                        <motion.article
                            className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset] transition"
                            whileHover={{ y: -2 }}
                        >
                            <div className="mb-4">
                                <img src={res2} alt="" className="h-16 w-16 object-contain" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold">CSPi Professional Services</h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
                                CSPi Professional Services deliver tailored IT solutions, including consulting,
                                integration, and support, to optimize technology performance and security.
                            </p>

                            <button type="button" className="group mt-6 inline-flex items-center gap-3 text-white/85">
                                <span className="underline-offset-4 group-hover:underline">Learn more</span>
                                <div className="relative w-[56px] h-[56px]">
                                    <img src={Ellipse} alt="ellipse" className="w-full h-full" />
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
