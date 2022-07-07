import db from "../../config/db.js"

async function getRank() {
  const { rows } = await db.query(
    `SELECT * 
    FROM fighters
    ORDER BY wins DESC, draws DESC`
  );
  return rows;
}

export const rankingRepository = {
  getRank
}