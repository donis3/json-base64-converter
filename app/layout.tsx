import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "B64 Converter - Convert data to base64 and back",
	description:
		"A tool to convert your data and json objects to base64 strings and vice versa. Easily store json in environment variables.  ",
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
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
