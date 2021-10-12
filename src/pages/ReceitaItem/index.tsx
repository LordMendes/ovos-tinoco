import { useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeItem } from "../../services/api";
import ErrorPage from "../ErrorPage";
import { RecipeItemView } from "./indexView";

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

export default function RecipeItem() {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });

  const { id } = useParams<any>();

  const [content, setContent] = useState<Recipes | any>({} as Recipes);
  const [error404Page, setError404Page] = useState(false);

  useEffect(() => {
    getRecipeItem(id).then((res) => {
      if (!res.message) setContent(res);
      else {
        setError404Page(true);
      }
    });
  }, [id]);

  return error404Page ? (
    <ErrorPage />
  ) : (
    <RecipeItemView isWideScreen={isWideScreen} content={content} />
  );
}
