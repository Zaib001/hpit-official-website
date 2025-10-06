"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import cloudSecurity from "../Images/Pixabay-3374462.png";
import cloud from "../svg/Cloud.svg";
import pix15 from "../Images/Group 140.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import group134 from "../svg/Group 134.svg";
import group135 from "../svg/Vector (7).svg";
import group136 from "../svg/Vector (8).svg";
import group137 from "../svg/Vector (9).svg";
import karuka from "../Images/Pexels Photo by Yan Krukau (1).png";
import line from "../svg/Line 30 (1).svg";
import kev from "../Images/Pexels Photo by TheOther Kev.png";
import unnish from "../Images/Pixabay-1073604.png";
import chasochaar from "../Images/Pixabay-1366019.png";
import icon1 from "../svg/icon1.svg";
import icon2 from "../svg/icon2.svg";
import icon3 from "../svg/icon3.svg";
import icon4 from "../svg/icon4.svg";
import img from "../Images/Pixabay-3589685.png";

const Card = ({ title, description }) => {
  const words = title.trim().split(" ");
  const length = words.length;

  const firstLine = words.slice(0, length - 1).join(" ");
  const lastWord = words[length - 1];

  return (
    <motion.div
      className="w-[405px] h-[240px] rounded-md border border-[#444955] bg-[#111215] relative"
      style={{
        borderWidth: "1.5px",
        borderStyle: "dashed",
        paddingTop: "40px",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingBottom: "24px",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-[24px] font-semibold mb-[30px] leading-snug">
        {firstLine && (
          <>
            {firstLine}
            <br />
          </>
        )}
        {lastWord}
      </h3>
      <p className="text-gray-400 text-[16px] leading-relaxed">{description}</p>
    </motion.div>
  );
};

// ✅ Reusable scroll animation wrapper
const FadeInSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function CloudSecurity() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Section: Hero */}
      <FadeInSection>
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${cloudSecurity})` }}
        >
          <div
            className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8"
            style={{ marginTop: "120px" }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="max-w-2xl">
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal mb-1">
                  <img src={cloud} alt="Application" />
                </h2>
                <h2 className="text-white text-[56px] font-bold mb-8">Security</h2>
                <p className="text-white text-[20px] leading-relaxed max-w-xl">
                  Comprehensive protection engineered for <br />
                  today’s dynamic and distributed cloud <br />
                  environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Smart Security */}
      <FadeInSection delay={0.1}>
        <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-[72px] font-extrabold mb-2">
                <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                  Smart Security for the Cloud
                </span>
              </h2>
              <p className="text-gray-300 text-[18px] leading-relaxed mt-5">
                HPIT delivers enterprise-grade cloud security tailored to your
                architecture. From identity controls to threat detection, we
                help you stay compliant, protected, and in control—every step
                of the way.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-medium group mt-10 text-[16px]"
              >
                Get Started
                <div className="relative w-[56px] h-[56px] -ml-4">
                  <img src={Ellipse} alt="ellipse" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-[11.5px] h-[20px]"
                    />
                  </span>
                </div>
              </a>
            </div>
            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={pix15}
                alt="Team Discussion"
                className="w-[578px] h-[451px] object-cover rounded-l-sm"
              />
            </motion.div>
          </div>
        </div>
      </FadeInSection>

      {/* Comprehensive Security */}
      <FadeInSection delay={0.15}>
        <div className="bg-black text-white px-6 py-16 sm:px-12 lg:px-[120px]">
          <div className="max-w-6xl">
            <h2 className="text-[32px] sm:text-[48px] font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]">
                Comprehensive Security <br />at Every Cloud Layer
              </span>
            </h2>
            <p className="text-gray-400 text-[14px] mt-2 max-w-xl">
              We secure every layer of your cloud—from access to data with{" "}
              <br />
              smart controls and continuous protection.
            </p>
          </div>

          <div className="mt-12 flex flex-col lg:flex-row gap-10 items-start">
            <motion.div
              className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={karuka}
                alt="Cloud Support Team"
                className="w-[485px] h-[591px] object-cover"
              />
            </motion.div>

            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex items-start gap-4">
                <img
                  src={line}
                  alt="Vertical Line"
                  className="h-[56px] w-auto mt-1"
                />
                <p className="text-gray-300 text-[20px]">
                  Security isn’t a feature—it’s a foundation. Here’s <br />
                  what we cover:
                </p>
              </div>

              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                style={{ marginTop: "80px" }}
              >
                {[
                  {
                    title: "Identity & Access Management",
                    desc: "Granular role-based access and multi-factor authentication.",
                  },
                  {
                    title: "Data Protection",
                    desc: "Encryption in transit and at rest with secure key management.",
                  },
                  {
                    title: "Threat Detection & Response",
                    desc: "Real-time threat intelligence, monitoring, and automated remediation.",
                  },
                  {
                    title: "Network Security",
                    desc: "Firewalls, VPC configuration, zero-trust access, and segmentation.",
                  },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    className="rounded-lg border border-[#444955] bg-[#111215] p-5 min-h-[210px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                  >
                    <h3 className="font-semibold text-[22px] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[16px] text-gray-400">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Security Lifecycle */}
      <FadeInSection delay={0.2}>
        <div className="bg-black text-white py-16 px-4 sm:px-8 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-[48px] font-bold">
              <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                Security Lifecycle Management
              </span>
            </h2>
            <p className="text-gray-400 text-[20px] mt-2">
              End-to-End Security. Continuous Improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[icon1, icon2, icon3, icon4].map((icon, i) => (
              <motion.div
                key={i}
                className="bg-[#111215] rounded-xl p-6 space-y-3 shadow-lg border border-[#444955]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                <img src={icon} alt={`icon-${i}`} className="w-[64px] h-[64px]" />
                <h3 className="text-[22px] font-semibold">
                  {["Assess", "Secure", "Detect & Respond", "Audit & Improve"][i]}
                </h3>
                <p className="text-gray-400 text-[16px]">
                  {
                    [
                      "We begin with a cloud security posture review and risk analysis.",
                      "Implement best-practice configurations, access controls, and monitoring tools.",
                      "Enable automated alerts and incident response playbooks.",
                      "Ongoing reviews, penetration testing, and posture optimization.",
                    ][i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* HPIT Different */}
      <FadeInSection delay={0.25}>
        <div className="bg-black text-white py-16 px-4 sm:px-8 lg:px-20">
          <div className="mb-12">
            <h2 className="text-[48px] font-bold">
              <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                What Makes HPIT Different
              </span>
            </h2>
            <p className="text-gray-400 mt-2 text-[20px]">
              Security that Thinks Ahead
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={img}
                alt="Team discussing security"
                className="rounded-xl object-cover w-[621px] h-[414px]"
              />
            </motion.div>

            <div className="space-y-12">
              {[
                "Cloud-Native Security Experts",
                "DevSecOps Integration",
                "Zero Trust Framework",
                "Custom Policies. Real Enforcement.",
              ].map((title, i) => (
                <motion.div
                  key={i}
                  className="pb-4 border-b border-[#22252B]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                >
                  <h3 className="font-semibold text-[20px]">{title}</h3>
                  <p className="text-gray-400 text-[16px]">
                    {
                      [
                        "Certified engineers focused solely on securing cloud environments.",
                        "Security built into every stage of development and deployment.",
                        "Assume no trust, verify every action—internally and externally.",
                        "Tailored policies enforced through automation and cloud-native controls.",
                      ][i]
                    }
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Use Cases */}
      <FadeInSection delay={0.3}>
        <div className="w-full bg-black text-white py-16 px-6 md:px-12">
          <div className="max-w-5xl mx-auto mb-12" style={{ marginLeft: "80px" }}>
            <h2 className="text-[48px] sm:text-4xl font-extrabold mb-6 leading-tight">
              <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text">
                Use Cases We Handle
              </span>
            </h2>
            <p className="text-gray-400 text-[20px]">
              Real-World Security Challenges, <br />
              Solved
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[chasochaar, unnish, kev].map((imgSrc, i) => (
                <motion.div
                  key={i}
                  className="bg-[#2c2e33] rounded-md flex flex-col justify-between border-b-4 border-white overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                >
                  <img
                    src={imgSrc}
                    alt={`case-${i}`}
                    className="w-[416px] h-[328px] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-[24px] mb-2">
                      {
                        ["Multi-Cloud Security", "Healthcare Compliance", "Ransomware Defense"][i]
                      }
                    </h3>
                    <p className="text-gray-400 text-[16px]">
                      {
                        [
                          "Consistent policies and controls across AWS, Azure, and GCP.",
                          "HIPAA-ready protections with strict access and audit tracking.",
                          "Secure backups with automated, rapid recovery workflows.",
                        ][i]
                      }
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Built to Work */}
      <FadeInSection delay={0.35}>
        <div className="bg-black text-white py-20 px-4 sm:px-8 lg:px-20 text-center">
          <h2 className="text-[48px] font-extrabold mb-2">
            <span className="inline-block bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
              Built to Work with Your Tools
            </span>
          </h2>
          <p className="text-gray-400 text-[20px] sm:text-base mb-10">
            Security That Fits Your Stack
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
            {[group134, group136, group135, group137].map((logo, i) => (
              <motion.div
                key={i}
                className="bg-[#000000] border border-[#333] rounded-lg p-6 w-full max-w-[320px] flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                <img src={logo} alt={`logo-${i}`} className="mb-4" />
                <p className="text-[22px] font-medium">
                  {["AWS", "GitHub Actions", "Prisma", "Splunk"][i]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
