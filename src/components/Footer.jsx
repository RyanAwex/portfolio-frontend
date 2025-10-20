import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/60">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Rayane Sefiani. All rights reserved.
        </div>
        <div className="mt-3 md:mt-0 flex gap-4">
          <a href="#" className="text-sm hover:underline">
            Privacy
          </a>
          <a href="#" className="text-sm hover:underline">
            Terms
          </a>
          <a href="#" className="text-sm hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
