import ProductController from "./controller/ProductController.mjs";
import FakeApiController from "./controller/FakeApiController.mjs";
import {
  validateProductStore,
  validateProductUpdate,
  validateProductId,
} from "./validators/products/index.mjs";

import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => res.json({ ok: true }));
routes.get("/fake", FakeApiController.getFakeData);

routes.get("/products/", ProductController.index);
routes.get("/products/:id", validateProductId, ProductController.find);

routes.post("/products/", validateProductStore, ProductController.store);
routes.put("/products/:id", validateProductUpdate, ProductController.update);
routes.delete("/products/:id", validateProductId, ProductController.delete);

export default routes;
