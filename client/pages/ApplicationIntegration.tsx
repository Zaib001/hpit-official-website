import React from "react";
import { motion } from "framer-motion";
import application from "../svg/Application.svg";
import applicationIntegration from "../Images/Pixabay-6873012.jpg";
import davemorgan from "../Images/Pexels Photo by Dave Morgan.jpg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import group132 from "../svg/Group 132.svg";
import vector1 from "../svg/Vector (1).svg";
import vector2 from "../svg/Vector (2).svg";
import mizuno from "../Images/Pexels Photo by Mizuno K.jpg";
import ClientExperience from "@/components/ClientExperience";
import pix84 from "../Images/Pixabay-3589684.jpg";
import dottedHorizontal from "../svg/Line 32.svg";
import dottedVertical from "../svg/Line 38.svg";
import twopoint5 from "../svg/twopointfive.svg";
import threetimes from "../svg/threetimes.svg";
import sixtypercent from "../svg/sixtypercent.svg";
import fourtypercent from "../svg/fourtypercent.svg";
import ladysitting from "../Images/Pexels Photo by Photo By_ Kaboompics.com.jpg";
import horizontalLine from "../svg/Line 30.svg";
import Thursday from "../svg/Thursday.svg";
import Gener8 from "../svg/Gener8.svg";
import MindfulChef from "../svg/MindfulChef.svg";

