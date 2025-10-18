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
import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";
import narrow from "@/svg/Arrow 1.svg";
import InsightSection from "@/components/InsightSection";
import i1 from "../Images/AD/i1.jpg";
import i2i from "../Images/AD/i2.jpg";
import i3 from "../Images/AD/i3.jpg";
import i2 from "../Images/DGT/i2.png";
import res1 from "@/Images/AD/r1.png";
import res2 from "@/Images/AD/r2.png";
import res3 from "@/Images/AD/r3.png";


// Reusable animation helpers
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.2 },
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
    img: i2i,
    title: "AGILE METHODS",
    desc: "Discover how agile practices speed up development and reduce risks.",
  },
  {
    img: i3,
    title: "CLOUD-NATIVE APPS",
    desc: "Learn why modern apps thrive on cloud-native architecture.",
  },
  {
    img: i1,
    title: "USER-CENTRIC DESIGN",
    desc: "See how focusing on users drives better adoption and success.",
  },
  {
    img: i2,
    title: "SMART OPERATIONS",
    desc: "They optimize real-time performance by predicting issues before they occur.",
  },
];



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
          <div className="flex flex-col md:flex-row">
            <motion.div
              className="flex flex-col gap-4 items-center md:items-start mb-4 md:mb-0"
              initial="hidden"
              whileInView="visible"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={Healthcare}
                  alt="Healthcare"
                  className="w-[240px] h-[296px] object-cover rounded"
                />
                <div className="flex justify-between absolute bottom-[6px] w-full items-center px-4">
                  <p className="">Healthcare</p>
                  <button className="p-3 border hover:bg-[#DC1414] transition-all border-[#DC1414] rounded-full"><img src={arrow} className="w-[10.6px]" alt="" /></button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={Enterprise}
                  alt="E-commerce"
                  className="w-[240px] h-[139px] object-cover rounded"
                />
                <div className="flex justify-between absolute bottom-[6px] w-full items-center px-4">
                  <p className="">Healthcare</p>
                  <button className="p-3 border hover:bg-[#DC1414] transition-all border-[#DC1414] rounded-full"><img src={arrow} className="w-[10.6px]" alt="" /></button>
                </div>
              </motion.div>
            </motion.div>

            {/* Mid Row */}
            <div className="flex flex-col md:flex-row items-center md:items-end mx-4 gap-4">
              {[Fintech, Edtech, Manufacturing].map(
                (img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative"
                  >
                    <img
                      src={img}
                      alt={`Sector ${i}`}
                      className="w-[240px] h-[296px] object-cover rounded"
                    />
                    <div className="flex justify-between absolute bottom-[6px] w-full items-center px-4">
                      <p className="">Healthcare</p>
                      <button className="p-3 border hover:bg-[#DC1414] transition-all border-[#DC1414] rounded-full"><img src={arrow} className="w-[10.6px]" alt="" /></button>
                    </div>
                  </motion.div>
                ),
              )}
            </div>
            <motion.div
              className="flex flex-col gap-4 items-center md:items-start mt-4 md:mt-0"
              initial="hidden"
              whileInView="visible"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={Ecommerce}
                  alt="Healthcare"
                  className="w-[240px] h-[296px] object-cover rounded"
                />
                <div className="flex justify-between absolute bottom-[6px] w-full items-center px-4">
                  <p className="">Healthcare</p>
                  <button className="p-3 border hover:bg-[#DC1414] transition-all border-[#DC1414] rounded-full"><img src={arrow} className="w-[10.6px]" alt="" /></button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={Government}
                  alt="E-commerce"
                  className="w-[240px] h-[139px] object-cover rounded"
                />
                <div className="flex justify-between absolute bottom-[6px] w-full items-center px-4">
                  <p className="">Healthcare</p>
                  <button className="p-3 border hover:bg-[#DC1414] transition-all border-[#DC1414] rounded-full"><img src={arrow} className="w-[10.6px]" alt="" /></button>
                </div>
              </motion.div>
            </motion.div>

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
            >
              Our
              A<span className="bg-gradient-to-t from-[#8076F4] to-40% to-white text-transparent bg-clip-text">
                gile
              </span>
              <br />
              Devel<span className="bg-gradient-to-b from-[#8076F4] to-70% to-white text-transparent bg-clip-text">opment</span> Journey
            </h2>
            <p
              className="text-xl leading-relaxed max-w-xl"
            >
              A Proven, Collaborative Process From Idea to Launch and Beyond
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{ marginTop: "80px" }}
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
      </PaddingWrapper>
    </div>
  );
}
