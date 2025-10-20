import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 rounded-xl md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          <span className="text-primary mr-3">01.</span>
          About me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image */}
          <div
            className="md:w-1/3 animate-slide-in-left"
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src="/rayane.jpg"
              alt="Rayane Sefiani"
              className="rounded-full shadow-2xl mx-auto border-4 border-brand-accent w-64 h-64 md:w-80 md:h-80 object-cover"
            />
          </div>

          {/* Text */}
          <div
            className="md:w-2/3 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-lg mb-6 leading-relaxed">
              Hello! I'm Rayane Sefiani, a passionate and results-driven web
              developer from Morocco. With a solid foundation in front-end
              technologies like HTML, CSS, and JavaScript and a growing skillset
              in ReactJs, I specialize in building modern, responsive, and
              user-focused web applications.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              My journey into web development began at the age of 16, driven by
              a deep curiosity for how technology works and a desire to express
              creativity through code. Over the years, I've built several
              projects from To-Do List apps to interactive games—each sharpening
              my ability to turn ideas into functional, polished websites.
            </p>

            <p className="text-lg leading-relaxed">
              Outside of coding, I enjoy learning about cars, exploring hardware
              and software, and constantly diving into new tech that inspires
              me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
