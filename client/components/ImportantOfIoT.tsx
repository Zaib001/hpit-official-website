// ImportantOfIoT.tsx
"use client";

import { motion } from "framer-motion";

/* ---------- Animations ---------- */
const container = {
    hidden: { opacity: 0, y: 14 },
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

/* ---------- Icon pill ---------- */
function IconPill({ src, alt }: { src?: string; alt?: string }) {
    return (
        <span className="inline-grid h-[64px] w-[64px] place-items-center rounded-lg">
            {src ? (
                <img src={src} alt={alt ?? "icon"} className="object-contain opacity-90" />
            ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5 opacity-80" fill="none" stroke="#C9D2FF">
                    <path d="M4 16h16M6 12h12M8 8h8" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            )}
        </span>
    );
}

/* ---------- Single card ---------- */
function IoTCard({
    icon,
    title,
    desc,
}: {
    icon?: string;
    title: string;
    desc: string;
}) {
    return (
        <motion.div
            variants={item}
            whileHover={{
                y: -4,
                boxShadow:
                    "0 16px 40px -18px rgba(0,0,0,.65), 0 0 0 1px rgba(128,118,244,.15)",
            }}
            className="
        relative overflow-hidden rounded-xl
        border border-white/10
        bg-[linear-gradient(180deg,rgba(15,17,24,.92)_0%,rgba(10,12,18,.94)_100%)]
        p-5 sm:p-9
      "
        >
            {/* subtle inner ring */}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />
            {/* soft bottom-right sheen like mock */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_100%,#2A2140_0%,transparent_55%)] opacity-80" />

            <IconPill src={icon} />
            <h3 className="mt-4 text-[22px] font-semibold text-white">{title}</h3>
            <p className="mt-2 text-[16px] leading-6 text-[#C9CBD4]">{desc}</p>
        </motion.div>
    );
}

/* ---------- Section ---------- */
export default function ImportantOfIoT({
    icons = {},
}: {
    /** optionally pass your own icon urls */
    icons?: {
        efficiency?: string;
        datadriven?: string;
        costs?: string;
        cx?: string;
    };
}) {
    return (
        <section className="relative  text-white px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-tight">
                        <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                            important
                        </span>{" "}
                        <span className="text-white">of IOT</span>
                    </h2>
                </div>

                {/* dotted corner accent (top-left of grid) */}
                <div className="relative">
                    {/* Dotted L-corner (top + left) */}
                    <span className="pointer-events-none absolute -top-4 -left-2 hidden md:block">
                        {/* horizontal row */}
                        <svg width="168" height="30" viewBox="0 0 168 30" fill="none">
                            {[...Array(20)].map((_, i) => (
                                <rect
                                    key={`h-${i}`}
                                    x={i * 8}
                                    y={2}
                                    width="4"
                                    height="4"
                                    rx="1"
                                    fill="#A78BFA"
                                    opacity="0.6"
                                />
                            ))}
                        </svg>
                    </span>

                    <span className="pointer-events-none absolute -top-2 -left-4 hidden md:block">
                        {/* vertical column */}
                        <svg width="30" height="168" viewBox="0 0 30 168" fill="none">
                            {[...Array(20)].map((_, i) => (
                                <rect
                                    key={`v-${i}`}
                                    x={2}
                                    y={i * 8}
                                    width="4"
                                    height="4"
                                    rx="1"
                                    fill="#A78BFA"
                                    opacity="0.6"
                                />
                            ))}
                        </svg>
                    </span>


                    {/* Cards grid */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-120px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
                    >
                        <IoTCard
                            icon={icons.efficiency}
                            title="Improved efficiency"
                            desc="By using IoT devices to automate and optimize processes, businesses can improve efficiency and productivity. For example, IoT sensors can monitor equipment performance and detect or resolve potential issues before they cause downtime—reducing maintenance costs and improving uptime."
                        />

                        <IoTCard
                            icon={icons.datadriven}
                            title="Data-driven decision-making"
                            desc="IoT devices generate vast amounts of data that can be turned into better-informed business decisions and new business models. By analyzing this data, companies gain insight into customer behavior, market trends, and operations to guide strategy, product development, and resource allocation."
                        />

                        <IoTCard
                            icon={icons.costs}
                            title="Cost-savings"
                            desc="Automation of repetitive tasks and better monitoring cut expenses and improve profitability. For example, IoT can track energy usage and optimize consumption, reducing energy costs and enhancing sustainability."
                        />

                        <IoTCard
                            icon={icons.cx}
                            title="Enhanced customer experience"
                            desc="With IoT-powered data, businesses can deliver more personalized and engaging experiences. Retailers can sense in-store movement and tailor offers; service teams can anticipate needs and respond proactively."
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
