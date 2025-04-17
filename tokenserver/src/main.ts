import { config } from "dotenv-flow";
import * as dotenv_expand from "dotenv-expand";
import { CustomExpressServer } from "./CustomExpressServer";
import { ServiceAuthorizationClient } from "@itwin/service-authorization";

(async () => {
  const envResult = config();
  if (envResult.error) {
    throw envResult.error;
  }
  dotenv_expand(envResult);

  if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.CLIENT_SCOPE) {
    //throw new Error("CLIENT_ID and CLIENT_SECRET are required");
  }

  try {
    // Setup a client using the client credentials workflow.
    const authClient = new ServiceAuthorizationClient({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
      scope: process.env.CLIENT_SCOPE!,
    }); 

    const server = new CustomExpressServer(authClient);
    console.log(process.env.CLIENT_ID,process.env.CLIENT_SECRET,process.env.CLIENT_SCOPE);
    await server.initialize(process.env.PORT ?? 3001);
    console.log("READY");
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
})();
