"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	return (
		<nav
			className={cn(
				"w-full fixed top-0 left-0 z-20 bg-accent-foreground text-accent min-h-[var(--nav-height)] flex items-center justify-center  ",
				"bg-gradient-to-l from-blue-900   to-rose-950 dark:from-zinc-900 dark:to-zinc-950 shadow-md",
			)}>
			<div className="p-2 container flex flex-wrap justify-between items-center ">
				<h2 className="flex-1 transition-transform duration-100 active:translate-y-0.5">
					<Link
						href="/"
						className="font-extrabold text-2xl tracking-tight text-white opacity-90 ">
						B64-Converter
					</Link>
				</h2>
				<div className="flex items-center  font-medium ">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/test">About</NavLink>
				</div>
			</div>
		</nav>
	);
}

function NavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	const path = usePathname();

	return (
		<Link
			href={href}
			className={cn(
				"px-2 py-1 hover:bg-white/10 focus:bg-white/30  rounded-md text-white",
				path === href && "font-bold underline",
			)}>
			{children}
		</Link>
	);
}