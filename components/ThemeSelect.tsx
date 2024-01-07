"use client";
import { BsMoonStars, BsSun } from "react-icons/bs";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useTheme from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export default function ThemeSelect({}) {
	const { getActiveTheme, changeTheme, theme } = useTheme();

	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger asChild>
				<button type="button" className="p-2 text-lg ">
					{getActiveTheme() === "dark" ? (
						<BsMoonStars className="hover:text-purple-600" />
					) : (
						<BsSun className="hover:text-yellow-800" />
					)}
					<span className="sr-only">Toggle theme</span>
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					className={cn(
						theme === "light" && "bg-accent/50 font-medium",
					)}
					onClick={() => changeTheme("light")}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					className={cn(
						theme === "dark" && "bg-accent/50 font-medium",
					)}
					onClick={() => changeTheme("dark")}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					className={cn(
						theme === "system" && "bg-accent/50 font-medium",
					)}
					onClick={() => changeTheme("system")}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
