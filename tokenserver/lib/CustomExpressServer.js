"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomExpressServer = void 0;
const express = require("express");
class CustomExpressServer {
    constructor(_client) {
        this._client = _client;
        this._app = express();
    }
    _configureHeaders() {
        // enable CORS for all apis
        this._app.all("/**", (_req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Correlation-Id, X-Session-Id, X-Application-Id, X-Application-Version, X-User-Id, X-Protocol-Version");
            next();
        });
    }
    _configureRoutes() {
        this._app.get("/getToken", async (req, res) => this._getToken(req, res));
    }
    /**
     * Configure the express application with necessary headers, routes, and middleware, then starts listening on the given port.
     * @param port The port to listen on
     */
    async initialize(port) {
        this._configureHeaders();
        this._configureRoutes();
        this._app.set("port", port);
        return new Promise((resolve) => {
            const server = this._app.listen(this._app.get("port"), () => resolve(server));
        });
    }
    async _getToken(_req, res) {
        try {
            const token = await this._client.getAccessToken();
            res.send(token);
        }
        catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
}
exports.CustomExpressServer = CustomExpressServer;
//# sourceMappingURL=CustomExpressServer.js.map