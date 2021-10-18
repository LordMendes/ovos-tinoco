import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavbarContextProvider } from "./contexts/NavbarDropdownMenuContext";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import ContactPage from "./pages/contato";
import Home from "./pages/home";
import InstitutionalPage from "./pages/institucional";
import ProductPage from "./pages/produtos";
import RecipePage from "./pages/receitas";
import RecipeItem from "./pages/ReceitaItem";
import Fonts from "./styles/fonts";
import { theme } from "./styles/theme";
import { useEffect, useState } from "react";
import { getRecipes, getProducts } from "./services/api";
import MockPage from "./pages/MockPage";

type ImageData = {
  ID: number;
  alt?: string;
  url: string;
};

type ACFRecipeData = {
  banner: ImageData;
  ingredients: string;
  cook_tutorial: string;
  servings: string;
  resume: string;
  side_image: ImageData;
};

type Recipes = {
  id: number;
  acf: ACFRecipeData;
  slug: string;
  title: {
    rendered: string;
  };
};


function App() {
  const [recipes, setRecipes] = useState<Recipes[]>([]);

  console.log(process.env.NODE_ENV)
  useEffect(() => {
    getRecipes().then((res) => setRecipes(res));
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Router>
        <NavbarContextProvider>
          <ProductsContextProvider>
            <Switch>
              <Route path="/" exact component={MockPage} />
              <Route path="/main" exact component={Home} />
              <Route
                path="/institucional"
                exact
                component={InstitutionalPage}
              />
              <Route path="/contato" exact component={ContactPage} />
              <Route path="/receitas" exact>
                <RecipePage recipes={recipes} />
              </Route>
              <Route path="/produtos" exact>
                <ProductPage />
              </Route>
              <Route path={`/receitas/:id`}>
                <RecipeItem />
              </Route>
            </Switch>
          </ProductsContextProvider>
        </NavbarContextProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
