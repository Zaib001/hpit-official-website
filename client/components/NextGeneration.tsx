// DeploymentProcess.tsx
"use client";

import { motion } from "framer-motion";
import img1 from "../Images/Frame 650.png";

export default function NextGeneration() {
  return (
    <section className="px-4 sm:px-8 py-10 sm:py-14">
      <div className="max-w-[1321px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="relative mx-auto w-full"
        >
          {/* soft glow behind the image */}
          <div className="pointer-events-none absolute -inset-4 blur-[28px] rounded-[24px] bg-[radial-gradient(60%_60%_at_60%_30%,rgba(128,118,244,0.25),transparent_70%)]" />

          {/* the image */}
          <motion.img
            src={img1}
            alt="Our deployment process"
            // center & responsive: full width, keep aspect ratio of your original 1321x609
            className="mx-auto w-full max-w-[1321px] h-auto rounded-xl shadow-[0_22px_48px_-18px_rgba(0,0,0,0.55)]"
            // gentle idle float so it feels alive
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            // small interaction polish
            whileHover={{
              scale: 1.01,
              rotate: -0.2,
             
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
