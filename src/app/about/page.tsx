import React from "react";
import EmailObfuscated from "./EmailObfuscated";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SITE_CONFIG } from "@/lib/constants";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-2 sm:p-4 lg:p-8 bg-transparent relative">
      <h1
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 lg:mb-8 text-cyan-200 drop-shadow-lg tracking-tight text-center"
        style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}
      >
        About Me
      </h1>

      <Card className="w-full max-w-3xl flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-10">
        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-2">
          <span
            className="text-base sm:text-lg lg:text-2xl font-bold text-cyan-200 tracking-wide text-center leading-tight"
            style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}
          >
            {SITE_CONFIG.name}
          </span>
          <span className="text-xs sm:text-sm lg:text-lg text-cyan-100 text-center">
            {SITE_CONFIG.location}
          </span>
          <span className="text-xs sm:text-sm lg:text-lg text-cyan-100 flex items-center gap-2 justify-center flex-wrap">
            <span role="img" aria-label="email">
              📧
            </span>
            <EmailObfuscated />
          </span>
        </div>

        {/* Education */}
        <div className="w-full">
          <SectionTitle>Education</SectionTitle>
          <div className="flex flex-col gap-4">
            {SITE_CONFIG.education.map((edu) => (
              <div
                key={edu.school}
                className={`bg-cyan-900/30 rounded-lg p-3 sm:p-4 lg:p-6 shadow hover:bg-cyan-900/40 transition-colors`}
              >
                <div className="text-xs sm:text-sm lg:text-base font-semibold text-cyan-100 leading-tight mb-2 break-words hyphens-auto">
                  {edu.school}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-cyan-100 leading-tight mb-1 break-words hyphens-auto">
                  {edu.degree}
                </div>
                <div className="text-xs sm:text-xs lg:text-sm text-cyan-300 break-words hyphens-auto">
                  {edu.period}, {edu.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="w-full">
          <SectionTitle>Certifications & Skills</SectionTitle>
          <ul className="list-disc list-inside text-cyan-100 text-left space-y-2 ml-3 sm:ml-4">
            {SITE_CONFIG.skills.map((skill) => (
              <li key={skill} className="text-xs sm:text-sm lg:text-base leading-relaxed break-words hyphens-auto">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div className="w-full">
          <SectionTitle>University Projects</SectionTitle>
          <ul className="list-disc list-inside text-cyan-100 text-left space-y-3 ml-3 sm:ml-4">
            {SITE_CONFIG.projects.map((project) => (
              <li key={project.title} className="text-xs sm:text-sm lg:text-base leading-relaxed break-words hyphens-auto">
                <span className="font-semibold">{project.title}:</span>{" "}
                <span className="inline">{project.description}</span>
              </li>
            ))}
          </ul>
          <div className="text-xs sm:text-sm text-cyan-300 mt-3 italic">
            *Code for these projects is not present on GitHub due to submission restrictions.
          </div>
        </div>
      </Card>

      {/* Download CV Button */}
      <a
        href="/dimitrios_mallidis_cv.pdf"
        download
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 bg-cyan-700 hover:bg-cyan-500 text-white font-bold py-4 sm:py-5 lg:py-6 px-8 sm:px-10 lg:px-12 rounded-full shadow-lg transition-all duration-200 text-base sm:text-lg lg:text-xl hover:scale-105 active:scale-95"
        style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}
      >
        Download CV
      </a>
    </div>
  );
}