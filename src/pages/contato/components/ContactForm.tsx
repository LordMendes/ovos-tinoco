import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, SimpleGrid, Button } from "@chakra-ui/react";
import { Input } from "../../../components/Form/Input";
import { Select } from "../../../components/Form/Select";
import { Textarea } from "../../../components/Form/Textarea";
import { useEffect, useState } from "react";
import { getCitiesFromUf } from "../../../services/ibgeApi";
import axios from "axios";

type Ufs = {
  id: number;
  nome: string;
  regiao: { id: number; sigla: string; nome: string };
  sigla: string;
};

type ContactFormData = {
  userName: string;
  email: string;
  phone: string;
  subject: string;
  city: string;
  state: string;
  message: string;
};

type City = {
  id: number;
  nome: string;
};

interface ContactFormProps {
  ufs: Array<Ufs>;
}

const ContactFormValidationSchema = Yup.object().shape({
  userName: Yup.string().required("Nome obrigatório"),
  email: Yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  phone: Yup.string().required("Telefone obrigatório"),
  subject: Yup.string(),
  // subject: Yup.string().required("Assunto obrigatório"),
  state: Yup.string().required("Estado obrigatório"),
  city: Yup.string().required("Cidade obrigatória"),
  message: Yup.string().required("Messagem obrigatória"),
});

export function ContactForm({ ufs }: ContactFormProps) {
  const [isUfChosen, setIsUfChosen] = useState({ chosen: false, ufID: "" });
  const [cities, setCities] = useState<City[]>([]);

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(ContactFormValidationSchema),
  });

  const { errors, isSubmitting } = formState;

  const handleSignNewsletter: SubmitHandler<ContactFormData> = async (
    values: ContactFormData
  ) => {
    const data = {
      formulario: "CONTATO",
      nome: values.userName,
      email: values.email,
      telefone: values.phone,
      assunto: values.subject,
      estado: values.state,
      cidade: values.city,
      mensagem: values.message,
    };
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(values);
        reset();
      }, 2000)
    );
    console.log(data);

    // await axios.post(
    //   `https://formsubmit.co/${process.env.REACT_APP_TINOCO_EMAIL}`,
    //   data
    // );
  };

  function handleStateChosen(value: any) {
    if (!!value.target.value) {
      const chosenUf = ufs.find((item) => item.nome === value.target.value)!;
      setIsUfChosen({ chosen: true, ufID: String(chosenUf.id) });
    } else setIsUfChosen({ chosen: false, ufID: "" });
  }

  useEffect(() => {
    async function callCities() {
      const response = await getCitiesFromUf(isUfChosen.ufID);
      setCities(response);
    }
    if (isUfChosen.ufID) {
      callCities();
    }
  }, [isUfChosen]);

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
          {...register("phone")}
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
          options={ufs.map((item) => ({
            id: item.id,
            label: item.nome,
            value: item.nome,
          }))}
          onChange={(e) => handleStateChosen(e)}
        />
        <Select
          fieldName="city"
          label="Cidade"
          placeholder="Selecione sua Cidade"
          borderRadius="4"
          {...register("city")}
          error={errors.city}
          minH="33px"
          isDisabled={!isUfChosen.chosen}
          options={cities.map((item) => ({
            id: item.id,
            label: item.nome,
            value: item.nome,
          }))}
        />
      </SimpleGrid>
      <Textarea
        fieldName="message"
        label="Mensagem"
        placeholder="Digite aqui sua mensagem"
        {...register("message")}
        error={errors.message}
        rows={8}
      />
      <Input
        fieldName="_captcha"
        type="hidden"
        {...register("_captcha")}
        value="false"
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
