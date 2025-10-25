import Image from "next/image";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1
        className="text-5xl sm:text-6xl font-extrabold mb-3 text-cyan-200 drop-shadow-lg tracking-tight text-center"
        style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}
      >
        Blog
      </h1>
      <p
        className="text-xl sm:text-2xl max-w-4xl text-center mb-10 text-cyan-100 font-medium drop-shadow"
        style={{
          letterSpacing: "0.01em",
          fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif",
        }}
      >
        Welcome to my blog! It&apos;s my way of journaling everything I&apos;m up to.
      </p>
      <div className="w-full max-w-4xl space-y-6">
        {/* New event post */}
        <div className="bg-white/10 rounded-xl p-8 shadow-lg border border-cyan-700 flex flex-col items-center">
          <Image
            src="/maliotio2025.jpg"
            alt="Mallidis, D. - Maliotis 2025 Event"
            width={450}
            height={280}
            className="rounded-lg mb-4 object-cover"
          />
          <h2 className="text-2xl font-semibold text-cyan-200 mb-3 text-center" style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}>
            Mallidis, D. (2025) – Speech in Boston on the use of Artificial Intelligence in Greek Journalistic Media.
          </h2>
          <p className="text-base text-neutral-300 text-justify mb-3" style={{ fontFamily: "'Segoe UI', 'Arial', sans-serif" }}>
In May 2025, I delivered a speech at the 11th International Summer University in Boston, focusing on the role of artificial intelligence in the Greek journalistic landscape. The event included representatives from prominent institutions and was held under the official support of the Hellenic Parliament and the General Secretariat for Greeks Abroad.          </p>
          <span className="text-xs text-cyan-200">
            Boston, May 24-29, 2025
          </span>
          <a
            href="https://summerschool.ac.uoi.gr/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-cyan-300 underline hover:text-cyan-400 transition-colors text-sm"
          >
            Learn more about the conference
          </a>
        </div>
        {/* Mini Summer University post */}
        <div className="bg-white/10 rounded-xl p-8 shadow-lg border border-cyan-700 flex flex-col items-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <Image
              src="/6ο_μικρό_θερινό_εγώ.jpg"
              alt="6ο μικρό θερινό εγώ"
              width={900}
              height={600}
              className="rounded-lg object-cover w-full h-auto"
            />
            <Image
              src="/6ο_μικρό_θερινό_κοινο.jpg"
              alt="6ο μικρό θερινό κοινο"
              width={900}
              height={600}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <h2 className="text-2xl font-semibold text-cyan-200 mb-3 text-center" style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}>
            Mallidis, D. (2025) – The Language of Artificial Intelligence: From Algorithm to Cognition.
          </h2>
          <p className="text-base text-neutral-300 text-justify mb-3" style={{ fontFamily: "'Segoe UI', 'Arial', sans-serif" }}>
            In August 2025, I delivered a speech at the 6th Junior Summer School held at the University of Gjirokastër, focusing on the topic “The Language of Artificial Intelligence: From Algorithm to Cognition.” The event brought together participants from various academic and institutional backgrounds and was organized under the auspices of the International Summer University “Greek Language, Culture and Media” and the Laboratory for the Study of Social Issues, Mass Media and Education of the Department of Early Childhood Education, School of Education, University of Ioannina.
          </p>
          <span className="text-xs text-cyan-200">
            Gjirokastër, August 25-28, 2025
          </span>
          <a
            href="https://www.omilosapofoiton.gr/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-cyan-300 underline hover:text-cyan-400 transition-colors text-sm"
          >
            Learn more about the conference
          </a>
        </div>
      </div>
    </div>
  );
}