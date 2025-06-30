"use client";
import React, { useState, useEffect } from "react";

export default function EmailObfuscated() {
  const [email, setEmail] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only construct email on client-side after component mounts
    setIsClient(true);
    const user = "dimitriosmallidis";
    const domain = "gmail.com";
    const constructedEmail = `${user}@${domain}`;
    setEmail(constructedEmail);
  }, []);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };

  if (!isClient || !email) {
    return <span className="underline text-cyan-100">Loading...</span>;
  }

  return (
    <button
      onClick={handleEmailClick}
      className="underline hover:text-cyan-400 bg-transparent border-none cursor-pointer text-cyan-100"
      style={{ direction: "ltr", unicodeBidi: "bidi-override" }}
      aria-label="Send email"
    >
      {email}
    </button>
  );
}