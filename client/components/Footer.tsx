import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import svg82 from "../svg/Frame 82.svg";
import svg83 from "../svg/Frame 83.svg";
import svg84 from "../svg/Frame 84.svg";
import svg85 from "../svg/Frame 85.svg";
import svg86 from "../svg/Frame 86.svg";
import logo from "../Images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <img
              src={logo}
              alt="HPIT Logo"
              className="w-[160px] sm:w-[200px] lg:w-[230px] h-auto object-contain transition-transform duration-300 hover:scale-105"
            />
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs">
              Top IT Consulting Delivering
              <br /> Custom Innovation Solutions
            </p>
          </div>

          {/* About Us */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-5 text-lg sm:text-xl">
              About Us
            </h3>
            <ul className="space-y-3">
              {[
                { path: "/company", label: "Company" },
                { path: "/capabilities", label: "Capabilities" },
                { path: "/industries", label: "Industries" },
                { path: "/insights", label: "Insights" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="flex flex-wrap justify-center sm:justify-start items-center gap-2 pt-1">
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white text-sm sm:text-base transition-all duration-300 hover:translate-x-1"
                >
                  Careers
                </Link>
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-2 py-1 h-auto rounded transition-all duration-300"
                >
                  We’re hiring
                </Button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-5 text-lg sm:text-xl">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { path: "/privacy", label: "Privacy" },
                { path: "/cookies", label: "Cookies" },
                { path: "/employees-alumni", label: "Employees & Alumni" },
                { path: "/terms", label: "Terms of Use" },
                { path: "/suppliers", label: "Suppliers" },
                { path: "/eeo", label: "EEO" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-5 text-lg sm:text-xl">
              Social Media
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-5 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Follow us on our social media accounts for updates & insights.
            </p>
            <div className="flex justify-center sm:justify-start flex-wrap gap-3">
              {[svg82, svg83, svg84, svg85, svg86].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 sm:w-9 sm:h-9 border border-gray-600 rounded flex items-center justify-center hover:border-white hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={icon}
                    alt="social-icon"
                    className="w-[26px] h-[26px] sm:w-[28px] sm:h-[28px]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-6 sm:mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm md:text-base font-medium">
            © 2024 HighPoint Information Technology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
