
import { battleRepository } from "../repositories/battleRepository.js";
import { userServices } from "./userServices.js";

export async function compareStarsService(firstUser: string, secondUser: string) {
  let result: any = {};

  await userServices.getUser(firstUser);
  await userServices.getUser(secondUser);
  const firstUserRepos = await userServices.getUserRespositories(firstUser);
  const secondUserRepos = await userServices.getUserRespositories(secondUser);

  const firstUserStart = getUserStarsNumber(firstUserRepos);
  const secondUserStart = getUserStarsNumber(secondUserRepos);

  if (firstUserStart > secondUserStart) {
    result = { winner: firstUser, loser: secondUser, draw: false }
  }

  if (firstUserStart < secondUserStart) {
    result = { winner: secondUser, loser: firstUser, draw: false }
  }

  if (firstUserStart === secondUserStart) {
    result = { winner: null, loser: null, draw: true }
  };

  await insertUser(firstUser);
  await insertUser(secondUser);

  updateResult(firstUser);
  updateResult(secondUser);


  function getUserStarsNumber(userRepository: any[]) {
    let userStartCount = 0;
    userRepository.forEach(({ stargazers_count }) => {
      userStartCount += stargazers_count;
    });

    return userStartCount;
  };

  async function insertUser(user: string) {
    const userResult = await battleRepository.getUser(user);

    if (!userResult) await battleRepository.insertUser(user);
  };

  async function updateResult(user: string) {
    if (user === result.winner && !result.draw) await battleRepository.updateRanking(user, "wins");

    if (user === result.loser && !result.draw) await battleRepository.updateRanking(user, "losses");

    if (result.draw) await battleRepository.updateRanking(user, "draws");
  };
  return result;
}


export const battleServices: any = {
  compareStarsService
}