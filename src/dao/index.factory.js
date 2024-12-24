import argsUtil from "../utils/args.util.js";
import dbConnect from "../utils/db.Connect.utils.js";
import envUtil from "../utils/env.util.js";

const { persistence } = argsUtil;

let dao = {}

switch (persistence) {
    case "memory":
        console.log("Conected to memory system");
        const { default: ProductsManagerMemory } = await import("./memory/ProductsManager.memory.js")
        const { default: UsersManagerMemory } = await import("./memory/UsersManager.memory.js")
        const { default: CartsManagerMemory } = await import("./memory/CartsManager.memory.js")
        dao = {
            ProductsManager: ProductsManagerMemory,
            UsersManager: UsersManagerMemory,
            CartsManager: CartsManagerMemory
        }
        break;
    case "fs":
        console.log("Conected to file system");
        const { default: ProductsManagerFS } = await import("./fs/ProductsManager.fs.js")
        const { default: UsersManagerFS } = await import("./fs/UsersManager.fs.js")
        const { default: CartsManagerFS } = await import("./fs/CartsManager.fs.js")
        dao = {
            ProductsManager: ProductsManagerFS,
            UsersManager: UsersManagerFS,
            CartsManager: CartsManagerFS
        }
        break;
    default:
        console.log("Conected to mongo database");
        dbConnect()
        const { default: ProductsManagerMongo } = await import("./mongo/managers/products.manager.js")
        const { default: UsersManagerMongo } = await import("./mongo/managers/user.manager.js")
        const { default: CartsManagerMongo } = await import("./mongo/managers/carts.manager.js")
        dao = {
            ProductsManager: ProductsManagerMongo,
            UsersManager: UsersManagerMongo,
            CartsManager: CartsManagerMongo
        }
        break;
}

export default dao;