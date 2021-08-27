import { useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { useNavbarDrawer } from "../contexts/NavbarDropdownMenuContext";

export function HeaderController() {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  });

  const { onOpen } = useNavbarDrawer();

  return <Header isWideScreen={isWideScreen} onOpen={onOpen} />;
}
