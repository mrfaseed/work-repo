import React from "react";
import BlurText from "./BlurText"; // adjust path if needed

export default function HomePage() {
  const elegantButtonClasses = `
    px-6 py-3 rounded-full font-medium 
    transition-all duration-300 ease-in-out transform 
    focus:outline-none focus:ring-4
    
    bg-white text-black border-2 border-black
    hover:bg-black hover:text-white hover:scale-105 
    focus:ring-gray-300
  `;

  return (
    <div className="flex flex-col items-center justify-center text-center mt-16">
      <BlurText
        text="Empowering innovation through intelligent IT solutions."
        className="mt-4 text-lg font-medium text-gray-700"
        animateBy="words"        // or "letters" for individual letter animation
        direction="top"
        // or "bottom"
        delay={200}              // delay between each word
      />

      <div className="flex flex-col sm:flex-row gap-6 mt-10">
        <button className={elegantButtonClasses}>
          Learn More
        </button>
        <button className={elegantButtonClasses}>
          Contact Us
        </button>
      </div>
    </div>
  );
}