export default function ApplicationIntegration() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Hero Section */}
      <motion.div
        className="bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${applicationIntegration})`,
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
              <h2 className="text-white text-[56px] md:text-5xl lg:text-6xl font-normal mb-1">
                <img src={application} alt="Company" />
              </h2>
              <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                Integration
              </h2>
              <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                We unify your apps, data, and systems into one <br /> seamless,
                intelligent ecosystem — fast, secure, and scalable.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="text-white px-4 sm:px-8 lg:px-20 py-16"
        style={{ marginTop: "60px" }}
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
              <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                Integration That <br /> Powers Real Efficiency
              </span>
            </h2>
            <p
              className="text-gray-300 text-[18px] leading-relaxed"
              style={{ marginTop: "40px" }}
            >
              When your systems don’t talk to each other, productivity stalls,
              errors increase, and growth slows down. Integration bridges those
              gaps creating a smooth flow of data, automating manual processes,
              and aligning your entire tech stack to move faster, smarter, and
              together. It's not just about efficiency — it’s about unlocking
              the full potential of your business operations.
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
          {/* Right Image */}
          <motion.div
            className="rounded-xl overflow-hidden"
            style={{ marginTop: "20px", marginLeft: "200px" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={davemorgan}
              alt="Team Discussion"
              className="w-[447px] h-[325px] object-cover rounded-l-sm"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="bg-black text-white px-4 sm:px-8 lg:px-20 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.div
          className="mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Disconnected systems create friction.
            <br />
            <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
              We help you sync, automate, and scale.
            </span>
          </h2>
        </motion.div>

        {/* Feature Cards and Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Side Cards */}
          <div className="space-y-6">
            {[
              {
                title: "Break Down Data Silos",
                text: "Integrate departments, tools, and platforms to create a unified, real-time view of your business operations.",
              },
              {
                title: "Streamline Workflows",
                text: "Reduce manual effort by automating routine tasks and creating seamless interactions between systems.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="bg-[#22252B] rounded-xl shadow-md px-6 pr-[75px] h-[245px] flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <h3 className="text-[24px] font-semibold mt-[20px]">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-[16px] mb-[60px]">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={mizuno}
              alt="Center"
              className="rounded-lg w-[375px] h-[512px]"
            />
          </motion.div>

          {/* Right Side Cards */}
          <div className="space-y-6">
            {[
              {
                title: "Break Down Data Silos",
                text: "Integrate departments, tools, and platforms to create a unified, real-time view of your business operations.",
              },
              {
                title: "Streamline Workflows",
                text: "Reduce manual effort by automating routine tasks and creating seamless interactions between systems.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="bg-[#22252B] rounded-xl shadow-md px-6 pr-[75px] h-[245px] flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i + 2) * 0.15 }}
              >
                <h3 className="text-[24px] font-semibold mt-[20px]">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-[16px] mb-[60px]">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="px-[80px] py-16 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading Section */}
        <motion.div
          className="text-center mb-[70px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[48px] font-extrabold">
            <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
              Our Integration Expertise
            </span>
          </h2>
          <p className="text-gray-300 mt-4 text-[20px]">
            Expertly Engineered to Connect It All
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: group132,
              title: "API Integration",
              text: "Connect apps and services via secure, scalable APIs to streamline communication and automate processes.",
              bg: "bg-[#1A1A1A] text-gray-400",
              textColor: "text-gray-400",
            },
            {
              img: vector1,
              title: "Third-Party System Integration",
              text: "Seamlessly integrate CRMs, ERPs, payment gateways, cloud platforms, and more — no data loss or disruption.",
              bg: "bg-gradient-to-br from-purple-600 to-blue-500 text-white",
              textColor: "text-white",
            },
            {
              img: vector2,
              title: "Data Synchronization",
              text: "Ensure consistent, real-time data flow across multiple platforms and business units with smart sync logic.",
              bg: "bg-[#1A1A1A] text-gray-400",
              textColor: "text-gray-400",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className={`${card.bg} rounded-l p-8 flex flex-col items-center text-center min-h-[480px]`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="mb-6" style={{ marginTop: "80px" }}>
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-[100px] h-[100px]"
                />
              </div>
              <h3 className={`font-semibold text-[20px] mb-3 mt-10 text-white`}>
                {card.title}
              </h3>
              <p className={`${card.textColor} text-[16px]`}>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="text-white px-4 sm:px-8 lg:px-20 py-16 bg-black"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[48px] font-extrabold leading-snug">
              <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                Real-World Integration <br />
                Use Cases We Deliver
              </span>
            </h2>
            <p className="text-gray-300 mt-4 text-[20px] max-w-xl">
              From business apps to devices, we seamlessly connect the tools
              that drive your operations.
            </p>
          </motion.div>

          {/* Cards Grid with Border */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-600 rounded-md overflow-hidden"
            style={{ padding: "25px", marginTop: "80px" }}
          >
            {[
              [
                "Discovery & CRM & ERP Synchronization",
                "Unify customer and resource data across platforms.",
                true,
                true,
              ],
              [
                "Payment Gateway Integration",
                "Secure and seamless transactions across apps and platforms.",
                true,
                true,
              ],
              [
                "Cross-Platform User Authentication",
                "Enable smooth logins and identity management across multiple applications.",
                false,
                true,
              ],
              [
                "Legacy + SaaS System Linking",
                "Bridge old systems with new-age cloud apps without disruption.",
                true,
                false,
              ],
              [
                "Centralized Analytics Dashboards",
                "Bring data from various sources into one powerful dashboard view.",
                true,
                false,
              ],
              [
                "IoT & Device Data Merging",
                "Integrate real-time data from devices, sensors, and smart tech.",
                false,
                false,
              ],
            ].map(([title, desc, rightBorder, bottomBorder], i) => (
              <motion.div
                key={i}
                className="relative p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {rightBorder && (
                  <div className="absolute top-10 bottom-10 right-0 border-r border-dotted border-gray-400 w-0" />
                )}
                {bottomBorder && (
                  <div className="absolute bottom-0 left-10 right-40 h-0 border-b border-dotted border-gray-400" />
                )}
                <div className="pr-4 pb-4">
                  <h3
                    className="font-semibold text-[20px] mb-2"
                    style={{ fontWeight: "400" }}
                  >
                    {title}
                  </h3>
                  <p className="text-[14px] text-gray-400">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-black text-white px-4 sm:px-8 lg:px-20 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Heading + Steps 1-3 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading */}
            <h2 className="text-[48px] font-bold mb-4 leading-snug">
              <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                Integration Done Right:
                <br />
                The HPIT Way
              </span>
            </h2>
            <p className="text-gray-300 text-[20px] mb-12">
              Secure, seamless, and scalable — our process ensures <br />{" "}
              nothing breaks as everything connects.
            </p>

            {/* Steps 1–3 */}
            <div className="space-y-12 relative mt-[130px]">
              <div className="absolute left-[31px] top-[32px] bottom-0 w-0.5 border-l border-dotted border-red-500 z-0"></div>

              {[1, 2, 3].map((num, idx) => {
                const titles = [
                  "Requirement Analysis",
                  "Integration Blueprint",
                  "Development & Testing",
                ];
                const descriptions = [
                  "Understand your systems, gaps, and business goals.",
                  "Design secure APIs, connectors, and flow architecture.",
                  "Build, test, and validate every integration point.",
                ];

                return (
                  <motion.div
                    key={num}
                    className="flex items-start relative z-10"
                    style={{ marginTop: "100px" }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center text-white text-xl font-semibold bg-black z-10">
                      {num}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-[24px] font-semibold">
                        {titles[idx]}
                      </h3>
                      <p className="text-gray-400 text-[16px] mt-1">
                        {descriptions[idx]}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Image + Steps 4–5 */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={pix84}
              alt="Integration Visual"
              className="rounded-lg w-[577px] h-[419px] mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />

            <div
              className="space-y-12 relative w-full max-w-md"
              style={{ marginTop: "-30px", marginLeft: "-120px" }}
            >
              <div className="absolute left-[30px] top-[100px] bottom-0 w-0.5 border-l border-dotted border-red-500 z-0"></div>

              {[4, 5].map((num, idx) => {
                const titles = ["Deployment & Monitoring", "Ongoing Support"];
                const descriptions = [
                  "Deploy with alerts, logs, and performance dashboards.",
                  "We stay with you to troubleshoot, scale, or update.",
                ];

                return (
                  <motion.div
                    key={num}
                    className="flex items-start relative z-10"
                    style={{ marginTop: "80px" }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-red-500 flex items-center justify-center text-white text-xl font-semibold bg-black z-16">
                      {num}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold">{titles[idx]}</h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {descriptions[idx]}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <ClientExperience></ClientExperience>
    </div>
  );
}
