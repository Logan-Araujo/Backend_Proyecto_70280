import CustomRouter from "../../utils/CustomRouter.utils.js";
import { register, login, signout, online, onlineToken, google } from "../../controllers/sessions.controller.js"
import passportCb from "../../middlewares/passportCb.mid.js";

class SessionsApiRouter extends CustomRouter {
  constructor() {
    super()
    this.init() 
  }
  init = ()=> {
    this.create("/register", ["PUBLIC"], passportCb("register"), register);
    this.create("/login", ["PUBLIC"], passportCb("login"), login);
    this.create("/signout", ["USER", "ADMIN"], passportCb("signout"), signout);
    this.create("/online", ["USER", "ADMIN"], passportCb("online"), onlineToken);
    this.read("/google", ["PUBLIC"], passportCb("google", { scope: ["email", "profile"] }));
    this.read("/google/cb", ["PUBLIC"], passportCb("google"), google);
  }
}

const sessionsApiRouter = new SessionsApiRouter
export default sessionsApiRouter.getRouter();