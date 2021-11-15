import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
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

  const location = useLocation();

  useEffect(() => {
    disclosure.onClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <NavbarDropdownMenuContext.Provider value={disclosure}>
      {children}
    </NavbarDropdownMenuContext.Provider>
  );
}

export const useNavbarDrawer = () => useContext(NavbarDropdownMenuContext);
