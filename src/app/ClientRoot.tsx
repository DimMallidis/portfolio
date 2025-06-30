"use client";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HomeWithShow from "./HomeWithShow";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const alreadyAnimated = typeof window !== "undefined" && sessionStorage.getItem("hasAnimated") === "true";
    if (!alreadyAnimated) {
      setTimeout(() => {
        setShow(true);
        sessionStorage.setItem("hasAnimated", "true");
      }, 100);
    } else {
      setShow(true);
    }
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Sidebar show={show} />
      <main className="flex-1 overflow-y-auto w-full lg:ml-80 p-4 sm:p-6 lg:p-10">
        {pathname === "/" ? <HomeWithShow show={show} /> : children}
      </main>
    </>
  );
}