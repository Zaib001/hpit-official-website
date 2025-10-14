import { motion } from "framer-motion";
import sv2 from "../Images/DA/sv1.svg";
import sv4 from "../Images/DA/sv2.svg";
import sv3 from "../Images/DA/sv3.svg";
import sv1 from "../Images/DA/sv4.svg";
import sv5 from "../Images/DA/sv5.svg";


export default function StrategicAnalytics() {


    return (
        <section className="bg-[#050505] text-white py-20 px-6 sm:px-10 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Combined container to align heading + large card */}
                <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
                    {/* Left: Heading + Paragraph */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl flex-1"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-snug">
                            <span className="text-white">Strategic </span>
                            <span className="text-transparent bg-clip-text bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]">
                                Analytics
                            </span>{" "}
                            That Drive Growth
                        </h2>
                        <p className="text-gray-400 mt-4 text-[16px] sm:text-[18px] max-w-md">
                            Connect structured and unstructured data from any environment cloud, on premises, or hybrid—for a single source of truth.
                        </p>
                    </motion.div>

                    {/* Right: Large Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#0B0B0D] hover:bg-[#111215] transition-all p-8 rounded-xl border border-[#1E1E25] shadow-[0_0_15px_rgba(128,118,244,0.1)] flex-1 max-w-[520px] min-w-[300px]"
                    >
                        <img
                            src={sv1}
                            alt="Real-Time Business Intelligence"
                            className="w-[48px] h-[48px] mb-4"
                        />
                        <h3 className="text-[22px] font-semibold mb-2">
                            Real-Time Business Intelligence
                        </h3>
                        <p className="text-gray-400 text-[16px] leading-relaxed">
                            Deliver timely insights through dynamic dashboards, automated alerts,
                            and interactive reports tailored to decision-makers.
                        </p>
                    </motion.div>
                </div>


                {/* Bottom 4 Cards */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[sv2, sv4, sv3, sv5].map((icon, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-[#0B0B0D] hover:bg-[#111215] transition-all p-6 sm:p-8 rounded-xl border border-[#1E1E25] shadow-[0_0_15px_rgba(128,118,244,0.1)] flex flex-col justify-between min-h-[240px]"
                        >
                            <img src={icon} alt="icon" className="w-[48px] h-[48px] mb-4" />
                            <h3 className="text-[20px] sm:text-[22px] font-semibold mb-2">
                                {["Advanced Predictive Modeling", "Customer & Market Insights", "Unified Data Foundation", "Data Governance & Compliance"][i]}
                            </h3>
                            <p className="text-gray-400 text-[15px] sm:text-[16px] leading-relaxed">
                                {[
                                    "Forecast trends and behaviors using AI-powered algorithms and pattern detection.",
                                    "Understand your audience deeper to deliver hyper-relevant products and campaigns.",
                                    "Integrate structured and unstructured data across cloud, on-prem, and hybrid sources.",
                                    "Ensure quality, security, and audit-readiness across your data lifecycle.",
                                ][i]}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(128,118,244,0.15)_0%,_transparent_70%)] blur-3xl pointer-events-none"></div>
        </section>

    );
}
