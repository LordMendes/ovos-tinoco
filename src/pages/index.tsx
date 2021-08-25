import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
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
      {/* {!isWideScreen ? (
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
      )} */}
      <Box
        w="100%"
        position="relative"
        h={["550px", "625px", "700px", "800px", "900px"]}
      >
        <Carousel />
      </Box>
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
      <Stack
        direction={["column", "row"]}
        maxW={["100%", "740px", "760px", "1292px"]}
        mt={["0", "0", "4", "8", "12"]}
      >
        <MarketingCard
          boldHeading="Galinhas 100% livres"
          lightHeading="de hormônios e antibióticos"
          imageTitle="Galinha"
          imageURL="./images/banner-vertical-ovos-antibioticos@3x.png"
          imagePosition="bottom"
          isWideScreen={isWideScreen}
        />
        <MarketingCard
          boldHeading="Conheça toda"
          lightHeading="Nossa linha de ovos"
          imageTitle="Caixas de ovos"
          imageURL="./images/banner-vertical-ovos-produtos@3x.png"
          imagePosition="top"
          isWideScreen={isWideScreen}
        />
      </Stack>
      <Box as="section" mx="8">
        <NewsletterCardFormController />
        <CertificationCard />
      </Box>
      <Footer />
    </Flex>
  );
}
