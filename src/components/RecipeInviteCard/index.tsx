import { Box, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import bgRecipeImg from "../../assets/images/receitas-ovo-tinoxo.png";
import batedorImg from "../../assets/images/batedor-ovos.png";

export function RecipeInviteCard() {
  return (
    <Box
      mx={["6", "12", "20", "24"]}
      position="relative"
      mt={["4", "8", "16", "20"]}
      w="100%"
      align="center"
    >
      <Box mx={["6", "12", "20", "24"]} maxW={1242} position="relative">
        <Image
          src={bgRecipeImg}
          alt="Veja Nossas Receitas"
        />
        <Box position="absolute" top="-25%" left="-10%" w="37%">
          <Image src={batedorImg} alt="Batedor de Ovos" />
        </Box>
        <Box
          position="absolute"
          w="100%"
          minW="142px"
          align="left"
          top={["10%", "10%", "15%"]}
          left="25%"
        >
          <Text
            lineHeight="1"
            fontSize={["18", "26", "36", "50", "66"]}
            fontWeight={700}
            color="white"
          >
            Clique aqui e <br /> confira receitas <br /> deliciosas!
          </Text>
          <Link to="/receitas">
            <Button
              as="a"
              fontWeight={300}
              p={["2", "4", "4", "6", "7"]}
              bg="white"
              fontSize={["12", "14", "14", "16", "22"]}
              color="blue.500"
              h={["6", "8", "2", "8"]}
              mt={["0", "2", "3", "3", "4"]}
            >
              Acesse agora
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
