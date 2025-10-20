import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16"
      // style={{ backgroundColor: "rgb(18 18 18 / var(--tw-bg-opacity, 1))" }}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16  text-black dark:text-white">
          <span className="text-primary mr-3">04.</span>
          Get in Touch
        </h2>

        <div className="flex flex-col items-center gap-6">
          {/* Phone Button */}
          <a
            href="tel:+212778398140"
            className="relative flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 w-full max-w-xs"
          >
            <span className="absolute left-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </span>
            <span className="w-full text-center">+212 778 398 140</span>
          </a>

          {/* Email Button */}
          <a
            href="mailto:ryanawex@gmail.com"
            className="relative flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 w-full max-w-xs"
          >
            <span className="absolute left-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 0l8 6 8-6"
                />
              </svg>
            </span>
            <span className="w-full text-center">ryanawex@gmail.com</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/212778398140"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 w-full max-w-xs"
          >
            <span className="absolute left-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.13 1.6 5.93L0 24l6.24-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.7.97.99-3.6-.24-.38A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1.01-1 2.46 0 1.45 1.03 2.85 1.18 3.05.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
              </svg>
            </span>
            <span className="w-full text-center">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
