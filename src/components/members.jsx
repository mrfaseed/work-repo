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

      {/* Members Grid */}
      <div className="relative z-10 px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {members.map((member) => (
              <div
                key={member.id}
                className="group relative"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                style={{
                  transform:
                    hoveredMember === member.id
                      ? `perspective(1000px) rotateX(${
                          (mousePosition.y - window.innerHeight / 2) * 0.01
                        }deg) rotateY(${
                          (mousePosition.x - window.innerWidth / 2) * 0.01
                        }deg) translateZ(20px)`
                      : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
                  transition: "transform 0.3s ease-out",
                }}
              >
                {/* 3D Card Container */}
                <div
                  className="relative backdrop-blur-xl rounded-3xl overflow-hidden border border-blue-400/20 shadow-2xl transform-gpu transition-all duration-500 group-hover:shadow-blue-500/25 group-hover:border-blue-400/40"
                  style={{
                    background: `linear-gradient(270deg, #00809d )`,
                    backgroundSize: "400% 400%",
                    animation: "cosmic-aurora 10s ease infinite",
                    boxShadow:
                      hoveredMember === member.id
                        ? "0 25px 50px -12px rgba(13, 145, 226, 1), 0 0 0 1px rgba(80, 16, 207, 1)"
                        : "0 10px 25px -3px rgba(5, 0, 0, 0.7), 0 4px 6px -2px rgba(219, 252, 4, 0.05)",
                  }}
                >
                  {/* Avatar Section */}
                  <div className="relative p-6 pb-4">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="relative w-full h-full rounded-full object-cover border-2 border-black transition-all duration-500 transform group-hover:scale-105"
                      />
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-bold text-black group-hover:text-white-200 dark:text-white transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-black-300 dark:text-white-300 font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-black-300/50 dark:text-white-300/50 text-sm">
                        {member.specialization}
                      </p>
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className="px-6 py-4 bg-slate-900/50 backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="group/stat hover:scale-105 transition-transform duration-300">
                        <div className="text-black-400 font-bold text-lg">
                          {member.experience}
                        </div>
                        <div className="text-black-500 text-xs dark:text-white-300 texxt-xs">Experience</div>
                      </div>
                      <div className="group/stat hover:scale-105 transition-transform duration-300">
                        <div className="text-black-400 dark:text-white-400 font-bold text-lg">
                          {member.projects.length}
                        </div>
                        <div className="text-black-300 text-xs dark:text-white-300 text-xs">Projects</div>
                      </div>
                    </div>
                  </div>

                  {/* Projects Section */}
                  <div className="p-6 pt-4">
                    <h4 className="text-black dark:text-white font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                      Current Projects
                    </h4>
                    <div className="space-y-2">
                      {member.projects.map((project, idx) => (
                        <div
                          key={idx}
                          className="bg-white-900 backdrop-blur-sm rounded-lg px-3 py-2 border border-black-400 transition-all duration-300 hover:translate-x-2 dark:bg-white-900"
                        >
                          <p className="text-black dark:text-white text-sm font-medium">
                            {project}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="px-6 pb-6">
                    <div className="flex justify-center gap-3">
                      <button className="bg-blue-600/30 hover:bg-blue-500/50 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12">
                        <Linkedin className="w-4 h-4 text-blue-300" />
                      </button>
                      <button className="bg-gray-600/30 hover:bg-gray-500/50 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12">
                        <Github className="w-4 h-4 text-gray-300" />
                      </button>
                      <button className="bg-cyan-600/30 hover:bg-cyan-500/50 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12">
                        <Mail className="w-4 h-4 text-cyan-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
