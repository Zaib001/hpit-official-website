"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import applicationManager from "@/Images/applicationmanager1.jpg";
import ladyStanding from "@/Images/ladyStandingBesideServer.jpg";
import discussion from "@/Images/teamDiscussion.jpg";
import application from "@/svg/Application.svg";
import reverseArrow from "@/svg/reverseArrow.svg";
import Tick from "@/svg/tick.svg";

// Reusable scroll animation wrapper
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

export default function ApplicationMigration() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* HERO */}
      <FadeInSection>
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${applicationManager})` }}
        >
          <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8 -mt-2">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-2xl">
                <motion.h2
                  className="text-white text-4xl md:text-5xl lg:text-6xl font-normal mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={application} alt="Application" />
                </motion.h2>
                <motion.h2
                  className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Migration
                </motion.h2>
                <motion.p
                  className="text-white text-base md:text-lg leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Seamlessly transition from legacy systems to modern, secure,
                  and scalable environments empowering your organization to
                  evolve without losing momentum.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* MODERNIZE SECTION */}
      <FadeInSection delay={0.1}>
        <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl font-extrabold mb-2">
                <span className="text-white">Modernize Without Disruption</span>
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed mt-16">
                Legacy systems can limit performance, security, and scalability.
                At HPIT, we specialize in migrating critical applications to
                modern environments cloud, hybrid, or on premise upgrades
                ensuring seamless transitions that drive efficiency and long
                term growth.
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 text-white font-medium group mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Get Started
                <span className="w-8 h-8 rounded-full border border-red-500 flex items-center justify-center group-hover:bg-red-500 transition">
                  <svg
                    className="w-3 h-3 text-white transform rotate-0 group-hover:rotate-45 transition"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden mt-28"
            >
              <img
                src={ladyStanding}
                alt="Team Discussion"
                className="w-full h-full object-cover rounded-l-sm"
              />
            </motion.div>
          </div>
        </div>
      </FadeInSection>

      {/* WHY MIGRATION MATTERS */}

      <FadeInSection delay={0.2}>
        <div
          className="text-white py-20 rounded-xl"
          style={{ marginTop: "-60px" }}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 min-h-[600px]">
            {/* Left Content */}
            <div className="self-center px-4">
              <h2 className="text-6xl sm:text-6xl font-extrabold leading-tight mb-6">
                Our
                <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">
                  {" "}
                  Migration
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">
                  Approach
                </span>
              </h2>
              <p className="text-gray-400 text-2xl leading-relaxed max-w-xl">
                We follow a structured, low risk approach tailored to your
                organization's goals
              </p>

              {/* Right Image Grid with Offset Positioning */}
              {/* Steps Grid */}
              <div className="max-w-8xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-16 px-4  mt-12">
                {/* Column 1 */}
                <div className="flex flex-col gap-8 -translate-y-4">
                  {/* Step 1 */}
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-center items-center gap-3 whitespace-nowrap">
                      <span className="text-4xl font-extrabold text-red-600">
                        01
                      </span>
                      <span className="text-2xl font-semibold">
                        Assessment & Planning
                      </span>
                    </div>
                    <p className="text-gray-400 text-base max-w-md mx-auto text-left">
                      Evaluate your existing applications and business needs to
                      craft your migration strategy.
                    </p>
                  </div>
                  {/* Step 3 */}
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-center items-center gap-3 whitespace-nowrap">
                      <span className="text-4xl font-extrabold text-red-600">
                        03
                      </span>
                      <span className="text-2xl font-semibold">
                        Testing & Validation
                      </span>
                    </div>
                    <p className="text-gray-400 text-base max-w-md mx-auto text-left">
                      Rigorous testing to ensure data integrity and system
                      stability.
                    </p>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-8 translate-y-4">
                  {/* Step 2 */}
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-center items-center gap-3 whitespace-nowrap">
                      <span className="text-4xl font-extrabold text-red-600">
                        02
                      </span>
                      <span className="text-2xl font-semibold">
                        Migration & Modernization
                      </span>
                    </div>
                    <p className="text-gray-400 text-base max-w-md mx-auto text-left">
                      Rehost, re-platform, or refactor to ensure compatibility
                      and performance.
                    </p>
                  </div>
                  {/* Step 4 */}
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-center items-center gap-3 whitespace-nowrap">
                      <span className="text-4xl font-extrabold text-red-600">
                        04
                      </span>
                      <span className="text-2xl font-semibold">
                        Deployment & Support
                      </span>
                    </div>
                    <p className="text-gray-400 text-base max-w-md mx-auto text-left">
                      Deploy with minimal disruption and provide ongoing
                      support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.25}>
        <div className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4">
            {/* Heading */}
            <motion.h2
              className="text-6xl sm:text-6xl font-extrabold leading-tight text-white mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Migration <br />
              <span
                className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text"
                style={{ marginTop: "60px" }}
              >
                Services We Offer
              </span>
            </motion.h2>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Legacy to Cloud Migration",
                  text: "We move your existing applications to secure cloud platforms like AWS, Azure, or GCP ensuring flexibility, scalability, and reduced infrastructure costs.",
                  highlight: false,
                },
                {
                  title: "Hybrid & Multi Cloud Integration",
                  text: "Seamlessly integrate applications across on-premise and multiple cloud environments for better performance, control, and agility.",
                  highlight: false,
                },
                {
                  title: "App Rehosting & Replatforming",
                  text: "We assess your applications and choose the right migration path whether lifting and shifting, upgrading platforms, or restructuring code for modern environments.",
                  highlight: true,
                },
                {
                  title: "Infrastructure Modernization",
                  text: "We upgrade outdated systems to modern architectures that support automation, security, and scalability.",
                  highlight: false,
                },
                {
                  title: "Compliance & Security Enhancements",
                  text: "Ensure your migrated applications meet industry-specific compliance standards with strong security measures and audit readiness.",
                  highlight: false,
                },
                {
                  title: "Post Migration Optimization & Support",
                  text: "After migration, we fine-tune performance, monitor health, and offer continuous support to ensure long term success.",
                  highlight: false,
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className={`rounded-lg p-6 border-b border-gray-700 flex flex-col ${
                    card.highlight
                      ? "bg-gradient-to-br from-blue-600 to-purple-600"
                      : "bg-[#1a1a1a]"
                  }`}
                  style={{
                    minHeight: i === 0 || i === 3 ? "400px" : "260px",
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                >
                  <h3
                    className="text-4xl font-semibold text-white mb-3"
                    style={{ marginTop: "60px", marginBottom: "40px" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={
                      card.highlight
                        ? "text-white text-xl"
                        : "text-gray-400 text-xl"
                    }
                  >
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* WHY CHOOSE HPIT */}
      <FadeInSection delay={0.3}>
        <div className="text-white py-20 rounded-xl mt-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="self-center px-4"
            >
              <h2 className="text-6xl font-extrabold leading-tight mb-6">
                Why{" "}
                <span className="bg-gradient-to-r from-white to-purple-400 text-transparent bg-clip-text">
                  Choose HPIT
                </span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
                HPIT delivers secure, seamless, scalable migrations with
                expertise, precision, and mission-first focus
              </p>
              <div className="mt-8">
                <img
                  src={discussion}
                  alt="arrow"
                  className="w-[450px] h-auto rounded-md"
                />
              </div>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-white"
            >
              <p className="text-gray-300 text-2xl mt-[130px]">
                At HPIT, we combine expertise, precision, and innovation to
                deliver seamless application migration solutions. Here’s what
                sets us apart
              </p>
              {[
                {
                  title: "Mission-Driven Approach",
                  text: "We rehost, re-platform, or refactor applications as needed ensuring compatibility, performance, and scalability.",
                },
                {
                  title: "Proven Expertise",
                  text: "Our team brings years of experience across government and private sectors, managing complex migrations with confidence.",
                },
                {
                  title: "Secure & Compliant Solutions",
                  text: "We prioritize security and compliance at every stage, meeting the highest industry and regulatory standards.",
                },
                {
                  title: "End-to-End Support",
                  text: "From assessment to optimization, we provide full lifecycle support to ensure your systems perform flawlessly post migration.",
                },
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">○</span>
                  <div>
                    <h4 className="font-semibold">{point.title}</h4>
                    <p className="text-gray-400 text-sm">{point.text}</p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
