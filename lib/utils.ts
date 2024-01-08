import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Block the thread for amount of time
 * @param seconds wait duration in seconds
 * @returns
 */
export async function waitFor(seconds: number): Promise<void> {
	return new Promise((resolve) => {
		if (seconds <= 0) return resolve();
		if (seconds > 1000) seconds = seconds / 1000;
		setTimeout(() => resolve(), seconds * 1000);
	});
}

export function iosCopyInputById(inputId: string) {
	const element = document.getElementById(inputId) as
		| HTMLInputElement
		| HTMLTextAreaElement
		| undefined;
	if (element?.nodeName !== "INPUT" && element?.nodeName !== "TEXTAREA")
		throw new Error("Invalid element: " + element?.nodeName);

	const oldContentEditable = element.contentEditable,
		oldReadOnly = element.readOnly,
		range = document.createRange();

	element.contentEditable = "false";
	element.readOnly = false;
	range.selectNodeContents(element);

	const s = window.getSelection();
	if (!s) throw new Error("Unable to copy");
	s.removeAllRanges();
	s.addRange(range);

	element.setSelectionRange(0, 999999);

	element.contentEditable = oldContentEditable;
	element.readOnly = oldReadOnly;

	document.execCommand("copy");
}

export function isIos() {
	if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
		return true;
	}
  return false;
}


export function isValidJson(data: string) {
	try {
		JSON.parse(data);
		return true;
	} catch (error) {
		return false;
	}
}