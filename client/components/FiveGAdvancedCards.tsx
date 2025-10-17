// FiveGAdvancedCards.tsx
"use client";

import { motion } from "framer-motion";

import narrow from "@/svg/Arrow 1.svg";
import Ellipse from "../svg/Ellipse 10.svg";


type CardProps = {
    title: string;
    body: string;
    cta?: string;
    thumbSrc: string;     // bottom-right thumbnail image
    thumbAlt?: string;
};

type Props = {
    left: CardProps;
    right: CardProps;
    blobSrc?: string;     // optional decorative blob in top-right
    blobAlt?: string;
};

const container = {
    hidden: { opacity: 0, y: 14 },
    show: {
        opacity: 1, y: 0,
        transition: { staggerChildren: 0.12, delayChildren: 0.06 }
    }
};

const item = {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    show: {
        opacity: 1, y: 0, scale: 1,
        transition: { type: "spring", stiffness: 140, damping: 18 }
    }
};

export default function FiveGAdvancedCards({ left, right, blobSrc, blobAlt = "decor" }: Props) {
    return (
        <section className="relative text-white px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
            {/* optional decorative blob */}
            {blobSrc && (
                <img
                    src={blobSrc}
                    alt={blobAlt}
                    className="pointer-events-none select-none hidden lg:block absolute -top-10 right-6 w-40"
                />
            )}

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-120px" }}
                className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
            >
                <motion.div variants={item}>
                    <FeatureCard {...left} />
                </motion.div>
                <motion.div variants={item}>
                    <FeatureCard {...right} />
                </motion.div>
            </motion.div>
        </section>
    );
}

/* — Card — */
function FeatureCard({ title, body, cta = "Know more", thumbSrc, thumbAlt = "" }: CardProps) {
    return (
        <div
            className=" max-h-[486px]
        relative overflow-hidden rounded-xl
        border border-white/10
        bg-[#0B0E13]
      "
        >
            {/* soft inner gradient to navy at bottom-right */}
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_90%_90%,#111A2A_0%,transparent_50%)] opacity-80" />

            {/* content */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                <h3 className="text-[26px] sm:text-[30px] lg:text-[40px] font-semibold leading-tight">
                    {title}
                </h3>

                <p className="mt-4 max-w-[42ch] text-[14.5px] sm:text-[20px] leading-7 text-[#CFD3DC]">
                    {body}
                </p>


                <a
                    href="#"
                    className="inline-flex items-center gap-2 text-white font-medium group rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A49CFD]/60"
                    style={{ fontSize: "16px" }}
                >
                    Know more
                    <span className="relative w-[56px] h-[56px] -ml-4 inline-flex items-center justify-center">
                        <img src={Ellipse} alt="" className="w-full h-full" />
                        <img
                            src={narrow}
                            alt=""
                            className="absolute w-[11.5px] h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                    </span>
                </a>
            </div>

            {/* bottom-right thumbnail band */}
            <div className="relative z-0 mt-6 h-[120px] sm:h-[140px] lg:h-[155px]">
                {/* subtle top fade on the band */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,14,0.0),rgba(8,10,14,0.0)60%,rgba(8,10,14,0.15))]" />
                <img
                    src={thumbSrc}
                    alt={thumbAlt}
                    className="absolute right-0 bottom-0 h-full w-[55%] sm:w-[50%] object-cover rounded-bl-lg"
                />
            </div>
        </div>
    );
}
