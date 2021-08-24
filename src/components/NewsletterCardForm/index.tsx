import { Flex, Heading, Text, Box, Stack, Button } from "@chakra-ui/react";
import { Input } from "../Form/Input";
import { FieldError } from "react-hook-form";
import { FormEventHandler } from "react";

type NewsLetterFormData = {
  userName: string;
  email: string;
};

type handleSignNewsletterType = (
  values: NewsLetterFormData
) => any | Promise<any>;

interface NewsletterCardFormProps {
  errors: {
    userName?: FieldError;
    email?: FieldError;
  };
  isSubmitting: boolean;
  handleSubmit: (fn: handleSignNewsletterType) => FormEventHandler;
  register: (field: string) => void;
  handleSignNewsletter: handleSignNewsletterType;
}

export function NewsletterCardForm({
  errors,
  isSubmitting,
  register,
  handleSubmit,
  handleSignNewsletter,
}: NewsletterCardFormProps) {
  return (
    <Flex direction="column" align="center" mt="2">
      <Heading fontSize="21" color="blue.500" fontWeight={900} mb="4">
        Assine a nossa newsletter
      </Heading>
      <Box
        as="form"
        backgroundImage="url('./images/news-ovos-tinoco@2x.png')"
        backgroundPosition="50%"
        minHeight="11rem"
        width="100%"
        backgroundSize="cover"
        borderRadius="10"
        onSubmit={handleSubmit(handleSignNewsletter)}
        mb="5"
      >
        <Stack spacing="2" mx="4" mt="4">
          <Text color="blue.500" fontSize="12" align="right">
            Preencha os campos abaixo e receba as novidades!
          </Text>
          <Input
            name="userName"
            placeholder="Nome"
            type="text"
            borderRadius="4"
            h="7"
            {...register("userName")}
            error={errors.userName}
          />
          <Input
            name="email"
            placeholder="E-mail"
            type="email"
            borderRadius="4"
            h="7"
            {...register("email")}
            error={errors.email}
          />
          <Button
            bg="yellow.500"
            color="white"
            fontSize="md"
            width="fit-content"
            ml="auto !important"
            p="4"
            h="2px"
            fontWeight={300}
            type="submit"
            colorScheme="yellow"
            isLoading={isSubmitting}
          >
            Assinar
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
