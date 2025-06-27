import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-transparent relative">
      <h1
        className="text-6xl sm:text-7xl font-extrabold mb-8 text-cyan-300 drop-shadow-lg tracking-tight text-center"
        style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}
      >
        About Me
      </h1>
      <div className="w-full max-w-3xl bg-white/10 rounded-3xl shadow-2xl border-2 border-cyan-700 p-12 flex flex-col items-center space-y-10 backdrop-blur-md">
        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-2">
          <span className="text-3xl font-bold text-cyan-200 tracking-wide" style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}>
            Δημήτριος Μαλλίδης
          </span>
          <span className="text-lg text-cyan-100">Athens, Kifissia, Greece</span>
          <span className="text-lg text-cyan-100">📧 dimitriosmallidis@gmail.com</span>
        </div>
        {/* Education */}
        <div className="w-full">
          <span className="block font-bold text-cyan-200 text-xl mb-3" style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}>
            Education
          </span>
          <div className="flex flex-col gap-4">
            <div className="bg-cyan-900/30 rounded-lg p-6 shadow">
              <span className="font-semibold text-lg">National Kapodistrian University of Athens (UoA)</span>
              <div className="text-cyan-100 text-base">Undergraduate Student, Informatics and Telecommunications</div>
              <div className="text-cyan-300 text-sm">Oct. 2023 – Present, Zografou, Greece</div>
            </div>
            <div className="bg-cyan-900/20 rounded-lg p-6 shadow">
              <span className="font-semibold text-lg">Anavryta Model Lyceum</span>
              <div className="text-cyan-100 text-base">Graduated with excellent grades (“Arista” 18.1–20/20)</div>
              <div className="text-cyan-300 text-sm">Sep. 2020 – Jun. 2023, Marousi, Greece</div>
            </div>
          </div>
        </div>
        {/* Certifications & Skills */}
        <div className="w-full">
          <span className="block font-bold text-cyan-200 text-xl mb-3" style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}>
            Certifications & Skills
          </span>
          <ul className="list-disc list-inside text-cyan-100 text-left space-y-2 ml-4 text-lg">
            <li>Michigan Proficiency English Language Degree</li>
            <li>Junior Software Engineer: C, C++, Python, SQL</li>
          </ul>
        </div>
        {/* University Projects */}
        <div className="w-full">
          <span className="block font-bold text-cyan-200 text-xl mb-3" style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}>
            University Projects
          </span>
          <ul className="list-disc list-inside text-cyan-100 text-left space-y-2 ml-4 text-lg">
            <li>
              <span className="font-semibold">Abstract Data Types:</span> Remake of the retro game Asteroids (C using raylib)
            </li>
            <li>
              <span className="font-semibold">Object-Oriented Programming:</span> Mock e-shop accessed by multiple users on Linux terminal (C++)
            </li>
            <li>
              <span className="font-semibold">Databases:</span> Web interface to query databases (Python and SQL)
            </li>
            <li>
              <span className="font-semibold">Intro to Programming:</span> Longest common substring finder, image rotator (both in C)
            </li>
          </ul>
          <div className="text-sm text-cyan-300 mt-2">
            *Code for these projects is not present on GitHub due to submission restrictions.
          </div>
        </div>
      </div>
      {/* Download CV Button */}
      <a
        href="/dimitrios_mallidis_cv.pdf"
        download
        className="fixed bottom-8 right-8 z-50 bg-cyan-700 hover:bg-cyan-500 text-white font-bold py-5 px-9 rounded-full shadow-lg transition-colors duration-200 text-xl"
        style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}
      >
        Download CV
      </a>
    </div>
  );
}