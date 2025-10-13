import { motion } from "framer-motion";

export default function PerformanceStats() {
  const stats = [
    { value: "30%", label: "faster deployment of new digital services" },
    { value: "40%", label: "reduction in operational downtime" },
    { value: "50%", label: "cost savings through automation and cloud optimization" },
    { value: "99.99%", label: "uptime across critical workloads" },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#1E1E25] text-center"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center justify-center py-8 px-4"
            >
              {/* Outlined number only (matches reference exactly) */}
              <h3
                className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold leading-[1.1] mb-3 text-transparent"
                style={{
                  WebkitTextStroke: "1.5px white",
                  fontFamily: "Poppins, sans-serif",
                  color: "transparent",
                }}
              >
                {item.value}
              </h3>

              <p
                className="text-gray-400 text-[15px] sm:text-[16px] leading-[1.6] max-w-[240px]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
