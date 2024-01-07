import Link from "next/link";
import ThemeSelect from "./ThemeSelect";
import { BsGithub, BsTwitterX } from "react-icons/bs";

export default function Footer() {
	return (
		<footer className="w-full bg-black/20 text-accent-foreground flex justify-center">
			<div className="container w-full px-2 py-3 flex justify-between items-center">
				<div className="font-medium text-sm">
					&copy;2024{" "}
					<Link
						href={process.env.NEXT_PUBLIC_DEV_URL}
						target="_blank"
						className="py-1 hover:text-blue-800">
						{" "}
						Deniz Özkan
					</Link>
				</div>

				<div className="flex flex-row gap-1 items-center">
					<Link
						href={process.env.NEXT_PUBLIC_GITHUB_URL}
						target="_blank"
						className="p-1 hover:text-blue-800">
						<BsGithub />
					</Link>
					<Link
						href={process.env.NEXT_PUBLIC_X_URL}
						target="_blank"
						className="p-1 hover:text-blue-800">
						<BsTwitterX />
					</Link>
					<ThemeSelect />
				</div>
			</div>
		</footer>
	);
}
