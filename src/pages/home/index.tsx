import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";
import { CertificationCard } from "../../components/CertificationCard";
import { Footer } from "../../components/Footer";
import { InfoCard } from "../../components/InfoCard";
import { MarketingCard } from "../../components/MarketingCard";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";
import { RecipeInviteCard } from "../../components/RecipeInviteCard";
import { HeaderController } from "../../components/Header/HeaderController";
import { NewsletterCardFormController } from "../../components/NewsletterCardForm/NewsletterCardFormController";
import { CarouselController } from "../../components/Carousel/CarouselController";
import { infoCardTexts } from "../../assets/variables/infoCardTexts";
import { HeaderFooter } from "../../components/HeaderFooter";
import { Container } from "../../components/Container";

export default function Home() {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });

  const { title, subtitle, paragraph } = infoCardTexts[2];

  return (
    <Container>
      <NavbarMobileScreen />
      <HeaderController />
      <Box
        w="100%"
        position="relative"
        h="100%"
        borderTopWidth="6px"
        borderColor="blue.500"
        maxW="1920px"
      >
        <CarouselController />
      </Box>
      <HeaderFooter />

      <InfoCard
        imageURL="./static/images/juntos-ovos-tinoco@2x.png"
        title={title}
        subtitle={subtitle}
        paragraph={paragraph}
      />
      <RecipeInviteCard />
      <Stack
        direction={["column", "row"]}
        maxW="1280px"
        mt={["4", "8", "16", "8", "12"]}
        mx={["4", "10", "14", "20"]}
        spacing={["", "16", "24", "32", "40"]}
      >
        <MarketingCard
          boldHeading="Galinhas Saudáveis"
          lightHeading="Ovos Ricos em Nutrientes"
          imageTitle="Galinha"
          imageURL="./static/images/banner-vertical-ovos-antibioticos@2x.png"
          imagePosition="bottom"
          isWideScreen={isWideScreen}
        />
        <MarketingCard
          boldHeading="Conheça toda"
          lightHeading="Nossa linha de ovos"
          imageTitle="Caixas de ovos"
          imageURL="./static/images/banner-vertical-ovos-produtos@2x.png"
          imagePosition="top"
          isWideScreen={isWideScreen}
        />
      </Stack>
      <Box as="section" mx={["6", "12", "16", "20"]}>
        <NewsletterCardFormController />
        <CertificationCard />
      </Box>
      <Footer />
    </Container>
  );
}
