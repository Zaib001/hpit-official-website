"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import digitalImg from "../Images/main.jpg";
import DigitalTwin from "../Images/_Powering the Future with.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/G5.jpg";
import TopRight from "../Images/industries-top-right.png";
import BottomLeft from "../Images/industries-bottom-left.png";

import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";
import narrow from "@/svg/Arrow 1.svg";

import res1 from "@/Images/PF/r1.png";
import res2 from "@/Images/PF/r2.png";
import res3 from "@/Images/PF/r3.png";

import i2 from "../Images/DGT/i2.png";
import InsightSection from "@/components/InsightSection";

import i1 from "../Images/PF/i1.png";
import i2i from "../Images/PF/i2.png";
import i3 from "../Images/PF/i3.png";

import meetingImg from "../Images/Frame 421.png";
import img4 from "../Images/digital-twin-img-6.png";
import img5 from "../Images/digital-twin-img-7.png";
import img6 from "../Images/digital-twin-img-8.png";
import img7 from "../Images/digital-twin-img-9.png";
import img8 from "../Images/digital-twin-img-10.png";

import deco from "../Images/deco.png";
import hero from "../Images/hero-5g.jpg";
import hero1 from "../Images/Frame 4169.png";

import img31 from "../Images/DA/a3.png";
import OutcomesSection from "@/components/OutcomesSection";
import WirelessIntegrationServices from "@/components/WirelessIntegrationServices";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import handshake from '../Images/handshake.jpg'
import RightDecoration from "@/components/RightDecoration";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudyHeader from "@/components/CaseStudyHeader";
import PrivateNetworkServices from "@/components/PrivateNetworkServices";
import IndustriesPrivateCellular from "@/components/IndustriesPrivateCellular";
import WhyChoosePrivateNetwork from "@/components/WhyChoosePrivateNetwork";
import ClientSuccessStory from "@/components/ClientSuccessStory";
import DeploymentProcess from "@/components/DeploymentProcess";
import WhyChoose from "@/components/WhyChoose";
import CapabilitiesNextGenWireless from "@/components/CapabilitiesNextGenWireless";
import IndustriesWeEmpower from "@/components/IndustriesWeEmpower";
import KeyBenefitsNextGen from "@/components/KeyBenefitsNextGen";
import RelatedResource from "@/components/RelatedResources";
import NextGeneration from "@/components/NextGeneration";
import EdgeManufacturingCase from "@/components/EdgeManufacturingCase";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";


export default function PoweringTheFuture() {

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
            title: "5G to 6G Evolution",
            desc: "From 5G to 6G: ultra-low latency, faster speeds, immersive experiences.",
        },
        {
            img: i2i,
            title: "Wireless–Edge Synergy",
            desc: "Edge + wireless integration powers faster decisions and real-time apps.",
        },
        {
            img: i3,
            title: "AI + Wireless Connectivity",
            desc: "AI-driven wireless transforms data, security, and automation.",
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
                            </motion.h2><br />
                            <motion.h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8" >
                                Next-Generation Wireless Technologies
                            </motion.h2>
                            <motion.p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl" >
                                Stay ahead of the curve with advanced wireless solutions like 5G, 6G, mmWave, and ISAC—designed for ultra-fast, ultra-reliable, and intelligent connectivity.
                            </motion.p>
                            <div className="-ml-4 mt-9">



                                <button
                                    className="inline-flex items-center gap-2 text-white font-medium group
  w-[300px] h-[54px] rounded-lg 
  
  px-[20px] py-[7px] 
  bg-transparent 

 "
                                >
                                    Request Free Consultation
                                    <div className="relative w-[40px] h-[40px] -ml-[10px]">
                                        <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                                        <span className="absolute inset-0 flex items-center justify-center">
                                            <img
                                                src={arrow}
                                                alt="arrow"
                                                className="w-[11.5px] h-[20px] transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </span>
                                    </div>
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>

            <div className="text-white px-4 sm:px-8 lg:px-20 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    {/* Left copy */}
                    <div className="space-y-5 sm:space-y-6">
                        <div>
                            <motion.h2 className="font-extrabold mb-4 sm:mb-6">
                                <span className="text-[30px] sm:text-[38px] lg:text-[44px] inline-block bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent leading-tight">
                                    Next-Generation Wireless Technologies
                                </span>
                            </motion.h2>
                        </div>

                        <motion.p className="text-gray-300 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                            Next-generation wireless technologies refer to the latest innovations in wireless communication that go beyond traditional 4G and Wi-Fi. These include 5G, 6G, mmWave, ISAC (Integrated Sensing and Communication), Edge Computing, and AI-driven network orchestration.<br/>
                            They enable ultra-low latency, massive device density, intelligent automation, and seamless real-time communication, forming the backbone of Industry 4.0, smart cities, autonomous systems, and future enterprise infrastructure.
                        </motion.p>

                        {/* CTA */}
                        <motion.a
                            href="#"
                            className="inline-flex items-center gap-2 text-white font-medium group mt-6 sm:mt-10 text-[15px] sm:text-[16px]"
                            whileHover={{ x: 4 }}
                        >
                            Get Started
                            <div className="relative w-11 h-11 sm:w-14 sm:h-14 -ml-3 sm:-ml-6">
                                <img src={Ellipse} alt="" className="w-full h-full" />
                                <span className="absolute inset-0 flex items-center justify-center">
                                    <img src={arrow} alt="" className="w-[10px] h-[18px] sm:w-[11.5px] sm:h-[20px]" />
                                </span>
                            </div>
                        </motion.a>
                    </div>

                    {/* Right image */}
                    <motion.div
                        className="rounded-xl overflow-hidden justify-self-center"
                        variants={pop(0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <img
                            src={img1}
                            alt="Team discussion"
                            className="w-full max-w-[560px] aspect-[552/406] object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-[1.01]"
                        />
                    </motion.div>
                </div>
            </div>


            <CapabilitiesNextGenWireless artworkSrc={deco} />
            <IndustriesWeEmpower topRightImg={TopRight} bottomLeftImg={BottomLeft} />
            <KeyBenefitsNextGen/>
            <RelatedResource heroImg={hero}/>
            <NextGeneration/>
            <EdgeManufacturingCase heroImg={hero} />
            <WhyWorkWithUs photoSrc={hero1}/>
           





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
                            <h3 className="text-lg sm:text-xl font-semibold">AI-Powered Wireless Future</h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
                                Explore how AI is advancing 5G and beyond in speed, security, and adaptability.
Gain insights into the future of autonomous, intelligent wireless systems.
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
                            <h3 className="text-lg sm:text-xl font-semibold">Evolving Network Architectures</h3>
                            <p className="mt-3 text-white/75 text-sm leading-6">
                                Learn about open, flexible architectures shaping next-gen wireless deployment.  Support massive IoT, low latency, and ultra-reliable communication needs.
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
