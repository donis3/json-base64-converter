import Link from "next/link";
import { FaArrowLeft, FaCode } from "react-icons/fa";
import CodeHighlighter from "./CodeHighlighter";
import { Button } from "@/components/ui/button";

type DocsProps = {};

export default async function Docs({}: DocsProps) {
	return (
		<div className="flex flex-col gap-8 text-primary dark:bg-black/20 px-4 py-4 rounded-md">
			<div>
				<h1 className="flex flex-row gap-2 text-3xl mb-10 items-center justify-center">
					<FaCode /> Documentation
				</h1>
				<h3 className="font-medium text-lg py-1 border-b-2 border-primary ">
					What is it?
				</h3>
				<p className="py-2 leading-relaxed">
					The purpose of this tool is to easily convert a JSON object
					or a string to a base64 string and vice versa. Base64
					encoding will convert any json data to an easy to store
					string. Read more about{" "}
					<Link
						className="underline"
						target="_blank"
						href={"https://en.wikipedia.org/wiki/Base64"}>
						base64 here
					</Link>
				</p>
			</div>

			<div>
				<h3 className="font-medium text-lg py-1 border-b-2 border-primary text-primary">
					Where to use it?
				</h3>
				<p className="py-2 leading-relaxed">
					It can be used in many situations. It allows storing data as
					plain text without loss. Most importantly, we can store huge
					JSON files as an easy to store plain text string.
				</p>
				<p>
					<span className="font-medium">Example:</span> Google
					Firebase service account requires a huge json certificate
					file but we don't want to commit this file to our repo. How
					do we access this file when we deploy this on a machine that
					has no access to that certificate?
					<br />
					<br />
					<span className="italic">
						We convert the JSON to base64 and save it as an
						environment variable
					</span>
				</p>
			</div>

			<div>
				<h3 className="font-medium text-lg py-1 border-b-2 border-primary text-primary">
					How to use it?
				</h3>
				<p className="py-2 leading-relaxed">
					Here is an example json file from firebase service account
					credentials. It has all our sensitive information including
					private key. We can't commit this to our github repo but we
					need to access this data in our deployed application.
				</p>
				<CodeHighlighter type="json">{`{
  "type": "service_account",
  "project_id": "donis-next-firebase-starter",
  "private_key_id": "12345",
  "private_key": "-----BEGIN PRIVATE KEY-----\\n....\\n-----END PRIVATE KEY-----\\n",
  "client_email": "firebase-adminsdk@example.com",
  "client_id": "123",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/example",
  "universe_domain": "googleapis.com"
}`}</CodeHighlighter>
				<p className="py-2 leading-relaxed">
					Lets convert this to a base64 string using this tool so we
					can store it in our .env
				</p>
				<CodeHighlighter type="json">
					{`# Firebase Service Account Cert
FIREBASE_CERT="IntcbiAgXCJ0eXBlXCI6IFwic2VydmljZV9hY2NvdW50XCIsXG4gIFwicHJvamVjdF9pZFwiOiBcImRvbmlzLW5leHQtZmlyZWJhc2Utc3RhcnRlclwiLFxuICBcInByaXZhdGVfa2V5X2lkXCI6IFwiMTIzNDVcIixcbiAgXCJwcml2YXRlX2tleVwiOiBcIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxcbi4uLi5cXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXFxuXCIsXG4gIFwiY2xpZW50X2VtYWlsXCI6IFwiZmlyZWJhc2UtYWRtaW5zZGtAZXhhbXBsZS5jb21cIixcbiAgXCJjbGllbnRfaWRcIjogXCIxMjNcIixcbiAgXCJhdXRoX3VyaVwiOiBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoXCIsXG4gIFwidG9rZW5fdXJpXCI6IFwiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW5cIixcbiAgXCJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHNcIixcbiAgXCJjbGllbnRfeDUwOV9jZXJ0X3VybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZXhhbXBsZVwiLFxuICBcInVuaXZlcnNlX2RvbWFpblwiOiBcImdvb2dsZWFwaXMuY29tXCJcbn0i"
`}
				</CodeHighlighter>
				<p className="py-2 leading-relaxed">
					Now in our code, when we need to access this json object, we
					need only the environment variable. Here is how we convert
					it back:
				</p>
				<CodeHighlighter type="javascript">
					{`
const converted = JSON.parse(atob(process.env.FIREBASE_CERT));
console.log(converted);
/* Result:
{
	"type": "service_account",
	"project_id": "donis-next-firebase-starter",
	"private_key_id": "12345",
	"private_key": "-----BEGIN PRIVATE KEY-----\\n....\\n-----END PRIVATE KEY-----\\n",
	"client_email": "firebase-adminsdk@example.com",
	"client_id": "123",
	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
	"token_uri": "https://oauth2.googleapis.com/token",
	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/example",
	"universe_domain": "googleapis.com"
}
*/
`}
				</CodeHighlighter>
			</div>
			<div className="p-4 flex justify-center">
				<Button asChild>
					<Link href={'/'} className="flex gap-2 items-center"><FaArrowLeft/> Home</Link>
				</Button>
			</div>
		</div>
	);
}
