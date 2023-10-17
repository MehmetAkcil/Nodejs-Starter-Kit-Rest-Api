import Express from "express";
import ExampleRouter from "./example.router.js";
import express from "express";

const router = Express.Router();

router.use('/public', express.static('public'));
router.use('/uploads', express.static('public/uploads'));
router.use("/", ExampleRouter)

export default (app) => {
    app.use('/', router)
}

