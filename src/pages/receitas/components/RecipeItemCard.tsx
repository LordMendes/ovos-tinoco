import { Box, Image, Heading, Button } from "@chakra-ui/react";

interface RecipeItemCardProps {
  title: string;
  imageURL: string;
}

export function RecipeItemCard({ title, imageURL }: RecipeItemCardProps) {
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
      <Image
        borderTopLeftRadius="1rem"
        borderTopRightRadius="1rem"
        src={imageURL}
        alt="qualkque"
        h={["63%", "66%"]}
        w="100%"
      />
      <Image
        borderTopLeftRadius="1rem"
        borderTopRightRadius="1rem"
        src="/static/images/Logo-copy.svg"
        alt="qualkque"
        h="8%"
        top={["52%", "55%"]}
        right="5%"
        position="absolute"
      />
      <Box bg="white">
        <Heading
          align="center"
          mt={["4", "4", "6"]}
          fontSize="2xl"
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
        >
          Confira agora
        </Button>
      </Box>
    </Box>
  );
}
