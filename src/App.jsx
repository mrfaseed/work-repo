import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Animation from "./components/Animation";
import "./App.css";
import AuroraGradientLogo from "./components/AuroraGradientLogo";
import Service from "./components/Service"
import TeamPage from "./components/TeamPage";
import "./components/TeamPage.css"
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import LightRays from "./components/LightRays";
import Teamuh from "./components/TeamPage";
export default function App() {
  const [showToggle, setShowToggle] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize theme safely
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowToggle(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className="relative bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 min-h-screen">
      {/* Background Light Rays (only for dark mode) */}
      {theme === "dark" && (
        <div className="light-rays-container fixed inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
          />
        </div>
      )}

      {/* App content always above background */}
      <div className="relative z-10">
        {/* Top Navbar */}
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        {/* Main Section */}
<section className="relative h-screen overflow-hidden flex flex-col items-center justify-center">
  <AuroraGradientLogo width="800px" />

  {/* Button absolutely positioned near bottom */}
  <div className="absolute bottom-24">
    <FancyButton
      onClick={() =>
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" })
      }
    >
      Contact Us
    </FancyButton>
  </div>
</section>


        {/* Animation Section */}
        <Animation />

        {/* Dark Mode Toggle Button → Hide when menu is open */}
        {showToggle && !isMenuOpen && (
          <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
        )}
        <Service theme={theme} />
        <TeamPage theme={theme} />

        {/* Footer */}
        <Footer theme={theme} />
      </div>
    </div>
  );
}
