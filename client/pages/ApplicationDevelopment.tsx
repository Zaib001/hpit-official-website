import React from "react";
import { motion } from "framer-motion";
import applicationDevelopment from "../Images/applicationDevelopment.jpg";
import application from "../svg/Application.svg";
import Manufacturing from "../Images/Manufacturing.jpg";
import Healthcare from "../Images/Healthcare.jpg";
import Edtech from "../Images/EdTech.jpg";
import Fintech from "../Images/FinTech.jpg";
import Enterprise from "../Images/Enterprise.jpg";
import Government from "../Images/Government.jpg";
import Ecommerce from "../Images/Ecommerce.jpg";
import Fingerprint from "../svg/Group (1).svg";
import Screen from "../svg/Group 16.svg";
import cirangle from "../svg/Group 15.svg";
import Braces from "../svg/Group 17.svg";
import Text from "../svg/Group 14.svg";
import HandHeart from "../svg/Group 18.svg";
import Thursday from "../svg/Thursday.svg";
import Gener8 from "../svg/Gener8.svg";
import MindfulChef from "../svg/MindfulChef.svg";
import reverseArrow from "../svg/reverseArrow.svg";
import Flutter from "../svg/flutter.svg";
import AWS from "../svg/AWS.svg";
import Figma from "../svg/Figma.svg";
import Next from "../svg/Next.svg";
import Angular from "../svg/Angular.svg";
import ReactNative from "../svg/MERN.svg";
import ClientExperience from "@/components/ClientExperience";
import PaddingWrapper from "@/components/PaddingWrapper";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import appDev from "../Images/app-dev.webp";

// Reusable animation helpers
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.2 },
});


