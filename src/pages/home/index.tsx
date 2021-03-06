import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";
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
      <Box w="100%" position="relative" h="100%" maxW="1920px">
        <CarouselController />
      </Box>
      <HeaderFooter />

      <InfoCard
        imageURL="/static/images/juntos-ovos-tinoco@2x.png"
        title={title}
        subtitle={subtitle}
        paragraph={paragraph}
      />
      <RecipeInviteCard />
      <Stack
        direction={["column", "row"]}
        maxW="1120px"
        mt={["4", "16"]}
        mx={["6", "12", "16", "20"]}
        spacing={["", "6", "10", "16", "24"]}
      >
        <MarketingCard
          boldHeading="Galinhas Saudáveis"
          lightHeading="Ovos Ricos em Nutrientes"
          imageTitle="Galinha"
          imageURL="/static/images/banner-vertical-ovos-antibioticos.png"
          imagePosition="bottom"
          isWideScreen={isWideScreen}
        />
        <MarketingCard
          boldHeading="Conheça toda"
          lightHeading="Nossa linha de ovos"
          imageTitle="Caixas de ovos"
          imageURL="/static/images/banner-vertical-ovos-produtos.png"
          imagePosition="top"
          isWideScreen={isWideScreen}
        />
      </Stack>
      <Box
        as="section"
        px={["6", "12", "16", "20"]}
        mb="32"
        mt={["0", "6"]}
        w="100%"
      >
        <NewsletterCardFormController />
      </Box>
      <Footer />
    </Container>
  );
}
