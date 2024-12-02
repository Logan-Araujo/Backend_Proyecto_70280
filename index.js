import "dotenv/config.js"
import express from 'express';
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import session from "express-session";
//import sessionFileStore from "session-file-store";
import MongoStore from "connect-mongo";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import indexRouter from "./src/routers/index.router.js";
import dbConnect from "./src/utils/db.Connect.utils.js";

const server = express();
const port = process.env.PORT
const ready = ()=> {
    console.log("Server activo en port "+port);
    dbConnect()
}
server.listen(port, ready)

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended : true }));
server.use(express.static("public"))
server.use(morgan("dev"));

//config de cookies
server.use(cookieParser(process.env.SECRET_KEY));

//config de session con memory
/*server.use(session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000},
}))*/

//config de session con file storage
/*const FileStore = sessionFileStore(session)
server.use(session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    store: new FileStore({ path: "./src/data/fs/sessions", ttl: 10, retries: 2 }),
}))*/

//config de session con mongo storage
server.use(session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongoUrl: process.env.MONGO_LINK, ttl: 60*60*24 })
}))

// Routes
server.use(indexRouter);
server.use(errorHandler);
server.use(pathHandler);