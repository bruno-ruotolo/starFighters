import { Router } from "express";

import { compareStars } from "../controllers/battleController.js";
import { battleValidate } from "../middlewares/battleValidate.js";

const battleRouter = Router();

battleRouter.post("/battle", battleValidate, compareStars);

export default battleRouter;