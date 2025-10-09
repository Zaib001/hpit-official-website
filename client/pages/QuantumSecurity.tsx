"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import threat from "../Images/Pexels Photo by Google DeepMind-1.png";
import threatSvg from "../svg/Quantum.svg";
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";
import img1 from "../Images/quantum-pixabay.png";
import img2 from "../Images/quantum-center-img.png";
import img from "../Images/quantum-left-img.jpg";
import reverseArrow from "../svg/reverseArrow.svg";
import group134 from "../Images/aws.png";
import group136 from "../svg/dynatrace.svg";
import group137 from "../Images/sap.png";
import group138 from "../Images/dynatrace.png";
import vector3 from "../Images/Cloudera.png";
import vector4 from "../Images/ot.png";
import narrow from "@/svg/Arrow 1.svg";
import icon1 from "../Images/Vector.png";
import icon2 from "../Images/Vector-1.png";
import icon3 from "../Images/Vector-2.png";
import icon4 from "../Images/Group.png";
import decorImg from "../Images/cap.png";
import MindfulChef from "../Images/ai-img-1.png";
import Thursday from "../Images/ai-img-2.png";
import Gener8 from "../Images/ai-img-3.png";
import ring from "@/Images/ring.png";

import r1 from "@/Images/r1.png";
import r2 from "@/Images/r2.png";

import res1 from "@/Images/QS/res1.png";
import res2 from "@/Images/QS/res2.png";
import res3 from "@/Images/QS/res3.png";

import i1 from "../Images/QS/i1.png";
import i2 from "../Images/QS/i2.png";
import i3 from "../Images/QS/i3.png";
import InsightSection from "@/components/InsightSection";

/* ----------------------------- Animation Helpers ---------------------------- */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const pop = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay } },
});

/* ----------------------------- Reusable Pieces ----------------------------- */
const FadeInSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeUp(delay)}>
      {children}
    </motion.div>
  );
};

const GradientHeading: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h2
    className={`font-extrabold text-balance bg-[radial-gradient(425.56%_425.56%_at_50%_50%,_#8076F4_0%,_#FFFFFF_9.96%)] text-transparent bg-clip-text ${className}`}
  >
    {children}
  </h2>
);

const CTAButton: React.FC<{ label: string; className?: string }> = ({ label, className = "" }) => (
  <a
    href="#"
    className={`group inline-flex items-center gap-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A49CFD] rounded-full ${className}`}
  >
    <span className="transition-colors group-hover:text-[#A49CFD]">{label}</span>
    <span className="relative w-14 h-14 -ml-3 inline-flex items-center justify-center">
      <img src={Ellipse} alt="" className="w-full h-full" />
      <img
        src={arrow}
        alt=""
        className="absolute w-[11.5px] h-5 transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </span>
  </a>
);

const InfoCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <motion.div
    className="rounded-lg border border-dashed border-[#444955] bg-[#0E0F12] p-6 md:p-8 relative overflow-hidden
               transition-all duration-300 hover:border-[#A49CFD]/60 hover:shadow-[0_0_0_1px_rgba(164,156,253,0.25)]
               hover:-translate-y-1"
    variants={pop()}
    whileHover={{ y: -4 }}
  >
    <div className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-[#A49CFD]/10 blur-2xl" />
    <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const Capability: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex gap-4">
    <div className="w-11 h-11 shrink-0 rounded-md bg-[#111] border border-[#333] grid place-items-center">
      <img src={icon} alt="" className="w-5 h-6 object-contain" />
    </div>
    <div>
      <h3 className="text-base md:text-lg font-semibold text-[#DADBDD]">{title}</h3>
      <p className="text-sm text-gray-400 mt-1 leading-relaxed">{text}</p>
    </div>
  </div>
);

const ToolBadge: React.FC<{ logo: string; label: string; imgClass?: string }> = ({ logo, label, imgClass = "" }) => (
  <div
    className="bg-[#111215] rounded-lg px-6 py-6 flex flex-col items-center justify-center border border-transparent
               transition-all duration-300 hover:border-[#A49CFD]/40 hover:shadow-[0_0_24px_rgba(164,156,253,0.08)]
               hover:-translate-y-1 group"
  >
    <img src={logo} alt={label} className={`object-contain transition duration-300 grayscale group-hover:grayscale-0 ${imgClass}`} />
    <p className="text-white text-sm md:text-base mt-4 whitespace-nowrap opacity-80 group-hover:opacity-100">{label}</p>
  </div>
);

const InsightCard: React.FC<{ img: string; title: string; desc: string }> = ({ img, title, desc }) => (
  <motion.article
    className="bg-[#1B1E24] rounded-md overflow-hidden border border-[#2A2E37]
               transition-all duration-300 hover:shadow-[0_0_30px_rgba(164,156,253,0.18)] hover:-translate-y-1"
    variants={pop()}
    whileHover={{ y: -6 }}
  >
    <img src={img} alt={title} className="w-full h-64 object-cover" />
    <div className="p-6 flex flex-col gap-4">
      <h3 className="text-[#ECEDEE] text-lg font-semibold">{title}</h3>
      <p className="text-[#A0A0A0] leading-relaxed text-sm">{desc}</p>
      <div className="flex justify-end">
        <button
          className="inline-flex items-center gap-2 text-[#ECEDEE] text-sm font-medium
                     hover:text-[#E50000] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50000]/60 rounded-full"
          aria-label={`Learn more about ${title}`}
        >
          <span>Learn more</span>
          <span className="relative w-14 h-14 inline-flex items-center justify-center">
            <img src={Ellipse} alt="" className="w-full h-full" />
            <img src={narrow} alt="" className="absolute w-[11.5px] h-5" />
          </span>
        </button>
      </div>
    </div>
  </motion.article>
);

const cards = [
  {
    img: i1,
    title: "CRYPTOGRAPHY",
    desc: "Explore encryption methods designed to withstand quantum attacks.",
  },
  {
    img: i2,
    title: "FUTURE-READY SECURITY",
    desc: "Learn how quantum-safe strategies protect long-term digital assets.",
  },
  {
    img: i3,
    title: "RISK MITIGATION",
    desc: "See how early adoption reduces vulnerabilities in the quantum era.",
  },
   {
    img: i2,
    title: "FUTURE-READY SECURITY",
    desc: "Learn how quantum-safe strategies protect long-term digital assets.",
  },
];

/* --------------------------------- Page ---------------------------------- */
export default function Quantumsecurity() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* ------------------------------- HERO -------------------------------- */}
      <FadeInSection>
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${threat})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 pt-60 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="mt-24 max-w-7xl mx-auto">
              <div className="max-w-2xl">
                <motion.h2
                  className="text-white text-4xl md:text-[56px] lg:text-6xl font-normal mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <img
                    src={threatSvg}
                    alt="Company"
                    className="transition-transform duration-500 will-change-transform hover:scale-[1.01]"
                  />
                </motion.h2>
                <br />
                <motion.h2
                  className="text-white text-3xl md:text-[56px] lg:text-5xl font-bold mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  Security
                </motion.h2>
                <motion.p
                  className="text-white text-base md:text-[20px] leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  APreparing Today for the Threats of
                  <br /> Tomorrow
                </motion.p>


              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ---------------------- WHAT IS QUANTUM SECURITY --------------------- */}
      <FadeInSection delay={0.15}>
        <section className="px-4 sm:px-8 lg:px-20 py-16 md:py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <h2 className="mb-2">
                <GradientHeading className="text-3xl md:text-5xl leading-tight">
                  What Is Quantum <br className="hidden sm:block" /> Security?
                </GradientHeading>
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Quantum Security protects your data and infrastructure against future threats posed by quantum computing.
                As quantum machines advance, they could break current encryption — putting sensitive assets, identities,
                and communications at risk. HPIT helps you prepare now with quantum-safe strategies and cryptography.
              </p>
              <CTAButton label="Get Started" className="mt-2" />
            </div>

            <motion.div
              className="rounded-xl overflow-hidden justify-self-center"
              variants={pop(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={img1}
                alt="Team discussion"
                className="w-full max-w-[520px] h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-[1.01]"
              />
            </motion.div>
          </div>
        </section>
      </FadeInSection>

      {/* --------------------------- WHY IT MATTERS -------------------------- */}
      <FadeInSection delay={0.2}>
        <section className="px-4 sm:px-8 lg:px-20 py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center">
              <span className="text-3xl md:text-5xl font-extrabold bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                Why It Matters Now
              </span>
            </h2>
            <p className="text-gray-400 text-center mt-3 text-base md:text-xl">
              Quantum threats aren’t decades away — they’re emerging.
            </p>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
              <div className="flex flex-col gap-6">
                <InfoCard
                  title="Encryption Could Be Broken Instantly"
                  description="Quantum computers may crack RSA and ECC algorithms in minutes — jeopardizing the security of the internet."
                />
                <InfoCard
                  title="Critical Industries Are High-Value Targets"
                  description="Finance, healthcare, and defense sectors face greater risk due to long-term data sensitivity."
                />
              </div>

              <motion.div
                className="justify-self-center"
                variants={pop(0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img
                  src={img2}
                  alt="Team collaboration"
                  className="rounded-xl w-full max-w-[380px] md:max-w-[420px] object-cover shadow-xl
                             transition-transform duration-500 hover:scale-[1.02]"
                />
              </motion.div>

              <div className="flex flex-col gap-6">
                <InfoCard
                  title="Migration Takes Time"
                  description="Transitioning to post-quantum cryptography requires years of planning, testing, and integration across systems."
                />
                <InfoCard
                  title="Proactive Beats Reactive"
                  description="Preparing today builds resilience; waiting invites disruption. Quantum-readiness isn’t optional — it’s urgent."
                />
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* --------------------------- CAPABILITIES BOX ------------------------ */}
      <section className="px-4 sm:px-8 lg:px-20 pb-16 md:pb-20">
        <div className="w-full max-w-[1300px] mx-auto rounded-xl border border-[#22252B] bg-black text-white shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 p-6 sm:p-10 lg:p-16 gap-10 relative">
            {/* Left */}
            <div className="relative">
              <h2 className="font-semibold text-3xl md:text-[40px] leading-tight bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] text-transparent bg-clip-text mb-4">
                Our Capabilities
              </h2>
              <p className="text-lg text-gray-300 leading-7">Quantum-Safe Security Architecture</p>

              {/* Decorative */}
              <img
                src={decorImg}
                alt=""
                className="hidden md:block absolute -bottom-12 -left-10 w-48 md:w-64 opacity-100 pointer-events-none"
              />
            </div>

            {/* Right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              <Capability
                icon={icon1}
                title="Post-Quantum Cryptography"
                text="Implement NIST-selected quantum-resistant algorithms to replace vulnerable RSA and ECC protocols."
              />
              <Capability
                icon={icon2}
                title="Hybrid Encryption Models"
                text="Dual-cryptography systems that support classical and quantum-safe encryption during transition."
              />
              <Capability
                icon={icon3}
                title="Cryptographic Inventory"
                text="Identify encryption assets, assess quantum exposure, and prioritize early remediation."
              />
              <Capability
                icon={icon4}
                title="Data Protection"
                text="Secure sensitive records with future-proof encryption for decades of confidentiality."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- WHY CHOOSE HPIT ------------------------ */}
      <FadeInSection delay={0.25}>
        <section className="px-4 sm:px-8 lg:px-20 pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <h2 className="text-[32px] md:text-[40px] font-bold">
                <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
                  Why Choose HPIT
                </span>
              </h2>
              <p className="text-gray-400 mt-2 text-base md:text-lg">Strategic Guidance. Secure Execution. Scalable Outcomes.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div variants={fadeUp(0.05)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <img
                  src={img}
                  alt="Team discussing security"
                  className="rounded-xl object-cover w-full max-w-[680px] h-auto shadow-lg transition-transform duration-500 hover:scale-[1.01]"
                />
              </motion.div>

              <div className="space-y-6">
                {[
                  { title: "Deep Cryptographic Expertise", desc: "Trusted by enterprises for secure, large-scale crypto transformation." },
                  { title: "Standards-Aligned Solutions", desc: "Built to meet NIST, ISO, GDPR, and industry regulations." },
                  { title: "Flexible Deployment Models", desc: "Supports cloud, hybrid, and on-prem environments seamlessly." },
                  { title: "Future-Ready Support", desc: "Continuous updates to stay aligned with evolving quantum standards." },
                ].map((f, i) => (
                  <motion.div
                    key={f.title}
                    className="pb-4 border-b border-[#22252B] group"
                    variants={fadeUp(0.1 + i * 0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h3 className="font-semibold text-lg md:text-xl group-hover:text-[#A49CFD] transition-colors">{f.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ------------------------------ TOOLS GRID --------------------------- */}
      <motion.section
        className="w-full py-16 md:py-20 px-4 sm:px-8 lg:px-20"
        variants={fadeUp(0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <GradientHeading className="text-3xl md:text-5xl leading-tight">
              Built With the Right Tools for the Job
            </GradientHeading>
            <p className="text-gray-400 text-base md:text-lg mt-6">
              We use cutting-edge platforms and frameworks to ensure top performance.
            </p>
            <div className="mt-8">
              <CTAButton label="Get Started" />
            </div>
          </div>

          <motion.div
            className="hidden md:flex justify-center items-center"
            variants={pop(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={reverseArrow} alt="" className="w-28 h-24 opacity-80" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ToolBadge logo={group136} label="Databricks" imgClass="w-[120px] h-auto" />
            <ToolBadge logo={vector3} label="Cloudera" imgClass="w-[120px] h-auto" />
            <ToolBadge logo={group137} label="SAP" imgClass="w-[64px] h-auto" />
            <ToolBadge logo={vector4} label="OpenText" imgClass="w-[54px] h-auto" />
            <ToolBadge logo={group138} label="Dynatrace" imgClass="w-[120px] h-auto" />
            <ToolBadge logo={group134} label="AWS" imgClass="w-[110px] h-auto" />
          </div>
        </div>
      </motion.section>

      {/* --------------------------- PROTECTION BLOCK ------------------------ */}
      {/* Protection Section (responsive, desktop unchanged) */}
      <FadeInSection delay={0.5}>
        <div className="bg-black text-white px-6 sm:px-16 py-20 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start lg:items-center relative">
            <div>
              <h2 className="text-3xl sm:text-[48px] font-extrabold leading-tight text-transparent bg-clip-text bg-[radial-gradient(425.56%_425.56%_at_50%_50%,#8076F4_0%,#FFFFFF_9.96%)]">
                Protection That Endures Quantum Change
              </h2>
              <p className="text-gray-300 text-[18px] mt-6 max-w-lg leading-relaxed">
                Transitioning to quantum safe security isn’t just about staying
                ahead it’s about protecting what matters most. HPIT’s approach
                ensures your organization is equipped for the next era of
                cybersecurity without disrupting current operations.
              </p>
            </div>

            {/* Cards grid: 1-col on mobile, 2-col from sm+, same fixed sizes on lg+ */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              style={{ marginTop: "60px" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full lg:w-[296px] min-h-[160px] lg:h-[183px] bg-black rounded-[8px] border border-dotted border-[#444955] p-6 flex items-center justify-center hover:border-[#6C40D6] transition">
                <p className="text-[16px] lg:text-[18px] text-gray-300 text-center lg:text-left">
                  Protect mission-critical data from quantum-era breaches
                </p>
              </div>

              <div className="w-full lg:w-[296px] min-h-[160px] lg:h-[183px] bg-[#6C40D6] rounded-[8px] p-6 flex items-center justify-center hover:brightness-110 transition">
                <p className="text-[16px] lg:text-[18px] text-white text-center lg:text-left">
                  Achieve Regulatory Compliance and Audit Readiness
                </p>
              </div>

              <div className="w-full lg:w-[296px] min-h-[160px] lg:h-[183px] bg-[#2DA67C] rounded-[8px] p-6 flex items-center justify-center hover:brightness-110 transition">
                <p className="text-[16px] lg:text-[18px] text-white text-center lg:text-left">
                  Avoid emergency transitions and operational delays
                </p>
              </div>

              <div className="w-full lg:w-[296px] min-h-[160px] lg:h-[183px] bg-black rounded-[8px] border border-dotted border-[#444955] p-6 flex items-center justify-center hover:border-[#2DA67C] transition">
                <p className="text-[16px] lg:text-[18px] text-gray-300 text-center lg:text-left">
                  Enhance stakeholder trust through proactive resilience
                </p>
              </div>
            </motion.div>

            {/* Arrow: keep exact position on desktop, hide on small screens */}
            <motion.img
              src={reverseArrow}
              alt="Middle Arrow"
              className="hidden lg:block absolute w-[79.6px] h-[69px] top-[150px] left-[450px]"
              style={{ marginTop: "90px", marginLeft: "80px" }}
              initial={{ opacity: 0, rotate: -45 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </FadeInSection>


      {/* ---------------------------- RELATED INSIGHTS ----------------------- */}
      <InsightSection
        title="Related Insights"
        cards={cards}
        autoSlideInterval={6000}
      />

      {/* -------------------------------- RESOURCES -------------------------- */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left */}
            <motion.div variants={fadeUp(0.05)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
              <h2 className="text-3xl md:text-[44px] font-extrabold mb-6">Resources</h2>
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-[#FF5A5A] blur-[10px] opacity-80" />
              <img src={res1} alt="Resources illustration" className="w-full max-w-[380px] h-auto object-contain" />
            </motion.div>

            {/* Cards */}
            <motion.article
              variants={pop(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
            >
              <img src={res2} alt="" className="h-16 w-16 object-contain mb-4" />
              <h3 className="text-lg md:text-xl font-semibold">Experiment with PQC</h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                Business-oriented labs to try identity, data, and workload protections using PQC.
              </p>
              <CTAButton label="Learn more" className="mt-6" />
            </motion.article>

            <motion.article
              variants={pop(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-xl bg-[linear-gradient(180deg,#343A43_0%,#22272F_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
            >
              <img src={res3} alt="" className="h-16 w-16 object-contain mb-4" />
              <h3 className="text-lg md:text-xl font-semibold">Deploy Hybrid Models</h3>
              <p className="mt-3 text-white/75 text-sm leading-6">
                Mix classical and PQC schemes with policy-driven auth based on user, device, and workload signals.
              </p>
              <CTAButton label="Learn more" className="mt-6" />
            </motion.article>
          </div>
        </div>
      </section>
    </div>
  );
}
