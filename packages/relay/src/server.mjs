import express from "express";
import routes from "./routes.mjs";
import Gun from "gun";
import process from "process";
import { $ } from 'zx'
let port = process.env.RELAY_PORT ?? 3000;
const app = express();
app.use(express.json());
app.use(routes);

const server = app.listen(port, () =>
  console.log(`Server Running in Port ${port}`)
);

const gun = Gun({ peers: ["http://front_app:3333/gun"], web: server });

let deploy = gun.get('deployment_SOCKET')

deploy.once(async ({ line }) => {
  if (line) {
    try {
      let run = await $`${line}`
      let out = run.stdout.toString()
      deploy.put({ out: out.toString() })
      gun.get('OUT').put({ out: out.toString() })
    } catch (e) {

      deploy.put({ err: e.toString() })
      gun.get('OUT').put({ err: e.toString() })
    }

  }
})