import { NextFunction, Request, Response } from "express";

import { battleSchema } from "../schemas/battleSchema.js";

export function battleValidate(req: Request, res: Response, next: NextFunction) {
  const reqBody = req.body

  const { error } = battleSchema.validate(reqBody, { abortEarly: false });

  if (error) return res.status(422).send(error.details.map(detail => detail.message));

  next();
}