import { motion } from "framer-motion";
import deliverImg from "../Images/call.jpg"; 

export default function HpitDeliverSection() {
  const cards = [
    {
      title: "Tailored Onboarding & Knowledge Transfer",
      text: "We study your environment, document known issues, and build workflows that reflect your needs.",
    },
    {
      title: "Smart Support Framework",
      text: "Our team triages issues, automates common fixes, and provides multi-level escalation — all governed by SLAs.",
    },
    {
      title: "Continuous Optimization",
      text: "We analyze support data to identify root causes, reduce ticket volume, and improve user experience over time.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-black via-[#050509] to-black text-white py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-14">
        {/* LEFT SIDE */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-[36px] sm:text-[42px] md:text-[48px] font-[600] font-[Poppins] leading-[56px] mb-2">
            How{" "}
            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
              HPIT
            </span>{" "}
            Delivers It
          </h2>

          <p className="text-gray-400 text-base sm:text-lg mb-8">
            Delivery That Fits Your Operating Model
          </p>

          {/* Image */}
          <motion.div
            className="relative w-full max-w-[500px] rounded-md overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={deliverImg}
              alt="HPIT Delivery"
              className="w-full h-[64vh] object-cover rounded-md shadow-[0_0_40px_-10px_rgba(128,118,244,0.3)]"
            />

            {/* Subtle Glow Effect */}
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
          className="flex-1 flex flex-col gap-6 justify-center mt-28"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 0 30px -8px rgba(128,118,244,0.6), 0 0 10px -5px rgba(128,118,244,0.4)",
              }}
              className=" w-full max-w-[614px] min-h-[130px] p-6 sm:p-8 rounded-[8px] 
               border border-[#444955]
               bg-[linear-gradient(1.71deg,_#000000_42.51%,_#615BFE_308.78%)]
               transition-all duration-500 ease-in-out 
               flex flex-col justify-center shadow-[0_0_25px_-8px_rgba(128,118,244,0.15)]"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#DADBDD] mb-2">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
