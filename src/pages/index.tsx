import { Box, Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { CertificationCard } from "../components/CertificationCard";
import { Footer } from "../components/Footer";
import { InfoCard } from "../components/InfoCard";
import { MarketingCard } from "../components/MarketingCard";
import { NavbarMobileScreen } from "../components/NavbarMobileScreen";
import { RecipeInviteCard } from "../components/RecipeInviteCard";
import { HeaderController } from "../components/Header/HeaderController";
import { NewsletterCardFormController } from "../components/NewsletterCardForm/NewsletterCardFormController";
import { CarouselController } from "../components/Carousel/CarouselController";

export default function Home() {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex
      direction="column"
      h="100vh"
      align="center"
      w="calc(100vw - (100vw - 100%))"
    >
      <Head>
        <title>Ovos Tinoco</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavbarMobileScreen />
      <HeaderController />
      <Box
        w="100%"
        position="relative"
        h={["550px", "625px", "700px", "800px", "900px"]}
        borderTopWidth="6px"
        borderColor="blue.500"
        maxW="1920px"
      >
        <CarouselController />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        bg="blue.500"
        w="100%"
        alignItems="center"
        maxW="1920px"
        minH={["16", "16", "16", "20", "24"]}
      >
        <Text
          color="white"
          fontWeight={700}
          align="center"
          fontSize={["1rem", "1.25rem", "1.25rem", "1.5rem", "2rem"]}
        >
          Acompanhe nosso instagram{" "}
          <Text as="span" color="yellow.500">
            @ovostinoco
          </Text>
        </Text>
      </Box>
      <InfoCard />
      <RecipeInviteCard />
      <Stack
        direction={["column", "row"]}
        maxW={["100%", "740px", "760px", "1302px"]}
        mt={["0", "0", "4", "8", "12"]}
        mx={["4", "10", "14", "20"]}
      >
        <MarketingCard
          boldHeading="Galinhas 100% livres"
          lightHeading="de hormônios e antibióticos"
          imageTitle="Galinha"
          imageURL="./static/images/banner-vertical-ovos-antibioticos@3x.png"
          imagePosition="bottom"
          isWideScreen={isWideScreen}
        />
        <MarketingCard
          boldHeading="Conheça toda"
          lightHeading="Nossa linha de ovos"
          imageTitle="Caixas de ovos"
          imageURL="./static/images/banner-vertical-ovos-produtos@3x.png"
          imagePosition="top"
          isWideScreen={isWideScreen}
        />
      </Stack>
      <Box as="section" mx={["6", "12", "16", "20"]}>
        <NewsletterCardFormController />
        <CertificationCard />
      </Box>
      <Footer />
    </Flex>
  );
}
