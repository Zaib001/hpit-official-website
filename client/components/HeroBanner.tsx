import React from "react";

interface HeroBannerProps {
    img: string;
    svg: string;
    heading: string;
    text: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ img, svg, heading, text }) => (
    <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
            backgroundImage: `url(${img})`,
        }}
    >
        <div className="relative z-10 pt-80 pb-20 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-2xl">
                    <h2 className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-2">
                        <img src={svg} alt="Company" />
                    </h2>
                    <h2 className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8">
                        {heading}
                    </h2>
                    <p className="text-white text-base md:text-[20px] leading-relaxed max-w-xl">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default HeroBanner;