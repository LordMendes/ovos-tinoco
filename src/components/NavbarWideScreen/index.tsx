import { HStack, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export function NavbarWideScreen() {
  return (
    <HStack
      spacing={["", "", "6", "14", "20"]}
      px={["4", "6"]}
      py="1"
      color="gray.600"
    >
      <Link href="/" passHref>
        <ChakraLink>
          <Text>início</Text>
        </ChakraLink>
      </Link>
      <Link href="/institucional" passHref>
        <ChakraLink>
          <Text>Institucional</Text>
        </ChakraLink>
      </Link>
      <Link href="/produtos" passHref>
        <ChakraLink>
          <Text>Ovos</Text>
        </ChakraLink>
      </Link>
      <Link href="/receitas" passHref>
        <ChakraLink>
          <Text>Receitas</Text>
        </ChakraLink>
      </Link>
      <Link href="/contato" passHref>
        <ChakraLink>
          <Text>Contato</Text>
        </ChakraLink>
      </Link>
    </HStack>
  );
}
