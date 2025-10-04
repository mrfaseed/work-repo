// components/FancyButton.jsx
import React from "react";

export default function FancyButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        relative isolate inline-flex items-center justify-center
        px-8 py-3 text-lg font-bold text-neutral-800 rounded-xl 
        overflow-hidden transition-transform duration-300 ease-in-out 
        active:scale-95 dark:text-neutral-200

        before:content-[''] before:absolute before:inset-0.5 
        before:rounded-[10px] before:z-[-2] before:bg-neutral-50 
        before:dark:bg-gray-800
        
        after:content-[''] after:absolute after:-inset-1 
        after:rounded-xl after:z-[-3] after:blur-md 
        after:bg-[conic-gradient(from_90deg_at_50%_50%,#27003b,#4a007b,#8b1da8,#c729d1,#f050f0,#f050a8,#f05050,#f0a850,#f0f050,#a8f050,#05ffa1,#01cdfe,#27003b)] 
        after:animate-[spin_4s_linear_infinite]
      "
    >
      {children}
    </button>
  );
}