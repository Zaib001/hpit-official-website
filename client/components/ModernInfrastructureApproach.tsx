import { motion } from "framer-motion";

export default function ModernInfrastructureApproach() {
  const steps = [
    {
      number: "01",
      title: "Assess & Align",
      desc: "Evaluate current-state infrastructure, dependencies, and business priorities.",
    },
    {
      number: "02",
      title: "Design for Agility",
      desc: "Architect a hybrid model leveraging cloud-native and edge computing frameworks.",
    },
    {
      number: "03",
      title: "Modernize & Migrate",
      desc: "Replace legacy systems, re-platform workloads, and ensure zero-disruption migration.",
    },
    {
      number: "04",
      title: "Run & Optimize",
      desc: "Operate with managed services, observability, and continuous improvement baked in.",
    },
  ];

  return (
    <section className="bg-[#050505] text-white py-20 px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto border border-[#1E1E25] rounded-lg p-8 sm:p-10 lg:p-12 shadow-[0_0_25px_rgba(128,118,244,0.08)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2
            className="text-[32px] sm:text-[36px] lg:text-[44px] font-semibold leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            HPIT’s{" "}
            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
              Modern
            </span>{" "}<br/>
            Infrastructure{" "}
            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
              Approach
            </span>
          </h2>

          <p
            className="text-gray-400 mt-3 text-[16px] sm:text-[18px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            From Legacy to Leadership — Delivered in 4 Moves
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#1E1E25] text-center sm:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center sm:items-start justify-start py-8 px-6"
            >
              {/* Step Number */}
              <h3
                className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.1] mb-4 text-transparent"
                style={{
                  WebkitTextStroke: "1.5px white",
                  fontFamily: "Poppins, sans-serif",
                  color: "transparent",
                }}
              >
                {step.number}
              </h3>

              {/* Step Title */}
              <h4
                className="font-semibold text-[18px] sm:text-[20px] mb-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {step.title}
              </h4>

              {/* Step Description */}
              <p
                className="text-gray-400 text-[15px] sm:text-[16px] leading-[1.6] max-w-[280px]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
