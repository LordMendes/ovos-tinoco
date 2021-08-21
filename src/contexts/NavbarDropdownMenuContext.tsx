import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

type NavbarDropdownMenuContextData = UseDisclosureReturn;

export const NavbarDropdownMenuContext = createContext(
  {} as NavbarDropdownMenuContextData
);

interface NavbarContextProviderProps {
  children: ReactNode;
}

export function NavbarContextProvider({
  children,
}: NavbarContextProviderProps) {
  const disclosure = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath])

  return (
    <NavbarDropdownMenuContext.Provider value={disclosure}>
      {children}
    </NavbarDropdownMenuContext.Provider>
  );
}

export const useNavbarDrawer = () => useContext(NavbarDropdownMenuContext);
