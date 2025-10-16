// PrivateNetworkServices.tsx
"use client";

import { motion } from "framer-motion";

// 🔁 Example image imports (replace with your actual files)
import ImgDesign from "../Images/BYOS/design.png";
import ImgSpectrum from "../Images/BYOS/spectrum.png";
import ImgEdge from "../Images/BYOS/edge.png";
import ImgSim from "../Images/BYOS/sim.png";
import ImgAnalytics from "../Images/BYOS/analytics.png";
import ImgSupport from "../Images/BYOS/support.png";

/* animations */
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
const hoverLift = {
    y: -4,
    scale: 1.01,
    boxShadow:
        "0 0 0 1px rgba(128,118,244,0.15), 0 10px 24px -10px rgba(0,0,0,0.4)",
};

/* Reusable card with GRADIENT BORDER-IMAGE + IMAGE */
function ServiceCard({
    imgSrc,
    imgAlt,
    title,
    desc,
    className = "",
}: {
    imgSrc: string;
    imgAlt: string;
    title: string;
    desc: string;
    className?: string;
}) {
    return (
        <motion.div
            variants={item}
            whileHover={hoverLift}
            className={`w-[300px] h-[280px]
        rounded-lg border p-5 md:p-6 bg-transparent
        [border-image-source:linear-gradient(180deg,_#1E46BC_0%,_#8229AB_100%)]
        [border-image-slice:1]
        ${className}
      `}
        >
            {/* image tile */}
            <div className="rounded-md grid overflow-hidden">
                <img src={imgSrc} alt={imgAlt} className="h-[64px] w-[64px] object-contain" />
            </div>
            <div>
                <h4 className="mt-4 text-white text-[22px] font-semibold">{title}</h4>
                <p className="mt-2 text-[16px] leading-6 text-[#B7BAC3]">{desc}</p>
            </div>
        </motion.div>
    );
}


export default function PrivateNetworkServices() {
    return (
        <section className=" text-white py-14 md:py-20 px-6 md:px-10">
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="mx-auto max-w-7xl"
            >
                {/* header row: left intro + two cards to the right */}
                <div className="grid gap-6 lg:grid-cols-12">
                    {/* left intro */}
                    <motion.div variants={item} className="lg:col-span-6">
                        <h2 className="text-[30px] sm:text-[38px] font-semibold leading-tight">
                            Our{" "}
                            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                                Private Network
                            </span>
                            <br />
                            Services
                        </h2>
                        <p className="mt-3 text-[14px] leading-7 text-[#A9ACB6]">
                            We deliver full-cycle design and deployment of 4G/5G private
                            networks tailored to your unique requirements.
                        </p>
                    </motion.div>

                    {/* two cards on the right (first row) */}
                    <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ServiceCard
                            imgSrc={ImgDesign}
                            imgAlt="Private network design"
                            title="4G & 5G Private Network Design"
                            desc="Custom RF planning and architecture to ensure full coverage and performance."
                        />
                        <ServiceCard
                            imgSrc={ImgSpectrum}
                            imgAlt="Spectrum licensing"
                            title="Spectrum Licensing & Planning"
                            desc="Expert assistance with CBRS, licensed, or shared spectrum usage."
                        />
                    </div>
                </div>

                {/* second row: four cards full width */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ServiceCard
                        imgSrc={ImgEdge}
                        imgAlt="Edge computing"
                        title="Edge Computing Integration"
                        desc="Low-latency infrastructure by deploying compute nodes close to the source."
                    />
                    <ServiceCard
                        imgSrc={ImgSim}
                        imgAlt="SIM management"
                        title="Secure SIM Management"
                        desc="Custom SIM provisioning and device whitelisting for full control."
                    />
                    <ServiceCard
                        imgSrc={ImgAnalytics}
                        imgAlt="Monitoring & analytics"
                        title="Monitoring & Analytics"
                        desc="Real-time dashboards for usage tracking, QoS, and network health."
                    />
                    <ServiceCard
                        imgSrc={ImgSupport}
                        imgAlt="Support & maintenance"
                        title="Ongoing Maintenance & Support"
                        desc="24/7 technical support and firmware upgrades for long-term stability."
                    />
                </div>
            </motion.div>
        </section>
    );
}
