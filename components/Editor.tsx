"use client";

import { Ref, forwardRef, useImperativeHandle, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

/**
 * Expose Editor api through imperative handle
 */
export type EditorApi = {
	/**
	 * Current code editor value
	 */
	code: string;
	/**
	 * Delete code editor text
	 */
	reset: () => void;
};

type EditorProps = {
	/**
	 * Code text to display if needed
	 */
	initialCode?: string;
	className?: string;
	lang?: "json" | "plaintext";
	placeholder?: string;
};

/**
 * Code editor (JSON) with imperative handle (EditorApi)
 */
const Editor = forwardRef(function Editor(
	props: EditorProps,
	ref: Ref<EditorApi>,
) {
	const [code, setCode] = useState(props.initialCode ?? "");
	useImperativeHandle(ref, () => ({
		code: code,
		reset: () => setCode(""),
	}));

	return (
		<div className={props?.className}>
			<CodeEditor
				value={code}
				language={props.lang ?? "json"}
				placeholder={props.placeholder ?? "Paste your json object here"}
				onChange={(e) => setCode(e.target.value)}
				padding={15}
				style={{
					fontFamily:
						"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
					borderRadius: "0.5rem",
					fontSize: "1rem",
				}}
			/>
		</div>
	);
});

export default Editor;
