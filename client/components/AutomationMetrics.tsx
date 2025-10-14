import { motion } from "framer-motion";
import aiRobot from "../Images/IA/ai-robot.jpg"; // replace with your actual image path
import star from "../Images/IA/start.png"; // replace with your actual image path

export default function AutomationMetrics() {
    const metrics = [
        "70% faster environment provisioning",
        "90% reduction in misconfigurations",
        "3x gain in IT team efficiency",
        "2x improvement in proactive incident resolution",
    ];

    return (
        <section className="bg-gradient-to-r from-black via-[#050509] to-black text-white py-20 px-6 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Side - Text */}
                <motion.div
                    className="flex-1 text-left"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug mb-8">
                        Automation{" "}
                        Metrics <br />That Matter
                    </h2>

                    <ul className="space-y-5">
                        {metrics.map((item, index) => (
                            <motion.li
                                key={index}
                                className="flex items-center gap-3 text-gray-300 text-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <span className="w-3 h-3 rounded-full border-[1.5px] border-[#DC1414] bg-transparent"></span>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div
                    className="flex-1 relative"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Decorative Border on Top-Left */}
                    <div className="absolute -top-3 -left-3 w-[90%] h-[96%] rounded-tl-[40px] border-t-2 border-l-2 border-[#8076F4]/70 pointer-events-none"></div>

                    {/* Background Accent Image (behind main) */}
                    <img
                        src={star} // you can replace with another image like aiRobotBg
                        alt="Background Accent"
                        className="absolute top-[210px] right-[370px] w-[80%] rounded-tl-[40px] z-0"
                    />

                    {/* Main Foreground Image */}
                    <img
                        src={aiRobot}
                        alt="Automation Metrics"
                        className="relative z-10 rounded-tl-[40px] w-full h-auto object-cover"
                    />

                    {/* Bottom Right Accent Shape */}
                    <div className="absolute -bottom-[30px] right-[60px] w-[100px] h-[100px] rotate-45 bg-gradient-to-br from-[#8076F4]/40 to-transparent blur-[50px]"></div>
                </motion.div>


            </div>
        </section>
    );
}
