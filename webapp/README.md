
## Environment Variables

Prior to running the app, Copy .env_template and create .env file
Add the values for below variables:
```
# ---- Authorization Client Settings ----
IMJS_AUTH_CLIENT_CLIENT_ID=""
IMJS_AUTH_CLIENT_REDIRECT_URI=""
IMJS_AUTH_CLIENT_LOGOUT_URI=""
IMJS_AUTH_CLIENT_SCOPES=""
```

- You can generate a [test client](https://developer.bentley.com/tutorials/web-application-quick-start/#3-register-an-application) to get started.

- Viewer expects the `itwin-platform` scope to be set.

- The application will use the path of the redirect URI to handle the redirection, it must simply match what is defined in your client.

- When you are ready to build a production application, [register here](https://developer.bentley.com/register/).

You should also add a valid iTwinId for your user in the this file:

```
# ---- Test ids ----
IMJS_ITWIN_ID = ""
```

- For the IMJS_ITWIN_ID variable, you can use the id of one of your existing iTwins. You can obtain their ids via the [iTwin REST APIs](https://developer.bentley.com/apis/itwins/operations/get-itwin/).

## Install dependencies: 
### `npm install`

## Run the app:
### `npm run start`
