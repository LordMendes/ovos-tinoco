import { Flex, Box } from "@chakra-ui/react";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";
import { HeaderController } from "../../components/Header/HeaderController";
import { Footer } from "../../components/Footer";

export default function RecipePage() {
  return (
    <Flex
      direction="column"
      h="100vh"
      align="center"
      w="calc(100vw - (100vw - 100%))"
    >
      <NavbarMobileScreen />
      <HeaderController />
      <Box h="100%">... aguarde</Box>
      <Footer />
    </Flex>
  );
}
