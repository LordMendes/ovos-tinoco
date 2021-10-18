import { useBreakpointValue } from "@chakra-ui/react";
import { useProducts } from "../../contexts/ProductsContext";

import { ProductPageView } from "./ProductPageView";

export default function ProductPage() {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });

  const { filteredProducts, isFiltering } = useProducts();

  return (
    <ProductPageView
      products={filteredProducts}
      isWideScreen={isWideScreen}
      isFiltering={isFiltering}
    />
  );
}
