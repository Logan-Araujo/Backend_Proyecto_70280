import { readByEmail } from "../dao/mongo/managers/user.manager.js";

async function isValidUser(req, res, next) {
        const { email, password } = req.body
        const one = await readByEmail(email);
        if (one) {
            return next()
        }
        const error = new Error("Invalid password")
        error.statusCode = 401
        throw error
}

export default isValidUser;