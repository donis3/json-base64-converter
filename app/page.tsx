import Editor from "@/components/Editor";
import Link from "next/link";
import Converter from "./Converter";

export default function Home() {
	return (
		<main className="container mx-auto">
			<section className="p-4 rounded-md bg-white/20 dark:bg-black/20 w-full mt-10 shadow-sm flex flex-col gap-4">
				<p className="text-base leading-tight tracking-tight text-justify">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Doloribus recusandae eveniet dolor id ratione optio ut
					saepe, non a magnam reiciendis quod. Nihil, sed ullam. Rem,
					ullam voluptates. Omnis, architecto!
				</p>
			</section>
			<section className="mb-10">
				<Converter />
			</section>
		</main>
	);
}
