import React from "react";
import "./Teampage.css"

const teamData = {
  coreMaintainers: [
    {
      name: "Mohamed Faseed",
      role: "Lead Developer",
      img: "../images/faseed_1.jpg",
      github: "aliceDev",
      twitter: "alice_codes",
    },
    {
      name: "Jegatheesan",
      role: "Project Manager",
      img: "../images/jega_1.jpg",
      github: "davidk",
      twitter: "david_pm",
    },
    {
      name: "Mohammed Shaban",
      role: "UI/UX Designer",
      img: "../images/shaban_1.jpg",
      github: "sophialee",
      twitter: "sophia_designs",
    },
  ]
};

const TeamCard = ({ name, img, github, twitter }) => (
  <div className="card">
    <div className="w-80 h-32 bg-white rounded-xl overflow-hidden flex flex-row dark:bg-transparent">
      <img
        src={img}
        alt={name}
        className="w-32 h-32 object-cover"
      />
      <div className="container">
        <div className="p-3">
          <h3 className="font-bold text-lg ">{name}</h3>
          <div className="flex flex-col gap-2 mt-7 text-sm text-blue-600">
            <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function TeamPage() {
  return (
      <div className="p-10 bg-white min-h-screen bg-transparent dark:bg-transparent">
        <div className="words">
          <h1 className="text-[6rem] font-serif font-extrabold text-center mt-20 mb-20 dark:text-white">Team</h1>

          <p className="text-[1.4em] mt-20 dark:text-white"> Meet the brilliant minds behind HYBIX's groundbreaking innovations.
                  Our diverse team of researchers and engineers from around the globe.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 mb-12 ml-20 mt-40">
            {teamData.coreMaintainers.map((member, i) => (
              <TeamCard key={i} {...member} />
            ))}
          </div>
        </div>
      </div>
  );
}
