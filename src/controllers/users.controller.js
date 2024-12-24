import { createService, readService, updateService, destroyService } from "../services/users.service.js";

async function createUser(req, res) {
    const message = "User created successfully";
    const data = req.body;
    const response = await createService(data)
    return res.status(201).json({ response, message });
  }
  async function readUsers(req, res) {
    const message = "Users found successfully";
    const response = await readService()
    return res.status(200).json({ response, message });
  }
  async function updateUser(req, res) {
    const { id } = req.params;
    const data = req.body;
    const message = "User updated successfully";
    const response = await updateService(id, data)
    return res.status(200).json({ response, message });
  }
  async function destroyUser(req, res) {
    const { id } = req.params;
    const message = "User deleted successfully";
    const response = await destroyService(id)
    return res.status(200).json({ response, message });
  }

export { createUser, readUsers, updateUser, destroyUser };