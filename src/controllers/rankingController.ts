import { Request, Response } from "express";
import { rankingRepository } from "../repositories/rankingRepository.js";

export async function ranking(req: Request, res: Response) {

  const result = await rankingRepository.getRank()
  res.status(200).send({ fighters: result });
}
