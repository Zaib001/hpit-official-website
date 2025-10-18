import React from "react";
import application from "../svg/Application.svg";
import ApplicationTransfrom from "../Images/ApplicationTransformation.jpg";
import facelift from "../Images/Pexels Photo by Michelangelo Buonarroti (1).jpg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import twopoint5 from "../svg/twopointfive.svg";
import threetimes from "../svg/threetimes.svg";
import sixtypercent from "../svg/sixtypercent.svg";
import fourtypercent from "../svg/fourtypercent.svg";
import ladysitting from "../Images/Pexels Photo by Photo By_ Kaboompics.com.jpg";
import horizontalLine from "../svg/Line 30.svg";
import Thursday from "../svg/Thursday.svg";
import Gener8 from "../svg/Gener8.svg";
import MindfulChef from "../svg/MindfulChef.svg";
import ClientExperience from "@/components/ClientExperience";
import redline from "../svg/redline.svg";
import redone from "../svg/redone.svg";
import redtwo from "../svg/redtwo.svg";
import redthree from "../svg/redthree.svg";
import redfour from "../svg/redfour.svg";
import redfive from "../svg/redfive.svg";
import img from "../Images/Pexels Photo by Photo By_ Kaboompics.com.jpg";
import { motion } from "framer-motion";
import PaddingWrapper from "@/components/PaddingWrapper";

