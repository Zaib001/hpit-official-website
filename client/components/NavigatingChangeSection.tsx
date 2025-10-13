import { motion } from "framer-motion";
import abstractImg from "../Images/DT/r8.png"; // your right-side shape image

const NavigatingChangeSection = () => {
    return (
        <section className="bg-[#050505] text-white px-6 sm:px-12 lg:px-20 py-20 overflow-hidden relative">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
                {/* Left Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Accent corner line */}
                    <div className="absolute -top-5 -left-7 w-[120px] sm:w-[140px] lg:w-[167px] h-[80px] sm:h-[95px] lg:h-[108px] rounded-tl-md opacity-50">
                        <div className="absolute inset-0 rounded-tl-md">
                            <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#A95CEC] to-[#DA22FF]"></div>
                            <div className="absolute top-0 left-0 h-full w-[4px] bg-gradient-to-b from-[#A95CEC] to-[#DA22FF]"></div>
                        </div>
                    </div>

                    <h2
                        className="
    font-extrabold 
    leading-tight 
    mb-6 
    text-[32px] 
    sm:text-[40px] 
    lg:text-[44px] 
    w-full 
    max-w-[792px] 
    h-auto 
    text-left
  "
                        style={{
                            opacity: 1,
                        }}
                    >
                        Navigating{" "}
                        <span className="text-transparent bg-clip-text bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)]">
                            Change
                        </span>{" "}
                        with <br className="hidden sm:block" /> Purpose and Clarity
                    </h2>


                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
                        At HPIT, we bring deep experience in driving complex digital
                        transformations across regulated industries. Our vendor neutral
                        approach ensures the right solutions, while our focus on ROI,
                        compliance, and change management delivers measurable results that
                        last.
                    </p>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center lg:justify-end"
                >
                    <img
                        src={abstractImg}
                        alt="Abstract 3D Shape"
                        className="w-[300px] sm:w-[350px] lg:w-[420px] object-contain drop-shadow-[0_0_30px_#7F75F4AA]"
                    />
                </motion.div>
            </div>

            {/* Subtle radial background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(128,118,244,0.15)_0%,_transparent_70%)] blur-3xl"></div>
        </section>
    );
};

export default NavigatingChangeSection;
