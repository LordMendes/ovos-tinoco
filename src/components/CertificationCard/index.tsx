import { SimpleGrid, Image } from "@chakra-ui/react";

export function CertificationCard() {
  return (
    <SimpleGrid
      columns={[3, 3, 3, 4, 4]}
      mb="8"
      maxW="1240px"
      mx="auto"
      justifyContent="center"
      align="center"
      mt={["0", "0", "0", "4"]}
    >
      <Image
        src="./images/h-04-min@3x.png"
        alt="dasdas"
        w={["7.5rem", "7.5rem", "7.5rem", "8rem", "10rem"]}
      />
      <Image
        src="./images/h-02-min@3x.png"
        alt="sad"
        w={["7.5rem", "7.5rem", "7.5rem", "8rem", "10rem"]}
      />

      <Image
        src="./images/h-05-min@3x.png"
        alt="dasdas"
        w={["7.5rem", "7.5rem", "7.5rem", "8rem", "10rem"]}
      />
      <Image
        src="./images/h-06-min@3x.png"
        alt="das"
        w={["7.5rem", "7.5rem", "7.5rem", "8rem", "10rem"]}
      />
    </SimpleGrid>
  );
}
