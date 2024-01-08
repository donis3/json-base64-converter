"use client";
import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react";

const ConvertContext = createContext<ConvertContextType | null>(null);

export default function ConvertProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	// Conversion Logic
	const [rawState, setRawState] = useState("");
	const [encodedState, setEncodedState] = useState("");

	return (
		<ConvertContext.Provider
			value={{
				values: { encoded: encodedState, raw: rawState },
				setEncoded: setEncodedState,
				setRaw: setRawState,
			}}>
			{children}
		</ConvertContext.Provider>
	);
}
export function useConvert() {
	return useContext(ConvertContext) as ConvertContextType;
}

/* -------------------------------------------------------------------------- */
/*                          Convert Context Type Def                          */
/* -------------------------------------------------------------------------- */
type ConvertContextType = {
	values: {
		raw: string;
		encoded: string;
	};
	setRaw: Dispatch<SetStateAction<string>>;
	setEncoded: Dispatch<SetStateAction<string>>;
};
