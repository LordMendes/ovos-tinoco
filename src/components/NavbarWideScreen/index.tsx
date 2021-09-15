import { HStack, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export function NavbarWideScreen() {
  return (
    <HStack
      spacing={["", "", "6", "14", "20"]}
      px={["4", "6"]}
      py="1"
      color="gray.600"
    >
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
          <Text>Ovos</Text>
        </ChakraLink>
      </Link>
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
    </HStack>
  );
}
