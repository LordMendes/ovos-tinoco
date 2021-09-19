import { Box, Image, Heading, Text } from "@chakra-ui/react";

interface ProductItemCardProps {
  item: {
    image: string;
    title: string;
    amount: number;
    type: string;
  };
}

export function ProductItemCard({ item }: ProductItemCardProps) {
  return (
    <Box align="center" color="blue.500">
      <Image
        src={item.image}
        alt={`Produto ${item.title} ${item.amount}`}
        h="auto"
      />
      <Heading size="md" mt="5">
        {item.title}
      </Heading>
      <Text fontSize="1rem" fontWeight={300}>
        {item.amount} unidades
      </Text>
    </Box>
  );
}
