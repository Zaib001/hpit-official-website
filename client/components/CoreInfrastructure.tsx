import { motion } from "framer-motion";

export default function CoreInfrastructure() {
  return (
    <div className="relative min-h-[796px] text-white py-16 px-4 sm:px-8 lg:px-20 overflow-hidden font-[Poppins]">
      {/* Bottom Left Ellipse */}
      <div className="absolute w-[500px] h-[500px] left-[-250px] bottom-0 bg-[radial-gradient(circle,rgba(26,188,254,0.3)_0%,rgba(255,255,255,0.3)_100%)] blur-[200px] pointer-events-none z-0"></div>

      {/* Top Right Ellipse */}
      <div className="absolute w-[500px] h-[500px] right-[-250px] top-[-100px] bg-[radial-gradient(circle,rgba(26,188,254,0.3)_0%,rgba(255,255,255,0.3)_100%)] blur-[200px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div className="mb-12 relative z-10">
          <h2
            className="font-[600] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[36px] tracking-[0.01em]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
              What a Future-Ready <br/>Infrastructure Should Deliver
            </span>{" "}
          </h2>
        
        </motion.div>

        {/* Cards - Responsive Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {/* Card 1 */}
          <motion.div
            className="w-full max-w-[300px] mx-auto h-[362px] relative rounded-lg border border-[#444955] p-6 overflow-hidden font-[Poppins]"
            style={{
              background:
                "linear-gradient(179.93deg, rgba(2, 2, 3, 0.3) 68.46%, rgba(220, 20, 20, 0.3) 201.19%), #111215",
            }}
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <h3
              className="text-[28px] font-[600] leading-[36px] tracking-[0.01em] mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
Elastic Scale On-Demand            </h3>
            <p
              className="text-gray-400 text-[20px] leading-[32px] tracking-[0.01em]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Adapt capacity across cloud and on-prem without delays or cost bloat.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="w-full max-w-[300px] mx-auto h-[362px] relative rounded-lg border border-[#444955] p-6 overflow-hidden font-[Poppins]"
            style={{
              background:
                "linear-gradient(179.93deg, rgba(2, 2, 3, 0.3) 68.46%, rgba(97, 91, 254, 1) 201.19%), #111215",
            }}
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <h3
              className="text-[28px] font-[600] leading-[36px] tracking-[0.01em] mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Built-in Resilience
            </h3>
            <p
              className="text-gray-400 text-[20px] leading-[32px] tracking-[0.01em]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Design for high availability, disaster recovery, and zero-trust security.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="w-full max-w-[300px] mx-auto h-[362px] relative rounded-lg border border-[#444955] p-6 overflow-hidden font-[Poppins]"
            style={{
              background:
                "linear-gradient(179.93deg, rgba(2, 2, 3, 0.3) 68.46%, rgba(220, 20, 20, 0.3) 201.19%), #111215",
            }}
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <h3
              className="text-[28px] font-[600] leading-[36px] tracking-[0.01em] mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Faster Time to Innovation
            </h3>
            <p
              className="text-gray-400 text-[20px] leading-[32px] tracking-[0.01em]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Reduce provisioning delays and release cycles through automation and composability.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="w-full max-w-[300px] mx-auto h-[362px] relative rounded-lg border border-[#444955] p-6 overflow-hidden font-[Poppins]"
            style={{
              background:
                "linear-gradient(179.93deg, rgba(2, 2, 3, 0.3) 68.46%, rgba(97, 91, 254, 1) 201.19%), #111215",
            }}
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <h3
              className="text-[28px] font-[600] leading-[36px] tracking-[0.01em] mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Visibility and Control
            </h3>
            <p
              className="text-gray-400 text-[20px] leading-[32px] tracking-[0.01em]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Monitor, manage, and optimize IT from a single pane of glass.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
