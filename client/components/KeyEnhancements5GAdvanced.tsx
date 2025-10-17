// KeyEnhancements5GAdvanced.tsx
"use client";

import { motion } from "framer-motion";
import hero from "../Images/hero-5g.jpg";

type CardItem = { kind: "card"; iconSrc?: string; title: string; desc: string };
type MediaItem = { kind: "media"; imgSrc: string; alt?: string };
type Item = CardItem | MediaItem;

const container = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 140, damping: 18 } },
};

export default function KeyEnhancements5GAdvanced({ items}) {
  return (
    <section className=" text-white px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center text-[26px] sm:text-[34px] lg:text-[40px] font-semibold leading-tight mb-8 sm:mb-10"
        >
          Key <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
            enhancements
          </span>{" "}
          in 5G-Advanced
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-110px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {items.map((it, idx) => (
            <motion.div key={idx} variants={item} className={it.kind === "media" ? "lg:col-span-2" : ""}>
              {it.kind === "media" ? (
                <MediaTile imgSrc={it.imgSrc} alt={it.alt} />
              ) : (
                <EnhancementCard {...it} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EnhancementCard({ iconSrc, title, desc }: CardItem) {
  return (
    <div className="h-[280px] w-[307px] rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,17,24,0.92)_0%,rgba(10,12,18,0.95)_100%)] p-4 sm:p-5 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.65)] relative overflow-hidden flex flex-col">
      <div className="pointer-events-none absolute inset-0 rounded-xl border border-dotted border-white/15" />
      <div className="mb-4">
        {iconSrc ? (
          <img src={iconSrc} alt="" className="h-[64px] w-[64px] rounded-md object-contain opacity-90" />
        ) : (
          <DefaultIcon />
        )}
      </div>
      <h3 className="text-[15px] sm:text-[22px] font-semibold">{title}</h3>
      <p className="mt-2 text-[16px] sm:text-[16px] leading-6 text-[#C9CBD4]">{desc}</p>
    </div>
  );
}

function MediaTile({ imgSrc, alt = "5G advanced" }: { imgSrc: string; alt?: string }) {
  return (
    // Option 1 (intrinsic height)
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.6)]">
      <img src={imgSrc} alt={alt} className="block w-full h-[280px] object-cover" />
    </div>

    
  );
}

function DefaultIcon() {
  return (
    <span className="inline-grid place-items-center h-7 w-7 rounded-md bg-white/5 ring-1 ring-white/15">
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3" fill="#7F86FF" opacity=".2" />
        <path d="M8 12h8M8 16h5M8 8h8" stroke="#AEB4FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/* Use the imported URL directly here (no template string) */
const DEFAULT_ITEMS: Item[] = [
  { kind: "card", title: "XR (AR, VR, gaming)", desc: "Guaranteed, Seamless, Low power consumption, Edge computing" },
  { kind: "card", title: "Enhanced coverage", desc: "PUSCH 2 dB  •  RACH 8 dB" },
  { kind: "card", title: "MIMO performance", desc: "Enhanced uplink, Multi-cell uplink, +20% high speed mobile" },
  { kind: "card", title: "5G to replace GSM-R", desc: "Enable GSM-R migration to 5G with 5G MHz support for dedicated spectrum" },

  { kind: "card", title: "Evolution beyond smartphone", desc: "Reduced power/70% lower cost, 4.0 devices, Unmanned Vehicles" },
  { kind: "media", imgSrc: hero },                 // 👈 use the URL string directly
  { kind: "card", title: "Accurate positioning", desc: "<10 cm indoor positioning; carrier phase; complements to GNSS outdoors" },

  { kind: "card", title: "Resilient timing", desc: "No GPS required, timing service over 5G network" },
  { kind: "card", title: "Network operation efficiency", desc: "Flexible TDD spectrum use, AI/ML automation, energy efficiency" },
  { kind: "card", title: "Enhanced sidelink", desc: "Sidelink meeting public safety needs, XR display, etc." },
  { kind: "card", title: "Enhanced mobility", desc: "Reliability to 99.9%, Break from 50 to 0 ms (FR2), improved FR2 Scell setup" },
];
