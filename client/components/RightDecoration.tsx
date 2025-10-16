// OurProcess.tsx
"use client";

import { motion } from "framer-motion";

/* ───────── Animations ───────── */
const container = {
    hidden: { opacity: 0, y: 8 },
    show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
};

const item = {
    hidden: { opacity: 0, y: 14 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 140, damping: 18 },
    },
};

/* ───────── Step Item (exact spacing like mock) ───────── */
function Step({
    n,
    title,
    desc,
}: {
    n: number | string;
    title: string;
    desc: string;
}) {
    return (
        <motion.div variants={item} className="flex items-start gap-5">
            {/* number badge */}
            <div className="mt-[2px] flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E23A3A]">
                <span className="text-[13px] font-semibold text-white">{n}</span>
            </div>

            {/* copy */}
            <div className="pt-[2px]">
                <h4 className="text-white text-[18px] font-semibold leading-snug">
                    {title}
                </h4>
                <p className="mt-1 text-[13.5px] leading-6 text-[#A9ACB6]">{desc}</p>
            </div>
        </motion.div>
    );
}

/* ───────── Decorative Right Panel (SVG lines + Wi-Fi) ───────── */
function RightDecoration() {
    return (
        <div className="relative h-full w-full overflow-hidden rounded-xl">
            {/* deep gradient bg */}
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_72%_18%,#1F2D62_0%,#0B0E12_55%)]" />

            {/* glows */}
            <div className="absolute right-20 top-14 h-28 w-28 rounded-full bg-[#3AA6FF] blur-[70px] opacity-60" />
            <div className="absolute right-6 top-28 h-16 w-16 rounded-full bg-[#94F0FF] blur-[45px] opacity-50" />

            {/* network traces */}
            <svg
                className="absolute inset-0"
                width="100%"
                height="100%"
                viewBox="0 0 800 560"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="lg" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0" stopColor="#2BB2FF" />
                        <stop offset="1" stopColor="#7AF0D4" />
                    </linearGradient>
                    <filter id="g" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2.2" />
                    </filter>
                </defs>

                {/* main rounded lines */}
                <path
                    d="M520 0 v110 q0 16 16 16 h54 q16 0 16 16 v38
             M300 120 v90 q0 16 16 16 h128 q16 0 16 16 v42
             M520 300 v40 q0 16 16 16 h130 q16 0 16 16 v40"
                    fill="none"
                    stroke="url(#lg)"
                    strokeOpacity="0.45"
                    strokeWidth="2"
                    filter="url(#g)"
                />
                {/* thin hairline */}
                <path
                    d="M360 145 v65 q0 12 12 12 h82 q12 0 12 12 v30"
                    fill="none"
                    stroke="#7AF0D4"
                    strokeOpacity="0.25"
                    strokeWidth="1.2"
                />

                {/* glowing pins */}
                {[...Array(7)].map((_, i) => (
                    <circle
                        key={i}
                        cx={552 + i * 32}
                        cy={150 + (i % 2) * 28}
                        r="3.2"
                        fill="#8DEBFF"
                        opacity="0.85"
                    />
                ))}
                {[...Array(3)].map((_, i) => (
                    <circle
                        key={`lr-${i}`}
                        cx={610 + i * 42}
                        cy={420 + (i % 2) * 24}
                        r="3.2"
                        fill="#CFECCF"
                        opacity="0.7"
                    />
                ))}
            </svg>

            {/* Wi-Fi glyph */}
            <svg
                className="absolute right-14 top-40 h-[230px] w-[360px]"
                viewBox="0 0 512 330"
                fill="none"
            >
                <defs>
                    <linearGradient id="wf" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#5AD0C4" />
                        <stop offset="1" stopColor="#53A5E8" />
                    </linearGradient>
                </defs>
                <path
                    d="M256 92c72 0 118 29 156 67 9 9-5 24-14 15-35-36-76-60-142-60s-107 23-142 60c-9 9-23-6-14-15 38-38 84-67 156-67z"
                    fill="url(#wf)"
                    opacity=".9"
                />
                <path
                    d="M256 156c51 0 84 20 112 48 9 9-5 24-14 15-24-24-53-41-98-41s-74 16-98 41c-9 9-23-6-14-15 28-28 61-48 112-48z"
                    fill="url(#wf)"
                    opacity=".82"
                />
                <path
                    d="M256 221c29 0 47 11 63 27 9 9-5 24-14 15-12-12-27-20-49-20s-37 8-49 20c-9 9-23-6-14-15 16-16 34-27 63-27z"
                    fill="url(#wf)"
                    opacity=".8"
                />
                <circle cx="256" cy="290" r="24" fill="url(#wf)" opacity=".78" />
            </svg>
        </div>
    );
}

/* ───────── Main Section ───────── */
export default function OurProcess() {
    return (
        <section className="relative overflow-hidden  py-16 px-6 md:py-20 md:px-10">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 rounded-2xl border border-[#1B1E26] bg-[#0A0C11] p-6 md:grid-cols-[minmax(0,1fr)_520px] md:p-10">
                {/* left column */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={container}
                >
                    {/* Heading */}
                    <motion.div variants={item} className="mb-6">
                        <h2 className="text-white font-semibold leading-[1.1] text-[36px] sm:text-[44px] lg:text-[52px]">
                            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                                Our Process –
                            </span>
                            <br />
                            <span className="text-white">How We Work</span>
                        </h2>
                        <p className="mt-3 text-[13.5px] tracking-wide text-[#A9ACB6]">
                            We ensure every project is tailored and thoroughly executed:
                        </p>
                        {/* thin divider */}
                        <div className="mt-4 h-px w-full bg-white/10" />
                    </motion.div>

                    {/* steps grid (exact layout like mock) */}
                    <motion.div
                        variants={container}
                        className="grid grid-cols-2 gap-8 md:grid-cols-2 md:gap-x-16"
                    >
                        {/* Left column */}
                        <div className="space-y-8">
                            <Step
                                n={1}
                                title="Site Survey & Consultation"
                                desc="We assess your space, needs, and goals for optimal network design."
                            />
                            <Step
                                n={2}
                                title="Solution Design"
                                desc="Custom architecture is created using the latest standards and technologies."
                            />
                            <Step
                                n={3}
                                title="Hardware Setup & Cabling"
                                desc="We install devices, access points, antennas, and control units."
                            />
                            <Step
                                n={4}
                                title="Integration & Configuration"
                                desc="All systems are synced and optimized for seamless performance."
                            />
                        </div>

                        {/* Right column */}
                        <div className="space-y-8 mt-[279px]">
                            <Step
                                n={5}
                                title="Testing & Optimization"
                                desc="We validate speed, coverage, security, and performance benchmarks."
                            />
                            <Step
                                n={6}
                                title="Ongoing Maintenance & Support"
                                desc="Your network stays future-proofed with regular updates and expert monitoring."
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* right decorative panel (hidden on small screens) */}
                <div className="hidden rounded-xl md:block">
                    <RightDecoration />
                </div>
            </div>
        </section>
    );
}
