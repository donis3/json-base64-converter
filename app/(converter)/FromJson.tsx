"use client";
import Editor from "@/components/Editor";
import { Button } from "@/components/ui/button";
import { cn, iosCopyInputById, isIos, isValidJson, waitFor } from "@/lib/utils";
import { useState } from "react";
import { useConvert } from "./ConvertProvider";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import ResultModal from "./ResultModal";

type FromJsonProps = {};

const defaultState = {
	error: "",
	message: { hasError: true, text: "" },
	loading: false,
};
export default function FromJson({}: FromJsonProps) {
	const { values, setRaw } = useConvert();
	const [open, setOpen] = useState(false);
	const [state, setState] = useState(defaultState);
	const [result, setResult] = useState("");
	const [copyState, setCopyState] = useState({
		copied: false,
		copyError: "",
	});

	/**
	 * Convert raw data in the editor to base64
	 * @returns
	 */
	async function handleConvert() {
		const data = values.raw;
		if (!data) return;
		//Reset state and start loading
		setOpen(false);
		setState({ ...defaultState, loading: true });

		try {
			await waitFor(1);
			let jsonString = "";
			if (isValidJson(data)) {
				setState((prev) => ({
					...prev,
					message: {
						hasError: false,
						text: "Your json object was successfully parsed and converted to base64 string.",
					},
				}));
				jsonString = JSON.stringify(data);
			} else {
				setState((prev) => ({
					...prev,
					message: {
						hasError: true,
						text: "Your input failed to parse as valid json and converted to string without being parsed.",
					},
				}));
				jsonString = JSON.stringify(data);
			}

			const base64string = btoa(jsonString);

			setResult(base64string);
			setOpen(true);
		} catch (error: any) {
			//display any err and reset
			setState({
				...defaultState,
				error: "Conversion failed. Please validate your input and try again",
			});
		} finally {
			setState((prev) => ({
				...prev,
				loading: false,
			}));
		}
	}

	/**
	 * Reset all state and context to default
	 */
	function handleReset() {
		setRaw("");
		setState(defaultState);
		setCopyState({ copied: false, copyError: "" });
		setOpen(false);
	}

	/**
	 * Try to copy current encoded string
	 */
	async function handleCopy() {
		setCopyState({ copied: false, copyError: "" }); //Reset copy state
		if ("window" in global === false) return;
		if (result.length <= 0) return;

		try {
			if (isIos()) {
				iosCopyInputById("result");
			} else {
				await navigator.clipboard.writeText(result);
			}
			setCopyState({ copied: true, copyError: "" });
		} catch (error: any) {
			setCopyState({
				copied: false,
				copyError: "Unable to copy text." + error?.message,
			});
		} finally {
			setTimeout(() => {
				setCopyState({ copied: false, copyError: "" });
			}, 2000);
		}
	}

	return (
		<>
			<div className="grid grid-cols-2 w-full gap-2">
				{/* JSON input */}
				<Editor
					className="col-span-full"
					code={values.raw}
					setCode={setRaw}
				/>

				{/* Actions */}
				<div className="col-span-full min-h-8">
					<p className="font-medium text-red-700 dark:text-red-600 text-center">
						{state.error}
					</p>
				</div>
				<Button
					variant="primary"
					disabled={state.loading}
					className="font-bold text-lg"
					onClick={handleConvert}>
					{state.loading ? "Working..." : "Convert"}
				</Button>
				<Button
					variant="outline"
					className="font-medium text-lg dark:text-white"
					onClick={handleReset}>
					Reset
				</Button>
			</div>

			{/* Shadcn dialog wrapper */}
			<ResultModal
				open={open}
				setOpen={setOpen}
				title="Conversion Result"
				message={state.message}>
				{/* Content of result dialog */}
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
						copyState.copied &&
							"bg-green-600  dark:bg-green-400 hover:bg-green-600",
					)}
					onClick={handleCopy}>
					{copyState.copied ? <LuCopyCheck /> : <LuCopy />} Copy
				</Button>
				{copyState.copyError.length > 0 && (
					<p className="font-light text-sm text-red-500">
						{copyState.copyError}
					</p>
				)}
			</ResultModal>
		</>
	);
}
