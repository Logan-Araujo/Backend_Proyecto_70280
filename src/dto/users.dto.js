import argsUtil from "../utils/args.util.js";
import crypto from "crypto";

const { persistence } = argsUtil;

class UserDTO {
    constructor(data) {
        persistence !== "mongo" && (this._id = crypto.randomBytes(12).toString("hex"));
        this.name = data.name
        this.email = data.email
        this.password = data.password
        this.role = data.role || "USER"
        this.isOnline = data.isOnline || false;
        persistence !== "mongo" && (this.createdAt = new Date());
        persistence !== "mongo" && (this.updatedAt = new Date());
    }
}

export default UserDTO;