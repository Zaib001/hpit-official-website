// IndustriesWeEmpower.tsx
"use client";

import { motion } from "framer-motion";

/** Pass your two photos in via props */
export default function IndustriesWeEmpower({
  topRightImg,
  bottomLeftImg,
}: {
  topRightImg: string;      // young group photo (top-right)
  bottomLeftImg: string;    // tablet/hologram photo (bottom-left)
}) {
  const container = {
    hidden: { opacity: 0, y: 16 },
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

  type CardT = { title: string; desc: string };
  const leftCardsTop: CardT[] = [
    {
      title: "Smart Cities",
      desc:
        "City-wide connectivity for traffic, lighting, surveillance, and public Wi-Fi.",
    },
    {
      title: "Advanced Manufacturing",
      desc:
        "Real-time analytics, robotics, and automation through edge-connected wireless.",
    },
    {
      title: "Healthcare",
      desc:
        "Remote surgeries, telemedicine, and connected healthcare devices.",
    },
  ];

  const rightCardsBottom: CardT[] = [
    {
      title: "Autonomous Mobility",
      desc:
        "Vehicle-to-Everything (V2X) communication for driverless cars and smart roads.",
    },
    {
      title: "Media & Entertainment",
      desc:
        "AR/VR, live events, and immersive streaming with near-zero latency.",
    },
    {
      title: "Defense & Aerospace",
      desc:
        "Secure, sensing-based wireless for mission-critical operations.",
    },
  ];

  return (
    <section className="text-white px-4 sm:px-8 lg:px-14 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center font-semibold leading-tight text-[28px] sm:text-[36px] lg:text-[44px] mb-8 sm:mb-12"
        >
          Industries{" "}
          <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
            We
          </span>{" "}
          Empower
        </motion.h2>

        {/* Whole section grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10"
        >
          {/* Left column — 3 cards then image at bottom on desktop (reversed on mobile) */}
          <div className="grid gap-6 content-start">
            {/* Cards group */}
            <motion.div variants={container} className="grid gap-5">
              {leftCardsTop.map((c) => (
                <motion.div key={c.title} variants={item}>
                  <InfoCard title={c.title} desc={c.desc} />
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom-left large image */}
            <motion.div
              variants={item}
              className="order-last lg:order-none rounded-xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={bottomLeftImg}
                alt="Industry illustration"
                className="w-full h-auto rounded-xl shadow-[0_18px_40px_-16px_rgba(0,0,0,0.55)]"
              />
            </motion.div>
          </div>

          {/* Right column — image first then 3 cards */}
          <div className="grid gap-6 content-start">
            {/* Top-right image */}
            <motion.div
              variants={item}
              className="rounded-xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <img
                src={topRightImg}
                alt="People using devices"
                className="w-full h-auto rounded-xl shadow-[0_18px_40px_-16px_rgba(0,0,0,0.55)]"
              />
            </motion.div>

            {/* Cards group */}
            <motion.div variants={container} className="grid gap-5">
              {rightCardsBottom.map((c) => (
                <motion.div key={c.title} variants={item}>
                  <InfoCard title={c.title} desc={c.desc} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="w-[614px] h-[130px]
        relative rounded-lg border border-white/10
        p-5 sm:p-6
        bg-[linear-gradient(180deg,rgba(12,14,22,0.85)_0%,rgba(10,11,18,0.9)_100%)]
        [box-shadow:inset_0_1px_0_rgba(255,255,255,0.06)]
        overflow-hidden
      "
    >
      {/* TOP gradient (replaces corner blob) */}
      <div
        className="absolute left-0 right-0 top-0 h-[30px]"
        style={{
          background:
            "linear-gradient(1.71deg, #000000 42.51%, #615BFE 308.78%)",
        }}
      />

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[16px] sm:text-[20px] font-semibold">{title}</h3>
          <p className="mt-2 text-[16px] leading-6 text-[#C9CBD4] max-w-[48ch]">
            {desc}
          </p>
        </div>

        {/* CTA */}
        <button
          className="group shrink-0 inline-flex items-center gap-2 text-[13.5px] text-[#EAEAF2] hover:text-white transition"
          type="button"
          aria-label="Learn more"
        >
          <span className="hidden sm:inline">Learn more</span>
          <NeonRingArrow />
        </button>
      </div>
    </div>
  );
}


/* Small neon ring with arrow (no external assets needed) */
function NeonRingArrow() {
  return (
    <span className="relative inline-grid place-items-center w-8 h-8">
      {/* ring */}
      <svg
        viewBox="0 0 48 48"
        className="absolute inset-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F04A6A" />
            <stop offset="1" stopColor="#7A66FF" />
          </linearGradient>
        </defs>
        <circle
          cx="24"
          cy="24"
          r="20"
          fill="none"
          stroke="url(#ring)"
          strokeWidth="2"
          opacity="0.9"
        />
      </svg>
      {/* arrow */}
      <svg
        viewBox="0 0 16 16"
        className="relative z-[1] w-[11.5px] h-[20px] rotate-[-45deg] transition-transform group-hover:translate-x-[1.5px]"
        aria-hidden="true"
      >
        <path
          d="M2 8h9M7 3l4 5-4 5"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
