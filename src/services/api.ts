import axios from "axios";

type ImageData = {
  ID: number;
  alt?: string;
  url: string;
};

type ACFData = {
  banner: ImageData;
  ingredients: string;
  cook_tutorial: string;
  servings: string;
  resume: string;
  side_image: ImageData;
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
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000/wp-json/wp/v2/receitas"
      : "https://www.ovostinoco.com.br/api/wp-json/wp/v2/receitas",
});
export const productsAPI = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000/wp-json/wp/v2/produtos"
      : "https://www.ovostinoco.com.br/api/wp-json/wp/v2/produtos",
});

export async function getRecipes() {
  const response = recipesAPI
    .get("")
    .then((res) => res.data)
    .catch(() => []);

  return response;
}

export async function getRecipeItem(id: number) {
  const response = recipesAPI
    .get(`/${id}/`)
    .then((res): Recipes => res.data)
    .catch((err) => err);

  return response;
}

export async function getProducts() {
  const response = productsAPI
    .get("")
    .then((res) => res.data)
    .catch(() => []);

  return response;
}
