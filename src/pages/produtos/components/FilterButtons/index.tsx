import { useBreakpointValue } from "@chakra-ui/react";
import { useProducts } from "../../../../contexts/ProductsContext";
import { FilterButtonsView } from "./FilterButtonsView";

export function FilterButtons() {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  });

  const { setProductsList, productsListMock } = useProducts();

  function handleFilter(type: string) {
    if (type === "all") {
      setProductsList(productsListMock);
    } else {
      const filteredList = productsListMock.filter(
        (product) => product.type === type
      );
      setProductsList(filteredList);
    }
  }

  return (
    <FilterButtonsView isWideScreen={isWideScreen} onFilter={handleFilter} />
  );
}
