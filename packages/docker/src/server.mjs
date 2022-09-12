import "dotenv/config";
import express from "express";
import routes from "./routes.mjs";
import Gun from "gun";
let port = process.env.PORT ?? 3000;
const app = express();
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server Running in Port ${port}`));

const gun = Gun({ peers: ["http://app:3333/gun"] });

gun
  .get("test")
  .get("cross")
  .once((data) => console.log(data));
