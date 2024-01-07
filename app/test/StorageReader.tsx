"use client";
import useTheme from "@/hooks/useTheme";

export default function StorageReader({}) {
	const [theme, setTheme] = useTheme();

	return (
		<div className="p-4 font-lg">
			Current Theme: {theme}
			<div className="bg-slate-200 p-4 flex gap-4">
				<button type="button" onClick={() => setTheme("dark")}>
					Dark
				</button>
				<button type="button" onClick={() => setTheme("light")}>
					Light
				</button>
				<button type="button" onClick={() => setTheme()}>
					Default
				</button>
			</div>
		</div>
	);
}
