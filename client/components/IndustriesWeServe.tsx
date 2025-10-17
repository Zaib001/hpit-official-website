// IndustriesWeServe.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Import images (plain React: Vite/CRA)
import HealthcareImg from "../Images/SW/healthcare.png";
import CorporateImg from "../Images/SW/corporate.png";
import ManufacturingImg from "../Images/SW/manufacturing.png";
import EducationImg from "../Images/SW/education.png";
import PublicSafetyImg from "../Images/SW/publicsafety.png";
import SmartCitiesImg from "../Images/SW/smartcities.png";

import Ellipse from "@/svg/Ellipse 10.svg";
import narrow from "@/svg/Arrow 1.svg";

/* Animations */
const container = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

// One card (responsive)
function IndustryCard({
  img,
  title,
  desc,
  accent = "from-[#B02127]/60 via-transparent to-[#2B2E83]/60",
}: {
  img: string;
  title: string;
  desc: string;
  accent?: string;
}) {
  return (
    <motion.div
      variants={cardAnim}
      whileHover={{
        scale: 1.02,
        y: -5,
        boxShadow:
          "0 18px 40px -14px rgba(0,0,0,0.45), 0 10px 22px -10px rgba(128,118,244,0.18)",
      }}
      className="relative w-full h-[420px] sm:h-[460px] lg:h-[492px] overflow-hidden rounded-xl border border-[#2A2C33] group"
    >
      {/* Background image */}
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-[200px] sm:h-[230px] md:h-[267px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />

      {/* subtle edge/ring */}
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-[#2A2C33]/60" />

      {/* content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-[18px] font-semibold ">{title}</h3>
        <p className="text-sm text-gray-300 ">{desc}</p>

        <div>
          <button className="mt-5 sm:mt-6 flex items-center text-[#ECEDEE] text-[14px] sm:text-[15px] font-medium hover:text-[#E50000] transition group">
            <span>Learn more</span>
            <div className="relative w-[48px] sm:w-[56px] h-[48px] sm:h-[56px] flex items-center justify-center ml-1 sm:ml-2">
              <img src={Ellipse} alt="ellipse" className="w-full h-full" />
              <img
                src={narrow}
                alt="arrow"
                className="absolute w-[10px] sm:w-[11.5px] h-[18px] sm:h-[20px] transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
}


export default function IndustriesWeServe() {
  return (
    <section className=" text-white py-20 px-6 md:px-16 lg:px-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="max-w-7xl mx-auto"
      >
        {/* heading */}
        <motion.div variants={cardAnim} className="mb-12">
          <h2 className="text-[38px] md:text-[48px] font-semibold leading-tight">
            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
              Industries
            </span>{" "}
            <span className="text-white">We Serve</span>
          </h2>
          <p className="text-gray-400 text-[15px] mt-3">
            We build wireless systems that work for every environment.
          </p>
        </motion.div>

        {/* grid */}
        <motion.div variants={container} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <IndustryCard
            img={HealthcareImg}
            title="Healthcare"
            desc="Hospital-wide Wi-Fi, mobile access, and connected devices."
          />
          <IndustryCard
            img={CorporateImg}
            title="Corporate Offices"
            desc="Strong signal coverage and data security for hybrid teams."
          />
          <IndustryCard
            img={ManufacturingImg}
            title="Manufacturing"
            desc="IoT, smart sensors, and monitoring for automated operations."
          />
          <IndustryCard
            img={EducationImg}
            title="Education"
            desc="Campus-wide high-speed internet and remote learning support."
          />
          <IndustryCard
            img={PublicSafetyImg}
            title="Public Safety"
            desc="Mission-critical DAS and emergency communication systems."
          />
          <IndustryCard
            img={SmartCitiesImg}
            title="Smart Cities"
            desc="Scalable wireless integration for intelligent infrastructure."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
