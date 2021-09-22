import {
  Box,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Footer() {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Box as="footer" w="100%">
      <Box
        backgroundImage={[
          "url('/static/images/FooterImage.png')",
          "url('/static/images/Imagem-6.png')",
        ]}
        minHeight={["7.5rem", "10rem", "10rem", "12.5rem", "16.5rem"]}
        backgroundSize="cover"
        backgroundPosition={["50%", "20% 20%"]}
        mt="-60px"
        maxW="1920px"
        marginLeft="auto"
        marginRight="auto"
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
          maxW="1728px"
        >
          <Image
            src="/static/images/ovos-tinoco-footer.svg"
            alt="Ovos tinoco footer"
            w={["50%", "30%", "20%", "15%"]}
          />
          {isWideScreen && (
            <Stack
              direction="row"
              color="white"
              spacing={["", "6", "6", "10", "20"]}
              fontSize={["", "", "", "", "24"]}
            >
              <Stack direction="column">
                <Link to="/">
                  <ChakraLink>
                    <Text>início</Text>
                  </ChakraLink>
                </Link>
                <Link to="/institucional">
                  <ChakraLink>
                    <Text>Institucional</Text>
                  </ChakraLink>
                </Link>
                <Link to="/produtos">
                  <ChakraLink>
                    <Text>Produtos</Text>
                  </ChakraLink>
                </Link>
              </Stack>
              <Stack direction="column">
                <Link to="/receitas">
                  <ChakraLink>
                    <Text>Receitas</Text>
                  </ChakraLink>
                </Link>
                <Link to="/contato">
                  <ChakraLink>
                    <Text>Contato</Text>
                  </ChakraLink>
                </Link>
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
        <Divider
          orientation="horizontal"
          opacity="1"
          borderColor="blue.300"
          maxW="1728px"
        />
        <Flex
          direction={["column", "row"]}
          justifyContent="space-between"
          width="100%"
          px={["0", "4", "4", "5", "6"]}
          maxW="1728px"
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
