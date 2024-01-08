# JSON/String to Base64 Conversion Tool

I created this tool so I can use it to store some sensitive JSON data in my environment variables when I deploy my projects. Feel free to use it.

## Overview

The JSON/String to Base64 Conversion Tool is a versatile utility designed to simplify the encoding and decoding of data. This tool supports the conversion of both JSON data and plain text strings into their corresponding Base64-encoded formats. Additionally, it provides capability to decode Base64 back to the original string or JSON data. Whether you need to obfuscate sensitive information, serialize data for web applications, or enable cross-platform data interchange, this tool is a user-friendly solution.

## Features

-   Encode JSON data or plain text strings to Base64.
-   Decode Base64 back to the original string or JSON data.
-   Works in the browser. Your data is safe

## Usage

**Conversion to base64:** Type or paste your data in the "JSON to BASE64" tab to encode it. Click the copy button to copy the generated string.

**Conversion from base64:** Paste any base64 encoded string in the "Base64 to JSON" tab to decode it. Click the copy button to copy the generated output.


## Example Use Case

Here is an example json file from firebase service account credentials. It has all our sensitive information including private key. We can't commit this to our github repo but we need to access this data in our deployed application.

```json
{
  "type": "service_account",
  "project_id": "donis-next-firebase-starter",
  "private_key_id": "12345",
  "private_key": "-----BEGIN PRIVATE KEY-----\n....\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk@example.com",
  "client_id": "123",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/example",
  "universe_domain": "googleapis.com"
}
```

Lets convert this to a base64 string using this tool so we can store it in our .env

```
# Firebase Service Account Cert
FIREBASE_CERT="IntcbiAgXCJ0eXBlXCI6IFwic2VydmljZV9hY2NvdW50XCIsXG4gIFwicHJvamVjdF9pZFwiOiBcImRvbmlzLW5leHQtZmlyZWJhc2Utc3RhcnRlclwiLFxuICBcInByaXZhdGVfa2V5X2lkXCI6IFwiMTIzNDVcIixcbiAgXCJwcml2YXRlX2tleVwiOiBcIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxcbi4uLi5cXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXFxuXCIsXG4gIFwiY2xpZW50X2VtYWlsXCI6IFwiZmlyZWJhc2UtYWRtaW5zZGtAZXhhbXBsZS5jb21cIixcbiAgXCJjbGllbnRfaWRcIjogXCIxMjNcIixcbiAgXCJhdXRoX3VyaVwiOiBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoXCIsXG4gIFwidG9rZW5fdXJpXCI6IFwiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW5cIixcbiAgXCJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHNcIixcbiAgXCJjbGllbnRfeDUwOV9jZXJ0X3VybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZXhhbXBsZVwiLFxuICBcInVuaXZlcnNlX2RvbWFpblwiOiBcImdvb2dsZWFwaXMuY29tXCJcbn0i"
```

Now in our code, when we need to access this json object, we need only the environment variable. Here is how we convert it back using javascript:

```js
const converted = JSON.parse(atob(process.env.FIREBASE_CERT));
console.log(converted);
/* Result:
{
	"type": "service_account",
	"project_id": "donis-next-firebase-starter",
	"private_key_id": "12345",
	"private_key": "-----BEGIN PRIVATE KEY-----\n....\n-----END PRIVATE KEY-----\n",
	"client_email": "firebase-adminsdk@example.com",
	"client_id": "123",
	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
	"token_uri": "https://oauth2.googleapis.com/token",
	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/example",
	"universe_domain": "googleapis.com"
}
*/
```

