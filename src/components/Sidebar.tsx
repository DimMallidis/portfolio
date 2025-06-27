"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Folder, BookOpen, Mail, Home as HomeIcon } from "lucide-react";
import { useState } from "react";

const links = [
	{ href: "/about", label: "About Me", icon: User },
	{ href: "/projects", label: "Projects", icon: Folder },
	{ href: "/blog", label: "Blog", icon: BookOpen },
	{ href: "/contact", label: "Contact", icon: Mail },
];

export default function Sidebar({ show }: { show: boolean }) {
	const pathname = usePathname();
	const [homeActive, setHomeActive] = useState(false);

	return (
		<aside
			className={`fixed top-0 left-0 h-full w-80 bg-black shadow-2xl flex flex-col items-center justify-center py-10 px-4 z-40
                transition-transform duration-1000 ease-out
                ${show ? "translate-x-0 opacity-100 scale-100" : "-translate-x-20 opacity-0 scale-95"}`}
		>
			<div className="flex flex-col items-center gap-8 justify-center h-full">
				{/* Home button: always hoverable, even on home page */}
				<Link
					href="/"
					aria-label="Home"
					tabIndex={0}
					className={`flex items-center justify-center w-20 h-20 rounded-full border-4 transition-all duration-200 shadow-lg
                        bg-neutral-900 border-gray-400
                        hover:bg-cyan-700/30 hover:scale-105
                        active:scale-95`}
					style={{ boxShadow: "0 4px 24px 0 rgba(34,211,238,0.15)" }}
				>
					<svg
						width={38}
						height={38}
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g>
							{/* House outline */}
							<path
								d="M3 12L12 5L21 12"
								stroke={homeActive ? "#22d3ee" : "#94a3b8"} // cyan-400 or gray-400
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								fill="none"
							/>
							{/* House body */}
							<path
								d="M5 12V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V12"
								stroke="#94a3b8" // always gray-400
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								fill="none"
							/>
						</g>
					</svg>
				</Link>
				<nav className="w-full flex flex-col gap-5 items-center">
					{links.map((l) => {
						const Icon = l.icon;
						const active = pathname === l.href;
						return (
							<Link
								key={l.href}
								href={l.href}
								className={`flex flex-row items-center gap-5 pl-6 pr-4 py-5 rounded-xl font-bold text-xl transition-all duration-200 w-60 justify-start shadow
                                    ${
										active
											? "bg-cyan-500 text-white scale-105 shadow-cyan-400/40"
											: "text-cyan-100 hover:bg-cyan-700/40 hover:scale-105"
									}`}
								style={{ letterSpacing: "0.02em" }}
							>
								<Icon size={32} strokeWidth={2.5} className="drop-shadow" />
								{l.label}
							</Link>
						);
					})}
				</nav>
			</div>
		</aside>
	);
}