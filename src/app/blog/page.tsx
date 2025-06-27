import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1
        className="text-5xl sm:text-6xl font-extrabold mb-3 text-cyan-300 drop-shadow-lg tracking-tight text-center"
        style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}
      >
        Blog
      </h1>
      <p
        className="text-xl sm:text-2xl max-w-2xl text-center mb-10 text-cyan-100 font-medium italic drop-shadow"
        style={{
          letterSpacing: "0.01em",
          fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif",
        }}
      >
        Welcome to my blog! Here you'll find articles, tutorials, and thoughts on software development and technology.
      </p>
      <div className="w-full max-w-2xl space-y-6">
        {/* New event post */}
        <div className="bg-white/10 rounded-xl p-8 shadow-lg border border-cyan-700 flex flex-col items-center">
          <Image
            src="/maliotio2025.jpg"
            alt="Μαλλίδης, Δ. - Maliotis 2025 Event"
            width={450}
            height={280}
            className="rounded-lg mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold text-cyan-200 mb-3 text-center" style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}>
            Μαλλίδης, Δ. (2025) – Ομιλία στην Βοστώνη για την Τεχνητή Νοημοσύνη στα Ελληνικά ΜΜΕ
          </h2>
          <p className="text-base text-neutral-300 text-justify mb-3" style={{ fontFamily: "'Segoe UI', 'Arial', sans-serif" }}>
            Παρουσίαση για τη χρήση της τεχνητής νοημοσύνης στα ελληνικά ΜΜΕ στο 11ο Διεθνές Θερινό Πανεπιστήμιο στη Βοστώνη, με τη συμμετοχή σημαντικών φορέων και υπό την αιγίδα της Βουλής των Ελλήνων και της Γενικής Γραμματείας Απόδημου Ελληνισμού.
          </p>
          <span className="text-xs text-cyan-200">
            Βοστώνη, 24-29 Μαΐου 2025
          </span>
        </div>
      </div>
    </div>
  );
}