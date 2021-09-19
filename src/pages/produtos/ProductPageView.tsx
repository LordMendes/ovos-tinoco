import { Box, SimpleGrid } from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { HeaderController } from "../../components/Header/HeaderController";
import { HeaderFooter } from "../../components/HeaderFooter";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";
import { SubtitleImageCard } from "../../components/SubtitleImageCard";
import { FilterButtons } from "./components/FilterButtons";
import { ProductItemCard } from "./components/ProductItemCard";

type Product = {
  image: string;
  title: string;
  amount: number;
  type: string;
};

interface ProductsPageViewProps {
  products: Product[];
  isWideScreen: boolean | undefined;
}

export function ProductPageView({
  products,
  isWideScreen,
}: ProductsPageViewProps) {
  return (
    <Container>
      <NavbarMobileScreen />
      <HeaderController />
      <Box as="main" h="100%" width="100%" maxW="1920px" mb="28">
        <SubtitleImageCard
          title="NOSSOS OVOS"
          imageURL="./static/images/banner-nossos-ovos.png"
        />
        {isWideScreen ? <HeaderFooter /> : null}
        <SimpleGrid
          spacing="2"
          justifyItems="center"
          alignItems="center"
          row={[2, 1]}
        >
          <FilterButtons />
          <SimpleGrid
            mt="8"
            spacing={["8", "8", "8", "14"]}
            columns={[1, 2, 3]}
            rowGap={[null, null, null, "150px"]}
            mx="12"
          >
            {products.map((item: Product) => {
              return <ProductItemCard item={item} />;
            })}
          </SimpleGrid>
        </SimpleGrid>
      </Box>
      <Footer />
    </Container>
  );
}
