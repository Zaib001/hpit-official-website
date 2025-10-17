// WhyChooseUs.tsx
"use client";

import { motion } from "framer-motion";
import reverseArrow from "../svg/reverseArrow.svg";

/* Animations */
const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
};
const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140, damping: 18 } },
};

const points = [
    "Over a decade of experience in enterprise wireless integration",
    "Certified engineers and partnership with leading tech vendors",
    "Proven success across 100+ enterprise projects",
    "Custom solutions for every industry and scale",
    "End-to-end support from planning to maintenance",
];

export default function WhyChooseUs() {
    return (
        <section className="relative overflow-hidden  text-white">
            {/* soft scene background like the mock */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_80%_at_35%_45%,#122635_0%,transparent_55%),radial-gradient(80%_80%_at_15%_80%,#2A1414_0%,transparent_50%)]" />

            <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
                {/* Heading */}
                <h2 className="text-[36px] sm:text-[44px] lg:text-[54px] font-semibold leading-tight mb-8">
                    Why{" "}
                    <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                        Choose
                    </span>{" "}
                    Us
                </h2>

                {/* Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
                    {/* Left: decorative swoosh/arrow */}
                    <motion.div
                        className="hidden md:flex justify-center items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <img src={reverseArrow} alt="Arrow Illustration" className="w-[250px] h-[220px] md:h-[260px]" />
                    </motion.div>

                    {/* Right: checklist */}
                    <motion.ul
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={container}
                        className="space-y-6"
                    >
                        {points.map((text, i) => (
                            <motion.li key={i} variants={item} className="flex items-start gap-4">
                                {/* circle check badge */}
                                <span className="mt-[2px] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        aria-hidden="true"
                                        className="w-4 h-4"
                                    >
                                        {/* only the arrow, no ring */}
                                        <path
                                            d="M6 10.3l2.3 2.3L14 7.8"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>


                                <p className="text-[14.5px] leading-7 text-[#CED1D8]">{text}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
}
