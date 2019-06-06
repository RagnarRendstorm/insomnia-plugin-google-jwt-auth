# insomnia-plugin-google-jwt-auth

Authentication plugin for Insomnia REST Client for Google service accounts.

## Installation

Install the `insomnia-plugin-google-jwt-auth` plugin from Preferences > Plugins.

## Usage

Download the JSON for your service account from Google.

Check the scopes you need to authorize.

Add Google API keys by setting a `google-jwt-auth` environment variable.

```json
{
  "google-jwt-auth": {
    "client_email": "[CLIENT EMAIL FROM JSON]",
    "private_key": "[PRIVATE KEY FROM JSON]",
    "scopes": ["[REQUIRED SCOPES]"]
  }
}
```
