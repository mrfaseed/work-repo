import React, { useEffect, useState } from "react";

const HamburgerStyles = `
  .hamburger-container {
    transform: translateX(-100%);
    opacity: 0;
  }

  .hamburger-enter {
    transition: transform 600ms cubic-bezier(0.77, 0, 0.175, 1), opacity 600ms ease;
    transform: translateX(0);
    opacity: 1;
  }

  .hamburger-exit {
    transition: transform 600ms cubic-bezier(0.77, 0, 0.175, 1), opacity 600ms ease;
    transform: translateX(-100%);
    opacity: 0;
  }

  @keyframes floaty {
    0%   { transform: translate(0, 0) rotate(0deg); }
    25%  { transform: translate(15px, -15px) rotate(90deg); }
    50%  { transform: translate(-15px, 15px) rotate(180deg); }
    75%  { transform: translate(15px, 15px) rotate(270deg); }
    100% { transform: translate(0, 0) rotate(360deg); }
  }

  .rotate-slow {
    animation: floaty 30s linear infinite;
  }
`;

export default function Hamburger({ setIsOpen }) {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 10);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsOpen(false), 600);
  };

  const containerClasses = `
    fixed inset-0 w-full h-screen bg-white/70 backdrop-blur-md z-[999999]
    flex flex-col md:flex-row items-center
    p-8 md:p-16
    hamburger-container
    ${isClosing ? "hamburger-exit" : isMounted ? "hamburger-enter" : ""}
  `;

  return (
    <>
      <style>{HamburgerStyles}</style>
      <div className={containerClasses}>
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-5xl md:text-6xl font-bold text-black hover:text-gray-600"
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Navigation */}
        <div className="w-full md:w-1/2 flex flex-col md:items-start gap-8 md:gap-10 text-center md:text-left">
          <a
            href="/blog"
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold text-black hover:text-gray-600 leading-none"
          >
            BLOG
          </a>
          <a
            href="/contact"
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold text-black hover:text-gray-600 leading-none"
          >
            CONTACT
          </a>
          <a
            href="/faq"
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold text-black hover:text-gray-600 leading-none"
          >
            FAQ
          </a>
          <a
            href="#"
            className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black hover:text-gray-600 leading-none whitespace-nowrap"
          >
            REQUEST A CALL
          </a>
        </div>
      </div>
    </>
  );
}
