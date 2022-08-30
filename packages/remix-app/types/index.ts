import type { DataFunctionArgs } from "@remix-run/server-runtime";
import type { IGunInstance, IGunInstanceRoot, IGunUserInstance, ISEAPair } from "gun";

export interface LoaderContext {
    ({ request, params }: DataFunctionArgs): Promise<{
        authorizedDB(opts?: { keypair: ISEAPair }): {
            db: IGunUserInstance<any, any, any, IGunInstanceRoot<any, IGunInstance<any>>>;
            gun: IGunInstance<any>;
        }
    }>
}