import { FormEventHandler } from "react";
import {
  FieldError,
  FieldValues,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";
import {
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  Button,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Input } from "../Form/Input";

type NewsLetterFormData = {
  userName: string;
  email: string;
};

type handleSignNewsletterType = (
  values: NewsLetterFormData
) => SubmitHandler<NewsLetterFormData>;

interface NewsletterCardFormProps {
  errors: {
    userName?: FieldError;
    email?: FieldError;
  };
  isSubmitting: boolean;
  handleSubmit: (fn: SubmitHandler<NewsLetterFormData>) => FormEventHandler;
  register: UseFormRegister<FieldValues>;
  handleSignNewsletter: handleSignNewsletterType;
}

export function NewsletterCardForm({
  errors,
  isSubmitting,
  register,
  handleSubmit,
  handleSignNewsletter,
}: NewsletterCardFormProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction="column" align="center" mt="2" width="100%">
      {!isWideScreen && (
        <Heading fontSize={["21"]} color="blue.500" fontWeight={900} mb="4">
          Assine a nossa newsletter
        </Heading>
      )}

      <Box
        as="form"
        backgroundImage="url('./static/images/news-ovos-tinoco@2x.png')"
        backgroundPosition="50%"
        width="100%"
        backgroundSize="cover"
        borderRadius="10"
        onSubmit={handleSubmit(handleSignNewsletter)}
        mb="5"
        minH={["11rem", "218px", "300px", "390px"]}
        maxW="1240px"
      >
        <Stack
          spacing="2"
          mx={["4", "auto"]}
          my="4"
          w={["", "100%"]}
          direction={["column", "row"]}
          h="100%"
          justifyContent="space-between"
        >
          {isWideScreen && (
            <Box as="header" width="50%">
              <Heading
                fontSize={["21", "30", "30", "46", "64"]}
                color="blue.500"
                fontWeight={900}
                mb="4"
                align="left"
                height="100%"
                mt={["", "20%", "25%", "25%", "15%"]}
                ml="15%"
              >
                Assine a nossa newsletter
              </Heading>
            </Box>
          )}
          <VStack
            w={["", "50%", "50%", "45%", "40%"]}
            pr={["0", "6", "8", "12", ""]}
            spacing={["2", "2", "2", "4"]}
          >
            <Text
              color="blue.500"
              fontSize={["11", "12", "12", "15", "18"]}
              align="right"
              w="100%"
              mt={["", "20%", "25%", "25%", "20%"]}
            >
              Preencha os campos abaixo e receba as novidades!
            </Text>
            <Input
              fieldName="userName"
              placeholder="Nome"
              type="text"
              borderRadius="4"
              h={["7", "7", "7", "10", "12"]}
              {...register("userName")}
              error={errors.userName}
            />
            <Input
              fieldName="email"
              placeholder="E-mail"
              type="email"
              borderRadius="4"
              h={["7", "7", "7", "10", "12"]}
              {...register("email")}
              error={errors.email}
            />
            <Button
              bg="yellow.500"
              color="white"
              fontSize={["md", "md", "md", "xl", "2xl"]}
              width="fit-content"
              ml="auto !important"
              p={["4", "4", "4", "5", "6"]}
              h="2px"
              fontWeight={300}
              type="submit"
              colorScheme="yellow"
              isLoading={isSubmitting}
            >
              Assinar
            </Button>
          </VStack>
        </Stack>
      </Box>
    </Flex>
  );
}
