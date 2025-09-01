// Hamburger.jsx
export default function Hamburger({ setIsOpen }) {
  return (
    <div className="fixed top-0 right-0 w-64 h-full bg-black/90 text-white p-6 z-50 shadow-xl">
      {/* Close button */}
      <button
        onClick={() => setIsOpen(false)}
        className="mb-6 text-2xl text-gray-400 hover:text-white"
      >
        ✕
      </button>

      {/* Drawer links */}
      <ul className="flex flex-col gap-4">
        <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
        <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
        <li><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
        <li>
          <button className="bg-green-500 w-full py-2 rounded-lg hover:bg-green-600 transition-colors">
            Request a Call
          </button>
        </li>
      </ul>
    </div>
  );
}
