import express from "express";
import routes from "./routes.mjs";
import Gun from "gun";
import process from "process"
let port = process.env.RELAY_PORT ?? 3000;
const app = express();
app.use(express.json());
app.use(routes);

const server = app.listen(port, () =>
  console.log(`Server Running in Port ${port}`)
);

const gun = Gun({ peers: ["http://app:3333/gun"], web: server });

gun
  .get("test")
  .get("cross")
  .once((data) => console.log(data));

  await import('./proxy.mjs')