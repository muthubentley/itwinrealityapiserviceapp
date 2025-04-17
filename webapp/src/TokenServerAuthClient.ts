import {
    AccessToken,
    BeEvent,
    BentleyError,
} from "@itwin/core-bentley";
import { ViewerAuthorizationClient } from "@itwin/web-viewer-react";
import { BentleyStatus } from "@itwin/core-common";

export class TokenServerAuthClient implements ViewerAuthorizationClient {
    public readonly onAccessTokenChanged = new BeEvent<
        (token: AccessToken) => void
    >();
    protected _accessToken?: AccessToken;

    public async initialize() {
        // defaults to the localhost version of the token server
        const tokenUrl = process.env.IMJS_TOKENSERVER_URL ?? "";
        if (tokenUrl !== "") {


            try {
                const res = await fetch(tokenUrl);
                if (res) {
                    const accessToken = await res.text();
                    this._accessToken = accessToken;
                    this.onAccessTokenChanged.raiseEvent(accessToken);
                }
            } catch (err) {
                console.log(err);
            }
        }
        setTimeout(() => {
            this.initialize()
                .catch((error) => {
                    throw new BentleyError(BentleyStatus.ERROR, error);
                });
        }, (1000 * 60 * 60));
    }

    public async getAccessToken(): Promise<AccessToken> {
        if (!this._accessToken) {
            throw new BentleyError(BentleyStatus.ERROR, "Cannot get access token");
        }
        return this._accessToken;
    }
}