import { useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useRouteMatch, useHistory } from "react-router-dom";
import { getRecipeItem } from "../../services/api";
import { RecipeItemView } from "./indexView";

type ACFData = {
  banner: {
    ID: number;
    alt?: string;
    url: string;
  };
  ingredients: string;
  preparation: string;
  people_amount: string;
  resume?: string;
  side_image: {
    ID: number;
    alt?: string;
    url: string;
  }
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
  const { push } = useHistory();

  useEffect(() => {
    getRecipeItem(id).then((res) => {
      if (!res.message) setContent(res);
      else {
        push("/error");
      }
    });
  }, [id, push]);

  return <RecipeItemView isWideScreen={isWideScreen} content={content} />;
}
