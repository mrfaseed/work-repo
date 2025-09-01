import React, { useEffect, useState } from "react";

const HamburgerStyles = `
  /* Base container hidden state */
  .hamburger-container {
    transform: translateX(-100%);
    opacity: 0;
  }

  /* Enter animation */
  .hamburger-enter {
    transition: transform 600ms cubic-bezier(0.77, 0, 0.175, 1), opacity 600ms ease;
    transform: translateX(0);
    opacity: 1;
  }

  /* Exit animation */
  .hamburger-exit {
    transition: transform 600ms cubic-bezier(0.77, 0, 0.175, 1), opacity 600ms ease;
    transform: translateX(-100%);
    opacity: 0;
  }

  /* PNG rotation with float */
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
    // Start enter animation after mount
    setTimeout(() => setIsMounted(true), 10);
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsOpen(false), 600);
  };

  const containerClasses = `
    fixed inset-0 w-full h-screen bg-white/50 backdrop-blur-md z-50
    flex flex-col md:flex-row items-center justify-center
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
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-8 md:gap-10 text-center md:text-left">
          <a href="/blog" className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold text-black hover:text-gray-600 leading-none">BLOG</a>
          <a href="/contact" className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold text-black hover:text-gray-600 leading-none">CONTACT</a>
          <a href="/faq" className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold text-black hover:text-gray-600 leading-none">FAQ</a>
          <a href="#" className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black hover:text-gray-600 leading-none whitespace-nowrap">
            REQUEST A CALL
          </a>
        </div>

        {/* Rotating PNG */}
{/* <div className="w-full md:w-1/2 flex items-center justify-center mt-12 md:mt-0">
  <img
    src="/images/favicon.png"
    alt="Rotating decorative element"
    className="w-48 h-48 sm:w-60 sm:h-60 md:w-[28rem] md:h-[28rem] lg:w-[34rem] lg:h-[34rem] xl:w-[40rem] xl:h-[40rem] animate-spin-slow md:translate-x-16 lg:translate-x-24"
  />
</div> */}
      </div>
    </>
  );
}
