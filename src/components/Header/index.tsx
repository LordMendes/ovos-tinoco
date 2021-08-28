import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarWideScreen } from "../NavbarWideScreen";
import Link from "next/link";
import { useRouter } from "next/router";

interface HeaderProps {
  isWideScreen: boolean;
  onOpen: () => void;
}

export function Header({ isWideScreen, onOpen }: HeaderProps) {
  const { push } = useRouter();

  function handleClick(socialMedia: string) {
    if (socialMedia === "facebook") {
      return push("https://www.facebook.com");
    }
    return push("https://www.instagram.com");
  }
  return (
    <HStack
      justifyContent="space-between"
      h={["5rem", "6rem"]}
      px={["6", "8", "14", "14", "0"]}
      minHeight="5rem"
      w="100%"
      maxW="1242px"
    >
      <Link href="/">
        <ChakraLink>
          <Image src="./images/Logo.svg" alt="Logo" />
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
              <Image src="./images/facebook.svg" alt="Facebook Logo" />
            </ChakraLink>
            <ChakraLink onClick={() => handleClick("instagram")}>
              <Image src="./images/IG_Glyph_Fill.png" alt="Instagram Logo" />
            </ChakraLink>
          </Flex>
        </>
      )}
    </HStack>
  );
}
