import { NextFunction, Request, Response } from "express";

export default function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.statusCode === 422) {
    res.status(422).send("Unprocessable Entity");
  };


  if (error.statusCode) {
    res.status(404).send("Not Found");
  }

  res.status(500).send(error);
}