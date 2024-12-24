import dao from "../dao/index.factory.js";
const { UsersManager } = dao

async function register(req, res) {
    const { _id } = req.user;
    const message = "User registered successfully"
    //return res.status(201).json({ message, user_id: _id });
    return res.json201(_id, message);
}
async function login(req, res) {
    const { token } = req.user;
    const opts = { maxAge: 60*60*24*7, httpOnly: true }
    const message = "User logged in successfully"
    const response = "Nice login"
    return res
      .cookie("token", token, opts)
      .json200(response, message);
}
function signout(req, res) {
    const response = "Nice signout"
    const message = "User signed out successfully"
    return res
      .clearCookie("token")
      .json200(response, message);
}
async function online(req, res) {
    const { user_id } = req.session;
    const one = await UsersManager.readById(user_id);
    if (req.session.user_id) {
    const message = one.email + " is online"
    const response = true
    return res.json200(response, message)
    } else {
        const message = "User is not online"
      return res.json400(message);
    }
}
function google(req, res) {
    return res
      .status(200)
      .json({ message: "User logged in successfully", token: req.token });
}
async function onlineToken(req, res) {
    return res.status(200).json({
      message: req.user.email.toUpperCase() + " is online",
      online: true,
    });
}

export { register, login, signout, online, onlineToken, google };