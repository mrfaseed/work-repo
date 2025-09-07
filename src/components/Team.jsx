import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardImage = "/images/card-1.png";

const members = [
  { name: "Mohammed Shaban", role: "Frontend Dev", github: "@imshabanoffl" },
  { name: "Faseed", role: "Backend Dev", github: "@faseed" },
  { name: "Jegan", role: "Fullstack", github: "@jegan" },
  { name: "Arfan", role: "Designer", github: "@arfan" },
];

const fanAngles = [-22, -7, 7, 22];
const fanXs = [-120, -40, 40, 120];

export default function TeamRiffleCard() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="relative w-full max-w-5xl px-6 py-12" ref={ref}>
        <h2 className="text-3xl text-white font-semibold mb-8 text-center">
          Hybix — Team
        </h2>

        <div className="relative h-[28rem] flex items-center justify-center">
          {members.map((m, i) => (
            <Card
              key={i}
              member={m}
              index={i}
              angle={fanAngles[i]}
              x={fanXs[i]}
              zIndex={100 - i}
              inView={inView}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-300">
          Scroll to reveal the cards. Hover a card to rotate and see details.
        </p>
      </div>
    </div>
  );
}

function Card({ member, index, angle, x, zIndex, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200, y: 200, rotate: 0, scale: 0.8 }}
      animate={
        inView
          ? { opacity: 1, x, y: 0, rotate: angle, scale: 1 }
          : { opacity: 0, x: -200, y: 200, rotate: 0, scale: 0.8 }
      }
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: index * 0.2,
      }}
      whileHover={{ rotate: angle * 1.3, x: x * 1.1, scale: 1.05 }}
      style={{ zIndex }}
      className="absolute cursor-pointer"
    >
      <div
        className="relative w-56 h-80 rounded-2xl shadow-2xl overflow-hidden"
        style={{ transformOrigin: "50% 85%" }}
      >
        {/* base card background */}
        <img
          src={cardImage}
          alt="card"
          className="w-full h-full object-contain rounded-2xl"
          style={{ userSelect: "none" }}
        />

        {/* glossy shine sweep only during initial scroll */}
        {inView && (
          <motion.div
            initial={{ x: "-150%" }}
            animate={{ x: "150%" }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: index * 0.3 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div
              className="absolute top-0 left-0 w-1/3 h-full"
              style={{
                background:
                  "linear-gradient(75deg, rgba(255,255,255,0) 0%, rgba(255,255,200,0.35) 50%, rgba(255,255,255,0) 100%)",
                transform: "skewX(-20deg)",
              }}
            />
          </motion.div>
        )}

        {/* overlay content */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              mixBlendMode: "overlay",
              opacity: 0.06,
              background:
                "linear-gradient(180deg, rgba(255,205,70,0.1), rgba(255,230,150,0.02))",
            }}
          />

          {/* placeholder for photo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-48 rounded-lg border-2 border-yellow-400 flex items-center justify-center bg-white/5">
          </div>

          {/* top-left initials */}
          <div className="absolute left-4 top-4">
            <div className="text-yellow-500 text-lg font-serif">
              {member.name.split(" ")[0][0]}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
