import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}


export function Container({ children }: ContainerProps) {
  return (
    <Flex
      direction="column"
      align="center"
      w="calc(100vw - (100vw - 100%))"
      mx="auto"
    >
      {children}
    </Flex>
  );
}
