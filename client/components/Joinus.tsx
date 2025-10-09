import { useState } from 'react';
import joinusImg from '../Images/joinus.jpg';
import Ellipse from "../svg/Ellipse 10.svg";
import arrow from "../svg/Arrow 1.svg";

export default function Joinus() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionMessage("Thank you for joining! We'll be in touch soon.");
      setEmail('');
    }, 1500);
  };

  return (
    <div
      className="relative text-white py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-10 bg-center bg-cover"
      style={{
        backgroundImage: `url(${joinusImg})`,
      }}
    >
      {/* Content Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold mb-2 leading-tight">
          Join{" "}
          <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">
            Us
          </span>
        </h2>
        <h3 className="text-lg sm:text-xl md:text-[20px] font-semibold mb-6">
          Build the Future With Purpose
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-[16px] mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          At HPIT, we’re a mission-driven team advancing innovation and national
          progress. We welcome passionate individuals — experienced or new —
          ready to grow, lead, and make a real impact through meaningful work.
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 mb-6 mt-10 sm:mt-16 justify-center lg:justify-start"
        >
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 bg-transparent border border-gray-500 text-white placeholder-gray-400 rounded-md w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-red-600 hover:bg-red-700 px-8 sm:px-10 py-3 rounded-md font-semibold transition-all duration-300"
          >
            {isSubmitting ? 'Joining...' : 'Join'}
          </button>
        </form>

        {/* Success Message */}
        {submissionMessage && (
          <p className="text-green-400 text-sm sm:text-base">
            {submissionMessage}
          </p>
        )}

        {/* Connect Button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-white font-medium group mt-10 sm:mt-12 justify-center lg:justify-start"
          style={{ fontSize: "16px" }}
        >
          Connect HPIT
          <div className="relative w-[46px] sm:w-[56px] h-[46px] sm:h-[56px] ml-2">
            <img src={Ellipse} alt="ellipse" className="w-full h-full" />
            <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
              <img src={arrow} alt="arrow" className="w-[10px] sm:w-[11.5px] h-[18px] sm:h-[20px]" />
            </span>
          </div>
        </a>
      </div>

      {/* Optional Right Spacer / Visual */}
      <div className="lg:w-1/2 hidden lg:block" />
    </div>
  );
}
