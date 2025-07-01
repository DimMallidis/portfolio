"use client";
import { useState, useEffect } from "react";
import { HomeContent } from "@/components/HomeContent";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return <HomeContent show={show} />;
}
