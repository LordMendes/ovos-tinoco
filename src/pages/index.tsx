import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { CertificationCard } from "../components/CertificationCard";
import { Footer } from "../components/Footer";
import { InfoCard } from "../components/InfoCard";
import { MarketingCard } from "../components/MarketingCard";
import { NavbarMobileScreen } from "../components/NavbarMobileScreen";
import { RecipeInviteCard } from "../components/RecipeInviteCard";
import { HeaderController } from "../controllers/HeaderController";
import { NewsletterCardFormController } from "../controllers/NewsletterCardFormController";

export default function Home() {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction="column" h="100vh" align={isWideScreen ? "center" : ""}>
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
      <Box as="section" mx="5">
        <NewsletterCardFormController />
        <CertificationCard />
      </Box>
      <Footer />
    </Flex>
  );
}
