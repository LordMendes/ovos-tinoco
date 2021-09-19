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
    image: "./static/images/branc06.png",
    title: "Ovos Brancos",
    amount: 6,
    type: "liquid",
  },
  {
    image: "./static/images/branco12.png",
    title: "Ovos Brancos",
    amount: 12,
    type: "liquid",
  },
  {
    image: "./static/images/branco40.png",
    title: "Ovos Brancos",
    amount: 30,
    type: "liquid",
  },
  {
    image: "./static/images/caipira12.png",
    title: "Ovos Vermelhos",
    amount: 12,
    type: "natura",
  },
  {
    image: "./static/images/caipira40.png",
    title: "Ovos Vermelhos",
    amount: 30,
    type: "natura",
  },
];

type ProductsContextData = {
  productsList: Product[];
  setProductsList: Dispatch<SetStateAction<Product[]>>;
  productsListMock: Product[];
};

type Product = {
  image: string;
  title: string;
  amount: number;
  type: string;
};

export const ProductsContext = createContext({} as ProductsContextData);

interface ProductsContextProviderProps {
  children: ReactNode;
}

export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [productsList, setProductsList] = useState<Product[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setProductsList(productsListMock);
    }, 500);
  }, []);

  return (
    <ProductsContext.Provider
      value={{ productsList, setProductsList, productsListMock }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
