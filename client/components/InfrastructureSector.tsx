import { motion } from "framer-motion";
import img1 from "../Images/DI/1.png";
import img2 from "../Images/DI/2.png";
import img3 from "../Images/DI/3.png";

export default function InfrastructureSector() {
    return (
        <section className="bg-[#050505] text-white py-20 px-6 sm:px-10 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Text Column */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2
                        className="text-[36px] sm:text-[42px] md:text-[48px] font-semibold leading-[72px] tracking-[0em]"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                        <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
                            Infrastructure
                        </span>{" "}
                        That <br />
                        Fits Your Sector
                    </h2>

                    <p
                        className="text-gray-400 mt-6 text-[18px] leading-7 tracking-[0.01em] max-w-xl"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}
                    >
                        Every industry has distinct operational demands, compliance pressures, and
                        performance expectations. HPIT delivers digital infrastructure solutions
                        purpose-built for your sector — with the resilience, agility, and scalability
                        your business needs to thrive.
                    </p>


                    {/* Bullet Points */}
                    <div className="mt-8 grid grid-cols-2 gap-y-3 text-[18px] md:text-[20px] font-[500]">
                        <ul className="space-y-3">
                            {["Finance", "Manufacturing", "Government"].map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <span className="w-2 h-2 bg-transparent border border-[#DC1414] rounded-full"></span>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <ul className="space-y-3">
                            {["Healthcare", "Logistics", "Energy & Utilities"].map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                >
                                    <span className="w-2 h-2 bg-transparent border border-[#DC1414] rounded-full"></span>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Right Images */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 gap-6 justify-center lg:justify-end"
                >
                    {[
                        { src: img1, class: "rounded-br-[40px]" },
                        { src: "white", class: "rounded-bl-[40px]" },
                        { src: img2, class: "rounded-bl-[30px]" },
                        { src: img3, class: "rounded-br-[30px]" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className={`overflow-hidden ${item.class}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                        >
                            {item.src === "white" ? (
                                <div className="w-full h-full bg-white min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]" />
                            ) : (
                                <img
                                    src={item.src}
                                    alt={`sector-${i}`}
                                    className="w-full h-full object-cover shadow-lg min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]"
                                />
                            )}
                        </motion.div>
                    ))}
                </motion.div>


            </div>
        </section>
    );
}
