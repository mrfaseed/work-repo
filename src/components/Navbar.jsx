import './Navbar.css';
export default function Navbar() {
  return (
    <header className="relative w-full flex justify-center p-4 z-20">
      <nav className="fixed top-6 z-50">
        <div className="container flex items-center justify-between gap-x-6 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-8 py-2 shadow-lg">
          
          {/* Left Side: Brand */}
          <div className="text-white text-xl font-bold tracking-wider uppercase px-2">
            <a href="#">Hybix</a>
          </div>

          {/* Center: Links */}
          <ul className="hidden md:flex items-center gap-x-2">
            <li><a href="#" className="text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 px-4 py-2 rounded-full">About</a></li>
            <li><a href="#" className="text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 px-4 py-2 rounded-full">Members</a></li>
            <li><a href="#" className="text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 px-4 py-2 rounded-full">Collections</a></li>
            <li><a href="#" className="text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 px-4 py-2 rounded-full">Contact</a></li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-x-2">
            <a href="#" className="hidden md:block text-white text-sm font-medium bg-white/10 hover:bg-white/20 transition-colors duration-300 px-5 py-2 rounded-full">Login</a>
            {/* Mobile Menu */}
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
