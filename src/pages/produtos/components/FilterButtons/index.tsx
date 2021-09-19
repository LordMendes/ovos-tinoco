import { useBreakpointValue } from "@chakra-ui/react";

import { useProducts } from "../../../../contexts/ProductsContext";
import { FilterButtonsView } from "./FilterButtonsView";

export function FilterButtons() {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  });

  const { setProductsList, productsListMock, setIsFiltering, isFiltering } =
    useProducts();

  function handleFilter(type: string) {
    if (type === "all") {
      setIsFiltering({
        ...isFiltering,
        all: true,
      });
      setTimeout(() => {
        setProductsList(productsListMock);
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
        const filteredList = productsListMock.filter(
          (product) => product.type === type
        );
        setProductsList(filteredList);
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
