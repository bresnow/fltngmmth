import type { Params } from "@remix-run/react";
import type { IGunInstance, IGunInstanceRoot, IGunUserInstance, ISEAPair, IGun } from "gun";
declare global {
    interface Window {
        Gun: IGun;
        gun: IGunInstance;
    }
}
export interface LoaderContext {
    ({ request, params }: {request: Request, params: Params}) :Promise<{
        authorizedDB(opts?: { keypair: ISEAPair }): {
            db: IGunUserInstance<any, any, any, IGunInstanceRoot<any, IGunInstance<any>>>;
            gun: IGunInstance<any>;
        }
    }>
}