import Editor from "@/components/Editor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsArrowLeftRight } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import JsonToBase from "./JsonToBase";

export default function Converter() {
	return (
		<Tabs defaultValue="Json" className="">
			<div className="w-full flex  justify-center p-4">
				<TabsList className="">
					<TabsTrigger value="Json">JSON to Base64</TabsTrigger>
					<span className="px-2">
						<BsArrowLeftRight />
					</span>
					<TabsTrigger value="B64">Base64 to JSON</TabsTrigger>
				</TabsList>
			</div>
			<TabsContent value="Json" className="p-2">
				<JsonToBase />
			</TabsContent>
			<TabsContent value="B64">Change your password here.</TabsContent>
		</Tabs>
	);
}
