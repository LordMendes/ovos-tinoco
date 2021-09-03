import Head from "next/head";
import { Flex, Box } from "@chakra-ui/react";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";
import { HeaderController } from "../../components/Header/HeaderController";
import { Footer } from "../../components/Footer";

export default function InstitutionalPage() {
  return (
    <Flex
      direction="column"
      h="100vh"
      align="center"
      w="calc(100vw - (100vw - 100%))"
    >
      <Head>
        <title>Ovos Tinoco | Institucional</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavbarMobileScreen />
      <HeaderController />
      <Box h="100%">
        ... aguarde
      </Box>
      <Footer />
    </Flex>
  );
}
