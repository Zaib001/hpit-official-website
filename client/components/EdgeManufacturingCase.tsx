// EdgeManufacturingCase.tsx
"use client";

import { motion } from "framer-motion";

type CardProps = { title: string; lines: string[] };

const container = {
  hidden: { opacity: 0, y: 14 },
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

export default function EdgeManufacturingCase({
  heroImg,
  heroAlt = "5G-Edge in manufacturing",
}: {
  heroImg: string; // import your image and pass it here
  heroAlt?: string;
}) {
  return (
    <section className=" text-white px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[26px] sm:text-[34px] lg:text-[40px] font-semibold leading-tight mb-6 sm:mb-8"
        >
          5G–Edge for Smart Manufacturing
        </motion.h2>

        {/* 3-column layout on desktop; stacks on mobile */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="
            grid gap-6 lg:gap-8
            grid-cols-1
            lg:grid-cols-[260px_minmax(0,1fr)_260px]
            items-start
          "
        >
          {/* Left column cards */}
          <div className="grid gap-6">
            <motion.div variants={item}>
              <InfoCard
                title="Client"
                lines={["Automotive Component", "Manufacturer"]}
              />
            </motion.div>
            <motion.div variants={item}>
              <InfoCard
                title="Challenge"
                lines={[
                  "Wi-Fi interference, lag in",
                  "robotics, lack of real-time",
                  "insights",
                ]}
              />
            </motion.div>
          </div>

          {/* Center image */}
          <motion.div variants={item} whileHover={{ scale: 1.01 }}>
            <div className="rounded-xl overflow-hidden shadow-[0_20px_45px_-18px_rgba(0,0,0,0.6)]">
              <img
                src={heroImg}
                alt={heroAlt}
                className="w-full h-auto block"
              />
            </div>
          </motion.div>

          {/* Right column cards */}
          <div className="grid gap-6">
            <motion.div variants={item}>
              <InfoCard
                title="Solution"
                lines={[
                  "Private 5G + edge",
                  "computing system with",
                  "real-time control",
                ]}
              />
            </motion.div>
            <motion.div variants={item}>
              <InfoCard
                title="Result"
                lines={[
                  "85% drop in latency, full",
                  "automation of quality",
                  "checks, 24/7 live analytics",
                ]}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Reusable “dotted” card ─────────────────────────────────── */
function InfoCard({ title, lines }: CardProps) {
  return (
    <div
     
    >
      <div
        className="w-[276px] h-[180px]
          rounded-xl p-5 sm:p-6
          relative bg-[#111215]
        "
       
      >
        {/* dotted outline */}
        <div className="pointer-events-none absolute inset-0 rounded-xl border border-dotted border-white/20" />

        {/* tiny top strip like the mock */}
        <div
          className="absolute left-0 right-0 top-0 h-[2px]"
         
        />

        <h3 className="text-[24px] font-semibold mb-2 text-center">{title}</h3>
        <p className="text-[16px] leading-6 text-[#C9CBD5] text-center">
          {lines.map((l, i) => (
            <span key={i}>
              {l}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
