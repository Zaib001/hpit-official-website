import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import hamburger from "../svg/Vector (5).svg";
import search from "../svg/Vector (6).svg";
import web from "../svg/Group (3).svg";
import cross from "../svg/close-line-icon (1).svg";

const navigationItems = [
  { name: "Company", href: "/company" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Industries", href: "/industries" },
  { name: "Insight", href: "/insight" },
  { name: "Career", href: "/career" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* ======= Top Navigation Bar ======= */}
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <Link
            to="/"
            className="text-white text-2xl sm:text-xl font-extrabold tracking-tight whitespace-nowrap"
          >
            HPIT
          </Link>

          {/* Desktop Nav (centered) */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-[16px] font-medium relative group transition-all duration-200",
                  location.pathname === item.href
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full",
                    location.pathname === item.href && "w-full"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* ======= Right Icons ======= */}
          <div className="flex items-center space-x-5 sm:space-x-7">
            {/* Search */}
            <img
              src={search}
              alt="Search"
              className="h-5 w-5 cursor-pointer hover:opacity-80 transition-opacity hidden sm:block"
              onClick={() => console.log("Search clicked")}
            />

            {/* Language */}
            <img
              src={web}
              alt="Language"
              className="h-5 w-5 cursor-pointer hover:opacity-80 transition-opacity hidden sm:block"
              onClick={() => console.log("Language clicked")}
            />

            {/* Hamburger / Close */}
            <img
              src={isMobileMenuOpen ? cross : hamburger}
              alt="Toggle Menu"
              className="h-6 w-6 cursor-pointer hover:opacity-80 transition-opacity md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>

        {/* ======= Mobile Navigation ======= */}
        <div
          className={cn(
            "md:hidden transform transition-all duration-500 ease-in-out origin-top overflow-hidden",
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100 scale-y-100 mt-2"
              : "max-h-0 opacity-0 scale-y-0"
          )}
        >
          <div className="border-t border-white/10 py-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-2 text-base font-medium rounded-md transition-colors",
                  location.pathname === item.href
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Utility Icons */}
            <div className="flex items-center gap-4 px-4 mt-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-white/10"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-white/10"
              >
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
