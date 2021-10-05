import { Box, useBreakpointValue, Flex, Heading, Text } from "@chakra-ui/react";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { HeaderController } from "../../components/Header/HeaderController";
import { HeaderFooter } from "../../components/HeaderFooter";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";
import { SubtitleImageCard } from "../../components/SubtitleImageCard";

export default function ErrorPage() {
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
          title="OVOS TINOCO 404"
          imageURL="/static/images/Institucional.png"
        />
        {isWideScreen ? <HeaderFooter /> : null}
        <Flex alignItems="center" justifyContent="center" my="40" mx="10">
          <Heading
            color="blue.500"
            align="center"
            fontSize={["1rem", "1.2rem", "1.5rem", "1.75rem", "2rem"]}
          >
            <Text as="span" color="yellow.500" align="center">
              ERRO 404
            </Text>{" "}
            - PÁGINA NÃO ENCONTRADA
          </Heading>
        </Flex>
      </Box>
      <Footer />
    </Container>
  );
}
