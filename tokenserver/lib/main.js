"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_flow_1 = require("dotenv-flow");
const dotenv_expand = require("dotenv-expand");
const CustomExpressServer_1 = require("./CustomExpressServer");
const service_authorization_1 = require("@itwin/service-authorization");
(async () => {
    var _a;
    const envResult = dotenv_flow_1.config();
    if (envResult.error) {
        throw envResult.error;
    }
    dotenv_expand(envResult);
    if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.CLIENT_SCOPE) {
        //throw new Error("CLIENT_ID and CLIENT_SECRET are required");
    }
    try {
        // Setup a client using the client credentials workflow.
        const authClient = new service_authorization_1.ServiceAuthorizationClient({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            scope: process.env.CLIENT_SCOPE,
        });
        const server = new CustomExpressServer_1.CustomExpressServer(authClient);
        console.log(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.CLIENT_SCOPE);
        await server.initialize((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001);
        console.log("READY");
    }
    catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
})();
//# sourceMappingURL=main.js.map