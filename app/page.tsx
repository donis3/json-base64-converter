import Link from "next/link";
import Converter from "./(converter)/Converter";

export default function Home() {
	return (
		<div className="container mx-auto">
			<section className="my-10">
				<Converter />
			</section>
			<section className="p-4 rounded-md bg-white/20 dark:bg-black/20 w-full mt-10 shadow-sm flex flex-col gap-4">
				<p className="text-base leading-snug tracking-normal text-justify font-light text-primary">
					A simple tool to convert your JSON objects or strings to
					base64 and vice versa. You may learn more in the
					<Link href={"/about"} className="underline">
						{" "}
						documentation
					</Link>{" "}
					or the{" "}
					<Link
						href={process.env.NEXT_PUBLIC_GITHUB_REPO}
						className="underline"
						target="_blank">
						github repo.
					</Link>
				</p>
			</section>
		</div>
	);
}