export default function ApplicationDevelopment() {
  const steps = [
    {
      icon: <img src={Fingerprint} className="text-2xl text-white mb-4" />,
      title: "Discovery & Planning",
      description:
        "We understand your goals, gather requirements, and define a clear roadmap to align business needs with technical execution.",
    },
    {
      icon: <img src={Screen} className="text-2xl text-white mb-4" />,
      title: "UI/UX Design",
      description:
        "We create wireframes and intuitive designs that prioritize user experience, visual consistency, and brand identity.",
    },
    {
      icon: <img src={cirangle} className="text-2xl text-white mb-4" />,
      title: "Architecture & Tech Stack",
      description:
        "We select scalable technologies and architecture that support performance, security, and future growth of your application.",
    },
    {
      icon: (
        <img
          src={Braces}
          className="text-2xl text-white mb-4"
          style={{ marginTop: "20px" }}
        />
      ),
      title: "Agile Development",
      description:
        "Using sprint-based development, we build features iteratively with regular updates, feedback, and collaboration.",
    },
    {
      icon: <img src={Text} className="text-2xl text-white mb-4" />,
      title: "Testing & QA",
      description:
        "We test across multiple devices and scenarios to ensure quality, speed, and reliability before launch.",
    },
    {
      icon: <img src={HandHeart} className="text-2xl text-white mb-4" />,
      title: "Launch & Support",
      description:
        "We ensure a smooth go-live and provide ongoing support, updates, and performance monitoring post-launch.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black w-full">
      {/* Hero Section */}
      <motion.div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative w-full"
        style={{ backgroundImage: `url(${applicationDevelopment})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8"
          style={{ marginTop: "80px" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal mb-1">
                <img src={application} alt="Company" />
              </h2>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Development
              </h2>
              <p className="text-white text-base md:text-lg leading-relaxed max-w-xl">
                From concept to code, we develop secure, scalable, and high
                performance applications tailored to your business goals.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <PaddingWrapper>
        {/* Sectors Section */}

        <motion.div
          className="bg-black text-white mt-[130px] mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-semibold md:text-6xl lg:text-[68px] text-4xl lg:leading-[88px]">Built Applications to Drive <span className="lg:block">Digital Transformation</span></h2>
          <motion.div
            className="bg-black text-white mt-[40px] md:mt-[70px] lg:mt-[104px] flex flex-col md:flex-row md:justify-between md:items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="md:pr-10">
              <h3 className="font-medium text-xl md:text-[24px]">We Develop Apps That Power Every Industry</h3>
              <p className="mt-[30px] text-sm md:text-base font-thin md:leading-[30px]">We design and develop custom applications that modernize your business, streamline operations, and enhance customer engagement. Whether it's web, mobile, or cross-platform, our solutions are built for speed, security, and long-term success.</p>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-white font-medium group mt-[20px] md:mt-[48px]"
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
            <img src={appDev} className="md:w-[460px] lg:w-[570px] xl:w-[643px] mt-16 md:mt-0" alt="" />
          </motion.div>
        </motion.div>
        <motion.div
          className="bg-black text-white py-16 px-6 md:px-12 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-[43px] lg:text-[48px] font-semibold text-center md:leading-[55px] lg:leading-[70px] mb-4">
            Building <span className="bg-radial from-purple-700 to-40%  to-white ">Smart Solutions</span> That
            Serve <br />
            Businesses <span className="">Across All Sectors</span>
          </h2>
          <p
            className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            style={{ marginBottom: "150px" }}
          >
            We build secure, scalable applications designed to meet complex
            business needs and drive lasting impact.
          </p>

          <motion.div
            className="grid grid-cols-2 gap-4 mb-4"
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={Healthcare}
                alt="Healthcare"
                className="w-60 h-80 object-cover rounded"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={Ecommerce}
                alt="E-commerce"
                className="w-[243px] h-[296px] object-cover rounded"
              />
            </motion.div>
          </motion.div>

          {/* Bottom Row */}
          <div className="grid grid-cols-5 gap-4">
            {[Enterprise, Fintech, Edtech, Manufacturing, Government].map(
              (img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <img
                    src={img}
                    alt={`Sector ${i}`}
                    className="w-[240px] h-[139px] object-cover rounded"
                  />
                </motion.div>
              ),
            )}
          </div>
        </motion.div>

        {/* Development Journey */}
        <motion.div
          className="bg-black text-white py-16 px-6 md:px-12 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="self-center px-4">
            <h2
              className="text-5xl font-extrabold leading-tight mb-8"
              style={{ marginLeft: "-60px" }}
            >
              Our
              <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">
                {" "}
                Agile
              </span>
              <br />
              Development Journey
            </h2>
            <p
              className="text-gray-400 text-xl leading-relaxed max-w-xl"
              style={{ marginLeft: "-60px" }}
            >
              A Proven, Collaborative Process From Idea to Launch and Beyond
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{ marginTop: "80px", marginLeft: "-50px" }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="mb-4">{step.icon}</div>
                <div className="w-26 border-t border-gray-700 mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-base">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          className="w-full bg-black text-white py-16 px-6 md:px-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-extrabold mb-6 leading-tight">
                Built{" "}
                <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">
                  With the
                </span>
                <br />
                Right Tools{" "}
                <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">
                  for the
                </span>{" "}
                Job
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                We use cutting-edge frameworks and platforms to ensure top
                performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={reverseArrow}
                alt="Arrow Illustration"
                className="w-30 h-auto"
              />
            </motion.div>

            <motion.div className="grid grid-cols-3 gap-4">
              {[Next, ReactNative, Angular, Flutter, Figma, AWS].map(
                (icon, i) => (
                  <motion.div
                    key={i}
                    className="bg-[#1f1f1f] p-6 rounded-md flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <img src={icon} className="w-10 h-10 mb-3" />
                  </motion.div>
                ),
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="w-full bg-black text-white py-16 px-6 md:px-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto mb-12" style={{ marginLeft: "80px" }}>
            <h2 className="text-4xl font-extrabold mb-4 leading-tight">
              See What We’ve <br />
              <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">
                Achieved Together
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Discover how our solutions solved real problems and delivered
              measurable business outcomes
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[MindfulChef, Thursday, Gener8].map((logo, i) => (
              <motion.div
                key={i}
                className="bg-[#2c2e33] p-6 rounded-md flex flex-col justify-between"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <img src={logo} alt={`Logo ${i}`} className="mb-6 mx-auto" />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-end mt-8 space-x-4"
            style={{ marginRight: "70px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button className="w-10 h-10 border border-red-500 rounded-full flex items-center justify-center">
              <span className="text-red-500 text-xl">&lt;</span>
            </button>
            <button className="w-10 h-10 border border-red-500 rounded-full flex items-center justify-center">
              <span className="text-red-500 text-xl">&gt;</span>
            </button>
          </motion.div>
        </motion.div>
      </PaddingWrapper>
    </div>
  );
}
