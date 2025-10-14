import { motion } from "framer-motion";
import meetingImg from "../Images/MS/img.jpg";

export default function TechnologyAlly() {
  const capabilities = [
    {
      title: "Industry-Grade Expertise",
      text: "Built to support complex, regulated environments across sectors like finance, healthcare, and manufacturing.",
    },
    {
      title: "Trusted Delivery Frameworks",
      text: "Proven governance models and automation ensure consistency, quality, and compliance.",
    },
    {
      title: "Global Reach, Local Support",
      text: "We deliver at scale — with regional teams that understand your operational context.",
    },
    {
      title: "Transparent & Accountable",
      text: "SLA-driven engagement backed by real-time reporting and measurable performance metrics.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-black via-[#050509] to-black text-white py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
        {/* LEFT: Heading + Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2
            className="font-[600] text-[36px] sm:text-[42px] md:text-[48px] leading-[46px] sm:leading-[52px] md:leading-[56px] font-[Poppins] max-w-[520px] text-left mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            More{" "}
            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
              Than a Vendor.
            </span>
            <br />
            A Technology Ally.
          </motion.h2>

          {/* Image with glow */}
          <motion.div
            className="relative w-full max-w-[452px] h-auto rounded-[4px] mt-[-2px] ml-[20px] sm:ml-[40px] lg:ml-[60px]"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src={meetingImg}
              alt="Team Meeting"
              className="w-full h-full object-cover rounded-[4px] shadow-[0_0_40px_-10px_rgba(128,118,244,0.3)]"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 100 }}
            />

            {/* Animated Accent Glow */}
            <motion.div
              className="absolute -bottom-[40px] -left-[40px] w-[120px] h-[120px] rotate-45 bg-gradient-to-br from-[#8076F4]/40 to-transparent blur-[60px]"
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT: Bullet Points */}
        <motion.div
          className="flex-1 pt-4 max-w-[600px] flex flex-col justify-center gap-[48px] md:gap-[64px] mt-16 md:mt-24 lg:mt-48"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Animated Red Outlined Circle */}
              <motion.span
                className="w-3 h-3 mt-2 rounded-full border-[1.5px] border-[#DC1414] bg-transparent shrink-0"
                animate={{
                  boxShadow: [
                    "0 0 5px rgba(220,20,20,0.4)",
                    "0 0 15px rgba(220,20,20,0.7)",
                    "0 0 5px rgba(220,20,20,0.4)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-[#DADBDD] mb-1">
                  {cap.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {cap.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
