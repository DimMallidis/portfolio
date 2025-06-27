import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Removed the page-specific Return Home button */}
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <form className="w-full max-w-md space-y-6">
        <div>
          <label className="block mb-2 text-cyan-200" htmlFor="name">
            Name
          </label>
          <input
            className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
            type="text"
            id="name"
            name="name"
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block mb-2 text-cyan-200" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
            type="email"
            id="email"
            name="email"
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block mb-2 text-cyan-200" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-white focus:outline-none focus:border-cyan-400"
            id="message"
            name="message"
            rows={5}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-cyan-500 hover:bg-cyan-700 text-white font-semibold py-3 mt-4 transition-colors shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}