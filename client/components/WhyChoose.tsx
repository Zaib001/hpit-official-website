// WhyChooseUs.tsx
"use client";

import { motion } from "framer-motion";

// Pass your right-side illustration image in via props (local import or URL)
export default function WhyChoose({
  artworkSrc,
  artworkAlt = "XR headset and floating spheres",
}: {
  artworkSrc: string;
  artworkAlt?: string;
}) {
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 140, damping: 18 },
    },
  };

  const bullets = [
    "Proven 4G/5G deployment experience",
    "CBRS, mmWave, and spectrum expertise",
    "Vendor-agnostic solutions using top-tier hardware",
    "Full compliance with telecom & enterprise security standards",
    "On-premise & hybrid integration models available",
  ];

  return (
    <section className=" text-white px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="
            relative overflow-hidden
            rounded-2xl border border-white/10
            bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.00)_100%)]
            px-5 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-16
          "
        >
          {/* soft glow in the corner (subtle, like the mock) */}
          <div className="pointer-events-none absolute -right-10 -bottom-14 h-56 w-56 rounded-full bg-[#8F7BFF]/20 blur-[80px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Heading + bullets */}
            <div className="lg:col-span-7">
              <motion.h2 variants={item} className="text-[26px] sm:text-[48px] font-semibold mb-6">
                Why{" "}
                <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                  Choose
                </span>{" "}
                Us?
              </motion.h2>

              <motion.ul variants={container} className="space-y-4 sm:space-y-5">
                {bullets.map((text) => (
                  <motion.li
                    key={text}
                    variants={item}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 text-[14px] sm:text-[20px] leading-7 text-[#E7E9EF]"
                  >
                    <span className="mt-[7px] inline-block h-[6px] w-[6px] rounded-full ring-2 ring-[#E23A3A]/70 bg-transparent" />
                    <span>{text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Right: Artwork */}
            <motion.div
              variants={item}
              className="lg:col-span-5  justify-self-center"
            >
              <motion.img
                src={artworkSrc}
                alt={artworkAlt}
                className="w-[476px] h-[329px] select-none"
                // gentle float to feel alive
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{
                  scale: 1.02,
                  rotate: -0.3,
                  filter: "drop-shadow(0 20px 40px rgba(128,118,244,0.35))",
                }}
                draggable={false}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
