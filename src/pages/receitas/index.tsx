import { Flex, Box, useBreakpointValue, SimpleGrid } from "@chakra-ui/react";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";
import { HeaderController } from "../../components/Header/HeaderController";
import { Footer } from "../../components/Footer";
import { SubtitleImageCard } from "../../components/SubtitleImageCard";
import { HeaderFooter } from "../../components/HeaderFooter";
import { RecipeItemCard } from "./components/RecipeItemCard";
import { Container } from "../../components/Container";

const array = [1, 2, 3];

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

interface RecipesPageProps {
  recipes: Recipes[];
}

export default function RecipePage({ recipes }: RecipesPageProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });

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
            {array.map((item) => {
              return <RecipeItemCard />;
            })}
          </SimpleGrid>
        </Flex>
      </Box>
      <Footer />
    </Container>
  );
}
