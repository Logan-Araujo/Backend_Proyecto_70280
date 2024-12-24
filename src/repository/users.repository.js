import UserDTO from "../dto/users.dto.js";
import dao from "../dao/index.factory.js";
const { UsersManager } = dao

class UserRepository {
    createRepository = async (data) => {
        data = new UserDTO(data);
        return await UsersManager.create(data);
    }
    readRepository = async () => await UsersManager.read(data);
    updateRepository = async (id, data) => await UsersManager.update(id, data);
    destroyRepository = async (id) => await UsersManager.destroy(id);
}

const repository = new UserRepository();
const { createRepository, readRepository, updateRepository, destroyRepository } = repository;
export { createRepository, readRepository, updateRepository, destroyRepository };