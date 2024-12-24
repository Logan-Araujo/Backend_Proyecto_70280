import CustomRouter from "../../utils/CustomRouter.utils.js";
import usersApiRouter from "./users.api.js"
import cartsApiRouter from "./carts.api.js"
import productsApiRouter from "./products.api.js";
import cookiesRouter from "./cookies.api.js";
import sessionsApiRouter from "./sessions.api.js";
import sum from "../../utils/process.util.js";
import { fork } from "child_process";

class ApiRouter extends CustomRouter {
    constructor() {
        super()
        this.init()
    }
    init = ()=> {
        this.use("/users", ["PUBLIC"], usersApiRouter)
        this.use("/carts", ["PUBLIC"], cartsApiRouter)
        this.use("/products", ["PUBLIC"], productsApiRouter)
        this.use("/cookies", ["PUBLIC"], cookiesRouter)
        this.use("/sessions", ["PUBLIC"], sessionsApiRouter)
        this.read("/sum", ["PUBLIC"], (req, res)=> {
            //const response = sum()
            //const message = "Sum calculated successfully"
            //return res.json200(response, message)
            const child = fork("./src/utils/process.util.js");
            child.send("start");
            child.on("message", response => {
                const message = "Sum calculated successfully";
                return res.json200(response, message);
            });
        });
    };
}

const apiRouter = new ApiRouter()
export default apiRouter.getRouter()