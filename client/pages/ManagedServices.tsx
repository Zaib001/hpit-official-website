"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import digitalImg from "../Images/MS-main.png";
import DigitalTwin from "../Images/Managed.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/Group 149 (3).png";
import quantumImg from '../Images/Why.jpg';

import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";
import narrow from "@/svg/Arrow 1.svg";

import res1 from "@/Images/MS/r1.png";
import res2 from "@/Images/MS/r2.png";
import res3 from "@/Images/MS/r3.png";

import img3 from "../svg/Frame 458.svg";


import i2 from "../Images/DGT/i2.png";
import InsightSection from "@/components/InsightSection";

import i1 from "../Images/MS/i1.png";
import i2i from "../Images/MS/i2.png";
import i3 from "../Images/MS/i3.png";

import aiRobot from "../Images/CO.jpg";

import MindfulChef from "../Images/ai-img-1.png";
import k1 from "../Images/IA/k1.png";
import k2 from "../Images/IA/k2.png";
import k3 from "../Images/IA/k3.png";

import icon1 from "../Images/MS/1.png";
import icon2 from "../Images/MS/2.png";
import icon3 from "../Images/MS/3.png";
import icon4 from "../Images/MS/4.png";
import decorImg from "../Images/cap.png";
import TechnologyAlly from "@/components/TechnologyAlly";




