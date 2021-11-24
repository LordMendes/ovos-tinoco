import { Box, Image, Text, Heading, VStack, Stack } from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { HeaderController } from "../../components/Header/HeaderController";
import { HeaderFooter } from "../../components/HeaderFooter";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";
import { SubtitleImageCard } from "../../components/SubtitleImageCard";

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

interface RecipeItemViewProps {
  isWideScreen: boolean | undefined;
  content: Recipes;
}

export function RecipeItemView({ isWideScreen, content }: RecipeItemViewProps) {
  return (
    <Container>
      <NavbarMobileScreen />
      <HeaderController />
      <Box as="main" h="100%" width="100%" maxW="1920px" mb="28">
        {Object.keys(content).length > 0 && (
          <>
            <SubtitleImageCard
              title={content.title.rendered.toUpperCase()}
              imageURL={content.acf.banner.url}
            />
            {isWideScreen ? <HeaderFooter /> : null}
            <VStack maxW={1280} mx="auto">
              <Stack
                direction={["column", "column", "row"]}
                mt="7"
                mb={["2", "7"]}
                px="6"
                spacing={["3.5", "10"]}
              >
                <Box w="100%" minW={["100%", "100%", "320px", "414px"]}>
                  <Image
                    src={content.acf.side_image.url}
                    alt={content.acf.side_image.alt}
                    mx="auto"
                    w={[null, "100%", null]}
                    maxW={[null, "414px", null]}
                  />
                </Box>
                <Box>
                  <Text
                    dangerouslySetInnerHTML={{ __html: content.acf.resume }}
                    fontSize={["18", "19", "20", "21", "23"]}
                    lineHeight={["1.375rem", "1.75rem"]}
                    fontWeight={400}
                  />
                </Box>
              </Stack>
              <Stack
                direction={["column", "column", "row"]}
                mt="4"
                px="6"
                spacing={[null, "6"]}
                width="100%"
              >
                <Box
                  bg="yellow.500"
                  px="4"
                  py="3"
                  minW={["100%", "414px", "320px", "414px"]}
                  height="fit-content"
                  minH={["100%", "414px"]}
                  w="fit-content"
                  mx={["0", "auto", "0"]}
                >
                  <Heading size="lg">Ingredientes:</Heading>
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: content.acf.ingredients,
                    }}
                    pl="4"
                    fontSize={["18", "19", "20", "21", "23"]}
                    lineHeight={["1.8125rem", "2.3125rem"]}
                  />
                </Box>
                <Box px={[null, "6"]} mt="4">
                  {isWideScreen ? (
                    <Heading size="lg">Modo de Preparo:</Heading>
                  ) : (
                    <Heading size="md">Modo de Preparo:</Heading>
                  )}

                  <Box
                    ml="5"
                    dangerouslySetInnerHTML={{
                      __html: content.acf.cook_tutorial,
                    }}
                    fontSize={["18", "19", "20", "21", "23"]}
                    lineHeight={["1.375rem", "1.8175rem"]}
                  />
                  <Box
                    dangerouslySetInnerHTML={{ __html: content.acf.servings }}
                    fontWeight={900}
                    fontSize={["18", "19", "20", "21", "23"]}
                  />
                </Box>
              </Stack>
            </VStack>
          </>
        )}
      </Box>
      <Footer />
    </Container>
  );
}
