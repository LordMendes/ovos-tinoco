import { useBreakpointValue } from "@chakra-ui/react";

import { useProducts } from "../../../../contexts/ProductsContext";
import { FilterButtonsView } from "./FilterButtonsView";

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

export function FilterButtons() {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  });

  const { products, setFilteredProducts, setIsFiltering, isFiltering } =
    useProducts();

  function handleFilter(type: string) {
    if (type === "all") {
      setIsFiltering({
        ...isFiltering,
        all: true,
      });
      setTimeout(() => {
        setFilteredProducts(products);
        setIsFiltering({
          ...isFiltering,
          all: false,
        });
      }, 750);
    } else {
      setIsFiltering({
        ...isFiltering,
        [type]: true,
      });
      setTimeout(() => {
        const filteredList = products.filter(
          (product: Products) => product.acf.type === type
        );
        setFilteredProducts(filteredList);
        setIsFiltering({
          ...isFiltering,
          [type]: false,
        });
      }, 750);
    }
  }

  return (
    <FilterButtonsView
      isWideScreen={isWideScreen}
      onFilter={handleFilter}
      isFiltering={isFiltering}
    />
  );
}
