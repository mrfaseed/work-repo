import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: "Tattoo Studio Campaign",
    description:
      "Bulk WhatsApp campaign system and landing pages for promotions and appointment booking.",
    status: "completed",
    progress: 100,
    tech: ["React", "Node.js", "WhatsApp API"],
    date: "2025-09-14",
    link:"#",
    logo:"./images/editcs2.png"
  },
  {
    id: 2,
    title: "Smart Shoe Pressure Monitor",
    description:
      "ESP32 + FSR pressure mapping pipeline with dataset collection and visualization dashboard.",
    status: "completed",
    progress: 100,
    tech: ["ESP32", "Python", "InfluxDB"],
    date: "2025-10-01",
     link:"#",
     logo: "./images/smartshoe.png"

  },
  {
    id: 3,
    title: "College Bus GPS Notifier",
    description:
      "GPS tracking on buses and automatic SMS notifications to parents when bus departs/arrives.",
    status: "pending",
    progress: 55,
    tech: ["Arduino", "SIM808", "Firebase"],
    date: "2025-10-18",
    logo:"./images/gps.png"
  },
  {
    id: 4,
    title: "Voice & Breath Health Monitor",
    description:
      "Prototype for remote monitoring using voice/breath signals. ML model pipeline and dashboard.",
    status: "pending",
    progress: 28,
    tech: ["Python", "ML", "Flask"],
    date: "2025-09-30",
    logo: "./images/voiceandbreath.png"
  },
  {
    id: 5,
    title: "Website Rebuild: Hybix",
    description: "Corporate site rebuild + blog + contact CRM integration.",
    status: "completed",
    progress: 100,
    tech: ["Next.js", "Tailwind", "Sanity"],
    date: "2025-08-12",
    logo:"./images/Darkmode.png"
  },
  {
    id: 6,
    title: "Website : personal chat app",
    description: "Engineered a personalized real-time chat platform for client interactions.",
    status: "completed",
    progress: 100,
    tech: ["Next.js", "Tailwind", "firebase"],
    date: "2025-06-12",
    logo:"./images/chatapp.png"
  },
];

function StatusPill({ status }) {
  const map = {
    completed: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    pending: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
        map[status] || "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200"
      }`}
    >
      {status === "completed" ? "Completed" : "Pending"}
    </span>
  );
}

function ProgressBar({ value }) {
  return (
    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
      <div
        className="h-2 rounded-full transition-all duration-500 bg-indigo-600"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = SAMPLE_PROJECTS.filter((p) => {
      if (filter !== "all" && p.status !== filter) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.join(" ").toLowerCase().includes(q)
      );
    });

    if (sortBy === "newest") {
      list.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "oldest") {
      list.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === "progress") {
      list.sort((a, b) => b.progress - a.progress);
    }
    return list;
  }, [query, filter, sortBy]);

  return (
    <div className="min-h-screen p-6 bg-white dark:bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-BBH Sans Hegarty text-black dark:text-white">
            Projects
          </h1>
          <p className="text-black mt-2 dark:text-slate-300">
            A curated list of projects we’ve completed and those still in progress.
          </p>
        </header>

        {/* Search and Filters */} 
        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex-1">
            <label className="relative block">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, tech, description..."
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-slate-200 bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:bg-transparent dark:border-slate-700 dark:text-white"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black dark:text-white text-sm">
                🔎
              </span>
            </label>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 text-sm ${
                  filter === "all"
                    ? "bg-white text-black dark:bg-transparent dark:text-white"
                    : "text-black dark:text-slate-300"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`px-3 py-1 text-sm ${
                  filter === "completed"
                    ? "bg-white text-black dark:bg-transparent dark:text-white"
                    : "text-black dark:text-slate-300"
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => setFilter("pending")}
                className={`px-3 py-1 text-sm ${
                  filter === "pending"
                    ? "bg-white text-black dark:bg-transparent dark:text-white"
                    : "text-black dark:text-slate-300"
                }`}
              >
                Pending
              </button>
            </div>

          <select
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
  className="rounded-lg border px-3 py-2 text-sm
             bg-white text-black
             dark:bg-slate-800 dark:border-slate-700 dark:text-white
             appearance-none"
>
  <option value="newest">Newest</option>
  <option value="oldest">Oldest</option>
  <option value="progress">Most progress</option>
</select>

          </div>
        </section>

        {/* Project Grid */}
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                whileHover={{
                  y: -6,
                  boxShadow: "0 10px 30px rgba(2,6,23,0.08)",
                }}
                className="relative bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 rounded-2xl p-5 overflow-hidden transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
               <div className="w-12 h-12 aspect-square rounded-full bg-gray-700  flex items-center justify-center overflow-hidden shrink-0">
  {p.logo ? (
    <img
      src={p.logo}
      alt={p.title}
      className="w-full h-full object-cover rounded-full aspect-square"
    />
  ) : (
    <span className="text-white font-bold text-lg">
      {p.title
        .split(" ")
        .map((s) => s[0])
        .slice(0, 2)
        .join("")}
    </span>
  )}
</div>


                    <div>
                      <h3 className="font-semibold text-lg text-black dark:text-white">
                        {p.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-300 mt-1 line-clamp-2">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <StatusPill status={p.status} />
                    <div className="text-xs text-slate-400 mt-1">{p.date}</div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Progress
                    </div>
                    <div className="text-xs font-medium text-black dark:text-white">
                      {p.progress}%
                    </div>
                  </div>
                  <ProgressBar value={p.progress} />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                 <button
  className="text-sm font-medium py-2 px-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
  onClick={() => {
    if (p.link) {
      window.open(p.link, "_blank");
    } else {
      alert("Cannot fetch project link. Please try again later or open in another browser.");
    }
  }}
>
  View
</button>

                  <div className="text-xs text-slate-400">ID: {p.id}</div>
                </div>
              </motion.article>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-full p-12 text-center text-slate-500 dark:text-slate-300">
                No projects found. Try a different search or clear filters.
              </div>
            )}
          </div>

          {/* Summary Section */}
          <section className="mt-10">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
              Summary
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 rounded-xl">
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Total Projects
                </div>
                <div className="text-2xl font-extrabold text-black dark:text-white">
                  {SAMPLE_PROJECTS.length}
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 rounded-xl">
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Completed
                </div>
                <div className="text-2xl font-extrabold text-black dark:text-white">
                  {SAMPLE_PROJECTS.filter((p) => p.status === "completed").length}
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 rounded-xl">
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Pending
                </div>
                <div className="text-2xl font-extrabold text-black dark:text-white">
                  {SAMPLE_PROJECTS.filter((p) => p.status === "pending").length}
                </div>
              </div>
            </div>
          </section>
        </main>

      
      </div>
    </div>
  );
}
