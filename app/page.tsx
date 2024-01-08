import Link from "next/link";
import Converter from "./(converter)/Converter";
import Docs from "./about/Docs";

export default function Home() {
	return (
		<div className="container mx-auto">
			<section className="my-10">
				<Converter />
			</section>
			<section className="p-4 rounded-md bg-white/20 dark:bg-black/20 w-full mt-10 shadow-sm flex flex-col gap-4">
				<p className="text-base leading-tight tracking-tight text-justify font-light text-primary">
					A simple tool to convert your JSON objects or strings to
					base64 strings and vice versa. Read more in the
					<Link href={"/about"} className="underline">
						{" "}
						documentation
					</Link>
				</p>
			</section>
		</div>
	);
}
