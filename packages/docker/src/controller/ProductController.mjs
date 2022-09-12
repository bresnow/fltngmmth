import { v4 as uuidv4 } from "uuid";
import products from "../model/productModel.mjs";

class ProductController {
  index(req, res) {
    res.json({ item: products });
  }
  find(req, res) {
    const id = req.params.id;
    const product = products.find((p) => p.id == id);
    res.json({ item: product });
  }

  store(req, res) {
    const product = req.body;
    product.id = uuidv4();
    products.push(product);
    res.json({ item: products });
  }

  update(req, res) {
    const id = req.params.id;
    const product = req.body;
    product.id = id;

    const index = products.findIndex((p) => p.id == id);
    products[index] = product;
    res.json({ item: products });
  }

  delete(req, res) {
    const id = req.params.id;
    const index = products.findIndex((p) => p.id == id);
    products.splice(index, 1);
    res.json({ item: products });
  }
}

export default new ProductController();
