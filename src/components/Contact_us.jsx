/*
AppWithProfessionalContactButton.jsx
A single-file React demo that adds a professional "Contact Us" button under your logo,
with a polished gradient border, accessible modal contact form, keyboard support (Esc),
and a mailto-based submission (so you can test without backend).

Requires: TailwindCSS in your project (index.css should include
  @tailwind base; @tailwind components; @tailwind utilities;
)

How to use:
1. Copy this file into your project (e.g. src/AppWithProfessionalContactButton.jsx)
2. Import and render it from index.js (or replace your App.jsx while testing):
     import AppWithProfessionalContactButton from './AppWithProfessionalContactButton';
     root.render(<AppWithProfessionalContactButton />)
3. Customize the mail address in ContactModal (mailto target) or replace with an API call.

This file intentionally includes small placeholder components for Navbar and AuroraGradientLogo
so you can paste and run immediately. Replace those placeholders with your real components.
*/

import React, { useState, useRef, useEffect } from 'react';

/* ---------- Placeholder components (replace with your real ones) ---------- */
function Navbar() {
  return (
    <div className="w-full py-4 flex justify-center">
      <div className="rounded-full bg-white shadow-md px-6 py-2">Navbar.jsx</div>
    </div>
  );
}

function AuroraGradientLogo() {
  return (
    <div className="my-12 text-center">
      <h2 className="text-3xl font-bold">this is AuroraGradientLogo.jsx</h2>
      <div className="w-full flex justify-center my-8">
        <div className="select-none text-[120px] font-black bg-gradient-to-r from-[#ff5f6d] via-[#ffb26b] to-[#f7ff00] bg-clip-text text-transparent">
          HyBIX
        </div>
      </div>
    </div>
  );
}

/* ----------------- Contact modal (accessible) ----------------- */
function ContactModal({ open, onClose }) {
  const firstRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    // Focus the first input when the modal opens
    firstRef.current?.focus();

    // Close modal on ESC
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name') || '';
    const email = form.get('email') || '';
    const message = form.get('message') || '';

    // Simple mailto action so you can test without a backend.
    // Replace this with an API call (fetch) to your email service if needed.
    const mailto = `mailto:hello@hybix.com?subject=${encodeURIComponent(
      'Website contact from ' + name
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    window.location.href = mailto;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="relative z-10 w-full max-w-lg mx-4 bg-white rounded-2xl p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between">
          <h3 id="contact-title" className="text-xl font-bold">
            Contact us
          </h3>
          <button
            onClick={onClose}
            aria-label="Close contact form"
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        <p className="text-sm text-gray-600 mt-2">
          Fill this quick form and your default mail client will open — or email us
          directly at <a href="mailto:hello@hybix.com" className="underline">hello@hybix.com</a>.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input
            ref={firstRef}
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />

          <textarea
            name="message"
            rows="4"
            required
            placeholder="Your message"
            className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:brightness-105 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ----------------- Professional Contact button ----------------- */
function ContactButton({ onOpen }) {
  return (
    <div className="rounded-3xl p-[2px] bg-gradient-to-r from-[#ff5f6d] via-[#ffb26b] to-[#f7ff00] inline-block shadow-xl">
      <button
        onClick={onOpen}
        className="bg-white px-8 py-4 rounded-3xl font-semibold flex items-center gap-3 shadow-md hover:scale-[1.01] transition-transform focus:outline-none focus:ring-4 focus:ring-indigo-200"
        aria-haspopup="dialog"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Contact Us</span>
      </button>
    </div>
  );
}

/* ----------------- Demo App (default export) ----------------- */
export default function AppWithProfessionalContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-black px-6">
      <Navbar />

      <AuroraGradientLogo />

      <div className="w-full max-w-4xl flex items-center justify-center gap-10 my-10">
        <ContactButton onOpen={() => setOpen(true)} />
        <div className="text-lg font-bold">Need to add this Button</div>
      </div>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
