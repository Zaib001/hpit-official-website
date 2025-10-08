"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import Ellipse from "@/svg/Ellipse 10.svg";
import narrow from "@/svg/Arrow 1.svg";

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: "easeOut" },
    },
});

interface Card {
    img: string;
    title: string;
    desc: string;
}

interface Props {
    title?: string;
    cards: Card[];
    autoSlideInterval?: number;
    gradientColor?: string;
}

const InsightSection = ({
    title = "Related Insights",
    cards = [],
    autoSlideInterval = 8000, // ⏳ slower auto-slide (8s)
    gradientColor = "#E50000",
}: Props) => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Group cards into slides of 3
    const slides = useMemo(() => {
        const grouped = [];
        for (let i = 0; i < cards.length; i += 3) {
            grouped.push(cards.slice(i, i + 3));
        }
        return grouped;
    }, [cards]);

    const totalSlides = slides.length;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % totalSlides);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

    const resetAutoSlide = () => {
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 8000);
    };

    // Auto Slide
    useEffect(() => {
        if (!isPaused && totalSlides > 1) {
            const timer = setInterval(nextSlide, autoSlideInterval);
            return () => clearInterval(timer);
        }
    }, [isPaused, totalSlides, autoSlideInterval]);

    return (
        <motion.section
            className="w-full bg-black text-white py-16 md:py-20 px-4 sm:px-6 md:px-12 mx-auto max-w-[1380px] overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Title */}
            <h2
                className="font-poppins font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-[1.15]
                       bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]
                       text-transparent bg-clip-text mb-8"
            >
                Related Insights
            </h2>

            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]"
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}
                >
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full flex-shrink-0 px-2"
                        >
                            {slide.map((card, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-[#22252B] rounded-[4px] overflow-hidden flex flex-col justify-between shadow-md 
                   border-b-4 border-[#DADBDD] transition-all duration-300 
                   hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] w-full h-full"
                                    variants={fadeUp(i * 0.15)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.2 }}
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover transition-transform duration-700 ease-out hover:scale-110"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-between flex-grow px-5 sm:px-6 py-5 sm:py-6">
                                        <div>
                                            <h3 className="text-[18px] sm:text-[20px] font-semibold mb-2 sm:mb-3 text-[#ECEDEE]">
                                                {card.title}
                                            </h3>
                                            <p className="text-[#A0A0A0] text-[14px] sm:text-[15px] leading-relaxed">
                                                {card.desc}
                                            </p>
                                        </div>

                                        <div className="flex justify-end items-end">
                                            <button className="mt-5 sm:mt-6 flex items-center text-[#ECEDEE] text-[14px] sm:text-[15px] font-medium hover:text-[#E50000] transition group">
                                                <span>Learn more</span>
                                                <div className="relative w-[48px] sm:w-[56px] h-[48px] sm:h-[56px] flex items-center justify-center ml-1 sm:ml-2">
                                                    <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                                                    <img
                                                        src={narrow}
                                                        alt="arrow"
                                                        className="absolute w-[10px] sm:w-[11.5px] h-[18px] sm:h-[20px] transition-transform duration-300 group-hover:translate-x-1"
                                                    />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ))}

                </motion.div>
            </div>

            {/* Arrows */}
            <motion.div
                className="flex justify-end mt-10 md:mt-12 space-x-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <button
                    onClick={() => {
                        prevSlide();
                        resetAutoSlide();
                    }}
                    className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] border border-[#E50000] rounded-full flex items-center justify-center hover:bg-[#E50000] transition duration-300 group"
                    aria-label="Previous"
                >
                    <span className="inline-block text-[#E50000] text-lg sm:text-xl group-hover:text-white leading-none">
                        ‹
                    </span>
                </button>
                <button
                    onClick={() => {
                        nextSlide();
                        resetAutoSlide();
                    }}
                    className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] border border-[#E50000] rounded-full flex items-center justify-center hover:bg-[#E50000] transition duration-300 group"
                    aria-label="Next"
                >
                    <span className="text-[#E50000] text-lg sm:text-xl group-hover:text-white">
                        ›
                    </span>
                </button>
            </motion.div>

          
        </motion.section>
    );
};

export default InsightSection;
