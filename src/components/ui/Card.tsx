export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white/10 rounded-3xl shadow-2xl border-2 border-cyan-700 p-3 sm:p-6 lg:p-12 backdrop-blur-md w-full max-w-[95vw] overflow-hidden ${className}`}>
      {children}
    </div>
  );
}