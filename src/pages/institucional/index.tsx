import Head from "next/head";
import Image from "next/image";
import { Flex, Box, Heading } from "@chakra-ui/react";
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
      <Box
        as="main"
        h="100%"
        width="100%"
        borderTopWidth="6px"
        borderColor="blue.500"
      >
        <Box
          backgroundImage="./static/images/Institucional.png"
          bgSize="100% 100%"
          w="100%"
          h="100px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading bgColor="yellow.500" color="blue.500" p="2">
            A GRANJA TINOCO
          </Heading>
        </Box>
        ... aguarde
      </Box>
      <Footer />
    </Flex>
  );
}
