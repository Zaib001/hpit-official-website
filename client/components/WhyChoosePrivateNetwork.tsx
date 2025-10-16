// WhyChoosePrivateNetwork.tsx
"use client";

import { motion } from "framer-motion";

// ⬇️ Import your image (replace path)
import TowerImg from "../Images/tower.jpg"; // <- change to your file

/* Animations */
const container = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

/* One bullet row with the red tick */
function LineItem({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div variants={item} className="flex gap-4 p-2">
      {/* red accent bar */}
      <span className="mt-[6px] h-9 w-[4px] rounded-sm bg-gradient-to-b from-[#FF3131] to-[#E00000]" />
      <div>
        <h4 className="text-white text-[20px] font-semibold leading-tight">
          {title}
        </h4>
        <p className="mt-1 text-[16px] leading-6 text-[#B6BAC3]">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function WhyChoosePrivateNetwork() {
  return (
    <section className=" text-white px-5 sm:px-8 lg:px-16 py-12 md:py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="mx-auto max-w-7xl"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-center font-semibold leading-tight text-[28px] sm:text-[36px] lg:text-[42px] mb-8 md:mb-10"
        >
          Why Choose{" "}
          <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
            a Private Network
          </span>
        </motion.h2>

        {/* Content row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Image */}
          <motion.div variants={item} className="justify-self-center w-full">
            <img
              src={TowerImg}
              alt="Private cellular tower"
              className="w-full max-w-[560px] aspect-[4/3] object-cover rounded-lg shadow-[0_12px_24px_-10px_rgba(0,0,0,.6)]"
            />
          </motion.div>

          {/* Right: bullets */}
          <motion.div
            variants={container}
            className="space-y-6 max-w-[620px] lg:justify-self-start"
          >
            <LineItem
              title="Security"
              desc="Complete data privacy and local traffic control"
            />
            <LineItem
              title="Performance"
              desc="Ultra-low latency, high throughput, real-time data flow"
            />
            <LineItem
              title="Customization"
              desc="Control your own access, QoS, and device connections"
            />
            <LineItem
              title="Reliability"
              desc="No shared spectrum congestion or third-party throttling"
            />
            <LineItem
              title="Scalability"
              desc="Add new users/devices and scale across locations as needed"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
