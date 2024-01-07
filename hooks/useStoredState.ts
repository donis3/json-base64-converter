"use client";
// Even with the use client directive, code will execute on the server first.
// Checking if window object exists will throw error on server.

import { useEffect, useLayoutEffect, useState } from "react";

/**
 *
 * @param initialValue
 * @param key
 * @returns
 */
export default function useStoredState<T>(
	initialValue: T,
	key: string,
): [T, (v: T) => void, () => void] {
	//Add local storage prefix if available
	key = `${process.env.NEXT_PUBLIC_STORAGE_PREFIX}_${key}`;

	const [state, setState] = useState<T>(initialValue); //Do not change initial value before hydration. Read local storage after dom renders in a useEffect

	/**
	 * Sets state and saves it in localStorage as well.
	 * @param newState value to save
	 */
	function setStoredState(newState: T | ((prevState: T) => T)): void {
		//Change state
		setState(newState);
		//Get current state value and save it to local storage as well
		setState((currentValue) => {
			setStorageValue(key, currentValue);
			return currentValue;
		});
	}

	function deleteStoredState() {
		return deleteStorageValue(key);
	}

	//Change the state after dom loads to avoid hydration issues
	useLayoutEffect(() => {
		if ("window" in global) {
			const storedState = getStorageValue<T>(key);
			if (storedState) setState(storedState);
		}
	}, []);

	return [state, setStoredState, deleteStoredState];
}

/* -------------------------------------------------------------------------- */
/*                            LocalStorage Helpers                            */
/* -------------------------------------------------------------------------- */

function getStorageValue<T>(key: string): T | undefined {
	//Checking if this is a browser safely without executing on server
	if ("window" in global === false || "localStorage" in global === false)
		return;
	if (!key) return;

	try {
		if (window) {
			if (key in localStorage === false) return;
			const result = localStorage.getItem(key);
			if (!result) return;

			const parsedResult = JSON.parse(result);

			if (parsedResult && (parsedResult satisfies T)) {
				return parsedResult as T;
			}
		}
	} catch (error: any) {
		console.log(
			`Unable to read ${key} value in browser storage.`,
			error?.message ?? "",
		);
		return;
	}
}

function setStorageValue<T>(key: string, value: T): void {
	//Checking if this is a browser safely without executing on server
	if ("window" in global === false || "localStorage" in global === false)
		return;
	if (!key) return;

	try {
		localStorage.setItem(key, JSON.stringify(value));
		return;
	} catch (error: any) {
		console.log(
			`Unable to store ${key} value in browser storage.`,
			error?.message ?? "",
		);
		return;
	}
}

function deleteStorageValue<T>(key: string): void {
	//Checking if this is a browser safely without executing on server
	if ("window" in global === false || "localStorage" in global === false)
		return;
	if (!key) return;

	try {
		localStorage.removeItem(key);
		return;
	} catch (error: any) {
		console.log(
			`Unable to delete ${key} value in browser storage.`,
			error?.message ?? "",
		);
		return;
	}
}
