import { useState, useEffect } from "react";
import "./Navbar.css";
import Hamburger from "./Hamburger";

export default function Navbar({ theme }) {
  const [logoState, setLogoState] = useState("idle"); // idle | hovering | unhovering
  const [isOpen, setIsOpen] = useState(false);

  // Sync with <html> class when mounting
  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("dark") && theme !== "dark") {
      // optional sync
    }
  }, [theme]);

  // Dynamic logo classes
  let logoClassName = "h-12 w-auto";
  if (logoState === "hovering") {
    logoClassName += " spin-forward";
  } else if (logoState === "unhovering") {
    logoClassName += " spin-reverse";
  }

  // Reset logo after reverse spin
  const handleAnimationEnd = () => {
    if (logoState === "unhovering") {
      setLogoState("idle");
    }
  };

  return (
    <header className="relative w-full flex justify-center p-4 z-20">
      <nav className="fixed top-6 z-50 left-1/2 -translate-x-1/2">
        <div
          className="container flex items-center justify-between gap-x-6 
          bg-white/20 dark:bg-black/30 backdrop-blur-xl 
          border border-black/10 dark:border-white/20 
          rounded-full px-8 py-1 shadow-lg transition-colors duration-300"
        >
          {/* Logo with hover spin */}
          <div className="flex-shrink-0">
            <a
              href="#"
              onMouseEnter={() => setLogoState("hovering")}
              onMouseLeave={() => setLogoState("unhovering")}
            >
              <img
                src="/images/favicon.png"
                alt="Hybix Logo"
                className={logoClassName}
                onAnimationEnd={handleAnimationEnd}
              />
            </a>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-x-2">
            <li>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-200 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-300 px-4 py-2 rounded-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-200 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-300 px-4 py-2 rounded-full"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-200 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-300 px-4 py-2 rounded-full"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-200 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-300 px-4 py-2 rounded-full"
              >
                Projects
              </a>
            </li>
          </ul>

          {/* Hamburger Button */}
          <div className="flex items-center gap-x-2">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-700 dark:text-gray-200 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hamburger Drawer */}
      {isOpen && <Hamburger setIsOpen={setIsOpen} />}
    </header>
  );
}
