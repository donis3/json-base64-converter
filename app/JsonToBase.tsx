"use client";
import Editor, { EditorApi } from "@/components/Editor";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Result from "@/components/Result";
import { FaRegCopy } from "react-icons/fa6";
import { cn, iosCopyInputById, isIos, waitFor } from "@/lib/utils";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

export default function JsonToBase() {
	const [open, setOpen] = useState(false);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState({ hasError: false, text: "" });
	const [result, setResult] = useState("");
	const [isCopied, setCopied] = useState(false);
	const [copyError, setCopyError] = useState("");
	const ref = useRef<EditorApi>(null);

	function isValidJson(data: string) {
		try {
			JSON.parse(data);
			return true;
		} catch (error) {
			return false;
		}
	}

	async function handleConvert() {
		const data = ref.current?.code;
		if (!data) return;
		setResult("");
		setMessage({ hasError: false, text: "" });
		setError("");
		setOpen(false);
		setLoading(true);
		try {
			await waitFor(1);
			let jsonString = "";
			if (isValidJson(data)) {
				setMessage({
					hasError: false,
					text: "Your json object was successfully parsed and converted to base64 string.",
				});
				jsonString = JSON.stringify(JSON.parse(data));
			} else {
				setMessage({
					hasError: true,
					text: "Your input failed to parse as valid json and converted to string without being parsed.",
				});
				jsonString = JSON.stringify(data);
			}

			const base64string = btoa(jsonString);

			setResult(base64string);
			setOpen(true);
		} catch (error: any) {
			//display any err
			if (error?.message && error.message.length > 0) {
				setError(error.message);
			} else {
				setError(
					"Conversion failed. Make sure you have a valid json object.",
				);
			}
		} finally {
			setLoading(false);
		}
	}

	function handleReset() {
		ref.current?.reset();
		setError("");
		setOpen(false);
	}

	async function handleCopy() {
		setCopyError("");
		if ("window" in global === false) return;
		if (result.length <= 0) return;

		try {
			if (isIos()) {
				iosCopyInputById("result");
                setCopied(true);
			} else {
				await navigator.clipboard.writeText(result);
			}
			setCopied(true);
		} catch (error: any) {
			setCopyError("Unable to copy text." + error?.message);
		} finally {
			setTimeout(() => {
				setCopied(false);
			}, 2000);
			if (copyError.length > 0) {
				setTimeout(() => {
					setCopyError("");
				}, 5000);
			}
			return;
		}
	}

	return (
		<div className="grid grid-cols-2 w-full gap-2">
			{/* JSON input */}
			<Editor ref={ref} className="col-span-full" />

			{/* Actions */}
			<div className="col-span-full min-h-8">
				<p className="font-medium text-red-700 dark:text-red-600 text-center">
					{error}
				</p>
			</div>
			<Button
				variant="primary"
				disabled={loading}
				className="font-bold text-lg"
				onClick={handleConvert}>
				{loading ? "Working..." : "Convert"}
			</Button>
			<Button
				variant="outline"
				className="font-medium text-lg dark:text-white"
				onClick={handleReset}>
				Reset
			</Button>

			{/* Dialog to display conversion result */}
			<Result
				open={open}
				setOpen={setOpen}
				title="Conversion Result"
				message={message}
				error={copyError}>
				<Label htmlFor="result" className="mt-2">
					Base64 Encoded Value
				</Label>
				<Textarea
					placeholder="SGVsbG8gV29ybHM..."
					id="result"
					defaultValue={result}
					spellCheck={false}
					autoFocus={false}
					className="whitespace-normal resize-none overflow-y-auto text-zinc-600 font-mono text-base"
					rows={5}
				/>
				<Button
					className={cn(
						"gap-1 text-lg mt-2",
						isCopied && "bg-green-600  dark:bg-green-400 hover:bg-green-600",
					)}
					onClick={handleCopy}>
					{isCopied ? <LuCopyCheck /> : <LuCopy />} Copy
				</Button>
				{copyError.length > 0 && (
					<p className="font-light text-sm text-red-500">
						{copyError}
					</p>
				)}
			</Result>
		</div>
	);
}
