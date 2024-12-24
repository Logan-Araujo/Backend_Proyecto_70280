import { createService, readService, updateService, destroyService } from "../services/carts.service.js";

async function createCart(req, res) {
    const message = "Cart created successfully";
    const data = req.body;
    const response = await createService(data)
    return res.status(201).json({ response, message });
  }
  async function readCartsFromUser(req, res) {
    const { user_id } = req.params;
    const message = "Cart found successfully";
    const response = await readService(user_id)
    return res.status(200).json({ response, message });
  }
  async function updateCart(req, res) {
    const { id } = req.params;
    const data = req.body;
    const message = "Cart updated successfully";
    const response = await updateService(id, data);
    return res.status(200).json({ response, message });
  }
  async function destroyCart(req, res) {
    const { id } = req.params;
    const message = "Cart deleted successfully";
    const response = await destroyService(id);
    return res.status(200).json({ response, message });
  }

export { createCart, updateCart, destroyCart, readCartsFromUser };