import { Box, Image, Text, Button } from "@chakra-ui/react";

export function RecipeInviteCard() {
  return (
    <Box mr="5" position="relative" mb="6">
      <Image
        src="./images/Grupo-264@2x.png"
        alt="Veja Nossas Receitas"
        minHeight="8rem"
      />
      <Box position="absolute" left="32%" top="10" w="40%" minW="142px">
        <Text lineHeight="1" fontSize="18" fontWeight={700} color="white">
          Clique aqui e confira receitas deliciosas!
        </Text>
        <Button
          fontWeight={300}
          p="2"
          bg="white"
          fontSize="12"
          color="blue.500"
          h="22px"
        >
          Acesse agora
        </Button>
      </Box>
    </Box>
  );
}
