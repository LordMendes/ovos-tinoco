import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

const productsListMock = [
  {
    image: "/static/images/branc06.png",
    title: "Ovos Brancos",
    amount: 6,
    type: "liquid",
  },
  {
    image: "/static/images/branco12.png",
    title: "Ovos Brancos",
    amount: 12,
    type: "liquid",
  },
  {
    image: "/static/images/branco40.png",
    title: "Ovos Brancos",
    amount: 30,
    type: "liquid",
  },
  {
    image: "/static/images/caipira12.png",
    title: "Ovos Vermelhos",
    amount: 12,
    type: "natura",
  },
  {
    image: "/static/images/caipira40.png",
    title: "Ovos Vermelhos",
    amount: 30,
    type: "natura",
  },
];
type Product = {
  image: string;
  title: string;
  amount: number;
  type: string;
};

type FilterType = {
  natura: boolean;
  liquid: boolean;
  all: boolean;
};

type ProductsContextData = {
  productsList: Product[];
  setProductsList: Dispatch<SetStateAction<Product[]>>;
  productsListMock: Product[];
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
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [isFiltering, setIsFiltering] = useState({
    natura: false,
    liquid: false,
    all: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setProductsList(productsListMock);
    }, 500);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        productsList,
        setProductsList,
        productsListMock,
        setIsFiltering,
        isFiltering,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
