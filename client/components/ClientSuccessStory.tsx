// ClientSuccessStory.tsx
"use client";

import { motion } from "framer-motion";

// Pass your image in via props (local import or URL)
export default function ClientSuccessStory({
  photoSrc,
  photoAlt = "Client success",
}: {
  photoSrc: string;
  photoAlt?: string;
}) {
  /* animations */
  const container = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.06 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 140, damping: 18 },
    },
  };
  const hoverLift = {
    y: -3,
    scale: 1.01,
    boxShadow:
      "0 0 0 1px rgba(255,255,255,0.06), 0 12px 28px -14px rgba(0,0,0,0.55)",
  };

  const Card = ({
    title,
    desc,
  }: {
    title: string;
    desc: string;
  }) => (
    <motion.div
      variants={item}
      whileHover={hoverLift}
      className="
      w-[305px] h-[180px]
        rounded-xl p-5 md:p-6
        bg-[#0E1015]
        border border-white/10
        shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]
      "
    >
      <h4 className="text-white text-[22px] sm:text-[17px] font-semibold mb-2 text-center">
        {title}
      </h4>
      <p className="text-[#C5C8D0] text-[16px] leading-6 text-center">{desc}</p>
    </motion.div>
  );

  return (
    <section className="relative  text-white px-4 sm:px-8 lg:px-14 py-12 sm:py-16">
      {/* corner glow (top-left) like the mock */}
      <div className="pointer-events-none absolute -top-6 -left-6 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(255,83,83,0.6)_0%,rgba(255,83,83,0.25)_35%,transparent_70%)] blur-[14px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center font-semibold leading-tight text-[28px] sm:text-[36px] lg:text-[42px] mb-8 sm:mb-12"
        >
          Client{" "}
          <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
            Success
          </span>{" "}
          Story
        </motion.h2>

        {/* Main grid: cards (left) + photo (right) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start"
        >
          {/* 2x2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card
              title="Client"
              desc="Multinational Warehouse Operator"
            />
            <Card
              title="Challenge"
              desc="Wi-Fi dead zones and latency during AGV operations"
            />
            <Card
              title="Solution"
              desc="Full-scale 5G private cellular network on CBRS spectrum"
            />
            <Card
              title="Result"
              desc="60% increase in automation reliability, 90% coverage improvement, full SIM-based control"
            />
          </div>

          {/* Photo */}
          <motion.div
            variants={item}
            className="justify-self-center w-full"
            whileHover={{ scale: 1.01 }}
          >
            <img
              src={photoSrc}
              alt={photoAlt}
              className="
                w-full max-w-[560px]
                aspect-[16/11] object-cover
                rounded-lg
                shadow-[0_16px_40px_-16px_rgba(0,0,0,0.6)]
              "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
