import { HStack, Text,  Image } from "@chakra-ui/react";

export function NavbarWideScreen() {
  return (
    <HStack
      spacing={["6", "6","10", "20"]}
      px={["4", "6"]}
      py="1"
      color="gray.600"
    >
      <Text>início</Text>
      <Text>Institucional</Text>
      <Text>Ovos</Text>
      <Text>Receitas</Text>
      <Text>Contato</Text>
    </HStack>
  );
}
