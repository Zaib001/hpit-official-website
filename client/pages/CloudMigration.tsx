import React from "react";
import { motion } from "framer-motion";
import ClientExperience from "@/components/ClientExperience";
import cloudMigration from "../Images/Pixabay-7372799.jpg";
import cloud from "../svg/Cloud.svg";
import pix15 from "../Images/Pixabay-67536.jpg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import icon1 from "../svg/01.svg";
import icon2 from "../svg/02.svg";
import icon3 from "../svg/03.svg";
import icon4 from "../svg/04.svg";
import card1 from "../svg/streamline-plump_graph-bar-increase (4).svg";
import card2 from "../svg/streamline-plump_graph-bar-increase (5).svg";
import card3 from "../svg/streamline-plump_graph-bar-increase (6).svg";
import card4 from "../svg/streamline-plump_graph-bar-increase (7).svg";
import card5 from "../svg/streamline-plump_graph-bar-increase (8).svg";
import card6 from "../svg/streamline-plump_graph-bar-increase (9).svg";
import reverseArrow from '../svg/reverseArrow.svg';
import forwardArrow from "../svg/Group 15 (1).svg";
import one from "../svg/Frame 275.svg";
import two from "../svg/Frame 277 (1).svg";
import three from "../svg/Frame 278 (1).svg";
import four from "../svg/Frame 279 (1).svg";
import five from "../svg/Frame 280 (1).svg";
import fauxals from "../Images/Pexels Photo by fauxels (1).jpg";
import frame383 from "../Images/Pexels Photo by Pixabay.jpg";

