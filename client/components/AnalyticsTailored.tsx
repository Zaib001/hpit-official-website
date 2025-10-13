import { motion } from "framer-motion";
import img1 from "../Images/DA/a1.png";
import img2 from "../Images/DA/a2.png";
import img3 from "../Images/DA/a3.png";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import reverseArrow from "../svg/reverseArrow.svg";



export default function AnalyticsTailored() {
    return (
        <section className="bg-[#050505] text-white py-20 px-6 sm:px-10 lg:px-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 max-w-xl"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-snug mb-6">
                        Analytics{" "}
                        <span className="text-transparent bg-clip-text bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)]">
                            Tailored
                        </span>{" "}
                        to What You Do
                    </h2>
                    <p className="text-gray-400 text-[16px] sm:text-[18px] leading-relaxed mb-8">
                        From healthcare to manufacturing, finance to logistics — we don’t
                        just analyze data, we apply it where it matters most. HPIT aligns
                        analytics with the KPIs that define your industry.
                    </p>

                    {/* CTA Button */}
                    <motion.a
                        href="#"
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="inline-flex items-center gap-2 text-white font-medium group"
                    >

                        Get Started
                        <div className="relative w-[56px] h-[56px]" style={{ marginLeft: "-15px" }}>
                            <img src={Ellipse} alt="ellipse" />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-xl" style={{ marginLeft: "-15px" }}>
                                <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                            </span>
                        </div>

                    </motion.a>
                </motion.div>

                <motion.div
                    className="hidden md:flex justify-center items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <img src={reverseArrow} alt="Arrow Illustration" className="w-[100px] h-[80px]" />
                </motion.div>
                {/* Right Image Group */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-row gap-6 flex-1 justify-center lg:justify-end"
                >
                    {[img1, img2, img3].map((img, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className={`
        w-[140px] sm:w-[180px] lg:w-[156px]
        h-[280px] sm:h-[340px] lg:h-[340px]
        overflow-hidden rounded-[80px]
        border border-[#1E1E25]
        shadow-[0_0_25px_rgba(128,118,244,0.08)]
        transition-transform duration-700
        ${i === 0 ? "mt-0" : i === 1 ? "mt-10" : "mt-20"}
      `}
                        >
                            <img
                                src={img}
                                alt={`industry-${i}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>


        </section>
    );
}
