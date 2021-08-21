import {
  Flex,
  HStack,
  Icon,
  IconButton,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useNavbarDrawer } from "../../contexts/NavbarDropdownMenuContext";

export default function Header() {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });

  const { onOpen } = useNavbarDrawer();

  return (
    <HStack justifyContent="space-between" h="5rem" mx="8">
      <Image src="./images/Logo.svg" alt="Logo" />
      <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label='Open navigation'
          mr='2'
        ></IconButton>
    </HStack>
  );
}
