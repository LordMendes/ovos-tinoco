import { SimpleGrid, Image, Box } from "@chakra-ui/react";

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
      <Box>
        <Image
          src="/static/images/h-04-min@3x.png"
          alt="Certificado Organico"
          w={["7.5rem", "7.5rem", "7.5rem", "8rem", "10rem"]}
        />
      </Box>
      <Box>
        <Image
          src="/static/images/h-02-min@3x.png"
          alt="Certificado Humane brasil"
          w={["7.5rem", "7.5rem", "7.5rem", "8rem", "10rem"]}
        />
      </Box>
      <Box>
        <Image
          src="/static/images/h-03-min.jpg"
          alt="Certificado IBD"
          w={["7.5rem", "7.5rem", "7.5rem", "8rem", "10rem"]}
        />
      </Box>
      <Box>
        <Image
          src="/static/images/h-05-min@3x.png"
          alt="Certificado Sociedade Vegetariana"
          w={["7.5rem", "7.5rem", "7.5rem", "8rem", "10rem"]}
        />
      </Box>
      <Box>
        <Image
          src="/static/images/h-06-min@3x.png"
          alt="Certificado eureciclo"
          w={["7.5rem", "7.5rem", "7.5rem", "8rem", "10rem"]}
        />
      </Box>
    </SimpleGrid>
  );
}
