export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <span 
      className="block font-bold text-cyan-200 text-sm sm:text-base lg:text-xl mb-3 leading-tight"
      style={{ fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif" }}
    >
      {children}
    </span>
  );
}