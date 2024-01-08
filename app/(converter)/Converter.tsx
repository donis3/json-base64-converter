import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsArrowLeftRight } from "react-icons/bs";
import ConvertProvider from "./ConvertProvider";
import FromJson from "./FromJson";
import FromBase64 from "./FromBase64";

export default function Converter() {
	return (
		<ConvertProvider>
			<Tabs defaultValue="raw" className="">
				<div className="w-full flex  justify-center p-4">
					<TabsList className="">
						<TabsTrigger value="raw">to Base64</TabsTrigger>
						<span className="px-2">
							<BsArrowLeftRight />
						</span>
						<TabsTrigger value="encoded">
							from Base64
						</TabsTrigger>
					</TabsList>
				</div>
				<TabsContent value="raw" className="p-2">
					<FromJson />
				</TabsContent>
				<TabsContent value="encoded"  className="p-2">
					<FromBase64 />
				</TabsContent>
			</Tabs>
		</ConvertProvider>
	);
}
