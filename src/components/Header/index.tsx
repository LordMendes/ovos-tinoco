import { Box, Flex, HStack, Icon, IconButton, Image } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarWideScreen } from "../NavbarWideScreen";

interface HeaderProps {
  isWideScreen: boolean;
  onOpen: () => void;
}

export function Header({ isWideScreen, onOpen }: HeaderProps) {
  return (
    <HStack
      justifyContent="space-between"
      h={["5rem", "6rem"]}
      px={["6", "8", "14"]}
      borderBottomWidth="6px"
      borderColor="blue.500"
    >
      <Image src="./images/Logo.svg" alt="Logo" />
      {!isWideScreen && (
        <IconButton
          icon={<Icon as={GiHamburgerMenu} />}
          fontSize="4xl"
          onClick={onOpen}
          aria-label="Open navigation"
          color="blue.500"
          bg="white"
          mt={4}
        ></IconButton>
      )}
      {isWideScreen && (
        <>
          <NavbarWideScreen />
          <Flex direction="row">
            <Image src="./images/IG_Glyph_Fill.png" alt="Instagram Logo" />
            <Image src="./images/facebook.svg" alt="Facebook Logo" />
          </Flex>
        </>
      )}
    </HStack>
  );
}
