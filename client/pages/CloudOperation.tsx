import React from "react";
import { motion } from "framer-motion";
import ClientExperience from "@/components/ClientExperience";
import cloudOperation from "../Images/Pixabay-1010862.jpg";
import cloud from "../svg/Cloud.svg";
import pix15 from "../Images/Pixabay-6091015.jpg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import icon1 from "../svg/streamline-plump_graph-bar-increase (1).svg";
import icon2 from "../svg/streamline-plump_graph-bar-increase (2).svg";
import icon3 from "../svg/streamline-plump_graph-bar-increase (3).svg";
import icon4 from "../svg/streamline-plump_graph-bar-increase.svg";
import card1 from "../svg/streamline-plump_graph-bar-increase (4).svg";
import card2 from "../svg/streamline-plump_graph-bar-increase (5).svg";
import card3 from "../svg/streamline-plump_graph-bar-increase (6).svg";
import card4 from "../svg/streamline-plump_graph-bar-increase (7).svg";
import card5 from "../svg/streamline-plump_graph-bar-increase (8).svg";
import card6 from "../svg/streamline-plump_graph-bar-increase (9).svg";
import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../svg/Group 134.svg";
import group136 from "../svg/Group 136.svg";
import group137 from "../svg/Group 137.svg";
import group138 from "../svg/Group 138.svg";
import vector3 from "../svg/Vector (3).svg";
import vector4 from "../svg/Vector (4).svg";
import pix49 from "../Images/Pixabay-791049.jpg";
import pix51 from "../Images/Pixabay-6181051.jpg";
import jakub from "../Images/Pexels Photo by Jakub Zerdzicki.jpg";

