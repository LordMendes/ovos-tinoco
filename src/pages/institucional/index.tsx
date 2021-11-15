import {
  Flex,
  Box,
  useBreakpointValue,
  Heading,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { NavbarMobileScreen } from "../../components/NavbarMobileScreen";
import { HeaderController } from "../../components/Header/HeaderController";
import { Footer } from "../../components/Footer";
import { SubtitleImageCard } from "../../components/SubtitleImageCard";
import { HeaderFooter } from "../../components/HeaderFooter";
import { Container } from "../../components/Container";

export default function InstitutionalPage() {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <Container>
      <NavbarMobileScreen />
      <HeaderController />
      <Box as="main" h="100%" width="100%" maxW="1920px" mb="28">
        <SubtitleImageCard
          title="A GRANJA TINOCO"
          imageURL="/static/images/Institucional.png"
        />
        {isWideScreen ? <HeaderFooter /> : null}
        <Flex direction="column" align="center" mx="6">
          <Heading
            color="blue.500"
            fontSize={["19", "23"]}
            mt="10"
            fontWeight={["800", "900"]}
            textTransform="uppercase"
            letterSpacing={0}
            lineHeight={["29px", "36px"]}
          >
            A nossa fazenda conta com uma longa e envolvente história de três
            gerações,
          </Heading>
          <Flex
            direction={isWideScreen ? "row" : "column"}
            mb="4"
            gridGap={["2", "14"]}
            maxW={["100%", "720px", "720px", "1120px"]}
          >
            <Box w={["100%", "100%", "50%"]}>
              <Text
                fontWeight={300}
                my="4"
                fontSize={["13", "16", "16", "19"]}
                letterSpacing="0"
                lineHeight={["16px", "23px"]}
              >
                começando com o meu avô, Olavo do Prado Queiroz. Desde muito
                cedo, ele teve que seguir o seu caminho sozinho, pois sua
                família, formada de dezessete irmãos e irmãs, não provia espaço
                suficiente para que todos pudessem trabalhar juntos. Assim, após
                ficar um período afastado da região, trabalhando no Rio de
                Janeiro, então capital de nosso país, ele regressa a convite de
                um irmão mais velho, instalando-se na cidade de Guarantã - SP
                para dar início a um pequeno negócio farmacêutico. Reza a
                'lenda' que, certo dia, após algumas horas de trabalho em seu
                estabelecimento, meu avô atendeu um comerciante que estava de
                passagem pela cidade e parou ali em busca de algum medicamento
                para combater uma terrível dor de cabeça que o afligia. Trocando
                'dois dedos de prosa', este comerciante disse que estava
                vendendo pintinhos de um dia de vida, oque levou o meu avô a
                comprar 500 cabeças e colocá-las dentro de um banheiro em sua
                casa. Folclore ou não, assim começou uma história de
                empreendimento na avicultura de postura que já dura 75 anos!
              </Text>
            </Box>
            <Flex
              w={["100%", "100%", "50%"]}
              justifyContent="center"
              alignItems="center"
            >
              <Image
                w="100%"
                src="/static/images/granja-foto-6.png"
                alt="Juntos Ovos Tinoco"
                h="auto"
                maxH={["250px", "400px", "100%"]}
              />
            </Flex>
          </Flex>
          <Flex
            direction={isWideScreen ? "row" : "column"}
            mb="4"
            gridGap={["2", "14"]}
            maxW={["100%", "720px", "720px", "1120px"]}
          >
            <Flex
              w={["100%", "100%", "50%"]}
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="/static/images/granja-foto-3.png"
                alt="Seleção de ovos tinoco"
                w="100%"
                h="auto"
                maxH={["250px", "400px", "100%"]}
              />
            </Flex>
            <Box w={["100%", "100%", "50%"]}>
              <Text
                fontWeight={300}
                mt="4"
                mb={["0", "4"]}
                fontSize={["13", "16", "16", "19"]}
                letterSpacing="0"
                lineHeight={["16px", "23px"]}
              >
                <Text>
                  Por 32 anos (1945-1977), o Sr. Olavo do Prado Queiroz liderou
                  com esmero a Granja Paris, quando veio a falecer, deixando no
                  comando a sua esposa Alice e suas duas filhas, Jacira e
                  Jussara. Porém, logo no ano seguinte (1978), Alice veio a
                  falecer, deixando a direção da granja na mão de suas duas
                  filhas, que foram auxiliadas pelos gerentes Arnaldo e
                  Aristides.
                </Text>
                <Text mt={["4", "6"]}>
                  Em 1984, a Granja Paris deixou para trás este nome, passando a
                  se chamar SAGAA (Santo Antônio de Guarantã Avicultura e
                  Agropecuária).
                </Text>
                <Text mt={["4", "6"]}>
                  Em 1990 veio a divisão da empresa, e assim Jacira, junto com
                  seu marido Rômulo, fundaram a Egendom, segundo com este nome
                  até 1996, quando passou a se chamar Granja Tinôco.
                </Text>
              </Text>
            </Box>
          </Flex>
          <Text
            fontWeight={300}
            my={["0", "2"]}
            fontSize={["13", "16", "16", "19"]}
            letterSpacing="0"
            lineHeight={["16px", "23px"]}
            maxW={["100%", "720px", "720px", "1120px"]}
          >
            Ao completarmos 75 anos de uma bela história na avicultura em 2020,
            a marca foi remodelada, passando a se chamar Ovos Tinôco, com o
            intuito de continuar o legado do Sr. Olavo do Prado Queiroz, sempre
            melhorando e transformando para oferecer o melhor a você!
          </Text>
          <SimpleGrid
            columns={[1, 1, 3]}
            gridGap="4"
            maxW={["100%", "100%", "720px", "1120px"]}
            w="100%"
            mt="4"
          >
            <Image
              src="/static/images/granja-foto-2.png"
              alt="Galinheiro antigo Tinoco"
              w="100%"
              h="auto"
            />
            <Image
              src="/static/images/granja-foto-4.png"
              alt="Estrutura Granja Tinoco"
              w="100%"
              h="auto"
            />
            <Image
              src="/static/images/granja-foto-1.png"
              alt="Fazenda Tinoco"
              w="100%"
              h="auto"
            />
          </SimpleGrid>
        </Flex>
      </Box>
      <Footer />
    </Container>
  );
}
