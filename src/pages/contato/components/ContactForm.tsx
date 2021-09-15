import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, SimpleGrid, Button } from "@chakra-ui/react";
import { Input } from "../../../components/Form/Input";
import { Select } from "../../../components/Form/Select";
import { Textarea } from "../../../components/Form/Textarea";

type ContactFormData = {
  userName: string;
  email: string;
  phone: string;
};

const ContactFormValidationSchema = Yup.object().shape({
  userName: Yup.string().required("Nome obrigatório"),
  email: Yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  phone: Yup.string().required("Telefone obrigatório"),
  subject: Yup.string().required("Assunto obrigatório"),
  state: Yup.string().required("Estado obrigatório"),
  city: Yup.string().required("Cidade obrigatória"),
  message: Yup.string().required("Messagem obrigatória"),
});

export function ContactForm() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(ContactFormValidationSchema),
  });

  const { errors, isSubmitting } = formState;

  const handleSignNewsletter: SubmitHandler<ContactFormData> = async (
    values: ContactFormData
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Box
      as="form"
      maxW="946px"
      mt="14"
      mx="auto"
      onSubmit={handleSubmit(handleSignNewsletter)}
      px={["6", null]}
    >
      <SimpleGrid columns={[1, 3]} spacing={["4", "6"]}>
        <Input
          fieldName="userName"
          placeholder="Nome"
          label="Nome"
          type="text"
          minH="26px"
          borderRadius="4"
          {...register("userName")}
          error={errors.userName}
        />
        <Input
          fieldName="email"
          label="Email"
          placeholder="E-mail"
          type="email"
          borderRadius="4"
          {...register("email")}
          error={errors.email}
          minH="26px"
        />
        <Input
          fieldName="phone"
          label="Telefone"
          placeholder="Seu telefone aqui"
          type="tel"
          borderRadius="4"
          {...register("email")}
          error={errors.phone}
          minH="26px"
        />
        <Select
          fieldName="subject"
          label="Assunto"
          placeholder="Selecione qual assunto deseja tratar"
          borderRadius="4"
          {...register("subject")}
          error={errors.subject}
          minH="33px"
        />
        <Select
          fieldName="state"
          label="Estado"
          placeholder="Selecione seu Estado"
          borderRadius="4"
          {...register("state")}
          error={errors.state}
          minH="33px"
        />
        <Select
          fieldName="city"
          label="Cidade"
          placeholder="Selecione sua Cidade"
          borderRadius="4"
          {...register("city")}
          error={errors.city}
          minH="33px"
          isDisabled
        />
      </SimpleGrid>
      <Textarea
        fieldName="message"
        label="Mensagem"
        placeholder="Digite aqui sua mensagem"
        error={errors.message}
        rows={8}
      />
      <Button
        bg="#0060AF"
        color="white"
        fontSize={["md", "md", "md", "xl", "2xl"]}
        width="fit-content"
        display="block"
        ml="auto"
        px="5"
        mt="6"
        fontWeight={300}
        type="submit"
        colorScheme="blue"
        isLoading={isSubmitting}
      >
        Enviar
      </Button>
    </Box>
  );
}
