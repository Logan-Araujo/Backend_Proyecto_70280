import { Router } from "express";

const cookiesRouter = Router();

cookiesRouter.get("/create", (req, res, next)=> {
    try {
        const message = "COOKIE SET"
        return res.status(201).cookie("modo", "oscuro").cookie("rolDeUsuario", "admin", { maxAge: 20000 }).json({ message })
    } catch (error) {
        return next(error);
    }
})

cookiesRouter.get("/read", (req, res, next)=> {
    try {
        const cookies = req.cookies
        console.log(cookies);
        console.log(cookies["modo"]);
        const message = "COOKIES READ"
        return res.status(200).json({ message })
    } catch (error) {
        return next(error);
    }
})

cookiesRouter.get("/destroy/:cookieAborrar", (req, res, next)=> {
    try {
        const { cookieAborrar } = req.params
        const message = "COOKIE DELETED"
        return res
        .status(200)
        .clearCookie(cookieAborrar)
        .json({ message })
    } catch (error) {
        return next(error);
    }
})

cookiesRouter.get("/signed", (req, res, next)=> {
    try {
        const message = "COOKIE SET (SIGNED)"
        return res.status(201).cookie("nombre", "logan", { signed: true }).json({ message })
    } catch (error) {
        return next(error);
    }
})

cookiesRouter.get("/read-signed", (req, res, next)=> {
    try {
        const cookies = req.cookies
        const signedCookies = req.signedCookies
        return res.status(200).json({ cookies, signedCookies })
    } catch (error) {
        return next(error);
    }
})

export default cookiesRouter