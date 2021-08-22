import { Flex, Heading, Text, Image, Box } from "@chakra-ui/react";

export function NewsletterCard() {
  return (
    <Flex direction="column" mx="5" align="center">
      <Heading size="lg" color="blue.500" fontWeight={900} mb="4">
        Assine a nossa newsletter
      </Heading>
      <Box
        backgroundImage="url('./images/news-ovos-tinoco@2x.png')"
        minHeight="150px"
        width="100%"
        backgroundSize="cover"
        borderRadius="10"
      >
        Qualquwer
      </Box>
    </Flex>
  );
}