export default function CloudMigration() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Hero Section */}
      <motion.div
        className="bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${cloudMigration})`, height: "756px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8" style={{ marginTop: "100px" }}>
          <motion.div className="max-w-7xl mx-auto" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="max-w-2xl">
              <h2 className="text-white text-[56px] md:text-5xl lg:text-6xl font-normal mb-1">
                <img src={cloud} alt="Company" />
              </h2>
              <h2 className="text-white text-[56px] md:text-4xl lg:text-5xl font-bold mb-8">Migration</h2>
              <p className="text-white text-[20px] md:text-lg leading-relaxed max-w-xl">
                HPIT delivers secure, seamless cloud migration <br /> tailored for performance and built for the future.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Intro Section */}
      <motion.div className="text-white px-4 sm:px-8 lg:px-20 py-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-[60px] font-extrabold mb-2">
              <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                Move to the Cloud<br /> with Confidence
              </span>
            </h2>
            <p className="text-gray-300 text-[18px] leading-relaxed" style={{ marginTop: "60px" }}>
              At HPIT, we specialize in seamless, secure, and scalable cloud migration. Whether you're shifting legacy systems, optimizing for performance, or adopting a hybrid model, our experts ensure zero disruption and maximum long-term value.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-white font-medium group" style={{ marginTop: "60px", fontSize: "16px" }}>
              Get Started
              <div className="relative w-[56px] h-[56px]" style={{ marginLeft: "-15px" }}>
                <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                <span className="absolute inset-0 flex items-center justify-center text-white text-xl" style={{ marginLeft: "-15px" }}>
                  <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                </span>
              </div>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <img src={pix15} alt="Team Discussion" className="w-[447px] h-[325px] object-cover rounded-l-sm" />
          </motion.div>
        </div>
      </motion.div>

      <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
        <motion.div
          className="max-w-7xl mx-auto border border-gray-700 rounded-md overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.div
            className="p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[48px] font-extrabold mb-6 leading-tight">
              Why{" "}
              <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                Cloud Migration
              </span>{" "}
              <br />
              Matters
            </h2>
            <p className="text-gray-400 text-[14px] leading-relaxed">
              Modern business demands agility, speed, and reliability and legacy <br />
              infrastructure just can’t keep up. Cloud migration is no longer
              optional.
              <br /> It’s the foundation for digital transformation.
            </p>
          </motion.div>

          {/* Top Horizontal Line */}
          <motion.div
            className="border-t border-gray-700 w-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          />

          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <motion.div
              className="border-r border-gray-700 p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img src={icon1} alt="Icon 1" className="w-[70px] h-[42px] mb-4" />
              <p style={{ fontSize: "24px" }}>
                Eliminating <br /> technical debt and legacy bottlenecks
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="border-r border-gray-700 p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img src={icon2} alt="Icon 2" className="w-[70px] h-[42px] mb-4" />
              <p style={{ fontSize: "24px" }}>
                Reducing infrastructure and maintenance costs
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="border-r border-gray-700 p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img src={icon3} alt="Icon 3" className="w-[90px] h-[42px] mb-4" />
              <p style={{ fontSize: "24px" }}>
                Enabling on <br /> demand scalability and automation
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <img src={icon4} alt="Icon 4" className="w-[82px] h-[42px] mb-4" />
              <p style={{ fontSize: "24px" }}>
                Enhancing security, compliance, and <br /> data resilience
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>


      {/* Our Services Section */}

      <div className="py-20 from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <motion.h2
            className="text-6xl sm:text-[6xl] font-extrabold leading-tight text-white mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span
              className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text"
              style={{ marginTop: "60px" }}
            >
              Our Cloud Migration <br /> Services
            </span>
          </motion.h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Cloud Readiness Assessment",
                text: "We move your existing applications to secure cloud platforms like AWS, Azure, or GCP ensuring flexibility, scalability, and reduced infrastructure costs.",
                highlight: false,
              },
              {
                title: "Migration Strategy & Planning",
                text: "We assess your infrastructure, applications, security posture, and performance metrics to build a risk free migration roadmap.",
                highlight: false,
              },
              {
                title: "Application & Data Migration",
                text: "We define the right approach  lift & shift, replatforming, refactoring  based on cost, complexity, and business impact.",
                highlight: true,
              },
              {
                title: "Hybrid & Multi cloud Support",
                text: "Ensure secure, connected, and performant cloud environments across providers or with on prem systems.",
                highlight: false,
              },
              {
                title: "Post Migration Optimization",
                text: "We tune your cloud environment for performance, automate scaling, and implement cost-control mechanisms.",
                highlight: false,
              },
              {
                title: "Legacy System Modernization",
                text: "Modernize outdated, monolithic systems during migration by re-architecting them for the cloud enabling better performance, scalability, and maintainability.",
                highlight: false,
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                className={`${card.highlight
                    ? "bg-gradient-to-br from-blue-600 to-purple-600"
                    : "bg-[#1a1a1a]"
                  } rounded-lg p-6 border-b-4 border-white min-h-[260px] flex flex-col`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <h3
                  className="text-[32px] font-semibold text-white mb-3"
                  style={{ marginTop: "60px", marginBottom: "40px" }}
                >
                  {card.title}
                </h3>
                <p className={card.highlight ? "text-white text-[18px]" : "text-gray-400 text-[18px]"}>
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>



      {/* Approaches Section */}
      <motion.div className="text-white px-4 sm:px-8 lg:px-20 py-16" style={{ marginTop: "220px" }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-[60px] items-start relative">
          <motion.div className="relative" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="absolute top-[-180px] left-6 text-[48px] sm:text-5xl font-extrabold leading-tight z-10">
              Migration <span className="text-transparent bg-clip-text bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]">Approaches</span><br />We Support
            </h2>
            <img src={fauxals} alt="Migration Support" className="rounded-md w-[511px] h-[578px] object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="space-y-14">
              {["Lift and Shift (Rehosting)", "Replatforming", "Refactoring / Re-architecting", "Hybrid and Multi-cloud"].map((title, i) => (
                <motion.div key={i} className="border border-dashed border-gray-700 rounded-xl px-6 py-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <h4 className="font-semibold text-[20px] mb-1">{title}</h4>
                  <p className="text-gray-400 text-[16px]">
                    {[
                      "Move apps as-is for speed and minimal change.",
                      "Adapt existing apps to better leverage cloud capabilities.",
                      "Redesign apps to be cloud-native for scalability, flexibility, and automation.",
                      "Modernize with flexible, multi-platform deployment."
                    ][i]}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Process Section */}

      <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-[48px] font-extrabold">
            <span className="text-transparent bg-clip-text bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)]">
              Our Cloud Migration
            </span>{" "}
            Process
          </h2>
          <p className="text-gray-400 mt-4 text-[20px] max-w-3xl mx-auto">
            From assessment to optimization a structured approach <br /> for seamless,
            secure, and scalable migration.
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="grid grid-cols-5 gap-4 relative mt-12">
          {/* Step 1 */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img src={one} alt="Step 1" className="w-[64px] h-[64px] mb-4" />
            <div>
              <h4 className="font-semibold text-white text-[24px]">Assess</h4>
              <p className="text-[16px] text-gray-400 mt-1">
                Cloud readiness and dependency mapping
              </p>
            </div>
          </motion.div>

          {/* Arrow 1 */}
          <motion.img
            src={reverseArrow}
            alt="arrow"
            className="absolute left-[10%] top-[200px] w-[80px] h-[69px] hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          />

          {/* Step 2 */}
          <motion.div
            className="flex flex-col items-start mt-16"
            style={{ marginTop: "160px" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={two} alt="Step 2" className="w-[64px] h-[64px] mb-4" />
            <div>
              <h4 className="font-semibold text-white text-[24px]">Plan</h4>
              <p className="text-[16px] text-gray-400 mt-1">
                Select the right migration strategy
              </p>
            </div>
          </motion.div>

          {/* Arrow 2 */}
          <motion.img
            src={forwardArrow}
            alt="arrow"
            className="absolute left-[33%] top-[105px] w-[80px] h-[69px] hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
          />

          {/* Step 3 */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            viewport={{ once: true }}
          >
            <img src={three} alt="Step 3" className="w-[64px] h-[64px] mb-4" />
            <div>
              <h4 className="font-semibold text-white text-[24px]">Migrate</h4>
              <p className="text-[16px] text-gray-400 mt-1">
                Execute with minimal <br /> disruption
              </p>
            </div>
          </motion.div>

          {/* Arrow 3 */}
          <motion.img
            src={reverseArrow}
            alt="arrow"
            className="absolute left-[53%] top-[200px] w-[80px] h-[69px] hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          />

          {/* Step 4 */}
          <motion.div
            className="flex flex-col items-start mt-16"
            style={{ marginTop: "160px" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={four} alt="Step 4" className="w-[64px] h-[64px] mb-4" />
            <div>
              <h4 className="font-semibold text-white text-[24px]">Optimize</h4>
              <p className="text-[16px] text-gray-400 mt-1">
                Tune, automate, and secure your cloud
              </p>
            </div>
          </motion.div>

          {/* Arrow 4 */}
          <motion.img
            src={forwardArrow}
            alt="arrow"
            className="absolute left-[73%] top-[105px] w-[80px] h-[69px] hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            viewport={{ once: true }}
          />

          {/* Step 5 */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            viewport={{ once: true }}
          >
            <img src={five} alt="Step 5" className="w-[64px] h-[64px] mb-4" />
            <div>
              <h4 className="font-semibold text-white text-[24px]">Support</h4>
              <p className="text-[16px] text-gray-400 mt-1">
                Monitor, optimize costs, and boost performance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Industries Section */}
      <motion.div className="mx-auto w-[1296px] h-[564px] bg-black px-6 py-10 text-white" style={{ marginTop: "80px", marginBottom: "120px" }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="text-center mb-10">
          <h2 className="text-[40px] font-extrabold">
            Industries <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] text-transparent bg-clip-text ">We Serve</span>
          </h2>
          <p className="text-gray-400 text-lg mt-2 leading-snug">
            Tailored Cloud Migration for Every Sector
          </p>
        </div>

        <motion.div className="relative rounded-xl overflow-hidden shadow-lg w-full h-[360px] bg-gray-800 border border-gray-400" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <img src={frame383} alt="Industry Background" className="w-[1296px] h-[564px] object-cover" />
          <div className="absolute left-8 bottom-28 text-left max-w-[480px]">
            <h3 className="text-[32px] font-semibold text-white">Manufacturing</h3>
            <p className="text-[16px] text-white mt-2 leading-relaxed">
              Modernize ERP systems and supply chain tools to enable smart manufacturing, real-time analytics, and efficient production workflows on the cloud.
            </p>
          </div>
          <div className="absolute right-6 bottom-6 flex flex-wrap gap-3 justify-end">
            {["FinTech", "Healthcare", "eCommerce", "Manufacturing", "EdTech", "Logistics"].map((item, i) => (
              <motion.button key={i} className={`px-5 py-2 rounded-full border text-sm font-medium transition ${item === "Manufacturing" ? "border-violet-400 text-violet-400" : "border-white text-white hover:bg-white hover:text-black"}`} whileHover={{ scale: 1.05 }}>
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <ClientExperience />
    </div>
  );
}
