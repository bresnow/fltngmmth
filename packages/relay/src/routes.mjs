
import Gun from "gun"
import { Router } from "express";
export const gun = Gun({
  peers: ["http://front_app:3333/gun"]})
const routes = new Router();
const xR = gun.get('EXPRESS_RESPONSE_ONE')

routes.get("/", (req, res) => xR.on(({html})=>{
  res.send(html)
}));

export default routes;
