"use client";
import Home from "./page";

export default function HomeWithShow({ show }: { show: boolean }) {
  return <Home show={show} />;
}