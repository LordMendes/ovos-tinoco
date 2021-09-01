import {
  VStack,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Divider,
  Image,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useNavbarDrawer } from "../../contexts/NavbarDropdownMenuContext";
import Link from "next/link";
import { useRouter } from "next/router";

export function NavbarMobileScreen() {
  const { isOpen, onClose } = useNavbarDrawer();
  const { push } = useRouter();

  function handleClick(socialMedia: string) {
    if (socialMedia === "facebook") {
      return push("https://www.facebook.com");
    }
    return push("https://www.instagram.com");
  }
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="white" h="100vh">
          <DrawerCloseButton
            mt="4"
            fontSize="20"
            fontWeight={900}
            color="blue.500"
            bg="white !important"
          />
          <DrawerHeader mb="6">
            <Image src="./static/images/Logo.svg" alt="Logo" />
          </DrawerHeader>
          <DrawerBody px="14px">
            <VStack>
              <Link href="/" passHref>
                <ChakraLink>
                  <Text ml="auto !important" color="blue.500" fontSize="22">
                    início
                  </Text>
                </ChakraLink>
              </Link>
              <Divider
                orientation="horizontal"
                borderBottomWidth="2px"
                opacity="1"
                borderColor="blue.500"
              />
              <Link href="/institucional" passHref>
                <ChakraLink>
                  <Text ml="auto !important" color="blue.500" fontSize="22">
                    Institucional
                  </Text>
                </ChakraLink>
              </Link>
              <Divider
                orientation="horizontal"
                borderBottomWidth="2px"
                opacity="1"
                borderColor="blue.500"
              />
              <Link href="/produtos" passHref>
                <ChakraLink>
                  <Text ml="auto !important" color="blue.500" fontSize="22">
                    Ovos
                  </Text>
                </ChakraLink>
              </Link>
              <Divider
                orientation="horizontal"
                borderBottomWidth="2px"
                opacity="1"
                borderColor="blue.500"
              />
              <Link href="/receitas" passHref>
                <ChakraLink>
                  <Text ml="auto !important" color="blue.500" fontSize="22">
                    Receitas
                  </Text>
                </ChakraLink>
              </Link>
              <Divider
                orientation="horizontal"
                borderBottomWidth="2px"
                opacity="1"
                borderColor="blue.500"
              />
              <Link href="/contato" passHref>
                <ChakraLink>
                  <Text ml="auto !important" color="blue.500" fontSize="22">
                    Contato
                  </Text>
                </ChakraLink>
              </Link>
              <Divider
                orientation="horizontal"
                borderBottomWidth="2px"
                opacity="1"
                borderColor="blue.500"
              />
            </VStack>
            <Flex direction="column" align="center" mt="40%">
              <Text color="blue.500" fontSize={["22", "22"]} mb="4">
                Siga-nos em nossas redes sociais
              </Text>
              <Flex direction="row">
                <ChakraLink
                  as="button"
                  onClick={() => handleClick("facebook")}
                  my="auto"
                >
                  <Image src="./static/images/facebook.svg" alt="Facebook Logo" />
                </ChakraLink>
                <ChakraLink onClick={() => handleClick("instagram")}>
                  <Image
                    src="./static/images/IG_Glyph_Fill.png"
                    alt="Instagram Logo"
                    mr="2"
                  />
                </ChakraLink>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
