import { motion } from "framer-motion";
import shape from "../Images/glass.png"; // replace with your shape image

export default function OutcomesSection() {
    return (
        <section className="relative bg-gradient-to-br from-[#050505] via-[#0B0B0B] to-[#1A0F23] text-white py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
                {/* LEFT CONTENT */}
                <motion.div
                    className="flex-1 max-w-[600px]"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-[36px] sm:text-[44px] md:text-[42px] font-extrabold leading-tight mb-6">
                        Outcomes{" "}
                        <span className="bg-gradient-to-r from-[#7B73F0] to-[#FFFFFF] bg-clip-text text-transparent">
                            That Redefine{" "}
                        </span>
                        What’s{" "}
                        <span className="bg-gradient-to-r from-[#FFFFFF] to-[#7B73F0] bg-clip-text text-transparent">
                            Possible
                        </span>
                    </h2>

                    <p className="text-gray-300 text-[18px] leading-relaxed mb-10">
                        Our HPC solutions don’t just perform in theory — they deliver measurable
                        impact in live enterprise environments. From faster simulations to smarter
                        AI workflows and reduced operational costs, HPIT enables organizations to
                        achieve more, faster.
                    </p>

                    {/* STATS GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-700 border border-gray-700 rounded-lg overflow-hidden text-center">
                        <div className="py-6 px-4">
                            <p className="text-[40px] font-extrabold text-transparent stroke-white stroke-[1.5]">
                                70%
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                faster simulation<br />run-times
                            </p>
                        </div>

                        <div className="py-6 px-4">
                            <p className="text-[40px] font-extrabold text-transparent stroke-white stroke-[1.5]">
                                50%
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                cost savings via hybrid<br />HPC optimization
                            </p>
                        </div>

                        <div className="py-6 px-4">
                            <p className="text-[40px] font-extrabold text-transparent stroke-white stroke-[1.5]">
                                2.5x
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                increase in AI model<br />training speed
                            </p>
                        </div>
                    </div>

                </motion.div>

                {/* RIGHT SHAPE IMAGE */}
                <motion.div
                    className="flex-1 flex justify-center lg:justify-end"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img
                        src={shape}
                        alt="3D Abstract Shape"
                        className="w-[400px] md:w-[460px] lg:w-[420px] object-contain drop-shadow-[0_0_80px_rgba(128,118,244,0.4)]"
                    />
                </motion.div>
            </div>

            {/* Subtle radial glow behind shape */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[radial-gradient(circle,_rgba(128,118,244,0.15)_0%,_transparent_70%)] blur-[120px]"></div>
        </section>
    );
}
