import { Box, Heading, Button } from "@chakra-ui/react";
import { useHistory } from "react-router";

interface RecipeItemCardProps {
  title: string;
  imageURL: string;
  id: number;
}

export function RecipeItemCard({ title, imageURL, id }: RecipeItemCardProps) {
  const { push } = useHistory();

  return (
    <Box
      borderRadius="1rem"
      boxShadow="1px 6px 6px #d3d3d3"
      w="100%"
      h={["360px", "390px", "420px", "467px"]}
      position="relative"
      maxW="400px"
      mx="auto"
    >
      <Box
        h={["63%", "66%"]}
        w="100%"
        borderTopLeftRadius="1rem"
        borderTopRightRadius="1rem"
        backgroundImage={`url(${imageURL})`}
        backgroundPosition="100% 100%"
        backgroundSize="150% 150%"
        onClick={() => push(`/receitas/${id}`)}
        cursor="pointer"
      />
      <Box bg="white">
        <Heading
          align="center"
          mt={["4", "4", "6"]}
          fontSize="xl"
          fontWeight={900}
        >
          {title}
        </Heading>
        <Button
          bg="yellow.500"
          color="blue.500"
          fontSize={["md", "md", "md", "xl", "2xl"]}
          width="fit-content"
          display="block"
          px="6"
          h={["10", "10", "10", "12"]}
          mx="auto"
          mt="6"
          fontWeight={300}
          type="button"
          colorScheme="yellow"
          onClick={() => push(`/receitas/${id}`)}
        >
          Confira agora
        </Button>
      </Box>
    </Box>
  );
}
