import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ theme, setTheme }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white/60 dark:bg-black/60 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          RS.
        </a>

        <nav className="hidden md:flex items-center gap-6 text-black dark:text-white">
          <a href="#about" className="hover:text-primary">
            About
          </a>
          <a href="#projects" className="hover:text-primary">
            Projects
          </a>
          <a href="#skills" className="hover:text-primary">
            Skills
          </a>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </nav>

        {/* Mobile menu - simplified */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            onClick={() => {
              // simple scroll to projects on mobile
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-3 py-1 rounded bg-primary text-white text-sm"
          >
            Projects
          </button>
        </div>
      </div>
    </header>
  );
}
