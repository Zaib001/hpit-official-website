"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import award1 from "../Images/award1.png";
import award2 from "../Images/award2.png";
import award3 from "../Images/award3.png";

const awards = [
    { img: award1, alt: "Washington Technology" },
    { img: award2, alt: "Defense News Top 100" },
    { img: award3, alt: "Bloomberg Government" },
    { img: award1, alt: "Bloomberg Government" },
    { img: award2, alt: "Bloomberg Government" },
];

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: "easeOut" },
    },
});

export default function AwardsSection() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const visibleCards = 3;
    const total = awards.length;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

    const resetAutoSlide = () => {
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 7000);
    };

    // Auto-slide
    useEffect(() => {
        if (!isPaused && total > visibleCards) {
            const timer = setInterval(() => nextSlide(), 6000);
            return () => clearInterval(timer);
        }
    }, [isPaused, current]);

    // Compute visible awards
    const getVisible = () => {
        const visible = [];
        for (let i = 0; i < visibleCards; i++) {
            visible.push(awards[(current + i) % total]);
        }
        return visible;
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 250 : -250,
            opacity: 0,
            scale: 0.98,
        }),
        center: { x: 0, opacity: 1, scale: 1 },
        exit: (direction: number) => ({
            x: direction > 0 ? -250 : 250,
            opacity: 0,
            scale: 0.98,
        }),
    };

    return (
        <section
            className="relative w-full py-20 px-6 sm:px-10 lg:px-20 mx-auto text-white overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Title */}
            <motion.div
                variants={fadeUp(0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mx-auto ml-0 sm:ml-8 md:ml-16"
            >
                <div className="text-left mb-10 md:mb-16">
                    <h2
                        className="font-poppins font-semibold text-[36px] sm:text-[44px] md:text-[48px] leading-[1.15]
                     bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]
                     text-transparent bg-clip-text"
                    >
                        Awards and Recognition
                    </h2>
                </div>
            </motion.div>

            {/* Carousel */}
            <div className="overflow-hidden">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={current}
                        custom={1}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 120, damping: 20 },
                            opacity: { duration: 0.4 },
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
                    >
                        {getVisible().map((award, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp(i * 0.15)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -8,
                                    boxShadow: "0 8px 30px rgba(128,118,244,0.25)",
                                    transition: { duration: 0.4, ease: "easeOut" },
                                }}
                                className="relative w-full max-w-[400px] h-[220px] sm:h-[250px] rounded-lg overflow-hidden transition-all duration-300"
                            >
                                <motion.img
                                    src={award.img}
                                    alt={award.alt}
                                    className="object-contain w-full h-full p-6 transition-transform duration-700 ease-out"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 0.15 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Arrows */}


            <div className="flex justify-end gap-4 mt-12 pr-2 sm:pr-6 lg:pr-0">
                <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: "#374151" }}
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                        prevSlide();
                        resetAutoSlide();
                    }}
                    className="w-[50px] h-auto sm:w-[50px] md:h-[50px] sm:h-[70px] rounded-full border border-gray-400 flex items-center justify-center cursor-pointer"
                >
                    <span className="text-[20px] sm:text-[20px] leading-[19px] text-gray-300">
                        ←
                    </span>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: "#EF4444" }}
                    transition={{ duration: 0.3 }}
                    onClick={() => {
                        nextSlide();
                        resetAutoSlide();
                    }}
                    className="w-[50px] h-auto sm:w-[50px] md:h-[50px] sm:h-[70px] rounded-full border border-red-500 flex items-center justify-center cursor-pointer"
                >
                    <span className="text-[20px] sm:text-[20px] leading-[19px] text-white">
                        →
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