export default function ManagedServices() {

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
            title: "PROACTIVE MONITORING",
            desc: "Ensuring seamless operations by detecting and resolving issues early.",
        },
        {
            img: i2i,
            title: " COST EFFICIENCY",
            desc: "Reducing IT expenses through optimized resource management.",
        },
        {
            img: i3,
            title: "24/7 SUPPORT",
            desc: "Providing round-the-clock assistance to keep systems running smoothly.",
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

    const Capability: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
        <div className="flex flex-col items-start text-left gap-3">
            {/* Icon */}
            <div className="w-11 h-11 rounded-md grid place-items-center">
                <img src={icon} alt="" className="w-[44px] h-[44px] object-contain" />
            </div>

            {/* Text Section */}
            <div>
                <h3 className="text-base md:text-lg font-semibold text-[#DADBDD]">{title}</h3>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed">{text}</p>
            </div>
        </div>
    );



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
                <div className="absolute inset-0 bg-black/10"></div>

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
                                    Beyond Maintenance to Intelligent Operations
                                </span>
                            </motion.h2>
                        </div>

                        <motion.p
                            className="text-gray-300 text-base md:text-[18px] leading-relaxed"
                        >
                            Today’s enterprises don’t just need IT to function — they need it to evolve, scale, and compete. HPIT’s Managed Services model transforms IT from a cost center to a value engine, combining automation, domain expertise, and proactive support.
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

            <section className="relative bg-black text-white px-4 sm:px-10 lg:px-28 py-16 mx-auto">
                {/* Heading Section */}
                <div className="mb-10 sm:mb-14">
                    <h2 className="text-3xl sm:text-[56px] font-extrabold leading-tight mb-3 sm:mb-4">
                        <span className="text-[44px] md:text-[44px] lg:text-[44px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent bg-center bg-[length:100%_100%] leading-tight">
                            What We Manage <br /> End to End
                        </span>{" "}

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
                                    Core <br />Infrastructure
                                </h3>
                                <p className="text-[#ECEDEE] text-base md:text-[20px] leading-7 md:leading-8">
                                    Keep your systems available, secure, and performance-optimized — 24/7.
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
                            style={{ minHeight: "243px" }}
                        >
                            <h3 className="text-2xl md:text-[28px] leading-8 font-semibold text-white mb-2">
                                Security & <br />Compliance
                            </h3>
                            <p className="text-white/90 text-base md:text-[20px] leading-7 md:leading-8">
                                Continuous monitoring, threat response, and audit alignment.
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
                                Applications <br />& Workloads
                            </h3>
                            <p className="text-[#ECEDEE] text-base md:text-[20px] leading-7 md:leading-8 w-full lg:w-[675px]">
                                Full-stack support for enterprise apps across cloud, hybrid, or on-prem.
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
                                        End-User <br />Services
                                    </h3>
                                    <p className="text-gray-400 text-base md:text-[20px] leading-7 md:leading-8">
                                        Support desks, onboarding, and digital workplace enablement.
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
                                        Data & Cloud Platforms
                                    </h3>
                                    <p className="text-gray-400 text-[20px] leading-8 relative z-10">
                                        Manage performance, cost, and availability across cloud-native and legacy platforms.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-black via-[#050509] to-black text-white py-20 px-6 sm:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Side - Text */}
                    <motion.div
                        className="flex-1 text-left"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug mb-8">
                            Co-Managed or Fully<br /> Managed — You Decide
                        </h2>
                        <motion.p
                            className="text-gray-300 text-base md:text-[18px] leading-relaxed"
                        >
                            HPIT adapts to your needs — whether you’re offloading full IT operations or just extending your internal team. Our co-managed model brings in tools, talent, and governance while keeping you in control. Prefer full outsourcing? We take accountability from end to end.
                        </motion.p>

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

                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div
                        className="flex-1 relative"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {/* Decorative Border on Top-Left */}
                        <div className="absolute -top-3 -left-3 w-[90%] h-[96%] rounded-tl-[40px] border-t-2 border-l-2 border-[#8076F4]/70 pointer-events-none"></div>

                        <img
                            src={aiRobot}
                            alt="Automation Metrics"
                            className="relative z-10 rounded-tl-[40px] w-full h-auto object-cover"
                        />

                        {/* Bottom Right Accent Shape */}
                        <div className="absolute -bottom-[30px] right-[60px] w-[100px] h-[100px] rotate-45 bg-gradient-to-br from-[#8076F4]/40 to-transparent blur-[50px]"></div>
                    </motion.div>


                </div>
            </section>

            <section className="px-4 sm:px-8 lg:px-20 pb-16 md:pb-20">
                <div className="w-full max-w-[1300px] mx-auto rounded-xl border border-[#22252B] bg-black text-white shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 p-6 sm:p-10 lg:p-16 relative">
                        {/* Left */}
                        <div className="relative">
                            <h2 className="font-semibold text-3xl md:text-[40px] leading-tight bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] text-transparent bg-clip-text mb-4">
                                Value That <br />Compounds
                            </h2>
                            <p className="text-lg text-gray-300 leading-7">More Than Cost Savings</p>

                            {/* Decorative */}
                            <img
                                src={decorImg}
                                alt=""
                                className="hidden md:block absolute -bottom-28 -left-28 w-48 md:w-64 opacity-100 pointer-events-none"
                            />
                        </div>

                        {/* Right */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                            <Capability
                                icon={icon1}
                                title="Improve SLA Adherence"
                                text="Ensure uptime, fast issue resolution, and service quality."
                            />
                            <Capability
                                icon={icon2}
                                title="Free Internal Resources"
                                text="Let your teams focus on strategic growth initiatives."
                            />
                            <Capability
                                icon={icon3}
                                title="Future-Proof Operations"
                                text="Scale seamlessly with new technologies, users, or locations."
                            />
                            <Capability
                                icon={icon4}
                                title="Reduce Risk"
                                text="Mature processes reduce downtime, errors, and compliance exposure."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <TechnologyAlly/>


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
                            <h3 className="text-lg sm:text-xl font-semibold"> Managed Services  </h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
                                An easy-to-understand book that covers the basics of managed services, how to select providers, and best practices for managing outsourced IT.
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
                            <h3 className="text-lg sm:text-xl font-semibold"> Managed Services Explained</h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">

                                A clear, beginner-friendly video explaining what managed services are, common offerings, and how businesses benefit from them.
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
