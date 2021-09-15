import { Box, Heading } from "@chakra-ui/react";

interface SubtitleImageCardProps {
  imageURL: string;
  title: string;
}

export function SubtitleImageCard({ imageURL, title }: SubtitleImageCardProps) {
  return (
    <>
      <Box
        backgroundImage={imageURL}
        bgSize="100% 100%"
        w="100%"
        minH="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        m="auto"
      >
        <Heading
          bgColor="yellow.500"
          color="blue.500"
          p={["2.5", "3.5", "3.5", "4"]}
          pt={["3.5", "4", "4", "6"]}
          my={["0", "12", "20", "28", "32"]}
          lineHeight="1"
          fontWeight={900}
          fontSize={["xl", "3xl", "4xl", "5xl", "6xl"]}
        >
          {title}
        </Heading>
      </Box>
    </>
  );
}
