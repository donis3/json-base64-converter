import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Converter for JSON - Base64 ",
	description:
		"Easily convert json data to base64 string to easily store as an environment variable. ",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="flex flex-col justify-between  pt-[var(--nav-height)]">
				<Navbar />
				<main className="flex-1">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
