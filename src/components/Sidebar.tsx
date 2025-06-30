"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Simple icon components as fallbacks
const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const FolderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  </svg>
);

const BookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const links = [
    { href: "/about", label: "About Me", icon: UserIcon },
    { href: "/projects", label: "Projects", icon: FolderIcon },
    { href: "/blog", label: "Blog", icon: BookIcon },
    { href: "/contact", label: "Contact", icon: MailIcon },
];

export default function Sidebar({ show }: { show: boolean }) {
    const pathname = usePathname();
    const [homeActive, setHomeActive] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <>
            {/* Mobile hamburger button */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden fixed top-4 right-4 z-50 p-3 rounded-full bg-cyan-800/80 backdrop-blur-sm text-white hover:bg-cyan-700/80 transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
                {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>

            {/* Mobile overlay */}
            {mobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Sidebar - responsive */}
            <aside
                className={`
                    fixed top-0 h-full w-64 lg:w-80 bg-black shadow-2xl flex flex-col items-center justify-center py-10 px-4 z-40
                    transition-transform duration-500 ease-in-out
                    
                    /* Desktop styles */
                    lg:flex lg:left-0
                    ${show ? "lg:translate-x-0 lg:opacity-100" : "lg:-translate-x-full lg:opacity-0"}
                    
                    /* Mobile styles */
                    flex lg:hidden right-0
                    ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <div className="flex flex-col items-center gap-6 lg:gap-8 justify-center h-full">
                    {/* Home button */}
                    <Link
                        href="/"
                        aria-label="Home"
                        tabIndex={0}
                        onClick={closeMobileMenu}
                        className={`flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 transition-all duration-200 shadow-lg
                            bg-neutral-900 border-gray-400
                            hover:bg-cyan-700/30 hover:scale-105
                            active:scale-95`}
                        style={{ boxShadow: "0 4px 24px 0 rgba(34,211,238,0.15)" }}
                    >
                        <svg
                            className="w-8 h-8 lg:w-10 lg:h-10"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g>
                                <path
                                    d="M3 12L12 5L21 12"
                                    stroke={homeActive ? "#22d3ee" : "#94a3b8"}
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                />
                                <path
                                    d="M5 12V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V12"
                                    stroke="#94a3b8"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                />
                            </g>
                        </svg>
                    </Link>
                    
                    <nav className="w-full flex flex-col gap-4 lg:gap-5 items-center">
                        {links.map((l) => {
                            const Icon = l.icon;
                            const active = pathname === l.href;
                            return (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    onClick={closeMobileMenu}
                                    className={`flex flex-row items-center gap-4 lg:gap-5 pl-5 pr-4 py-4 lg:py-5 rounded-xl font-bold text-lg lg:text-xl transition-all duration-200 w-52 lg:w-60 justify-start shadow
                                        ${
                                            active
                                                ? "bg-cyan-500 text-white scale-105 shadow-cyan-400/40"
                                                : "text-cyan-100 hover:bg-cyan-700/40 hover:scale-105"
                                        }`}
                                    style={{ letterSpacing: "0.02em" }}
                                >
                                    <div className="w-7 h-7 lg:w-8 lg:h-8">
                                        <Icon />
                                    </div>
                                    {l.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </aside>
        </>
    );
}