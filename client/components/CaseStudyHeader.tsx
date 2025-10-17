// CaseStudyHeader.tsx
"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const fade = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export default function CaseStudyHeader() {
  return (
    <section className=" text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 md:pt-14">
        {/* Heading (animated) */}
        <motion.h1
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="font-semibold leading-tight text-[36px] sm:text-[48px] lg:text-[64px]"
        >
          <span className="text-white">Case Study: </span>
          <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
            Manufacturing Plant
          </span>
          <br className="hidden sm:block" />
          {/* Center this line only */}
          <span className="block mx-auto w-fit bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent text-center">
            Wireless Uplift
          </span>
        </motion.h1>
      </div>

      {/* Divider row (animated, staggered) */}
      <div className="mt-8 border-y border-white/10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-[1580px] mx-auto px-6 md:px-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 text-center lg:text-center lg:divide-x lg:divide-white/10">
            {/* Client */}
            <motion.div variants={fade} className="py-9 px-6">
              <h3 className="text-[32px] sm:text-[24px] font-semibold">Client</h3>
              <p className="mt-3 text-[13.5px] leading-6 text-[#C9CBD2] max-w-[220px] mx-auto">
                Global Manufacturing
                <br /> Company
              </p>
            </motion.div>

            {/* Challenge */}
            <motion.div variants={fade} className="py-9 px-6">
              <h3 className="text-[32px] sm:text-[24px] font-semibold">Challenge</h3>
              <p className="mt-3 text-[13.5px] leading-6 text-[#C9CBD2] max-w-[260px] mx-auto">
                Poor signal across a 200,000
                <br /> sq. ft. plant, frequent data loss
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div variants={fade} className="py-9 px-6">
              <h3 className="text-[32px] sm:text-[24px] font-semibold">Solution</h3>
              <p className="mt-3 text-[13.5px] leading-6 text-[#C9CBD2] max-w-[260px] mx-auto">
                Full DAS system with Private
                <br /> LTE network
              </p>
            </motion.div>

            {/* Result */}
            <motion.div variants={fade} className="py-9 px-6">
              <h3 className="text-[32px] sm:text-[24px] font-semibold">Result</h3>
              <p className="mt-3 text-[13.5px] leading-6 text-[#C9CBD2] max-w-[280px] mx-auto">
                98% signal boost, 35% more
                <br /> uptime, remote monitoring on
                <br /> all floors.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
