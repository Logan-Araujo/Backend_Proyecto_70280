import { createService, readService, updateService, destroyService } from "../services/products.service.js";

async function createProduct(req, res) {
    const message = "Product created successfully";
    const data = req.body;
    const response = await createService(data)
    return res.json201(response, message);
  }
  async function readProducts(req, res) {
    const message = "Product found successfully";
    const response = await readService()
    if (response.length > 0) {
    return res.json200(response, message);
    }
    return res.json404();
  }
  async function updateProduct(req, res) {
    const { id } = req.params;
    const data = req.body;
    const message = "Product updated successfully";
    const response = await updateService(id, data)
    if (response) {
      return res.json200(response, message);
      }
      return res.json404();
  }
  async function destroyProduct(req, res) {
    const { id } = req.params;
    const message = "Product deleted successfully";
    const response = await destroyService(id)
    if (response) {
      return res.json200(response, message);
      }
      return res.json404();
  }

export { createProduct, readProducts, updateProduct, destroyProduct}