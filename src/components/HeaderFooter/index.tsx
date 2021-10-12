import { Box, Text } from "@chakra-ui/react";

export function HeaderFooter() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      bg="blue.500"
      w="100%"
      alignItems="center"
      maxW="1920px"
      minH={["16", "16", "16", "20", "24"]}
    >
      <Text
        color="white"
        fontWeight={700}
        align="center"
        fontSize={["1rem", "1.25rem", "1.25rem", "1.5rem", "2rem"]}
        onClick={() => window.open("https://www.instagram.com", "_blank")}
        cursor="pointer"
      >
        Acompanhe nosso instagram{" "}
        <Text as="span" color="yellow.500">
          @ovostinoco
        </Text>
      </Text>
    </Box>
  );
}
