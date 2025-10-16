// CapabilitiesNextGenWireless.tsx
"use client";

import { motion } from "framer-motion";

export default function CapabilitiesNextGenWireless({
    artworkSrc,
    artworkAlt = "abstract wireless 3D blob",
}: {
    artworkSrc?: string;
    artworkAlt?: string;
}) {
    const container = {
        hidden: { opacity: 0, y: 14 },
        show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.12, delayChildren: 0.06 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 12 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 140, damping: 18 },
        },
    };

    const cells = [
        {
            title: "5G & Beyond (6G-ready) Deployment",
            desc:
                "High-speed, low-latency mobile networks tailored for enterprise, industrial, and city-scale use.",
        },
        {
            title: "mmWave (Millimeter Wave) Integration",
            desc:
                "Harness high-frequency bands for ultra-fast data rates and immersive experiences like AR/VR and UHD streaming.",
        },
        {
            title: "ISAC (Integrated Sensing and Communication)",
            desc:
                "Enable wireless systems to simultaneously sense, track, and communicate—essential for smart mobility and public safety.",
        },
        {
            title: "AI-Powered Network Management",
            desc:
                "Use intelligent analytics and self-optimizing algorithms for real-time resource allocation and failure recovery.",
        },
        {
            title: "Edge Computing Infrastructure",
            desc:
                "Bring compute power closer to users and devices for real-time processing with reduced latency.",
        },
        {
            title: "Ultra-Reliable Low-Latency Communication (URLLC)",
            desc:
                "Critical for mission-sensitive industries like manufacturing, defense, and autonomous vehicles.",
        },
    ];

    return (
        <section className=" text-white px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
            <div className="mx-auto max-w-7xl relative">
                {/* Top-right artwork (optional) */}
                {artworkSrc && (
                    <motion.div
                        initial={{ opacity: 0, y: -12, rotate: 6 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 120, damping: 16 }}
                        className="hidden md:block absolute right-0 -top-20 select-none pointer-events-none"
                    >
                        <motion.img
                            src={artworkSrc}
                            alt={artworkAlt}
                            className="w-[128px]  lg:w-[288px]"
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            draggable={false}
                        />
                    </motion.div>
                )}

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold leading-tight">
                        Our{" "}
                        <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                            Capabilities
                        </span>{" "}
                        in
                        <br className="hidden sm:block" />
                        <span> Next-Gen Wireless</span>
                    </h2>
                    <p className="mt-3 text-[14px] sm:text-[15px] text-[#B7BAC3] max-w-2xl">
                        We offer comprehensive design, deployment, and consulting services
                        for advanced wireless technologies.
                    </p>
                </motion.div>

                {/* Big rounded panel with grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-120px" }}
                    className="
    relative mt-7 sm:mt-8
    rounded-xl border border-white/10 overflow-hidden
    p-5 sm:p-6 lg:p-16
  "
                    style={{
                        background:
                            "linear-gradient(108.92deg, rgba(0, 0, 0, 0.2) 54.9%, rgba(29, 72, 173, 0.2) 86.93%)," +
                            "linear-gradient(359.7deg, rgba(0, 0, 0, 0.2) 25.18%, rgba(141, 18, 143, 0.2) 161.79%)",
                    }}
                >
                    {/* inner ring/vignette */}
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />

                    {/* Grid 3×2 with dotted vertical separators */}
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 lg:gap-y-10">
                        {/* vertical dotted separators (md+) */}
                        <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-[1px] bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.12)_0_7px,transparent_7px_16px)]" />
                        <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-[1px] bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.12)_0_7px,transparent_7px_16px)]" />

                        {cells.map((c, i) => (
                            <motion.div key={c.title} variants={item} className="relative py-5">
                                {/* dotted horizontal rule for the second row */}
                                {i >= 3 && (
                                    <div className="absolute -top-6 left-10 w-[72%] h-[1px] bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.1)_0_8px,transparent_8px_18px)]" />
                                )}
                                <h3 className="text-[20px] sm:text-[16px] font-semibold px-6">
                                    {c.title}
                                </h3>
                                <p className="mt-2 text-[16px] leading-6 text-[#B9BDC7] px-6">
                                    {c.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
