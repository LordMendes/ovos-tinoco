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
} from "@chakra-ui/react";
import { useNavbarDrawer } from "../../contexts/NavbarDropdownMenuContext";

export function NavbarMobileScreen() {
  const { isOpen, onClose } = useNavbarDrawer();
  return (
    <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="white" p="4">
          <DrawerCloseButton
            mt="6"
            mr="6"
            fontSize="20"
            fontWeight={900}
            color="blue.500"
            bg="white !important"
          />
          <DrawerHeader mb="6">
          <Image src="./images/Logo.svg" alt="Logo" />
          </DrawerHeader>
          <DrawerBody>
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
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
