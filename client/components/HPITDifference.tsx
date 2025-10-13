import { motion } from "framer-motion";
import img1 from "../Images/DI/Frame 478.png"; // replace with your actual image

export default function HPITDifference() {
  return (
    <div className="text-white px-4 sm:px-8 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2
            className="text-[36px] sm:text-[42px] md:text-[48px] font-bold leading-[56px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            The{" "}
            <span className="bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] bg-clip-text text-transparent">
              HPIT Difference
            </span>
          </h2>
          <p
            className="text-gray-400 mt-2 text-[18px] sm:text-[20px] leading-[30px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Strategic, Not Just Technical
          </p>
        </motion.div>

        {/* Image + Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Image with gradient border accent */}
          <motion.div
            className="relative w-full max-w-[642px] mx-auto"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <img
              src={img1}
              alt="Team Meeting"
              className="w-full h-auto object-cover rounded-[10px]"
            />

          </motion.div>

          {/* Right Features List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-10"
          >
            {/* Feature 1 */}
            <div className="pb-4 border-b border-[#22252B]">
              <h3
                className="font-semibold text-[18px] sm:text-[20px] mb-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Vendor-Neutral Design
              </h3>
              <p
                className="text-gray-400 text-[16px]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                We architect infrastructure that fits you — not the provider.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="pb-4 border-b border-[#22252B]">
              <h3
                className="font-semibold text-[18px] sm:text-[20px] mb-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Security-First Mindset
              </h3>
              <p
                className="text-gray-400 text-[16px]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Built-in protections for data, apps, and users.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="pb-4 border-b border-[#22252B]">
              <h3
                className="font-semibold text-[18px] sm:text-[20px] mb-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Agility at Scale
              </h3>
              <p
                className="text-gray-400 text-[16px]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Respond to business shifts without compromising control.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="pb-4 border-b border-[#22252B]">
              <h3
                className="font-semibold text-[18px] sm:text-[20px] mb-1"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Ongoing Optimization
              </h3>
              <p
                className="text-gray-400 text-[16px]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                We monitor, tune, and future-proof continuously.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