export default function CloudOperation() {
  const services = [
    {
      icon: card1,
      title: "24/7 Monitoring & Management",
      description:
        "Proactive performance tracking, real-time alerts, and issue remediation.",
    },
    {
      icon: card2,
      title: "Cloud Cost Optimization",
      description:
        "Rightsizing resources, avoiding wastage, and maximizing ROI on cloud investments.",
    },
    {
      icon: card3,
      title: "Security & Compliance Management",
      description:
        "Automated policies, risk mitigation, and adherence to regulatory frameworks.",
    },
    {
      icon: card4,
      title: "Backup & Disaster Recovery",
      description:
        "Resilient architecture with automated backup, recovery, and failover mechanisms.",
    },
    {
      icon: card5,
      title: "Infrastructure Automation",
      description:
        "IaC (Infrastructure as Code), CI/CD pipelines, and auto-scaling solutions.",
    },
    {
      icon: card6,
      title: "Multi-cloud & Hybrid Cloud Support",
      description:
        "Unified operations across AWS, Azure, Google Cloud, and on-prem systems.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Hero Section */}
      <motion.div
        className="bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${cloudOperation})`,
          width: "auto",
          height: "756px",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8"
          style={{ marginTop: "60px" }}
        >
          <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-2xl">
              <h2 className="text-white text-[56px] md:text-5xl lg:text-6xl font-normal mb-1">
                <img src={cloud} alt="Company" />
              </h2>
              <br />
              <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                Operation
              </h2>
              <p className="text-white text-base md:text-lg leading-relaxed max-w-xl">
                Ensure performance, security, and resilience <br /> in every
                cloud environment.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="text-white px-4 sm:px-8 lg:px-20 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[48px] font-extrabold mb-2">
              <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text">
                Operate with Confidence in the Cloud.
              </span>
            </h2>
            <p
              className="text-gray-300 text-[18px] leading-relaxed"
              style={{ marginTop: "60px" }}
            >
              HPIT delivers end-to-end cloud operations management to optimize
              performance, ensure compliance, and drive cost <br /> efficiency
              across multi-cloud and hybrid environments.
            </p>
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden"
            style={{ marginTop: "20px", marginLeft: "200px" }}
          >
            <img
              src={pix15}
              alt="Team Discussion"
              className="w-[513px] h-[342px] object-cover rounded-l-sm"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Why Cloud Operations Matter */}
      <motion.div
        className="py-20 px-4 sm:px-8 lg:px-20 text-white text-center"
        style={{ marginTop: "40px" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[56px] sm:text-[48px] font-extrabold leading-tight mb-16">
          Why <span className="text-white">Cloud</span>{" "}
          <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
            Operations Matter
            <br /> More Than Ever
          </span>
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          style={{ marginTop: "120px" }}
        >
          {[icon4, icon1, icon2, icon3].map((icon, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <img src={icon} alt="icon" className="w-[104px] h-[104px]" />
              <p className="text-gray-300 text-[16px] leading-relaxed max-w-xs">
                {
                  [
                    "Increasing complexity of cloud native systems requires continuous monitoring and optimization.",
                    "Businesses need always on infrastructure without compromising on security or compliance.",
                    "Cost inefficiencies and resource sprawl are common without proper governance.",
                    "Cloud operations are foundational for digital agility, uptime, and scalability.",
                  ][i]
                }
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="py-20 px-6 sm:px-8 lg:px-20 text-white"
        style={{ marginLeft: "40px", marginRight: "40px" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-[72px] sm:text-[48px] font-extrabold leading-tight mb-4">
          Our{" "}
          <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text">
            Cloud Operations
          </span>
          <br /> Services
        </h2>
        <p className="text-gray-400 text-[20px] mb-16">
          Modernizing every layer from interface <br /> to infrastructure.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#111215] border border-[#2C2C2C] p-6 rounded-xl hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-[64px] h-[64px]"
                />
              </div>
              <h3 className="text-white font-semibold text-[20px] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-[16px]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tools & Tech Section */}
      <motion.div
        className="w-full bg-black text-white py-16 px-6 md:px-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[48px] sm:text-4xl font-extrabold mb-6 leading-tight">
              <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text">
                Tools & Technologies We Use
              </span>
            </h2>
            <p className="text-gray-400 text-[20px] mb-8">
              We use cutting-edge frameworks and platforms to ensure top
              performance.
            </p>
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

          <motion.div
            className="hidden md:flex justify-center items-center"
            style={{ marginTop: "120px" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={reverseArrow}
              alt="Arrow Illustration"
              className="w-[150px] h-[130px]"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* AWS */}
            <div className="bg-[#111215] rounded-l flex flex-col items-center justify-center px-8 py-6">
              <img
                src={group134}
                alt="AWS"
                className="w-[72px] h-[43px] mt-[8px]"
              />
              <p className="text-white text-[16px] mt-4">AWS</p>
            </div>

            {/* Google Cloud */}
            <div className="bg-[#111215] rounded-l flex flex-col items-center justify-center px-8 py-6">
              <img
                src={group136}
                alt="Google Cloud"
                className="w-[55px] h-[44px]"
              />
              <p className="text-white text-[16px] mt-4 whitespace-nowrap">
                Google Cloud
              </p>
            </div>

            {/* IBM Cloud */}
            <div className="bg-[#111215] rounded-l flex flex-col items-center justify-center px-8 py-6">
              <img
                src={vector3}
                alt="IBM Cloud"
                className="w-[80px] h-[32px]"
              />
              <p className="text-white text-[16px] mt-4 whitespace-nowrap">
                IBM Cloud
              </p>
            </div>

            {/* Azure */}
            <div className="bg-[#111215] rounded-l flex flex-col items-center justify-center px-8 py-6">
              <img src={group137} alt="Azure" className="w-[56px] h-[56px]" />
              <p className="text-white text-[16px] mt-4">Azure</p>
            </div>

            {/* Datadog */}
            <div className="bg-[#111215] rounded-l flex flex-col items-center justify-center px-8 py-6">
              <img src={vector4} alt="Datadog" className="w-[53px] h-[56px]" />
              <p className="text-white text-[16px] mt-4">Datadog</p>
            </div>

            {/* Jenkins */}
            <div className="bg-[#111215] rounded-l flex flex-col items-center justify-center px-8 py-6">
              <img src={group138} alt="Jenkins" className="w-[47px] h-[64px]" />
              <p className="text-white text-[16px] mt-4">Jenkins</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Impact Cards */}
      <motion.div
        className="w-full bg-black text-white py-16 px-6 md:px-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto mb-12" style={{ marginLeft: "80px" }}>
          <h2 className="text-[48px] sm:text-4xl font-extrabold mb-6 leading-tight">
            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text">
              How We Delivered <br />
              Impact
            </span>
          </h2>
          <p className="text-gray-400 text-[20px]">
            See how leading companies transformed their cloud operations with
            HPIT.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[pix49, jakub, pix51].map((imgSrc, i) => (
            <motion.div
              key={i}
              className="bg-[#2c2e33] rounded-md flex flex-col justify-between border-b-4 border-white overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img
                src={imgSrc}
                alt="case-study"
                className="w-[416px] h-[328px] object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-[24px] mb-2">
                  {["FinTech Corp", "ShopSphere", "DevWorks"][i]}
                </h3>
                <p className="text-gray-400 text-[16px]">
                  {
                    [
                      "Reduced cloud waste and improved cost efficiency through proactive monitoring and resource optimization.",
                      "Enabled seamless customer experience with high-availability architecture and auto-scaling setup.",
                      "Accelerated deployments using Infrastructure as Code and CI/CD automation across cloud platforms.",
                    ][i]
                  }
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <ClientExperience />
    </div>
  );
}
