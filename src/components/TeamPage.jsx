// src/components/TeamPage.jsx
import React from "react";


const teamData = {
  coreMaintainers: [
    {
      name: "Mohamed Faseed",
      role: "Lead Developer",
      img: "../images/faseed_1.jpg",
      github: "aliceDev",
      instagram: "alice_codes",
    },
    {
      name: "Jegatheesan",
      role: "Project Manager",
      img:"../images/jega_1.jpg",
      github: "davidk",
      instagram: "david_pm",
    },
    {
      name: "Mohammed Shaban",
      role: "UI/UX Designer",
      img: "../images/shaban_1.jpg",
      github: "sophialee",
      instagram: "sophia_designs",
    },
  ],
};

const TeamCard = ({ name, role, img, github, instagram }) => (
  <div className="group relative bg-transparent backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 border border-gray-700/30 hover:border-cyan-400/40">
    <div className="flex flex-col items-center text-center space-y-6">
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-600 group-hover:border-cyan-400 transition-colors duration-300">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 transform"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-cyan-500/6 group-hover:bg-cyan-500/10 transition-colors duration-300 pointer-events-none" />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-100 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-cyan-400 font-medium">{role}</p>
      </div>

      <div className="flex space-x-4 pt-2">
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
        >
          <span className="sr-only">GitHub</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

     <a
  href={`https://instagram.com/${instagram}`}
  target="_blank"
  rel="noreferrer"
  className="text-gray-400 hover:text-pink-500 transition-colors duration-300 transform hover:scale-110"
>
  <span className="sr-only">Instagram</span>
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
  </svg>
</a>

      </div>
    </div>
  </div>
);

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center space-y-8 mb-20">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              Our Team
            </h1>
            <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full"></div>
          </div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The brilliant minds behind HYBIX's groundbreaking innovations.
            Our diverse team of researchers and engineers from around the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamData.coreMaintainers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
