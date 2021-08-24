import { Flex, Heading, Image } from "@chakra-ui/react";

interface MarketingCardProps {
  boldHeading: string;
  lightHeading: string;
  imageURL: string;
  imageTitle: string;
  imagePosition: string;
  isWideScreen: boolean;
}

export function MarketingCard({
  boldHeading,
  lightHeading,
  imageURL,
  imageTitle,
  imagePosition,
  isWideScreen,
}: MarketingCardProps) {
  if (imagePosition === "bottom" || !isWideScreen)
    return (
      <Flex direction="column" mb="4">
        <Heading
          fontSize={["23", "23", "24", "30", "45"]}
          fontWeight={900}
          mx="8"
        >
          {boldHeading.toUpperCase()}
        </Heading>
        <Heading
          fontWeight={300}
          fontSize={["20", "20", "20", "24", "38"]}
          mx="8"
        >
          {lightHeading.toUpperCase()}
        </Heading>
        <Image src={imageURL} alt={imageTitle} mx="5" />
      </Flex>
    );
  else {
    return (
      <Flex direction="column" mb="4">
        <Image src={imageURL} alt={imageTitle} mx="5" />

        <Heading
          fontSize={["23", "23", "26", "30", "45"]}
          fontWeight={900}
          mx="8"
        >
          {boldHeading.toUpperCase()}
        </Heading>
        <Heading
          fontWeight={300}
          fontSize={["20", "20", "20", "24", "38"]}
          mx="8"
        >
          {lightHeading.toUpperCase()}
        </Heading>
      </Flex>
    );
  }
}
