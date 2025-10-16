// WhyWorkWithUs.tsx
"use client";

import { motion } from "framer-motion";

export default function WhyWorkWithUs({
  photoSrc,
  photoAlt = "Handshake with client",
}: {
  photoSrc: string; // import your image and pass it in
  photoAlt?: string;
}) {
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
  };
  const item = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 140, damping: 18 } },
  };

  const bullets = [
    "End-to-end wireless innovation partner",
    "Expertise in 5G/6G, ISAC, mmWave & edge deployments",
    "Partnerships with global hardware & telecom providers",
    "Future-proof, scalable network architecture",
    "Trusted by Fortune 500s and public sector clients",
  ];

  return (
    <section className=" text-white px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[26px] sm:text-[34px] lg:text-[40px] font-semibold leading-tight mb-6 sm:mb-8"
        >
          Why{" "}
          <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
            Work With Us
          </span>
        </motion.h2>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          {/* Left: photo with dotted corner frame */}
          <motion.div variants={item} className="relative w-full max-w-[520px] lg:max-w-none">
            
            <div className="rounded-xl overflow-hidden shadow-[0_20px_45px_-18px_rgba(0,0,0,0.6)]">
              <img src={photoSrc} alt={photoAlt} className="block w-[475px] h-[447px]" />
            </div>
          </motion.div>

          {/* Right: bullet list */}
          <motion.ul variants={container} className="grid gap-5 sm:gap-9 mt-16">
            {bullets.map((b, i) => (
              <motion.li key={i} variants={item} className="flex items-start gap-3">
                <Bullet />
                <span className="text-[14px] sm:text-[20px] text-[#D8DBE4] leading-7">{b}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

/* Small red circular bullet with ring */
function Bullet() {
  return (
    <span className="mt-[9px] inline-grid place-items-center">
      <span className="h-[7px] w-[7px] rounded-full bg-[#000]" />
      <span className="absolute h-[10px] w-[10px] rounded-full ring-1 ring-[#E14242]/50" />
    </span>
  );
}


