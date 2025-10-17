// ExamplesOfIoTApplications.tsx
"use client";

import { motion } from "framer-motion";

/* ====== Animations ====== */
const container = {
    hidden: { opacity: 0, y: 12 },
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

const hoverLift = {
    y: -4,
    boxShadow:
        "0 16px 40px -18px rgba(0,0,0,.55), 0 0 0 1px rgba(128,118,244,.15)",
};

/* ====== Reusable dotted card ====== */
function DottedCard({
    title,
    desc,
    onClick,
}: {
    title: string;
    desc: string;
    onClick?: () => void;
}) {
    return (
        <motion.div
            variants={item}
            whileHover={hoverLift}
            className="w-[405px] h-[252px]
        relative rounded-xl p-5 sm:p-6
        bg-[linear-gradient(180deg,rgba(15,17,24,.92)_0%,rgba(10,12,18,.95)_100%)]
        border border-dotted border-white/20
        text-white
      "
        >
            {/* inner ring for subtle depth */}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />

            <button
                onClick={onClick}
                aria-label="Open"
                className="
    absolute top-4 right-4 grid h-8 w-8 place-items-center
    rounded-full bg-transparent
    border border-[#f12d2d] ring-1 ring-[#E05555]/20
    text-white transition hover:translate-x-0.5
  "
            >
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" className="translate-x-[1px]">
                    <path
                        d="M6 10h8m0 0l-3-3m3 3l-3 3"
                        stroke="#FFFFFF"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>


            <h3 className="text-[24px] font-semibold">{title}</h3>
            <p className="mt-3 text-[16px] leading-6 text-[#C9CBD4]">{desc}</p>
        </motion.div>
    );
}

/* ====== Main Section ====== */
export default function ExamplesOfIoTApplications({
    centerImg,
    centerImgAlt = "IoT visualization",
}: {
    centerImg?: string;
    centerImgAlt?: string;
}) {
    return (
        <section className=" text-white px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center font-semibold leading-tight text-[28px] sm:text-[36px] lg:text-[44px] mb-8 sm:mb-10"
                >
                    Examples of{" "}
                    <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                        IoT applications
                    </span>
                </motion.h2>

                {/* Grid: left column (2 cards) / center image / right column (2 cards) */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-120px" }}
                    className="
    grid grid-cols-1 gap-6 lg:gap-10
    lg:grid-cols-[380px_minmax(0,560px)_380px]
    xl:grid-cols-[405px_minmax(0,560px)_405px]
    items-start
  "
                >
                    {/* Left column — hug the center */}
                    <div className="space-y-6 justify-self-center lg:justify-self-end">
                        <DottedCard
                            title="Healthcare"
                            desc="IoT in healthcare enables real-time patient monitoring, early issue detection, and helps manage equipment, inventory, and medication compliance."
                        />
                        <DottedCard
                            title="Retail"
                            desc="IoT in retail helps track customer behavior, monitor inventory, and optimize store layouts. It also supports supply chain tracking and improves the overall shopping experience."
                        />
                    </div>

                    {/* Center image — centered, no offset */}
                    <motion.figure variants={item} className="justify-self-center">
                        <div className="rounded-xl overflow-hidden">
                            <img
                                src={centerImg}
                                alt={centerImgAlt}
                                className="block w-[375px] h-[534px] object-cover max-h-[520px]"
                            />
                        </div>
                    </motion.figure>

                    {/* Right column — hug the center */}
                    <div className="space-y-6 justify-self-center lg:justify-self-start">
                        <DottedCard
                            title="Manufacturing"
                            desc="IIoT boosts manufacturing by monitoring equipment, optimizing operations, and managing inventory, supply chains, and product quality."
                        />
                        <DottedCard
                            title="Aviation"
                            desc="Aviation connects people and places worldwide, enabling fast travel, global trade, and vital services like defense and emergency response."
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
