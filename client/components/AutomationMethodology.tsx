import { motion } from "framer-motion";

export default function AutomationMethodology() {
    const steps = [
        {
            title: "Discover & Map",
            desc: "Assess current workflows, tools, and infra readiness.",
        },
        {
            title: "Design for Scale",
            desc: "Build re-usable, secure, and compliant automation patterns.",
        },
        {
            title: "Deploy Seamlessly",
            desc: "Integrate across cloud, on prem, edge — without disrupting business.",
        },
        {
            title: "Evolve Continuously",
            desc: "Enable self-healing and intelligent event response over time.",
        },
    ];

    return (
        <section className="bg-gradient-to-r from-black via-[#050509] to-black text-white py-20 px-6 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 text-left"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <span className="bg-gradient-to-r from-[#8076F4] to-white bg-clip-text text-transparent">
                        Our Automation <br /> Methodology
                    </span>
                </motion.h2>

                <motion.p
                    className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mb-16 text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Intelligent Infrastructure Starts with <br/>Strategic Automation at Every Stage
                </motion.p>

                {/* Steps */}
                <div className="relative flex flex-col md:flex-row items-center justify-between mt-10">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[50px] left-0 right-0 h-[2px] bg-gray-700"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative z-10 flex flex-col items-center text-center md:w-1/4 min-h-[220px]" // ensures equal height
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Circle perfectly centered on line */}
                            <motion.div
                                className="absolute top-[42px] md:top-[42px] w-5 h-5 rounded-full bg-black border border-[#DC1414] shadow-[0_0_15px_4px_rgba(220,20,20,0.6)]"
                                animate={{
                                    boxShadow: [
                                        "0 0 10px 2px rgba(220,20,20,0.4)",
                                        "0 0 25px 6px rgba(220,20,20,0.8)",
                                        "0 0 10px 2px rgba(220,20,20,0.4)",
                                    ],
                                    scale: [1, 1.15, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            <div className="mt-16">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-[250px] mx-auto leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
