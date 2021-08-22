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
} from "@chakra-ui/react";
import { useNavbarDrawer } from "../../contexts/NavbarDropdownMenuContext";

export function NavbarMobileScreen() {
  const { isOpen, onClose } = useNavbarDrawer();
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
            <Image src="./images/Logo.svg" alt="Logo" />
          </DrawerHeader>
          <DrawerBody px="14px">
            <VStack>
              <Text ml="auto !important" color="blue.500" fontSize="22">
                início
              </Text>
              <Divider
                orientation="horizontal"
                borderBottomWidth="2px"
                opacity="1"
                borderColor="blue.500"
              />
              <Text ml="auto !important" color="blue.500" fontSize="22">
                Institucional
              </Text>
              <Divider
                orientation="horizontal"
                borderBottomWidth="2px"
                opacity="1"
                borderColor="blue.500"
              />
              <Text ml="auto !important" color="blue.500" fontSize="22">
                Ovos
              </Text>
              <Divider
                orientation="horizontal"
                borderBottomWidth="2px"
                opacity="1"
                borderColor="blue.500"
              />
              <Text ml="auto !important" color="blue.500" fontSize="22">
                Receitas
              </Text>
              <Divider
                orientation="horizontal"
                borderBottomWidth="2px"
                opacity="1"
                borderColor="blue.500"
              />
              <Text ml="auto !important" color="blue.500" fontSize="22">
                Contato
              </Text>
              <Divider
                orientation="horizontal"
                borderBottomWidth="2px"
                opacity="1"
                borderColor="blue.500"
              />
             
            </VStack>
            <Flex direction="column" align="center" mt="40%">
                <Text color="blue.500" fontSize={["22", "22"]} mb="4">Siga-nos em nossas redes sociais</Text>
                <Flex direction="row">
                  <Image
                    src="./images/IG_Glyph_Fill.png"
                    alt="Instagram Logo"
                    mr="2"
                  />
                  <Image src="./images/facebook.svg" alt="Facebook Logo" />
                </Flex>
              </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
