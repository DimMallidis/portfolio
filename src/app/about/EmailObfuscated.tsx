"use client";
import React from "react";

export default function EmailObfuscated() {
  const user = "dimitriosmallidis";
  const domain = "gmail.com";
  const email = `${user}@${domain}`;

  return (
    <a
      href={`mailto:${email}`}
      className="underline hover:text-cyan-400"
      style={{ direction: "ltr", unicodeBidi: "bidi-override" }}
    >
      {email}
    </a>
  );
}