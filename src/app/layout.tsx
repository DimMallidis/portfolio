import "./globals.css";
import ClientRoot from "./ClientRoot";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full min-h-screen">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="h-full min-h-screen flex animated-bg overflow-x-hidden"
        style={{
          background:
            "linear-gradient(110deg, #000 0%, #0a192f 40%, #0369a1 60%, #000 100%)",
          backgroundSize: "200vw 200vh",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
