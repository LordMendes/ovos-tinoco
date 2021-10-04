import axios from "axios";

export const recipesAPI = axios.create({
  baseURL: "http://localhost:8000/wp-json/wp/v2/receitas",
});

export async function getRecipes() {
  const response = recipesAPI
    .get("")
    .then((res) => res.data)
    .catch((err) => err);

  return response;
}
