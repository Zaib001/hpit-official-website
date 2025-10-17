// FiveGExplainer.tsx
"use client";

import { motion } from "framer-motion";
import narrow from "@/svg/Arrow 1.svg";
import Ellipse from "../svg/Ellipse 10.svg";


type Props = {
    imageSrc: string;      // pass your image url (imported or from /public)
    imageAlt?: string;
    onPlay?: () => void;   // optional: handle click on the play button
    ctaHref?: string;      // link for "Read more"
};

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

export default function FiveGExplainer({
    imageSrc,
    imageAlt = "5G explainer",
  
}: Props) {
    return (
        <section className="relative overflow-hidden text-white px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
            {/* subtle right-side glow to match mock */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(100%_120%_at_85%_60%,rgba(97,91,254,0.25)_0%,rgba(0,0,0,0)_55%)]" />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-120px" }}
                className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[520px_minmax(0,1fr)] gap-8 lg:gap-14 items-center"
            >
                {/* Left: media card */}
                <motion.div variants={item} className="relative">
                    <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-[0_16px_40px_-18px_rgba(0,0,0,.6)]">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="block w-full h-auto object-cover"
                        />
                        {/* slight vignette */}
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.0)_0%,rgba(0,0,0,.25)_100%)]" />
                    </div>


                </motion.div>

                {/* Right: text + CTA */}
                <motion.div variants={item}>
                    <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-tight mb-4">
                        <span className="text-white">5G </span>
                        <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                            Explainer
                        </span>
                    </h2>

                    <p className="text-[#D5D8E1] text-[14.5px] sm:text-[15px] leading-7 max-w-2xl">
                        5G-Advanced will change the user experience in numerous ways,
                        allowing consumers and industries to benefit from the highly immersive
                        experience and enhanced mobility. It will improve coverage and capacity
                        and introduce support for a host of new devices. It will also deliver
                        more intelligence into the network using AI and ML, boost performance
                        and reduce power consumption. 5G-Advanced will truly expand 5G
                        capabilities beyond connectivity.
                    </p>

                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-white font-medium group rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A49CFD]/60"
                        style={{ fontSize: "16px" }}
                    >
                        Read more
                        <span className="relative w-[56px] h-[56px] -ml-4 inline-flex items-center justify-center">
                            <img src={Ellipse} alt="" className="w-full h-full" />
                            <img
                                src={narrow}
                                alt=""
                                className="absolute w-[11.5px] h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                        </span>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
