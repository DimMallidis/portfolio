import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Removed the page-specific Return Home button */}
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="w-full max-w-xl space-y-6">
        {/* Example project card */}
        <div className="bg-white/10 rounded-xl p-6 shadow border border-cyan-700">
          <h2 className="text-2xl font-semibold text-cyan-200 mb-2">
            Project Title
          </h2>
          <p className="text-neutral-300 mb-2">
            Short description of the project goes here.
          </p>
          <span className="text-xs text-neutral-500">Tech Stack: React, Next.js</span>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
}