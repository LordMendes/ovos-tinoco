import { Box, Image, Text, Button } from "@chakra-ui/react";

export function RecipeInviteCard() {
  return (
    <Box
      mr={["6", "12","20", "24"]}
      position="relative"
      mb="6"
      w={["", "", "100%"]}
      maxW={["96%","94%","94%","94%","1358px"]}
    >
      <Box>
        <Image src="./images/Grupo-265@2x.png" alt="Veja Nossas Receitas" w="100%"/>
      </Box>
      <Box
        position="absolute"
        left="32%"
        top={["32%", "32%"]}
        w="40%"
        minW="142px"
      >
        <Text
          lineHeight="1"
          fontSize={["18", "30", "36", "50", "66px"]}
          fontWeight={700}
          color="white"
        >
          Clique aqui e confira receitas deliciosas!
        </Text>
        <Button
          fontWeight={300}
          p={["2", "4", "4", "6", "7"]}
          bg="white"
          fontSize={["12", "14", "14", "16", "22"]}
          color="blue.500"
          h={["22px", "8", "2", "8"]}
          mt={["0", "3", "3", "4"]}
        >
          Acesse agora
        </Button>
      </Box>
    </Box>
  );
}
