import {
  Flex,
  Box,
  useBreakpointValue,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";
import { HeaderController } from "../../components/Header/HeaderController";
import { Footer } from "../../components/Footer";
import { SubtitleImageCard } from "../../components/SubtitleImageCard";
import { HeaderFooter } from "../../components/HeaderFooter";
import { RecipeItemCard } from "./components/RecipeItemCard";
import { Container } from "../../components/Container";
import { useEffect, useState } from "react";
import { getRecipes, itemPerPage } from "../../services/api";

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

export default function RecipePage() {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });

  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasNextPageResponse, setHasNextPageResponse] = useState(false);

  useEffect(() => {
    getRecipes(page).then((res) => {
      if (res.length === itemPerPage) {
        setHasNextPageResponse(true);
      }
      setRecipes(res);
    });
  }, []);

  async function handleLoadNextPage() {
    setLoading(true);
    const response = await getRecipes(page + 1);
    if (response.length < itemPerPage) {
      setHasNextPageResponse(false);
    }
    setPage(page + 1);
    setRecipes([...recipes, ...response]);
    setLoading(false);
  }

  return (
    <Container>
      <NavbarMobileScreen />
      <HeaderController />
      <Box as="main" h="100%" width="100%" maxW="1920px" mb="28">
        <SubtitleImageCard
          title="RECEITAS"
          imageURL="/static/images/banner-ovos-tinoco-receitas.png"
        />
        {isWideScreen ? <HeaderFooter /> : null}
        <Flex
          direction="column"
          align="center"
          justifyContent="center"
          alignItems="center"
        >
          <SimpleGrid
            columns={[1, 1, 2, 3]}
            spacing="10"
            mt="10"
            px="8"
            w="100%"
            maxW="1440px"
          >
            {recipes.length > 0
              ? recipes.map((item) => {
                  return (
                    <RecipeItemCard
                      key={item.id}
                      id={item.id}
                      title={item.title.rendered}
                      imageURL={item.acf.side_image.url}
                    />
                  );
                })
              : null}
          </SimpleGrid>
          {hasNextPageResponse && (
            <Button
              colorScheme="blue"
              cursor="pointer"
              fontWeight={500}
              p={["2", "4", "4", "6", "7"]}
              bg="blue.500"
              fontSize={["12", "14", "14", "16", "22"]}
              color="white"
              h={["6", "8", "2", "8"]}
              mt={["0", "2", "3", "3", "4"]}
              onClick={() => handleLoadNextPage()}
              isLoading={loading}
            >
              mais receitas
            </Button>
          )}
        </Flex>
      </Box>
      <Footer />
    </Container>
  );
}
