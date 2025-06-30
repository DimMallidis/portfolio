import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Removed the page-specific Return Home button */}
      <h1
        className="text-5xl sm:text-6xl font-extrabold mb-3 text-cyan-200 drop-shadow-lg tracking-tight text-center"
        style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}
      >
        Projects
      </h1>
      
      <p
        className="text-xl sm:text-2xl max-w-2xl text-center mb-10 text-cyan-100 font-medium drop-shadow"
        style={{
          letterSpacing: "0.01em",
          fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif",
        }}
      >
        Coming Soon! 🚀
      </p>
    </div>
  );
}