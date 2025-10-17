"use client";

import { motion } from "framer-motion";

// Imported images (PNG)
import DasIcon from "../Images/SW/das.png";
import Private5gIcon from "../Images/SW/private5g.png";
import WifiIcon from "../Images/SW/wifi.png";
import IotIcon from "../Images/SW/iot.png";
import SupportIcon from "../Images/SW/support.png";

/* Animations */
const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
};

const card = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 120, damping: 16 },
    },
};

const hoverLift = {
    scale: 1.01,
    y: -4,
    boxShadow:
        "0 0 0 1px rgba(0,0,0,0.25), 0 14px 28px -14px rgba(0,0,0,0.55), 0 0 24px -8px rgba(128,118,244,0.25)",
};

/* Thin gradient stroke with subtle sweep */
const Stroke = ({
    from,
    via,
    to,
}: {
    from: string;
    via?: string;
    to?: string;
}) => (
    <motion.div
        initial={{ backgroundPositionX: "0%" }}
        animate={{ backgroundPositionX: ["0%", "120%", "0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="h-[2px] w-full rounded-full opacity-80 bg-[length:200%_100%]"
        style={{
            background: `linear-gradient(90deg, ${from} 0%, ${via ?? from} 45%, ${to ?? "transparent"
                } 100%)`,
        }}
    />
);

/* Reusable Card (image above stroke, equal heights) */
const Card = ({
    imgSrc,
    imgAlt = "service icon",
    stroke,
    title,
    children,
    className = "",
}: {
    imgSrc: any;
    imgAlt?: string;
    stroke: { from: string; via?: string; to?: string };
    title: string;
    children: React.ReactNode;
    className?: string;
}) => (
    <motion.div
        variants={card}
        whileHover={hoverLift}
        className={`rounded-xl p-6 
                h-full flex flex-col md:min-h-[230px] ${className}`}
    >
        {/* Image above stroke */}
        <div className="mb-8 pl-[2px]">
            <img src={imgSrc} alt={imgAlt} width={35} height={40} />
        </div>

        <Stroke {...stroke} />

        <h3 className="mt-5 text-[18px] font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm text-[#A7AAB4] leading-6">{children}</p>

        {/* spacer keeps equal height even if text varies */}
        <div className="mt-auto" />
    </motion.div>
);

export default function WirelessIntegrationServices() {
    return (
        <section className="py-16 px-4 md:py-20 md:px-8 lg:px-10">
            <div className="mx-auto max-w-7xl rounded-2xl border border-[#1C1F27] bg-[#0A0B0F] relative overflow-hidden">
                {/* background glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_10%_10%,#211B3A_0%,transparent_40%),radial-gradient(120%_120%_at_90%_20%,#0E2838_0%,transparent_45%),radial-gradient(90%_90%_at_50%_100%,#1B152A_0%,transparent_60%)] opacity-80" />

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={container}
                    className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-14"
                >
                    {/* Header */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr,420px] gap-10 md:gap-14 items-start mb-10 md:mb-14">
                        <motion.h2
                            variants={card}
                            className="text-white font-semibold leading-[1.1] text-[34px] sm:text-[40px] lg:text-[48px]"
                        >
                            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                                Our Wireless
                            </span>
                            <br />
                            <span className="text-white">Integration Services</span>
                        </motion.h2>

                        <motion.p variants={card} className="text-[15px] leading-7 text-[#A7AAB4]">
                            We provide end-to-end integration services to make your wireless
                            systems smarter, faster, and more reliable:
                        </motion.p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Top row */}
                        <Card
                            imgSrc={DasIcon}
                            imgAlt="DAS"
                            stroke={{ from: "#E8B86D", via: "#E8B86D" }}
                            title="Distributed Antenna Systems"
                        >
                            Improve indoor signal strength and eliminate dead zones in
                            buildings, tunnels, and campuses.
                        </Card>

                        <Card
                            imgSrc={Private5gIcon}
                            imgAlt="Private 5G/LTE"
                            stroke={{ from: "#B18CFF", via: "#B18CFF" }}
                            title="Private 5G / LTE Network Setup"
                        >
                            Deploy secure, high-speed private mobile networks for your
                            enterprise or facility.
                        </Card>

                        {/* Ghost block — equal height too */}
                        <motion.div
                            variants={card}
                            whileHover={hoverLift}
                            className="rounded-xl  p-6 md:p-7 h-full flex flex-col md:min-h-[230px]"
                        >
                            <div className="mb-8 pl-[2px]">
                                <img src={WifiIcon} alt="Wi-Fi" width={35} height={40} />
                            </div>
                            <Stroke from="#6FE1FF" via="#7FD0F2" to="#83F29C" />
                            <h3 className="mt-5 text-[18px] font-semibold text-white">
                                Enterprise Wi-Fi Design & Optimization
                            </h3>
                            <p className="mt-3 text-sm text-[#A7AAB4] leading-6">
                                Deliver fast, seamless wireless internet access across your
                                workspace with zero downtime.
                            </p>
                            <div className="mt-auto" />
                        </motion.div>

                        {/* Bottom row — centered, fused, equal heights */}
                        <div className="md:col-span-3 flex flex-col md:flex-row justify-center items-stretch gap-0">
                            <Card
                                imgSrc={IotIcon}
                                imgAlt="IoT"
                                className="md:w-[460px] md:rounded-r-none md:border-r-0 md:mt-6"
                                stroke={{ from: "#8FA7FF", via: "#A6B5FF" }}
                                title="IoT Device & Sensor Integration"
                            >
                                Enable automation and real-time monitoring by connecting your
                                smart devices through a unified wireless system.
                            </Card>

                            <Card
                                imgSrc={SupportIcon}
                                imgAlt="Deployment & Support"
                                className="md:w-[460px] md:rounded-l-none md:mt-6"
                                stroke={{ from: "#9FFFA1", via: "#B8FF8B" }}
                                title="Wireless Network Design, Deployment & Support"
                            >
                                From initial survey and system design to implementation and
                                ongoing support, we cover it all.
                            </Card>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