export default function ApplicationTransformation() {
  return (
    <PaddingWrapper>
    <div className="min-h-screen flex flex-col bg-black">
      {/* Hero Section */}
      <motion.div
        className="bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${ApplicationTransfrom})`,
          width: "auto",
          height: "756px",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8"
          style={{ marginTop: "100px" }}
        >
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-2xl">
              <h2 className="text-white text-[58px] md:text-5xl lg:text-6xl font-normal mb-1">
                <img src={application} alt="Company" />
              </h2>
              <h2 className="text-white text-[58px] md:text-4xl lg:text-5xl font-bold mb-8">
                Transformation
              </h2>
              <p className="text-white text-[20px] md:text-lg leading-relaxed max-w-xl">
                Give your legacy systems new life with future ready
                architecture, design, and performance all without<br></br>{" "}
                starting from scratch.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Facelift Section */}
      <motion.div
        className="text-white px-4 sm:px-8 lg:px-20 py-16"
        style={{ marginTop: "60px" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[56px] font-extrabold mb-2">
              <span className="">
                More <span className="bg-gradient-to-t from-[#8076F4] to-70% to-white text-transparent bg-clip-text">than a</span> facelift it's a f<span className="bg-gradient-to-b from-[#8076F4] to-70% to-white text-transparent bg-clip-text">ull upg</span>rade.
              </span>
            </h2>

            <p
              className="text-gray-300 text-[18px] leading-relaxed"
              style={{ marginTop: "60px" }}
            >
              Application transformation updates core systems, not only to
              modern UI/UX standards but to new levels of speed, scalability,
              security, and agility. We turn outdated into outstanding — with
              strategy, not shortcuts.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white font-medium group"
              style={{ marginTop: "60px", fontSize: "16px" }}
            >
              Get Started
              <div
                className="relative w-[56px] h-[56px]"
                style={{ marginLeft: "-15px" }}
              >
                <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                <span
                  className="absolute inset-0 flex items-center justify-center text-white text-xl"
                  style={{ marginLeft: "-15px" }}
                >
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-[11.5px] h-[20px]"
                  />
                </span>
              </div>
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="rounded-xl overflow-hidden"
            style={{ marginTop: "20px", marginLeft: "60px" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={facelift}
              alt="Team Discussion"
              className="w-[546px] h-[399px] object-cover rounded-l-sm"
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="bg-black text-white px-4 lg:gap-x-18 sm:px-8 py-12 border-t border-b border-[#22252B]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#22252B] text-center">
          {[
            {
              img: sixtypercent,
              text: "Reduction in System <br /> Downtime",
              ml: "120px",
            },
            {
              img: threetimes,
              text: "Faster Feature Deployment <br /> Post-Transformation",
              ml: "130px",
            },
            {
              img: fourtypercent,
              text: "Lower Maintenance & <br /> Support Costs",
              ml: "120px",
            },
            {
              img: twopoint5,
              text: "Increase in User <br /> Satisfaction",
              ml: "120px",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="px-4 py-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <img
                src={item.img}
                alt="stat"
                className="w-auto h-[34px]"
                style={{ marginLeft: item.ml, marginBottom: "20px" }}
              />
              <p
                className="mt-2 text-[18px] text-gray-300 font-poppins leading-snug"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="bg-black text-white py-16 px-6"
        style={{ marginTop: "60px", marginLeft: "-98px" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[48px] font-extrabold mb-2">
              <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                What We Transform
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-gray-300 text-[20px] leading-relaxed"
            style={{ marginTop: "10px", marginBottom: "-20px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Modernizing every layer from interface <br /> to infrastructure.
          </motion.p>

          {/* Cards Section */}
          <div
            className="mt-12 grid md:grid-cols-3 gap-[120px] bg-gradient-to-t from-[#80C2F990]  to-[#111215CC]  p-8 rounded-l"
            style={{ marginRight: "-110px" }}
          >
            {[
              {
                title: "UI/UX &<br/> Frontend",
                text: "Outdated interfaces made modern, mobile first, and accessible keeping users engaged and satisfied.",
                extraClasses: "border-r border-gray-600 pr-6",
              },
              {
                title: "Architecture <br/> & Codebase",
                text: "From spaghetti code to clean structure — we refactor, rebuild, or modularize as needed.",
                extraClasses: "border-r border-gray-600 px-6",
              },
              {
                title: "Infrastructure & Deployment",
                text: "Legacy hosting → containerized, cloud-native, CI/CD-ready deployment pipelines.",
                extraClasses: "pl-6",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className={card.extraClasses}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h3
                  className="text-[32px] font-semibold mb-2"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />
                <p
                  className="text-gray-400 text-[18px]"
                  style={{ marginTop: "30px" }}
                >
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="bg-black text-white px-6 py-16 lg:px-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading Section */}
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[48px] font-extrabold mb-4">
            <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
              The HPIT Approach
            </span>
          </h2>
          <p className="text-gray-300 text-[20px] max-w-2xl">
            A clear, strategic path to modern, high <br /> performing
            applications.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          style={{ marginTop: "80px" }}
        >
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={img}
              alt="Team Working"
              className="w-[497px] h-[601px] rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right: Steps */}
          <motion.div
            className="space-y-8 mt-2"
            style={{ marginTop: "-40px", marginLeft: "80px" }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Line + Intro Text */}
            <motion.div
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={redline}
                alt="Vertical Line"
                className="w-4 h-[56px] mt-1"
              />
              <p className="text-[20px] text-gray-300 leading-relaxed">
                Our Proven 5-Step Process to Modernize Legacy Applications
              </p>
            </motion.div>

            {/* Steps with Icons */}
            {[
              [
                redone,
                "Assessment",
                "Understand your app, users, pain points, and goals.",
              ],
              [
                redtwo,
                "Strategy Design",
                "Define what to keep, rebuild, or refactor.",
              ],
              [
                redthree,
                "Modernization Execution",
                "Implement code, UI, and infrastructure upgrades.",
              ],
              [
                redfour,
                "Testing & Optimization",
                "Ensure flawless performance and security.",
              ],
              [
                redfive,
                "Handoff + Training",
                "Empower your team to take full control post-launch.",
              ],
            ].map(([icon, title, desc], i) => (
              <motion.div
                key={title}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <img
                  src={icon}
                  alt={title}
                  className="w-[64px] h-[64px] mt-1"
                />
                <div>
                  <h3 className="font-semibold text-[24px] text-white">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-[16px]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <div className="bg-black px-6 md:px-20 py-16 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Top Card */}
          <motion.div
            className="bg-[#333740] rounded-xl p-6 flex items-center justify-center h-[240px] col-span-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <h2 className="text-3xl font-bold leading-tight mb-2">
                How We{" "}
                <span className="bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-text">
                  Transformed
                </span>
                <br />
                X's Legacy App
              </h2>
            </div>
          </motion.div>

          {/* Column 2 & 3 merged: Top Right Wide Card */}
          <motion.div
            className="bg-gradient-to-r from-[#00000000] to-[#8D128F] rounded-xl p-6 flex items-center justify-between h-[240px] col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-[60%]">
              <h3 className="text-xl font-semibold mb-2">Thursday</h3>
              <p className="text-sm text-gray-300 mb-4">
                We enhanced this dating app’s UX and backend to support
                real-time events and location-based user matching.
              </p>
              <button className="text-sm font-medium flex items-center gap-2 group">
                KNOW MORE
                <span className="text-white group-hover:translate-x-1 transition">
                  &#8594;
                </span>
              </button>
            </div>
            <img
              src="/images/thursday.png"
              alt="Thursday"
              className="w-40 h-auto"
            />
          </motion.div>

          {/* Bottom Left Card */}
          <motion.div
            className="bg-gradient-to-b from-[#000000] to-[#1a1a1a] rounded-xl p-6 h-[300px] relative overflow-hidden col-span-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">Gener8</h3>
            <p className="text-sm text-gray-300 mb-4">
              Built a secure system enabling users to control their data and
              earn rewards by sharing it with brands.
            </p>
            <button className="text-sm font-medium flex items-center gap-2 group">
              KNOW MORE
              <span className="text-white group-hover:translate-x-1 transition">
                &#8594;
              </span>
            </button>
            <img
              src="/images/gener8.png"
              alt="Gener8"
              className="absolute bottom-[-10px] right-[-10px] w-40 h-auto"
            />
          </motion.div>

          {/* Bottom Right Card */}
          <motion.div
            className="bg-gradient-to-b from-[#000000] to-[#1a1a1a] rounded-xl p-6 h-[300px] relative overflow-hidden col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-2">Mindful Chef</h3>
            <p className="text-sm text-gray-300 mb-4 max-w-[70%]">
              A healthy meal delivery platform we optimized for performance,
              user experience, and seamless subscription management.
            </p>
            <button className="text-sm font-medium flex items-center gap-2 group">
              KNOW MORE
              <span className="text-white group-hover:translate-x-1 transition">
                &#8594;
              </span>
            </button>
            <img
              src="/images/mindfulchef.png"
              alt="Mindful Chef"
              className="absolute bottom-[-10px] right-[-10px] w-40 h-auto"
            />
          </motion.div>
        </div>
      </div>
      ;<ClientExperience></ClientExperience>
    </div>
    </PaddingWrapper>
  );
}
