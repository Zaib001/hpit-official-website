import { motion } from "framer-motion";
import serviceImg from "../Images/IS.jpg"; // replace with your actual image path

export default function ServiceDeliverSection() {
    const features = [
        {
            title: "Reduced Downtime",
            text: "Faster issue resolution to keep systems and users productive.",
        },
        {
            title: "Higher User Satisfaction",
            text: "Consistent support across devices, platforms, and geographies.",
        },
        {
            title: "Optimized IT Resources",
            text: "Free your internal teams from routine troubleshooting and L1/L2 burden.",
        },
        {
            title: "Stronger Operational Resilience",
            text: "Build a support layer aligned with business continuity goals.",
        },
    ];

    return (
        <section className="bg-gradient-to-r from-black via-[#050509] to-black text-white py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between">
                {/* LEFT SIDE */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Heading */}
                    <h2 className="text-[36px] sm:text-[42px] md:text-[48px] font-[600] font-[Poppins] leading-[56px] mb-3">
                        What This{" "}
                        <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                            Service
                        </span>{" "}
                        Delivers
                    </h2>

                    {/* Subheading */}
                    <p className="text-gray-400 text-base sm:text-lg mb-6">
                        The Business Benefits of Always On Support
                    </p>

                    {/* Image */}
                    <motion.div
                        className="relative w-full max-w-[480px] rounded-md overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={serviceImg}
                            alt="IT Support Engineer"
                            className="w-full h-auto object-cover rounded-md shadow-[0_0_40px_-10px_rgba(128,118,244,0.3)]"
                        />
                        {/* Soft Accent Glow */}
                        <motion.div
                            className="absolute -bottom-[40px] -left-[40px] w-[120px] h-[120px] rotate-45 bg-gradient-to-br from-[#8076F4]/40 to-transparent blur-[60px]"
                            animate={{
                                opacity: [0.4, 0.8, 0.4],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    className="flex-1 space-y-8 mt-32"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Supporting Paragraph */}
                    <p className="text-gray-300 text-sm sm:text-base border-l-2 border-[#ffffff] pl-4 leading-relaxed max-w-[480px]">
                        HPIT ensures fast, reliable, and scalable IT support that reduces
                        downtime and boosts user satisfaction.
                    </p>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                className="w-full max-w-[326px] h-[220px] p-6 rounded-[8px] border border-[#444955] 
             bg-[linear-gradient(0deg,#111215,#111215),linear-gradient(179.93deg,rgba(2,2,3,0.2)_68.46%,rgba(97,91,254,0.2)_201.19%)] 
             shadow-[0_0_20px_-5px_rgba(128,118,244,0.15)] 
             hover:border-[#8076F4]/60 transition-all duration-500 backdrop-blur-sm"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.7, ease: "easeOut" }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <h3 className="text-lg w-[150px] font-semibold text-[#DADBDD] mb-4">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
                            </motion.div>

                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
