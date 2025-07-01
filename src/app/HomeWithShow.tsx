"use client";
import { HomeContent } from "@/components/HomeContent";

export default function HomeWithShow({ show }: { show: boolean }) {
  return <HomeContent show={show} />;
}