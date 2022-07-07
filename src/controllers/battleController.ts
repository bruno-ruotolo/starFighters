import { Request, Response } from "express";
import { battleServices } from "../services/battleServices.js";
import { userServices } from "../services/userServices.js";

export async function compareStars(req: Request, res: Response) {
  const { firstUser, secondUser }: { firstUser: string, secondUser: string } = req.body

  const result = await battleServices.compareStarsService(firstUser, secondUser)
  res.status(200).send(result);
}











  // async function updateResult(user: string) {
  //   if (user === result.winner && !result.draw) {
  //     await db.query(`UPDATE fighters SET wins = wins + 1 WHERE username = $1`, [user])
  //   }

  //   if (user === result.loser && !result.draw) {
  //     await db.query(`UPDATE fighters SET losses = losses + 1 WHERE username = $1`, [user])
  //   }

  //   if (result.draw) {
  //     await db.query(`UPDATE fighters SET draws = draws + 1 WHERE username = $1`, [user])
  //   }
  // };