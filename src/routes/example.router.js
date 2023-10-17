import Express from "express";
import ExampleControl from "../controllers/example.control.js";
const ExampleRouter = Express.Router();


ExampleRouter.get('/', ExampleControl.index)


export default ExampleRouter

