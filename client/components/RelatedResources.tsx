// RelatedResource.tsx
"use client";

import { motion } from "framer-motion";
import narrow from "@/svg/Arrow 1.svg";
import Ellipse from "../svg/Ellipse 10.svg";


/** Pass your hero image in via props (plain <img/>, not Next/Image) */
export default function RelatedResource({
    heroImg,
    heroAlt = "5G smart city",
}: {
    heroImg: string;
    heroAlt?: string;
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
        hidden: { opacity: 0, y: 12, scale: 0.98 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 140, damping: 18 },
        },
    };

    return (
        <section className=" text-white px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-120px" }}
                className="mx-auto max-w-7xl"
            >
                {/* Heading */}
                <motion.div variants={item} className="mb-6">
                    <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-semibold leading-tight">
                        Related Resource
                    </h2>
                    <p className="mt-2 text-sm sm:text-[15px] text-[#B8BBC6]">
                        What is ISAC and Why It Matters for the Future of Wireless
                    </p>
                </motion.div>

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_1fr] gap-8 lg:gap-10 items-start">
                    {/* Left column: cards */}
                    <motion.div variants={container} className="grid gap-6">
                        <motion.div variants={item}>
                            <ResourceCard
                                title="Understanding ISAC (Integrated Sensing and Communication)"
                                href="#"
                                gradientFrom="#0C0F1A"
                                gradientTo="#3D2CF7"
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <ResourceCard
                                title="Improved Network Efficiency"
                                href="#"
                                gradientFrom="#0C0F1A"
                                gradientTo="#6E4C1E"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right column: hero image with dot accents */}
                    <motion.div
                        variants={item}
                        className="relative rounded-xl overflow-hidden"
                        whileHover={{ scale: 1.01 }}
                    >
                       
                        <img
                            src={heroImg}
                            alt={heroAlt}
                            className="w-full h-auto rounded-xl shadow-[0_18px_40px_-16px_rgba(0,0,0,0.55)] mt-10"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

/* ╭────────────────────────────────────────────────────────────╮
   │ Resource Card (glossy bg, dotted border, neon CTA)         │
   ╰────────────────────────────────────────────────────────────╯ */
function ResourceCard({
    title,
    href,
    gradientFrom,
    gradientTo,
}: {
    title: string;
    href: string;
    gradientFrom: string;
    gradientTo: string;
}) {
    return (
        <a
            href={href}
            className="
        group block relative rounded-xl p-[1px]
       
      "
            aria-label={title}
        >
            {/* inner */}
            <div
                className="
          rounded-xl p-5 sm:p-6
          bg-[linear-gradient(180deg,rgba(12,14,22,0.9)_0%,rgba(10,11,18,0.93)_100%)]
          relative overflow-hidden w-[425px] h-[236px]
        "
                style={{
                    // dotted border look
                    boxShadow:
                        "inset 0 0 0 1px rgba(255,255,255,0.08), 0 14px 28px -18px rgba(0,0,0,0.6)",
                }}
            >
                {/* top gradient strip */}
                <div
                    className="absolute left-0 right-0 top-0 h-[2px] "
                    style={{
                        background: `linear-gradient(1.71deg, #000000 42.51%, ${gradientTo} 308.78%)`,
                    }}
                />

                {/* bottom sheen gradient (subtle) */}
                <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-14"
                    style={{
                        background: `linear-gradient(0deg, ${hexToRgba(
                            gradientTo,
                            0.25
                        )} 0%, transparent 100%)`,
                    }}
                />

                <h3 className="text-[15px] sm:text-[24px] font-semibold max-w-[32ch]">
                    {title}
                </h3>

                {/* CTA */}
                <div className="mt-5">
                    <button type="button" className="group mt-6 inline-flex items-center gap-3 text-white/85">
                        <span className="underline-offset-4 group-hover:underline">Learn more</span>
                        <div className="relative w-[56px] h-[56px]">
                            <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                            {/* Arrow centered inside ellipse */}
                            <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                                <img src={narrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </a>
    );
}

/* Neon ring + arrow */
function NeonRingArrow() {
    return (
        <span className="relative inline-grid place-items-center w-8 h-8">
            <svg viewBox="0 0 48 48" className="absolute inset-0" aria-hidden="true">
                <defs>
                    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#F04A6A" />
                        <stop offset="1" stopColor="#7A66FF" />
                    </linearGradient>
                </defs>
                <circle cx="24" cy="24" r="20" fill="none" stroke="url(#ring)" strokeWidth="2" />
            </svg>
            <svg
                viewBox="0 0 16 16"
                className="relative z-[1] w-[11.5px] h-[20px] rotate-[-45deg] transition-transform group-hover:translate-x-[2px]"
                aria-hidden="true"
            >
                <path d="M2 8h9M7 3l4 5-4 5" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );
}

/* Purple dot grid accent */
function DotGrid({ className = "" }: { className?: string }) {
    // 4 x 6 grid of small squares
    const rows = 6;
    const cols = 4;
    return (
        <div className={className}>
            <div className="grid grid-cols-4 gap-2 opacity-80">
                {Array.from({ length: rows * cols }).map((_, i) => (
                    <span
                        key={i}
                        className="block h-2 w-2 rounded-sm"
                        style={{ background: "linear-gradient(180deg,#7A66FF 0%,#F04A6A 100%)" }}
                    />
                ))}
            </div>
        </div>
    );
}

/* helper */
function hexToRgba(hex: string, a = 1) {
    const m = hex.replace("#", "");
    const bigint = parseInt(m.length === 3 ? m.split("").map((c) => c + c).join("") : m, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r},${g},${b},${a})`;
}
