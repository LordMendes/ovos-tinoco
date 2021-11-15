import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface InfoCardProps {
  imageURL: string;
  title?: string;
  subtitle?: string;
  paragraph: string;
  isRight?: boolean;
}

export function InfoCard({
  imageURL,
  title,
  subtitle,
  paragraph,
  isRight,
}: InfoCardProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  });
  if (isRight && isWideScreen) {
    return (
      <Flex
        direction={isWideScreen ? "row" : "column"}
        mx={["6", "12", "20", "24"]}
        mt="7"
        mb={["2", "2", "-6"]}
        maxW={["100%", "720px", "720px", "1120px"]}
      >
        <Flex
          w={["100%", "100%", "50%"]}
          py={["0", "0", "8"]}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={imageURL}
            alt="Juntos Ovos Tinoco"
            h="auto"
            maxH={["250px", "400px", "100%"]}
          />
        </Flex>
        <Box ml={["0", "6", "6", "10", "24"]} w={["100%", "100%", "50%"]}>
          <Heading
            fontSize={["22", "22", "22", "28", "34"]}
            fontWeight={900}
            mt={["0", "6"]}
          >
            {title}
          </Heading>
          <Heading
            fontWeight={300}
            fontSize={["22", "22", "22", "28", "32"]}
            mt="1"
          >
            {subtitle}
          </Heading>
          <Text fontWeight={300} my="4" fontSize={["19", "md", "md", "19"]}>
            {paragraph}
          </Text>
        </Box>
      </Flex>
    );
  }
  return (
    <Flex
      direction={isWideScreen ? "row" : "column"}
      mx={["6", "12", "20", "24"]}
      mt="7"
      mb={["2", "2", "-6"]}
      maxW={["100%", "720px", "720px", "1120px"]}
    >
      <Box
        mr={["0", "6", "6", "10", "24"]}
        w={["100%", "100%", "50%"]}
        display="flex"
        flexDirection='column'
        justifyContent="center"
      >
        <Heading
          fontSize={["22", "22", "22", "28", "34"]}
          fontWeight={900}
          mt={["0", "6"]}
        >
          {title}
        </Heading>
        <Heading
          fontWeight={300}
          fontSize={["22", "22", "22", "28", "32"]}
          mt="1"
        >
          {subtitle}
        </Heading>
        <Text fontWeight={300} my="4" fontSize={["19", "md", "md", "19"]}>
          {paragraph}
        </Text>
      </Box>
      <Flex
        w={["100%", "100%", "50%"]}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={imageURL}
          alt="Juntos Ovos Tinoco"
          h="auto"
          maxH={["250px", "400px", "100%"]}
        />
      </Flex>
    </Flex>
  );
}
