import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link as ChakraLink,
  Box,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarWideScreen } from "../NavbarWideScreen";
import { Link } from "react-router-dom";

interface HeaderProps {
  isWideScreen: boolean | undefined;
  onOpen: () => void;
}

export function Header({ isWideScreen, onOpen }: HeaderProps) {
  function handleClick(socialMedia: string) {
    if (socialMedia === "facebook") {
      return (window.location.href = "https://www.facebook.com");
    }
    return (window.location.href = "https://www.instagram.com");
  }
  return (
    <>
      <HStack
        justifyContent="space-between"
        h={["5rem", "6rem"]}
        px={["6", "8", "14", "14", "0"]}
        minHeight="5rem"
        w="100%"
        maxW="1120px"
      >
        <Link to="/">
          <ChakraLink>
            <Image src="./static/images/Logo.svg" alt="Logo" />
          </ChakraLink>
        </Link>
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
            <Flex direction="row" minW="10">
              <ChakraLink my="auto" onClick={() => handleClick("facebook")}>
                <Image src="./static/images/facebook.svg" alt="Facebook Logo" />
              </ChakraLink>
              <ChakraLink onClick={() => handleClick("instagram")}>
                <Image
                  src="./static/images/IG_Glyph_Fill.png"
                  alt="Instagram Logo"
                />
              </ChakraLink>
            </Flex>
          </>
        )}
      </HStack>
      <Box w="100%" borderTopWidth="6px" borderColor="blue.500" />
    </>
  );
}
