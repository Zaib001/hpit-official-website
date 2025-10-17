"use client";

import { motion } from "framer-motion";
import { Shield, Network, Database, DollarSign, Scale } from "lucide-react";
import threeD from '../Images/3d.jpg'
const challenges = [
    {
        icon: <Shield className="h-6 w-6 text-[#E2B36E]" />,
        title: "Security and privacy risks",
        desc: "As IoT use grows, security and privacy are major concerns due to device vulnerabilities and the large amounts of personal data collected.",
        gradient: ["#E6AF5F", "#FF6B00"] as const,
    },
    {
        icon: <Network className="h-6 w-6 text-[#B497FF]" />,
        title: "Interoperability",
        desc: "IoT devices often face interoperability issues due to differing standards, making machine-to-machine communication and data integration challenging.",
        gradient: ["#8E7BFF", "#BA5CFF"] as const,
    },
    {
        icon: <Database className="h-6 w-6 text-[#63C2FF]" />,
        title: "Data overload",
        desc: "IoT devices produce large volumes of data, posing challenges for businesses lacking the tools and expertise to analyze and extract useful insights.",
        gradient: ["#00C1FF", "#6CC6FF"] as const,
    },
    {
        icon: <DollarSign className="h-6 w-6 text-[#9A94FF]" />,
        title: "Cost and complexity",
        desc: "Implementing IoT can be costly and complex, needing major investments and skilled management for ongoing operation and maintenance.",
        gradient: ["#7F7BFF", "#B9AFFF"] as const,
    },
    {
        icon: <Scale className="h-6 w-6 text-[#A6FF95]" />,
        title: "Regulatory and legal challenges",
        desc: "With growing IoT adoption, businesses face legal and regulatory challenges, needing to comply with varying data, privacy, and cybersecurity laws across regions.",
        gradient: ["#A8FF8A", "#46D87A"] as const,
    },
];



/* -------------------- Animations -------------------- */
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

/* -------------------- Card Component -------------------- */
function GradientCard({
    icon,
    title,
    desc,
    gradient,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    gradient: readonly [string, string];
}) {



    return (
        <motion.div
            variants={item}
            whileHover={{
                y: -3,
                boxShadow: "0 16px 30px -16px rgba(0,0,0,0.45)",
            }}
            className="relative rounded-xl p-5 sm:p-6 text-white transition-all duration-300"
        >
            {/* Icon ABOVE gradient line */}
            <div className="relative z-10 flex items-center gap-3 -mt-6">{icon}</div>

            <div
                className="absolute top-8 left-0 right-0 h-[2px]"
                style={{
                    background: `linear-gradient(
      90deg,
      ${gradient[0]}00 0%,
      ${gradient[0]} 25%,
      ${gradient[1]} 50%,
      ${gradient[0]} 75%,
      ${gradient[0]}00 100%
    )`,
                }}
            />



            <h3 className="mt-6 text-[16px] sm:text-[18px] font-semibold relative z-10">
                {title}
            </h3>
            <p className="mt-2 text-[14px] sm:text-[15px] leading-6 text-[#C9CBD4] relative z-10">
                {desc}
            </p>

        </motion.div>

    );
}

/* -------------------- Section -------------------- */
export default function RisksAndChallengesIoT() {
    return (
        <section className="relative text-white px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
            {/* Top-right purple polygon glow */}
            <div className="pointer-events-none absolute top-0 right-0 w-[260px] h-[200px] bg-[radial-gradient(100%_100%_at_top_right,rgba(136,104,255,0.35)_0%,rgba(0,0,0,0)_100%)]" />

            <div className="mx-auto max-w-7xl border border-white/10 rounded-2xl p-6 sm:p-10 relative overflow-hidden">

                {/* Decorative top-right image */}
                <motion.img
                    src={threeD} // <-- replace with your actual image path
                    alt="Decorative overlay"
                    initial={{ opacity: 0, y: -20, rotate: -180 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="
      absolute
      top-[-119px]
      left-[901px]
      w-[445px]
      h-[334px]
      rotate-[-180deg]
      opacity-100
      pointer-events-none
      object-contain
      z-0
      hidden lg:block
    "
                />

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-8 sm:mb-10 relative z-10"
                >
                    <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-tight">
                        Risks{" "}
                        <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                            and challenges
                        </span>{" "}
                        in IoT
                    </h2>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-120px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 relative z-10"
                >
                    {/* First row */}
                    {challenges.slice(0, 3).map((c, i) => (
                        <GradientCard key={i} {...c} />
                    ))}

                    {/* Centered second row */}
                    <div className="lg:col-span-3 flex justify-center gap-6 sm:gap-7 mt-4">
                        <div className="w-full sm:w-[48%] lg:w-[30%]">
                            <GradientCard {...challenges[3]} />
                        </div>
                        <div className="w-full sm:w-[48%] lg:w-[30%]">
                            <GradientCard {...challenges[4]} />
                        </div>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
