import EmailObfuscated from "../about/EmailObfuscated";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Name box */}
      <div className="w-full max-w-xl bg-white/10 rounded-2xl shadow-xl border-2 border-cyan-700 px-10 py-6 mb-8 flex items-center justify-center">
        <h1
          className="text-4xl sm:text-5xl text-cyan-300 drop-shadow-2xl tracking-tight text-center whitespace-nowrap"
          style={{
            fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif",
            letterSpacing: "0.01em",
            fontStretch: "condensed", // Slim the letters
            fontWeight: 400,
          }}
        >
          Dimitrios Mallidis
        </h1>
      </div>
      {/* Info box */}
      <div className="w-full max-w-xl bg-white/10 rounded-3xl shadow-2xl border-2 border-cyan-700 p-16 flex flex-col items-center space-y-14 backdrop-blur-md">
        <div className="flex flex-col items-center space-y-6 w-full">
          <div className="flex items-center gap-3">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-cyan-300">
              <path d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4Zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" fill="currentColor"/>
            </svg>
            <span className="text-2xl text-cyan-100 font-semibold tracking-wide">
              Athens, Greece
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span role="img" aria-label="email" className="text-2xl">📧</span>
            <span className="text-2xl text-cyan-100">
              <EmailObfuscated />
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center w-full space-y-4">
          <div className="w-full flex gap-8 justify-center">
            <a
              href="https://github.com/DimMallidis"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 hover:bg-cyan-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-colors flex items-center gap-3 text-xl border-2 border-cyan-800 hover:scale-105 active:scale-95 duration-150"
              aria-label="GitHub"
            >
              <svg
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 1.99.13 2.92.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dimitrios-mallidis-027905306/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 hover:bg-cyan-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-colors flex items-center gap-3 text-xl border-2 border-cyan-800 hover:scale-105 active:scale-95 duration-150"
              aria-label="LinkedIn"
            >
              <svg
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}