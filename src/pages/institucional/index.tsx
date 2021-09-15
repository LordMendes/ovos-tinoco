import { Flex, Box } from "@chakra-ui/react";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";
import { HeaderController } from "../../components/Header/HeaderController";
import { Footer } from "../../components/Footer";
import { SubtitleImageCard } from "../../components/SubtitleImageCard";
import { InfoCard } from "../../components/InfoCard";
import { infoCardTexts } from "../../assets/variables/infoCardTexts";
import { HeaderFooter } from "../../components/HeaderFooter";

export default function InstitutionalPage() {
  const [firstInfo] = infoCardTexts;

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
          title="A GRANJA TINOCO"
          imageURL="./static/images/Institucional.png"
        />
        <HeaderFooter />
        <Flex direction="column" align="center">
          <InfoCard
            imageURL="./static/images/5.png"
            title={firstInfo.title}
            subtitle={firstInfo.subtitle}
            paragraph={firstInfo.paragraph}
          />
          <InfoCard
            imageURL="./static/images/5.png"
            title={firstInfo.title}
            subtitle={firstInfo.subtitle}
            paragraph={firstInfo.paragraph}
            isRight
          />
          <InfoCard
            imageURL="./static/images/5.png"
            title={firstInfo.title}
            subtitle={firstInfo.subtitle}
            paragraph={firstInfo.paragraph}
          />
        </Flex>
      </Box>
      <Footer />
    </Flex>
  );
}
