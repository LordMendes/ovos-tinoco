import { Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";
import { HeaderController } from "../../components/Header/HeaderController";
import { Footer } from "../../components/Footer";
import { SubtitleImageCard } from "../../components/SubtitleImageCard";
import { HeaderFooter } from "../../components/HeaderFooter";
import { ContactForm } from "./components/ContactForm";
import { Container } from "../../components/Container";

export default function ContactPage() {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Container>
      <NavbarMobileScreen />
      <HeaderController />
      <Box as="main" h="100%" width="100%" maxW="1920px" mb="28">
        <SubtitleImageCard
          title="CONTATO / SAC"
          imageURL="/static/images/banner-contato-ovos-tinoco.png"
        />
        {isWideScreen ? <HeaderFooter /> : null}
        <Heading
          color="blue.500"
          fontSize={["1.8rem", "2.125rem", "2.25rem", "2.375rem", "2.5rem"]}
          mx={["4", null]}
          align="center"
          mt={["4", "8", "16", "20", "28"]}
        >
          Dúvidas, reclamações, elogios e comercial.
        </Heading>
        <Text align="center" color="blue.500" mt="2" fontSize={["14", "1rem"]}>
          Por favor, preencha todos os campos abaixo.
        </Text>
        <ContactForm />
      </Box>
      <Footer />
    </Container>
  );
}
