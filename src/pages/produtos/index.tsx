import { Flex, Box, SimpleGrid, Image } from "@chakra-ui/react";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";
import { HeaderController } from "../../components/Header/HeaderController";
import { Footer } from "../../components/Footer";
import { SubtitleImageCard } from "../../components/SubtitleImageCard";
import { FilterButtons } from "./components/FilterButtons";
import { HeaderFooter } from "../../components/HeaderFooter";

export default function ProductPage() {
  return (
    <Flex direction="column" align="center" w="calc(100vw - (100vw - 100%))">
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
          title="NOSSOS OVOS"
          imageURL="./static/images/banner-nossos-ovos.png"
        />
        <HeaderFooter />
        <SimpleGrid
          spacing="2"
          justifyItems="center"
          alignItems="center"
          row={[2, 1]}
        >
          <FilterButtons />
          <SimpleGrid
            my="8"
            spacing={["8", "8", "8", "14"]}
            columns={[1, 2, 3]}
            rowGap={[null, null, null, "150px"]}
          >
            <Image
              src="./static/images/Grupo-126.png"
              alt="Produto 1"
              h={[null, null, null, "120%"]}
            />
            <Image
              src="./static/images/Grupo-128.png"
              alt="Produto 2"
              h={[null, null, null, "120%"]}
            />
            <Image
              src="./static/images/Grupo-129.png"
              alt="Produto 3"
              h={[null, null, null, "120%"]}
            />
            <Image
              src="./static/images/Grupo-127.png"
              alt="Produto 4"
              h={[null, null, null, "120%"]}
            />
            <Image
              src="./static/images/Grupo-133.png"
              alt="Produto 5"
              h={[null, null, null, "120%"]}
            />
          </SimpleGrid>
        </SimpleGrid>
      </Box>
      <Footer />
    </Flex>
  );
}
