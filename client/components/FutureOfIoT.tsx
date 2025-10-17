"use client";

import { motion } from "framer-motion";
import futureImg from "../Images/future.jpg"; 

/* -------------------- Data -------------------- */
const features = [
  {
    title: "Growth",
    desc: "IoT devices are set to grow massively, fueled by industry adoption and new use cases.",
  },
  {
    title: "Edge computing",
    desc: "Edge computing boosts IoT by cutting latency and handling data locally for faster, efficient processing.",
  },
  {
    title: "Artificial intelligence",
    desc: "AI and ML enhance IoT by turning data into insights for better decisions and efficiency.",
  },
  {
    title: "Blockchain",
    desc: "Blockchain boosts IoT security through secure, decentralized networks.",
  },
  {
    title: "Sustainability",
    desc: "IoT helps reduce environmental impact by saving energy and minimizing waste.",
  },
];

/* -------------------- Animations -------------------- */
const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

/* -------------------- Card -------------------- */
function DottedCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      variants={item}
      whileHover={{
        y: -2,
        boxShadow: "0 14px 30px -16px rgba(0,0,0,0.55)",
      }}
      className="w-[568px]
        relative rounded-xl border border-dotted border-white/15
        bg-[linear-gradient(180deg,rgba(15,17,24,0.96)_0%,rgba(10,12,18,0.95)_100%)]
        p-5 sm:p-6 text-white transition-all
      "
    >
      <h3 className="text-[16px] sm:text-[24px] font-semibold mb-1">
        {title}
      </h3>
      <p className="text-[13.5px] sm:text-[16px] leading-6 text-[#C5C8D1]">
        {desc}
      </p>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />
    </motion.div>
  );
}

/* -------------------- Section -------------------- */
export default function FutureOfIoT() {
  return (
    <section className="relative text-white px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-tight">
            The future of{" "}
            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
              IoT
            </span>
          </h2>
        </motion.div>

        {/* Grid layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="
            grid grid-cols-1 lg:grid-cols-2 gap-8 items-center
          "
        >
          {/* Left column (Cards) */}
          <div className="space-y-5 sm:space-y-6">
            {features.map((f) => (
              <DottedCard key={f.title} title={f.title} desc={f.desc} />
            ))}
          </div>

          {/* Right column (Image) */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden shadow-[0_18px_50px_-18px_rgba(0,0,0,0.6)] mt-8 lg:mt-0"
          >
            <img
              src={futureImg}
              alt="Future of IoT"
              className="w-[636px] h-[770px] object-cover"
            />

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
