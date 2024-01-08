import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("json", json);

type Props = {
	children: string;
	type: "javascript" | "json";
};
export default function CodeHighlighter({
	children,
	type = "javascript",
}: Props) {
	return (
		<div className="py-2 leading-snug tracking-normal">
			<SyntaxHighlighter
				language={type}
				style={vs2015}
				customStyle={{ borderRadius: "0.375rem" }}>
				{children}
			</SyntaxHighlighter>
		</div>
	);
}
