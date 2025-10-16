// KeyBenefitsNextGen.tsx
"use client";

import { motion } from "framer-motion";

type Benefit = { n: string; title: string; desc: string };

const benefits: Benefit[] = [
  { n: "01", title: "Ultra-High Speed", desc: "10× faster than 4G; seamless real-time experiences" },
  { n: "02", title: "Enhanced Security", desc: "End-to-end encryption and network slicing" },
  { n: "03", title: "Intelligence at the Edge", desc: "Local processing for faster decisions" },
  { n: "04", title: "Sensing & Communication Fusion", desc: "Real-time awareness via ISAC technology" },
  { n: "05", title: "Greater Coverage & Capacity", desc: "Support for thousands of devices per square km" },
  { n: "06", title: "Future-Ready Infrastructure", desc: "Scalable toward 6G and quantum networks" },
];

const container = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 140, damping: 18 } },
};

export default function KeyBenefitsNextGen() {
  return (
    <section className="relative isolate  text-white px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
      {/* network-lines backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[.35]">
        <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <g fill="none" stroke="rgba(80,120,170,.35)" strokeWidth="1">
            {[...Array(120)].map((_, i) => {
              const x1 = Math.random() * 1200, y1 = Math.random() * 900;
              const x2 = Math.random() * 1200, y2 = Math.random() * 600;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
            })}
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[26px] sm:text-[34px] lg:text-[40px] font-semibold leading-tight mb-6 sm:mb-8"
        >
          Key Benefits of Next-Gen <br/>Wireless
        </motion.h2>

        {/* Grid layout:
            - lg+: 3 columns
            - Top row: items 0 and 1 placed at col 2 and 3
            - Second row: items 2..5 fill all 3 columns
        */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 [grid-auto-rows:1fr]"
        >

          {benefits.map((b, idx) => {
            const pos =
              idx === 0 ? "lg:col-start-3" :
                idx === 1 ? "lg:col-start-4" :
                  ""; // others flow normally

            const emphasis = idx < 2 ? "border-white/15 ring-1 ring-white/5" : "";

            return (
              <motion.div key={b.n} variants={item} className={`h-full ${pos}`}>
                <BenefitCard {...b} className={`h-full ${emphasis}`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Card ────────────────────────────────────────────────────── */
function BenefitCard({
  n, title, desc, className = "",
}: Benefit & { className?: string }) {
  return (
    <div
      className={`
    relative rounded-lg border border-white/10
    bg-[linear-gradient(180deg,rgba(15,17,24,0.90)_0%,rgba(10,12,18,0.92)_100%)]
    p-5 sm:p-6
    shadow-[0_8px_24px_-14px_rgba(0,0,0,0.6)]
    hover:shadow-[0_14px_32px_-16px_rgba(0,0,0,0.65)]
    transition-shadow
    flex flex-col
    ${className}
  `}
    >

      {/* top gradient strip */}
      <div
        className="absolute left-0 right-0 top-0 h-[2px]"
        style={{ background: "linear-gradient(1.71deg,#000000 42.51%,#615BFE 308.78%)" }}
      />

      {/* outlined number */}
      <div className="mb-4">
        <span
          className="block text-[22px] sm:text-[48px] font-extrabold tracking-widest leading-none"
          style={{
            WebkitTextStroke: "2px rgba(225,229,240,0.9)",
            color: "transparent",
            textShadow: "0 1px 0 rgba(0,0,0,0.35)",
          }}
        >
          {n}
        </span>
      </div>

      <h3 className="text-[15px] sm:text-[22px] font-semibold">{title}</h3>
      <p className="mt-2 text-[16px] leading-6 text-[#C5C8D1]">{desc}</p>

      {/* subtle inset sheen */}
      <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/5" />
    </div>
  );
}
