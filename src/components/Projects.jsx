import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

// ProjectsPage.jsx
// - Single-file React component using Tailwind CSS and Framer Motion
// - Default export: ProjectsPage
// Installation notes (add to your README):
// 1) Tailwind CSS must be configured in your app (https://tailwindcss.com/docs/guides/create-react-app or Next.js guide)
// 2) Install framer-motion: npm install framer-motion
// 3) Drop this file into your components folder and import where needed

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
  },
  {
    id: 5,
    title: "Website Rebuild: Hybix",
    description: "Corporate site rebuild + blog + contact CRM integration.",
    status: "completed",
    progress: 100,
    tech: ["Next.js", "Tailwind", "Sanity"],
    date: "2025-08-12",
  },
];

function StatusPill({ status }) {
  const map = {
    completed: "bg-emerald-100 text-emerald-800",
    pending: "bg-amber-100 text-amber-800",
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
        map[status] || "bg-slate-100 text-slate-800"
      }`}
    >
      {status === "completed" ? "Completed" : "Pending"}
    </span>
  );
}

function ProgressBar({ value }) {
  return (
    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
      <div
        className="h-2 rounded-full transition-all duration-500"
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
    <div className="min-h-screen p-6 bg-white dark:bg-transparent">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-BBH Sans Hegarty">
            Projects 
          </h1>
          <p className="text-black mt-2 dark:text-white">
            A curated list of projects we’ve completed and those still in progress.
          </p>
        </header>

        <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex-1">
            <label className="relative block">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, tech, description..."
                className="w-full pl-4 pr-10 py-2 rounded-lg border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:bg-transparent"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-sm">
                🔎
              </span>
            </label>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex overflow-hidden rounded-lg border">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 text-sm ${filter === "all" ? "bg-white  dark:bg-transparent" : "text-black dark:text-white"}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`px-3 py-1 text-sm ${filter === "completed" ? "bg-white dark:bg-transparent" : "text-black dark:text-white"}`}
              >
                Completed
              </button>
              <button
                onClick={() => setFilter("pending")}
                className={`px-3 py-1 text-sm ${filter === "pending" ? "bg-white dark:bg-transparent" : "text-black dark:text-white"}`}
              >
                Pending
              </button>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-lg border px-3 py-2 bg-white text-black"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="progress">Most progress</option>
            </select>
          </div>
        </section>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                layout
                whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(2,6,23,0.08)" }}
                className="relative bg-white rounded-2xl p-5 border overflow-hidden dark:bg-transparent"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-white font-bold text-lg dark:bg-transparent text-white border border-white">
                      {p.title
                        .split(" ")
                        .map((s) => s[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-black dark:text-white bg-transparent">{p.title}</h3>
                      <p className="text-sm text-black-400 dark:text-white-400">{p.description}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <StatusPill status={p.status} />
                    <div className="text-xs text-slate-400 mt-1 mr-2">{p.date}</div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs text-slate-500 dark:text-slate-100">Progress</div>
                    <div className="text-xs font-medium">{p.progress}%</div>
                  </div>
                  <ProgressBar value={p.progress} />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-900 text-white">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <button
                    className="text-sm font-medium py-2 px-3 rounded-lg bg-green-400 ml-20 text-white"
                    onClick={() => alert(`Open details for: ${p.title}`)}
                  >
                    View
                  </button>

                  <div className="text-xs text-slate-400">ID: {p.id}</div>
                </div>
              </motion.article>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-full p-12 text-center text-slate-700 dark:text-slate-300">
                No projects found. Try a different search or clear filters.
              </div>
            )}
          </div>

          <section className="mt-10">
            <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-xl border dark:bg-transparent">
                <div className="text-sm text-slate-800 dark:text-slate-200">Total Projects</div>
                <div className="text-2xl font-extrabold">{SAMPLE_PROJECTS.length}</div>
              </div>

              <div className="p-4 bg-white rounded-xl border dark:bg-transparent">
                <div className="text-sm text-slate-800 dark:text-slate-200">Completed</div>
                <div className="text-2xl font-extrabold">{SAMPLE_PROJECTS.filter(p=>p.status==='completed').length}</div>
              </div>

              <div className="p-4 bg-white rounded-xl border dark:bg-transparent">
                <div className="text-sm text-slate-800 dark:text-slate-200">Pending</div>
                <div className="text-2xl font-extrabold">{SAMPLE_PROJECTS.filter(p=>p.status==='pending').length}</div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
