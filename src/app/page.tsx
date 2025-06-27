"use client";
import Image from "next/image";

export default function Home({ show }: { show: boolean }) {
  const popAnim = (show: boolean) =>
    `transition-all duration-1000 ${
      show
        ? "opacity-100 scale-100 translate-y-0"
        : "opacity-0 scale-75 translate-y-8"
    }`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Neon accent blur */}
      <div className="pointer-events-none absolute bottom-4 left-4 w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-full bg-[#0ff0fc] opacity-20 blur-lg z-0" />
      <main className="flex flex-col justify-center items-center gap-6 z-10 w-full">
        {/* Profile Picture - responsive */}
        <div
          className={`overflow-hidden rounded-full w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] flex items-center justify-center border-[4px] md:border-[6px] border-black bg-black ${popAnim(
            show
          )}`}
        >
          <Image
            src="/profile.jpg"
            alt="Dimitrios Mallidis profile picture"
            width={320}
            height={320}
            className="object-cover w-full h-full object-[50%_10%] rounded-full"
            priority
          />
        </div>
        {/* Hello */}
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl font-extrabold text-center text-cyan-200 drop-shadow-lg ${popAnim(
            show
          )}`}
          style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}
        >
          Hi, I'm Dimitris!
        </h1>
        {/* Description */}
        <p
          className={`text-lg sm:text-2xl md:text-3xl text-center max-w-2xl text-cyan-100 ${popAnim(
            show
          )}`}
        >
          I'm a Software Engineer passionate about creating cool things. Welcome to my
          portfolio!
        </p>
      </main>
      {/* Footer */}
      <footer
        className={`flex gap-8 flex-wrap items-center justify-center z-10 mt-16 ${popAnim(
          show
        )}`}
        style={{ marginBottom: "2rem" }}
      >
        <a
          className="flex items-center justify-center rounded-full bg-cyan-900/40 hover:bg-cyan-500/80 transition-colors shadow-lg w-20 h-20 sm:w-24 sm:h-24"
          href="https://github.com/DimMallidis"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="GitHub icon"
            width={80}
            height={80}
            className="w-16 h-16 sm:w-20 sm:h-20" // fills more of the button
            style={{ objectFit: "contain" }}
          />
        </a>
        <a
          className="flex items-center justify-center rounded-full bg-cyan-900/40 hover:bg-cyan-500/80 transition-colors shadow-lg w-20 h-20 sm:w-24 sm:h-24"
          href="https://www.linkedin.com/in/dimitrios-mallidis-027905306/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="LinkedIn icon"
            width={80}
            height={80}
            className="w-16 h-16 sm:w-20 sm:h-20" // fills more of the button
            style={{ objectFit: "contain" }}
          />
        </a>
      </footer>
      {/* Montserrat font import for the heading */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
      `}</style>
    </div>
  );
}
