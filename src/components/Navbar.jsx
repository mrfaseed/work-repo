import { useState } from 'react'; // 1. Import useState
import './Navbar.css';
import MembersPage from './members';

export default function Navbar() {
  // 2. Set up state to track the animation
  const [logoState, setLogoState] = useState('idle'); // can be 'idle', 'hovering', 'unhovering'

  // 3. Define the class based on the current state
  let logoClassName = 'h-12 w-auto';
  if (logoState === 'hovering') {
    logoClassName += ' spin-forward';
  } else if (logoState === 'unhovering') {
    logoClassName += ' spin-reverse';
  }

  // 4. Function to reset state after the reverse animation finishes
  const handleAnimationEnd = () => {
    if (logoState === 'unhovering') {
      setLogoState('idle');
    }
  };

  return (
    <header className="relative w-full flex justify-center p-4 z-20">
      <nav className="fixed top-6 z-50 left-1/2 -translate-x-1/2">
        <div className="container flex items-center justify-between gap-x-6 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-8 py-1 shadow-lg">
          
          <div className="flex-shrink-0">
            {/* 5. Add mouse event handlers to the link */}
            <a 
              href="#"
              onMouseEnter={() => setLogoState('hovering')}
              onMouseLeave={() => setLogoState('unhovering')}
            >
              <img 
                src="/images/favicon.png"
                alt="Hybix Logo" 
                className={logoClassName} // Use the dynamic className
                onAnimationEnd={handleAnimationEnd} // Add the animation end handler
              />
            </a>
          </div>

          <ul className="hidden md:flex items-center gap-x-2">
            <li><a href="#" className="text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 px-4 py-2 rounded-full">About</a></li>
            <li><a href="#" className="text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 px-4 py-2 rounded-full">Members</a></li>
            <li><a href="#" className="text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 px-4 py-2 rounded-full">Projects</a></li>
            <li><a href="#" className="text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 px-4 py-2 rounded-full">Contact</a></li>
          </ul>

          <div className="flex items-center gap-x-2">
            <a href="#" className="hidden md:block text-white text-sm font-medium bg-white/10 hover:bg-white/20 transition-colors duration-300 px-5 py-2 rounded-full hov">Login</a>
            <div className="md:hidden">
              <button className="text-white p-2 rounded-full hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}