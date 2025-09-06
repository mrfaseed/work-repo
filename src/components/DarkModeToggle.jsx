import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

// Sizes for the toggle (small, medium, large)
const sizeConfig = {
  sm: {
    container: "h-6 w-12 p-1",
    knob: "h-4 w-4",
    icon: "h-3 w-3",
    translation: "translate-x-6",
  },
  md: {
    container: "h-8 w-16 p-1",
    knob: "h-6 w-6",
    icon: "h-4 w-4",
    translation: "translate-x-8",
  },
  lg: {
    container: "h-12 w-24 p-1.5",
    knob: "h-9 w-9",
    icon: "h-6 w-6",
    translation: "translate-x-12",
  },
};

const selectedSize = "md"; // Default size

export default function DarkModeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark";
  const styles = sizeConfig[selectedSize] || sizeConfig.md;

  return (
    <div className="fixed top-6 right-6">
      <button
        onClick={toggleTheme}
        role="switch"
        aria-checked={isDark}
        aria-label="Toggle dark mode"
        className={`
          relative inline-flex cursor-pointer rounded-full
          border-2 border-transparent
          transition-colors duration-300 ease-in-out
          focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500
          ${isDark ? "bg-slate-700/40" : "bg-slate-200/40"}
          ${styles.container}
        `}
      >
        <span
          className={`
            pointer-events-none relative inline-block transform rounded-full
            bg-white shadow-lg ring-0
            transition-transform duration-300 ease-in-out
            ${isDark ? styles.translation : "translate-x-0"}
            ${styles.knob}
          `}
        >
          {/* Sun (Light Mode) */}
          <span
            className={`
              absolute inset-0 flex h-full w-full items-center justify-center
              transition-opacity duration-300 ease-in-out
              ${isDark ? "opacity-0" : "opacity-100"}
            `}
            aria-hidden="true"
          >
            <SunIcon className={`${styles.icon} text-orange-500`} />
          </span>

          {/* Moon (Dark Mode) */}
          <span
            className={`
              absolute inset-0 flex h-full w-full items-center justify-center
              transition-opacity duration-300 ease-in-out
              ${isDark ? "opacity-100" : "opacity-0"}
            `}
            aria-hidden="true"
          >
            <MoonIcon className={`${styles.icon} text-slate-800`} />
          </span>
        </span>
      </button>
    </div>
  );
}
