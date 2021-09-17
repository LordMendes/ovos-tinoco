import { Flex, Box, useBreakpointValue, SimpleGrid } from "@chakra-ui/react";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";
import { HeaderController } from "../../components/Header/HeaderController";
import { Footer } from "../../components/Footer";
import { SubtitleImageCard } from "../../components/SubtitleImageCard";
import { HeaderFooter } from "../../components/HeaderFooter";
import { RecipeItemCard } from "./components/RecipeItemCard";

const array = [1, 2, 3];

export default function RecipePage() {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Flex
      direction="column"
      align="center"
      w="calc(100vw - (100vw - 100%))"
      maxW="1440px"
      mx="auto"
    >
      <NavbarMobileScreen />
      <HeaderController />
      <Box
        as="main"
        h="100%"
        width="100%"
        borderTopWidth="6px"
        borderColor="blue.500"
        maxW="1920px"
        mb="28"
      >
        <SubtitleImageCard
          title="RECEITAS"
          imageURL="./static/images/banner-ovos-tinoco-receitas.png"
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
    </Flex>
  );
}
