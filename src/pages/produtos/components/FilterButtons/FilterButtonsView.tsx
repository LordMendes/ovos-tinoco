import { Button, HStack, Flex } from "@chakra-ui/react";

interface FilterButtonsViewProps {
  isWideScreen: boolean | undefined;
  onFilter: (type: string) => void;
  isFiltering: {
    natura: boolean;
    all: boolean;
    liquido: boolean;
  };
}

export function FilterButtonsView({
  isWideScreen,
  onFilter,
  isFiltering,
}: FilterButtonsViewProps) {
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
          onClick={() => onFilter("natura")}
          isLoading={isFiltering.natura}
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
          onClick={() => onFilter("liquido")}
          isLoading={isFiltering.liquido}
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
          onClick={() => onFilter("all")}
          isLoading={isFiltering.all}
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
          onClick={() => onFilter("natura")}
          isLoading={isFiltering.natura}
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
          onClick={() => onFilter("liquido")}
          isLoading={isFiltering.liquido}
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
          onClick={() => onFilter("all")}
          isLoading={isFiltering.all}
        >
          Todos os produtos
        </Button>
      </Flex>
    </>
  );
}
