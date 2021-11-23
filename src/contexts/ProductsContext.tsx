import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getProducts } from "../services/api";

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

type FilterType = {
  natura: boolean;
  liquido: boolean;
  all: boolean;
};

type ProductsContextData = {
  products: Products[];
  filteredProducts: Products[];
  setFilteredProducts: Dispatch<SetStateAction<Products[]>>;
  isFiltering: FilterType;
  setIsFiltering: Dispatch<SetStateAction<FilterType>>;
};

export const ProductsContext = createContext({} as ProductsContextData);

interface ProductsContextProviderProps {
  children: ReactNode;
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  const [isFiltering, setIsFiltering] = useState({
    natura: false,
    liquido: false,
    all: false,
  });

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
      setFilteredProducts(res);
    });
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setFilteredProducts,
        filteredProducts,
        setIsFiltering,
        isFiltering,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
