import type { Params } from "@remix-run/react";
import { DataFunctionArgs } from "@remix-run/server-runtime";
import type { IGunInstance, IGunInstanceRoot, IGunUserInstance, ISEAPair, IGun } from "gun";
declare global {
    interface Window {
        Gun: IGun;
        gun: IGunInstance;
    }
}
export interface LoaderContext {
    (): Promise<{
        authorizedDB(): {
            gun: IGunInstance<any>;
        };
        SECRET_KEY_ARRAY: string[] | [];
    }>
}