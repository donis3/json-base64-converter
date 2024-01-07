import Link from "next/link";

export default function Home() {
	return (
		<main className="p-4 bg-slate-100 flex flex-col gap-4">
			<p>Welcome</p>
			<p>
				Go to <Link href={"/test"}>test</Link>
			</p>
		</main>
	);
}
