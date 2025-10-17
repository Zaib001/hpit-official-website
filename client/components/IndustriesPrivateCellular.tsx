// IndustriesPrivateCellular.tsx
"use client";

import { motion } from "framer-motion";
import RibbonImg from "../Images/ribbon.jpg"; // update path/name


/* ── Animations ── */
const container = {
    hidden: { opacity: 0, y: 14 },
    show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.12, delayChildren: 0.06 },
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

/* ── Right neon decoration (SVG) ── */
function NeonRibbonImage({ src, alt = "neon ribbon" }: { src: string; alt?: string }) {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-visible hidden md:block">
           
            <img
                src={src}
                alt={alt}
                className="
          absolute
          hidden md:block
          rotate-[54.12deg]
          w-[516.3112952043px] h-[347.595378141px]
          -top-[57.58px] right-[-213.63px]
          xl:scale-[1.05] 2xl:scale-[1.1]
        "
                style={{ transformOrigin: "center" }}
            />
        </div>
    );
}


/* ── A single industry cell ── */
function Cell({
    title,
    desc,
    withRightDivider = false,
    withTopRule = false,
}: {
    title: string;
    desc: string;
    withRightDivider?: boolean;
    withTopRule?: boolean;
}) {
    return (
        <motion.div variants={item} className="relative w-[303px] h-[130px] p-6 mt-20">
            {/* vertical dotted divider between columns (md+) */}
            {withRightDivider && (
                <div className="hidden md:block absolute right-0 top-0 h-full w-[1px] bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.14)_0_7px,transparent_7px_16px)]" />
            )}



            {/* header + text */}
            <h4 className="text-white font-semibold text-[20px]">{title}</h4>
            <p className="mt-2 text-[16px] leading-6 text-[#B9BDC7]">{desc}</p>

        </motion.div>
    );
}

/* ── Main Section ── */
export default function IndustriesPrivateCellular() {
    return (
        <section className=" text-white py-12 md:py-16 px-4 md:px-8">
            <div className="relative mx-auto max-w-7xl rounded-xl border border-white/10  p-5 sm:p-7 md:p-10 overflow-hidden">
                <NeonRibbonImage src={RibbonImg} />
                {/* content wrapper for z-index above decoration */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative z-10"
                >
                    {/* Heading */}
                    <motion.h2
                        variants={item}
                        className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold leading-tight mb-8"
                    >
                        Industries Benefiting from{" "}
                        <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                            Private
                        </span>{" "}<br/>
                        Cellular Networks
                    </motion.h2>

                    {/* Grid 3 x 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
                        {/* Row 1 */}
                        <Cell
                            title="Smart Manufacturing"
                            desc="Connect autonomous machines, sensors, and AGVs in real time."
                            withRightDivider
                        />
                        <Cell
                            title="Healthcare"
                            desc="Secure, compliant mobile connectivity for critical devices and staff."
                            withRightDivider
                        />
                        <Cell
                            title="Enterprises & Campuses"
                            desc="Enable BYOD, mobile workflows, and HD video calls without bottlenecks."
                        />



                        {/* Row 2 (dotted horizontal rules like mock) */}
                        <Cell
                            title="Ports & Logistics"
                            desc="Enable asset tracking, fleet communication, and secure monitoring."
                            withRightDivider
                            withTopRule
                        />
                        <Cell
                            title="Smart Cities"
                            desc="Power city-wide IoT deployments and public safety communications."
                            withRightDivider
                            withTopRule
                        />
                        <Cell
                            title="Defense & Public Safety"
                            desc="Operate independently from commercial networks during emergencies."
                            withTopRule
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
