import EmailObfuscated from "../about/EmailObfuscated";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-cyan-200 drop-shadow-2xl tracking-tight mb-4"
          style={{
            fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif",
            letterSpacing: "0.01em",
          }}
        >
          Get In Touch
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-cyan-100 opacity-80">
          Let's connect and discuss opportunities
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="w-full max-w-2xl bg-white/10 rounded-3xl shadow-2xl border-2 border-cyan-700 p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-md">
        
        {/* Profile Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">DM</span>
          </div>
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-200 mb-2 whitespace-nowrap"
            style={{
              fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif",
              fontStretch: "condensed",
              letterSpacing: "0.01em",
            }}
          >
            Dimitrios Mallidis
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-cyan-100 opacity-90">Software Engineering Student</p>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-cyan-900/20 rounded-xl">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-cyan-700 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-lg">📍</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-cyan-300 uppercase tracking-wide mb-1">Location</p>
              <p className="text-xs sm:text-sm md:text-base text-cyan-100 font-medium leading-tight">Athens, Greece</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-cyan-900/20 rounded-xl">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-cyan-700 rounded-full flex items-center justify-center flex-shrink-0">
              <span role="img" aria-label="email" className="text-sm sm:text-base md:text-lg">📧</span>
            </div>
            <div className="min-w-0 flex-1 overflow-hidden">
              <p className="text-xs sm:text-sm text-cyan-300 uppercase tracking-wide mb-1">Email</p>
              <div className="text-xs sm:text-sm md:text-base text-cyan-100 font-medium leading-tight truncate">
                <EmailObfuscated />
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-cyan-200 text-center mb-4 sm:mb-6">
            Connect with me
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://github.com/DimMallidis"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-neutral-900 hover:bg-cyan-700 text-white font-bold py-3 px-4 sm:px-6 md:px-8 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg border-2 border-cyan-800 hover:scale-105 active:scale-95"
              aria-label="GitHub Profile"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.92.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
              <span className="whitespace-nowrap">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/dimitrios-mallidis-027905306/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-neutral-900 hover:bg-cyan-700 text-white font-bold py-3 px-4 sm:px-6 md:px-8 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg border-2 border-cyan-800 hover:scale-105 active:scale-95"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
              </svg>
              <span className="whitespace-nowrap">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-cyan-100 opacity-80 italic">
            "Always eager to learn and collaborate on exciting projects"
          </p>
        </div>
      </div>

      {/* Floating Action */}
      <div className="mt-8">
        <a
          href="mailto:dimitrios.mallidis@example.com"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 text-sm sm:text-base"
        >
          <span>Send me an email</span>
          <span>→</span>
        </a>
      </div>
    </div>
  );
}