import axios from "axios"

async function getUser(user: string) {
  try {
    const userURL = `http://api.github.com/users/${user}`;
    await axios.get(userURL)
  } catch (e) {
    console.log(e)
    throw { statusCode: e.response.status }
  }
}

async function getUserRespositories(user: string) {
  const reposURL = `https://api.github.com/users/${user}/repos`;
  try {
    const repositoriesUser = await axios
      .get(reposURL)
    return repositoriesUser.data;
  } catch (e) {
    throw { statusCode: 404 }
  }
}

export const userServices: any = {
  getUser,
  getUserRespositories
}