import { Box, Image, Heading, Text } from "@chakra-ui/react";

type ImageData = {
  ID: number;
  alt?: string;
  url: string;
};

type ACFProductData = {
  type: string;
  image: ImageData;
  amount: number | string;
};

type Products = {
  id: number;
  acf: ACFProductData;
  title: {
    rendered: string;
  };
};

interface ProductItemCardProps {
  item: Products;
  isFiltering: boolean;
}

export function ProductItemCard({ item, isFiltering }: ProductItemCardProps) {
  return (
    <Box align="center" color="blue.500" opacity={isFiltering ? 0.4 : 1}>
      <Image
        src={item.acf.image.url}
        alt={`Produto ${item.title} ${item.acf.amount}`}
        h="auto"
        w='100%'
      />
      <Heading size="md" mt="5">
        {item.title.rendered}
      </Heading>
      <Text fontSize="1rem" fontWeight={300}>
        {item.acf.amount} unidades
      </Text>
    </Box>
  );
}
