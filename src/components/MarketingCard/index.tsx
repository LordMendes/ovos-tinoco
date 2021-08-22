import { Flex, Heading, Image } from "@chakra-ui/react";

interface MarketingCardProps {
  boldHeading: string;
  lightHeading: string;
  imageURL: string;
  imageTitle: string;
}

export function MarketingCard({
  boldHeading,
  lightHeading,
  imageURL,
  imageTitle,
}: MarketingCardProps) {
  return (
    <Flex direction="column" mb="4">
      <Heading fontSize="23" fontWeight={900} mx="5">
        {boldHeading.toUpperCase()}
      </Heading>
      <Heading fontWeight={300} fontSize="21" mx="5">
        {lightHeading.toUpperCase()}
      </Heading>
      <Image src={imageURL} alt={imageTitle} mx="3"/>
    </Flex>
  );
}
