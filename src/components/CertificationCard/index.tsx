import { SimpleGrid, Image } from "@chakra-ui/react";

export function CertificationCard() {
  return (
    <SimpleGrid columns={3} mb="8">
      <Image src="./images/h-04-min@3x.png" alt="dasdas" w="7.5rem" />
      <Image src="./images/h-02-min@3x.png" alt="sad" w="7.5rem" />

      <Image src="./images/h-05-min@3x.png" alt="dasdas" w="7.5rem" />
      <Image src="./images/h-06-min@3x.png" alt="das" w="7.5rem" />
    </SimpleGrid>
  );
}
