"use client";

import { AppTheme } from "@/lib/types";
import { useEffect, useLayoutEffect, useState } from "react";
import useStoredState from "./useStoredState";

export default function useTheme() {
	const [theme, setTheme] = useStoredState<AppTheme>("system", "theme");
	const [systemTheme, setSystemTheme] = useState<"dark" | "light">("light");

	useLayoutEffect(() => {
		if ("window" in global === false) return;

		//Determine if we want to listen to system theme or set it ourselves
		const newAppTheme = theme === "system" ? systemTheme : theme;

		if (newAppTheme === "dark") {
			document.documentElement.classList.toggle("dark", true);
			document.documentElement.setAttribute("data-theme", "dark");
		} else {
			document.documentElement.classList.toggle("dark", false);
			document.documentElement.removeAttribute("data-theme");
		}
	}, [theme, systemTheme]);

	/**
	 * Listen for system theme preference.
	 */
	useEffect(() => {
		if ("window" in global === false) return;

		//Set current system theme state
		setSystemTheme(getSystemTheme());

		//Query the window for matchmedia
		const query = window.matchMedia("(prefers-color-scheme: dark)");

		//Create an event handler for when system theme changes
		function handleThemeChange() {
			setSystemTheme(getSystemTheme());
		}

		//Handle event listening and unmounting
		query.addEventListener("change", handleThemeChange);
		return () => {
			query.removeEventListener("change", handleThemeChange);
		};
	}, []);

	function changeTheme(newTheme: AppTheme = "system") {
		setTheme(newTheme);
	}

	function getActiveTheme() {
		return theme === "system" ? systemTheme : theme;
	}

	return { theme, changeTheme, getActiveTheme };
}

function getSystemTheme() {
	if ("window" in global === false) return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}
