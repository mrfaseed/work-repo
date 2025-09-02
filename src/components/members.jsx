
import React from "react";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Award, Code, Briefcase } from "lucide-react";
import './members.css';
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
    name: "Jegathesaan",
    role: "Lead AI & Hardware Engineer",
    specialization: "AI Research, LLMs, Embedded Systems",
    avatar: "./images/jega_1.jpg",
    projects: [
      "Custom LLM Development",
      "Edge AI Hardware Acceleration",
      "Iot Projects"
    ],
    achievements: "IEEE Publications, Built AI-hardware prototypes",
    experience: "2+ years"
  },
  {
    id: 2,
    name: "Mohammed Faseed",
    role: "web & cyber defense",
    specialization: "AI/ML, Cybersecurity, Network Engineering",
    avatar: "./images/faseed_1.jpg",
    projects: [
      "5G Real-time Surveillance",
      "LaserDrop (Li-Fi File Transfer)",
      "Sign Language Recognition "
    ],
    achievements: "Winner of multiple hackathons, Active in OS dev (Raw Lemon)",
    experience: "2+ years"
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
      "High-impact Visual Presentations"
    ],
    achievements: "Delivered 30+ real-world projects, Expert in design & editing",
    experience: "2+ years"
  }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 relative overflow-hidden">
      {/* Animated Background Grid */}
  <div className="absolute inset-0">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
        linear-gradient(rgba(25, 38, 59, 0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(3, 8, 16, 0.3) 1px, transparent 1px)
      `,
      backgroundSize: "50px 50px",
      animation: "grid-move 20s linear infinite",
      backgroundColor: "transparent", // ensures no solid background
    }}
  ></div>
</div>


           {/* Hero Section */}
      <div className="relative z-10 px-8 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-8 tracking-tight transform-gpu">
            <span className="inline-block hover:scale-110 transition-transform duration-500">
              M
            </span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 delay-75">
              E
            </span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 delay-150">
              M
            </span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 delay-225">
              B
            </span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 delay-300">
              E
            </span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 delay-375">
              R
            </span>
            <span className="inline-block hover:scale-110 transition-transform duration-500 delay-450">
              S
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Meet the brilliant minds behind HYBIX's groundbreaking innovations.
            Our diverse team of researchers and engineers from around the globe.
          </p>
        </div>
      </div>

      {/* Members Grid */}
      <div className="relative z-10 px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {members.map((member, index) => (
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
                  className="relative bg-gradient-to-br from-slate-800/80 to-blue-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-blue-400/20 shadow-2xl transform-gpu transition-all duration-500 group-hover:shadow-blue-500/25 group-hover:border-blue-400/40"
                  style={{
                    boxShadow:
                      hoveredMember === member.id
                        ? "0 25px 50px -12px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1)"
                        : "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Avatar Section */}
                  <div className="relative p-6 pb-4">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="relative w-full h-full rounded-full object-cover border-2 border-white/20 group-hover:border-cyan-400/50 transition-all duration-500 transform group-hover:scale-105"
                      />
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-blue-300 font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-blue-200/80 text-sm">
                        {member.specialization}
                      </p>
                    </div>
                  </div>

                  {/* Stats Section */}
                  <div className="px-6 py-4 bg-slate-900/50 backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="group/stat hover:transform hover:scale-105 transition-transform duration-300">
                        <div className="text-cyan-400 font-bold text-lg">
                          {member.experience}
                        </div>
                        <div className="text-blue-200/70 text-xs">
                          Experience
                        </div>
                      </div>
                      <div className="group/stat hover:transform hover:scale-105 transition-transform duration-300">
                        <div className="text-cyan-400 font-bold text-lg">
                          {member.projects.length}
                        </div>
                        <div className="text-blue-200/70 text-xs">Projects</div>
                      </div>
                    </div>
                  </div>

                  {/* Projects Section */}
                  <div className="p-6 pt-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                      Current Projects
                    </h4>
                    <div className="space-y-2">
                      {member.projects.map((project, idx) => (
                        <div
                          key={idx}
                          className="bg-blue-900/30 backdrop-blur-sm rounded-lg px-3 py-2 border border-blue-400/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:translateX-2"
                        >
                          <p className="text-blue-200 text-sm font-medium">
                            {project}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="px-6 pb-4">
                    <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-lg p-3 border border-yellow-400/30">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <p className="text-yellow-200 text-xs font-medium">
                          {member.achievements}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="px-6 pb-6">
                    <div className="flex justify-center gap-3">
                      <button className="bg-blue-600/30 hover:bg-blue-500/50 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 transform">
                        <Linkedin className="w-4 h-4 text-blue-300" />
                      </button>
                      <button className="bg-gray-600/30 hover:bg-gray-500/50 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 transform">
                        <Github className="w-4 h-4 text-gray-300" />
                      </button>
                      <button className="bg-cyan-600/30 hover:bg-cyan-500/50 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 transform">
                        <Mail className="w-4 h-4 text-cyan-300" />
                      </button>
                    </div>
                  </div>

                  {/* Location Tag */}
                

                  {/* 3D Shine Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{
                      background: `linear-gradient(${
                        (Math.atan2(
                          mousePosition.y - window.innerHeight / 2,
                          mousePosition.x - window.innerWidth / 2
                        ) *
                          180) /
                          Math.PI +
                        90
                      }deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)`,
                    }}
                  ></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: "2s",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Stats Section */}
      <div className="relative z-10 px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-800/60 to-blue-900/60 backdrop-blur-xl rounded-3xl p-12 border border-blue-400/20 shadow-2xl">
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              Team <span className="text-cyan-400">Statistics</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  10
                </div>
                <div className="text-blue-200">Expert Members</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  6
                </div>
                <div className="text-blue-200">Active Projects</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  8
                </div>
                <div className="text-blue-200">Countries</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  84
                </div>
                <div className="text-blue-200">Years Combined Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default MembersPage;
