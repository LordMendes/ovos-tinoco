import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { HeaderController } from "../../components/Header/HeaderController";
import { HeaderFooter } from "../../components/HeaderFooter";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";
import { SubtitleImageCard } from "../../components/SubtitleImageCard";

type ACFData = {
  banner: {
    ID: number;
    alt?: string;
    url: string;
  };
  ingredients: string;
  preparation: string;
  people_amount: string;
  resume: string;
  side_image: {
    ID: number;
    alt?: string;
    url: string;
  };
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
  console.log(content);

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

            <Box px="6" my="7">
              <Image
                src={content.acf.side_image.url}
                alt={content.acf.side_image.alt}
              />
            </Box>
            <Box px="6">
              <Text
                dangerouslySetInnerHTML={{ __html: content.acf.resume }}
                fontSize="18"
                fontWeight={400}
              />
            </Box>
            <Box bg="yellow.500" mx="6" mt="4" px="4" py="3">
              <Heading size="lg">Ingredientes:</Heading>
              <Box
                dangerouslySetInnerHTML={{ __html: content.acf.ingredients }}
                px="4"
                fontSize="17"
              />
            </Box>
            <Box px="6" mt="4">
              <Heading size="md">Modo de Preparo:</Heading>
              <Box
                ml="5"
                dangerouslySetInnerHTML={{ __html: content.acf.preparation }}
              />
              <Box
                dangerouslySetInnerHTML={{ __html: content.acf.people_amount }}
                fontWeight={900}
              />
            </Box>
          </>
        )}
      </Box>
      <Footer />
    </Container>
  );
}
