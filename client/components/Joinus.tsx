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

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmissionMessage("Thank you for joining! We'll be in touch soon.");
            setEmail('');
        }, 1500);
    };
    return (
        <div
            className="text-white py-10 px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-10 bg-no-repeat bg-center"
            style={{
                backgroundImage: `url(${joinusImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover', // or use '100% 100%' if you want full stretch
            }}


        >
            {/* Left Content */}
            <div className="lg:w-1/2 sm:px-6 lg:px-10">
                <h2 className="text-[44px] font-bold mb-2">
                    Join <span className="bg-[radial-gradient(254%_254%_at_50%_50%,_#A49CFD_0%,_#FFFFFF_9.99%)] bg-clip-text text-transparent">Us</span>
                </h2>
                <h3 className="text-[20px] font-semibold mb-6">Build the Future With Purpose</h3>
                <p className="text-gray-300-[16px] mb-6 max-w-xl leading-relaxed">
                    At HPIT, we’re a mission-driven team advancing innovation <br></br> and national progress.
                    We welcome passionate individuals experienced or new ready to grow, lead, and make a
                    real impact through meaningful work.
                </p>

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6 mt-20">
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
                        className="bg-red-600 hover:bg-red-700 px-12 py-3 rounded-md font-semibold"
                    >
                        {isSubmitting ? 'Joining...' : 'Join'}
                    </button>
                </form>


                {submissionMessage && (
                    <p className="text-green-400 text-sm">{submissionMessage}</p>
                )}

                <a
                    href="#"
                    className="inline-flex items-center gap-2 text-white font-medium group"
                    style={{ marginTop: "60px", fontSize: "16px" }}
                >
                    Connect HPIT

                    {/* Ellipse + Arrow */}
                    <div className="relative w-[56px] h-[56px]" style={{ marginLeft: "-15px" }}>
                        <img src={Ellipse} alt="ellipse" className="w-full h-full" />
                        {/* Arrow centered inside ellipse */}
                        <span className="absolute inset-0 flex items-center justify-center text-white text-xl" style={{ marginLeft: "-15px" }}>
                            <img src={arrow} alt="arrow" className="w-[11.5px] h-[20px]" />
                        </span>
                    </div>
                </a>

            </div>

            {/* Optional Right Spacer or Additional Content */}
            <div className="lg:w-1/2 hidden lg:block"></div>
        </div>
    )
}