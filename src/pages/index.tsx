import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { InfoCard } from "../components/InfoCard";
import { MarketingCard } from "../components/MarketingCard";
import { NavbarMobileScreen } from "../components/NavbarMobileScreen";
import { NewsletterCard } from "../components/NewsletterCard";
import { RecipeInviteCard } from "../components/RecipeInviteCard";
import { HeaderController } from "../controllers/HeaderController";

export default function Home() {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction="column" h="100vh">
      <NavbarMobileScreen />
      <HeaderController />
      {!isWideScreen ? (
        <Image
          src="./images/Slideshow4@3x.png"
          alt="Institucional Mobile"
          w="100%"
        />
      ) : (
        <Image
          src="./images/Institucional@2x.png"
          alt="Institucional"
          w="100%"
        />
      )}
      <Box bg="blue.500" w="100%" py={["1rem"]} align="center">
        <Text color="white" fontWeight={700}>
          Acompanhe nosso instagram{" "}
          <Text as="span" color="yellow.500">
            @ovostinoco
          </Text>
        </Text>
      </Box>
      <InfoCard />
      <RecipeInviteCard />
      <MarketingCard
        boldHeading="Galinhas 100% livres"
        lightHeading="de hormônios e antibióticos"
        imageTitle="Galinha"
        imageURL="./images/banner-vertical-ovos-antibioticos@3x.png"
      />
      <MarketingCard
        boldHeading="Conheça toda"
        lightHeading="Nossa linha de ovos"
        imageTitle="Caixas de ovos"
        imageURL="./images/banner-vertical-ovos-produtos@3x.png"
      />
      <NewsletterCard />
    </Flex>
  );
}
