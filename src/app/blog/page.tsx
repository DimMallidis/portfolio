import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Removed the page-specific Return Home button */}
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-lg max-w-xl text-center mb-8">
        Welcome to my blog! Here you'll find articles, tutorials, and thoughts on
        software development and technology.
      </p>
      {/* Example blog post preview */}
      <div className="w-full max-w-xl space-y-6">
        <div className="bg-white/10 rounded-xl p-6 shadow border border-cyan-700">
          <h2 className="text-2xl font-semibold text-cyan-200 mb-2">
            My First Post
          </h2>
          <p className="text-neutral-300 mb-2">
            A short summary of what this post is about. This is just a preview.
          </p>
          <span className="text-xs text-neutral-500">June 2025</span>
        </div>
        {/* Add more blog post previews here */}
      </div>
    </div>
  );
}