import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import svg82 from "../svg/Frame 82.svg";
import svg83 from "../svg/Frame 83.svg";
import svg84 from "../svg/Frame 84.svg";
import svg85 from "../svg/Frame 85.svg";
import svg86 from "../svg/Frame 86.svg";
import logo from '../Images/logo.png'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="md:col-span-1 flex flex-col items-start">
            {/* Logo */}
            <img
              src={logo}
              alt="HPIT Logo"
              className="w-[227.47px] h-[86.7px] opacity-100 object-contain mb-4"
            />

            {/* Text */}
            <p className="text-gray-300 text-[16px] leading-relaxed">
              Top IT Consulting Delivering
              <br />
              Custom Innovation Solutions
            </p>
          </div>


          {/* About us */}
          <div>
            <h3 className="text-white font-medium mb-6 text-[24px]">About us</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/company"
                  className="text-gray-300 hover:text-white text-[16px] transition-colors"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/capabilities"
                  className="text-gray-300 hover:text-white text-[16px] transition-colors"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="text-gray-300 hover:text-white text-[16px] transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="text-gray-300 hover:text-white text-[16px] transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link
                  to="/careers"
                  className="text-gray-300 hover:text-white text-[16px] transition-colors"
                >
                  Careers
                </Link>
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-[14px] px-2 py-1 h-auto rounded"
                >
                  We're hiring
                </Button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-6 text-[24px]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-white text-[16px] transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-gray-300 hover:text-white text-[16px] transition-colors"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  to="/employees-alumni"
                  className="text-gray-300 hover:text-white text-[16px] transition-colors"
                >
                  Employees & Alumni
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-white text-[16px] transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/suppliers"
                  className="text-gray-300 hover:text-white text-[16px] transition-colors"
                >
                  Suppliers
                </Link>
              </li>
              <li>
                <Link
                  to="/eeo"
                  className="text-gray-300 hover:text-white text-[16px] transition-colors"
                >
                  EEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-medium mb-6 text-[24px]">Social Media</h3>
            <p className="text-gray-300 text-[16px] mb-4">
              Don't Miss to follow us on our social networks accounts
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-[32px] h-[32px] border border-gray-600 rounded flex items-center justify-center hover:border-white transition-colors"
                aria-label="Facebook"
              >
                <img src={svg82} alt="Facebook" className="w-[32px] h-[32px]" />
              </a>
              <a
                href="#"
                className="w-8 h-8  rounded flex items-center justify-center hover:border-white transition-colors"
                aria-label="Instagram"
              >
                <img src={svg83} alt="Instagram" className="w-[32px] h-[32px]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-white transition-colors"
                aria-label="LinkedIn"
              >
                <img src={svg84} alt="LinkedIn" className="w-[32px] h-[32px]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-white transition-colors"
                aria-label="YouTube"
              >
                <img src={svg85} alt="YouTube" className="w-[32px] h-[32px]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center hover:border-white transition-colors"
                aria-label="Twitter"
              >
                <img src={svg86} alt="Twitter" className="w-[32px] h-[32px]" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright - Full Width Border */}
      <div className="border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-white text-[20px] font-medium mb-6 text-center">
            2024 HighPoint Information Technology
          </h2>
        </div>
      </div>
    </footer>
  );
}
