import { Button, HStack, Flex, useBreakpointValue } from "@chakra-ui/react";

export function FilterButtons() {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  });
  if (isWideScreen) {
    return (
      <HStack spacing="10" mt="14">
        <Button
          bg="yellow.500"
          color="blue.500"
          fontSize="xl"
          width="fit-content"
          p="7"
          h="2px"
          fontWeight={300}
          type="submit"
          colorScheme="yellow"
          borderRadius="xl"
          minW="162px"
        >
          Ovos in natura
        </Button>
        <Button
          bg="yellow.500"
          color="blue.500"
          fontSize="xl"
          width="fit-content"
          p="7"
          h="2px"
          fontWeight={300}
          type="submit"
          colorScheme="yellow"
          borderRadius="xl"
          minW="162px"
        >
          Ovos Líquidos
        </Button>
        <Button
          bg="yellow.500"
          color="blue.500"
          fontSize="xl"
          width="fit-content"
          p="7"
          h="2px"
          fontWeight={300}
          type="submit"
          colorScheme="yellow"
          borderRadius="xl"
          minW="192px"
        >
          Todos os produtos
        </Button>
      </HStack>
    );
  }
  return (
    <>
      <HStack spacing={["4", "12"]} mt="6">
        <Button
          bg="yellow.500"
          color="blue.500"
          fontSize="md"
          width="fit-content"
          p="6"
          h="2px"
          fontWeight={300}
          type="submit"
          colorScheme="yellow"
          borderRadius="xl"
          minW="162px"
        >
          Ovos in natura
        </Button>
        <Button
          bg="yellow.500"
          color="blue.500"
          fontSize="md"
          width="fit-content"
          p="6"
          h="2px"
          fontWeight={300}
          type="submit"
          colorScheme="yellow"
          borderRadius="xl"
          minW="162px"
        >
          Ovos Líquidos
        </Button>
      </HStack>
      <Flex mt={["2", "4"]}>
        <Button
          bg="yellow.500"
          color="blue.500"
          fontSize="md"
          width="fit-content"
          p="6"
          h="2px"
          fontWeight={300}
          type="submit"
          colorScheme="yellow"
          borderRadius="xl"
          minW="192px"
        >
          Todos os produtos
        </Button>
      </Flex>
    </>
  );
}
