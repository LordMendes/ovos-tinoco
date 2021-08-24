import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function InfoCard() {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });
  const isMidScreen = useBreakpointValue({
    base: false,
    sm: true,
    lg: false,
  });

  return (
    <Flex
      direction={isWideScreen ? "row" : "column"}
      mx="5"
      mt="7"
      mb={["2","2","-6"]}
      maxW={["100%", "720px", "720px", "1242px"]}
    >
      <Box mr={["0", "6", "6", "10", "24"]}>
        <Heading
          fontSize={["22", "22", "22", "28", "34"]}
          fontWeight={900}
          mt={["0", "6"]}
        >
          HÁ 75 ANOS PRESENTE NOS{" "}
        </Heading>
        <Heading
          fontWeight={300}
          fontSize={["22", "22", "22", "28", "32"]}
          mt="1"
        >
          SEUS MELHORES MOMENTOS
        </Heading>
        <Text fontWeight={300} my="4" fontSize={["xl", "md", "md", "xl"]}>
          É uma honra fazer parte do seu dia a dia e um prazer estar presente
          nos seus melhores momentos há 75 anos! A sua satisfação e confiança é
          o que nos move todos os dias! Por isso, a quialidade é o nosso maior
          compromisso com você! Nossos produtos contam com minciosos processos
          de seleção, passando por processos específicos para que só os melhores
          produtos cheguem até sua casa!
        </Text>
      </Box>
      <Image
        src="./images/juntos-ovos-tinoco@2x.png"
        alt="Juntos Ovos Tinoco"
        maxW={{ base: "100%", sm: "50%", md: "50%", lg: "50%", xl: "618px" }}
        maxH="385px"
      />
    </Flex>
  );
}
