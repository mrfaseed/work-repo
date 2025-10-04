import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Briefcase } from "lucide-react";
import "./members.css";

const MembersPage = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const members = [
    {
      id: 1,
      name: "Jegatheesan",
      role: "Lead AI & Hardware Engineer",
      specialization: "AI Research, LLMs, Embedded Systems",
      avatar: "./images/jega_1.jpg",
      projects: [
        "Custom LLM Development",
        "Edge AI Hardware Acceleration",
        "Iot Projects",
      ],
      achievements: "IEEE Publications, Built AI-hardware prototypes",
      experience: "2+ years",
    },
    {
      id: 2,
      name: "Mohammed Faseed",
      role: "Web & Cyber Defense",
      specialization: "AI/ML, Cybersecurity, Network Engineering",
      avatar: "./images/faseed_1.jpg",
      projects: [
        "5G Real-time Surveillance",
        "LaserDrop (Li-Fi File Transfer)",
        "Sign Language Recognition ",
      ],
      achievements: "Winner of multiple hackathons, Active in OS dev (Raw Lemon)",
      experience: "2+ years",
    },
    {
      id: 3,
      name: "Mohammed Shaban",
      role: "Front-End & Creative Developer",
      specialization: "React.js, UI/UX, Design Systems, Video Editing",
      avatar: "./images/shaban_1.jpg",
      projects: [
        "Interactive 3D Web Apps",
        "Design-driven Dashboards",
        "High-impact Visual Presentations",
      ],
      achievements: "Delivered 30+ real-world projects, Expert in design & editing",
      experience: "2+ years",
    },
    {
      id: 4,
      name: "Mohammed Arfan Fariq",
      role: "Designer, Color Specialist,",
      specialization: "Color theory, Pattern Recognizer, Data Science",
      avatar: "./images/arfan_2.jpg",
      projects: [
        "Creative Designs",
        "Logo Designing for clients",
        "High-impact Visual Presentations",
      ],
      achievements: "Delivered 30+ real-world projects, Expert in design & editing",
      experience: "1+ years",
    }
  ];

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 px-8 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="container">
            <h1 className="text-8xl md:text-9xl font-bold text-black dark:text-white mb-8 tracking-tight">
              Team
            </h1>
            <p className="text-xl md:text-2xl font-light text-black-500 dark:text-white-500 max-w-3xl mx-auto leading-relaxed">
              Meet the brilliant minds behind HYBIX's groundbreaking innovations.
              Our diverse team of researchers and engineers from around the globe.
            </p>
          </div>
        </div>
      </div>
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 rounded-full animate-float pointer-events-none"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes cosmic-aurora {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default MembersPage;
