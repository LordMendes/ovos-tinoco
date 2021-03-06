import { Flex, Heading, Image } from "@chakra-ui/react";
import { useHistory } from "react-router";

interface MarketingCardProps {
  boldHeading: string;
  lightHeading: string;
  imageURL: string;
  imageTitle: string;
  imagePosition: string;
  isWideScreen: boolean | undefined;
}

export function MarketingCard({
  boldHeading,
  lightHeading,
  imageURL,
  imageTitle,
  imagePosition,
  isWideScreen,
}: MarketingCardProps) {
  const { push } = useHistory();
  if (imagePosition === "bottom" || !isWideScreen)
    return (
      <Flex direction="column" mb="4">
        <Heading fontSize={["23", "23", "24", "30", "40"]} fontWeight={900}>
          {boldHeading.toUpperCase()}
        </Heading>
        <Heading fontWeight={300} fontSize={["19", "20", "20", "24", "36"]}>
          {lightHeading.toUpperCase()}
        </Heading>
        <Image
          src={imageURL}
          alt={imageTitle}
          onClick={() => push("/institucional")}
          cursor="pointer"
        />
      </Flex>
    );
  else {
    return (
      <Flex direction="column" mb="4">
        <Image
          src={imageURL}
          alt={imageTitle}
          onClick={() => push("/institucional")}
          cursor="pointer"
        />

        <Heading fontSize={["23", "23", "24", "30", "40"]} fontWeight={900}>
          {boldHeading.toUpperCase()}
        </Heading>
        <Heading fontWeight={300} fontSize={["19", "20", "20", "24", "36"]}>
          {lightHeading.toUpperCase()}
        </Heading>
      </Flex>
    );
  }
}
