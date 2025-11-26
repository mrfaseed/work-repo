import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Animation from "./components/Animation";
import "./App.css";
import AuroraGradientLogo from "./components/AuroraGradientLogo";
import Service from "./components/Service";
import TeamPage from "./components/TeamPage";
import "./components/TeamPage.css";
import Projects from "./components/Projects";
import "./components/projects.css";
import Footer from "./components/Footer";
import Home from "./components/HomePage";
import Specialization from "./components/SecretServices"; // import your SecretServices component

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Handle query param navigation
  const handleSpecializationClick = (e) => {
    e.preventDefault();
    navigate("/services?access=hybix-specialization");
  };

  return (
    <div className="relative bg-white text-black transition-colors duration-300 min-h-screen">
      {/* App content always above background */}
      <div className="relative z-10">
        {/* Top Navbar */}
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        {/* Main Section - HYBIX Centered with Quote + Buttons below */}
        {location.pathname === "/" && (
          <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <div className="flex flex-col items-center justify-center text-center">
              <AuroraGradientLogo width="900px" />
              <Home />
            </div>
          </section>
        )}

        {/* Animation Section */}
        <Animation />

        <div className="mb-12">
          {/* Services Section */}
          {location.pathname === "/" && <Service />}
        </div>
        <div className="mb-12">
          {/* Team Section */}
          {location.pathname === "/" && <TeamPage />}
        </div>
        <div className="mb-12">
          {/* Projects Section */}
          {location.pathname === "/" && <Projects />}
        </div>

        {/* Secret Services Section */}
        {location.pathname === "/services" && (
          <Specialization />
        )}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}
