import axios from "axios";

type ACFData = {
  banner: {
    ID: number;
    alt?: string;
    url: string;
  };
  ingredientes: string;
  modo_de_preparo: string;
  rendimento: string;
  resumo?: string;
};

type Recipes = {
  id: number;
  acf: ACFData;
  slug: string;
  title: {
    rendered: string;
  };
};

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

export async function getRecipeItem(id: number) {
  const response = recipesAPI
    .get(`/${id}/`)
    .then((res): Recipes => res.data)
    .catch(err => err)

  return response;
}
