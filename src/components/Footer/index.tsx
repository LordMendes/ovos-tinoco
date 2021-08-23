import { Box, Divider, Image, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <footer>
      <Box
        backgroundImage="url('./images/FooterImage.png')"
        minHeight="7.5rem"
        backgroundSize="cover"
        backgroundPosition="50%"
      />
      <Box
        borderTop="8px"
        borderColor="yellow.500"
        bg="blue.500"
        py="4"
        align="center"
        fontWeight={300}
        px="3"
      >
        <Image
          src="./images/ovos-tinoco-footer.svg"
          alt="Ovos tinoco footer"
          w="50%"
        />
        <Text my="2.5" color="white" fontSize="14">
          +55 14 0000-0000 - contato@ovostinoco.com.br <br /> Fazenda Santa
          Maria, S/N Guarantã-SP
        </Text>
        <Divider orientation="horizontal" opacity="1" borderColor="white" />
        <Text mt="2.5" color="blue.300" fontSize="12">
          Ovos Tinoco 2021 © Todos os direito reservador <br /> CNPJ:
          07.928.137/0001-50
        </Text>
      </Box>
    </footer>
  );
}
