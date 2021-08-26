import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export function Footer() {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Box as="footer" w="100%">
      <Box
        backgroundImage={[
          "url('./images/FooterImage.png')",
          "url('./images/Imagem-6.png')",
        ]}
        minHeight={["7.5rem", "10rem", "10rem", "12.5rem", "16.5rem"]}
        backgroundSize="cover"
        backgroundPosition={["50%", "20% 20%"]}
        mt="-60px"
      />
      <Stack
        borderTop="8px"
        borderColor="yellow.500"
        bg="blue.500"
        py="4"
        align="center"
        fontWeight={[300, 400]}
        px={["3", "10", "10", "16", "24"]}
        direction="column"
      >
        <Stack
          align="center"
          direction={["column", "row"]}
          my={["0", "6"]}
          justifyContent="space-between"
          width="100%"
        >
          <Image
            src="./images/ovos-tinoco-footer.svg"
            alt="Ovos tinoco footer"
            w={["50%", "35%", "25%", "20%"]}
          />
          {isWideScreen && (
            <Stack
              direction="row"
              color="white"
              spacing={["", "6", "6", "10", "20"]}
              fontSize={["", "", "", "", "24"]}
            >
              <Stack direction="column">
                <Text>início</Text>
                <Text>Institucional</Text>
                <Text>Produtos</Text>
              </Stack>
              <Stack direction="column">
                <Text>Receitas</Text>
                <Text>Contato</Text>
              </Stack>
            </Stack>
          )}
          {!isWideScreen ? (
            <Text mt="2.5" color="white" fontSize="14" align="center">
              +55 14 0000-0000 - contato@ovostinoco.com.br <br /> Fazenda Santa
              Maria, S/N Guarantã-SP
            </Text>
          ) : (
            <VStack
              color="white"
              align="left"
              fontSize={["14", "14", "14", "14", "24"]}
            >
              <Text>+55 14 0000-0000</Text>
              <Text>contato@ovostinoco.com.br</Text>
              <Text> Fazenda Santa Maria, S/N Guarantã-SP</Text>
            </VStack>
          )}
        </Stack>
        <Divider orientation="horizontal" opacity="1" borderColor="blue.300" />
        <Flex
          direction={["column", "row"]}
          justifyContent="space-between"
          width="100%"
          px={["0", "4", "4", "5", "6"]}
        >
          <Text color="blue.300" fontSize="12" align="center">
            Ovos Tinoco 2021 © Todos os direito reservador
          </Text>
          <Text color="blue.300" fontSize="12" align="center">
            CNPJ: 07.928.137/0001-50
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
}
