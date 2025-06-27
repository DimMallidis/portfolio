import "./globals.css";
import ClientRoot from "./ClientRoot";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full min-h-screen">
      <body
        className="h-full min-h-screen flex"
        style={{
          background:
            "linear-gradient(110deg, #000 0%, #0f172a 40%, #0ea5e9 60%, #000 100%)",
          backgroundSize: "100vw 100vh",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
