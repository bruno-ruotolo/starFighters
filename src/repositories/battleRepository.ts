import db from "../../config/db.js"

async function getUser(user: string) {
  const { rows } = await db.query(`SELECT * FROM fighters WHERE username = $1`, [user]);
  return rows[0];
}

async function insertUser(user: string) {
  await db.query(
    `INSERT INTO fighters (username, wins, losses, draws) 
    VALUES ($1, $2, $3, $4)`,
    [user, 0, 0, 0]);
};

async function updateRanking(user: string, result: string) {
  await db.query(
    `UPDATE fighters 
    SET ${result} = ${result} + 1 
    WHERE username = $1`,
    [user])
};

export const battleRepository = {
  getUser,
  insertUser,
  updateRanking
}