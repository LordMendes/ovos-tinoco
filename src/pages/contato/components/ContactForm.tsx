import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, SimpleGrid, Button } from "@chakra-ui/react";
import { Input } from "../../../components/Form/Input";
import { Select } from "../../../components/Form/Select";
import { Textarea } from "../../../components/Form/Textarea";
import { useEffect, useState } from "react";
import { getCitiesFromUf } from "../../../services/ibgeApi";
import { maskInputPhone } from '../../../utils/masks'
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
  subject: Yup.string().required("Assunto obrigatório"),
  state: Yup.string().required("Estado obrigatório"),
  city: Yup.string().required("Cidade obrigatória"),
  message: Yup.string().required("Messagem obrigatória"),
});

const subjectList = [
  { id: 1, label: "Sugestão", value: "Sugestão" },
  { id: 2, label: "Reclamação", value: "Reclamação" },
  { id: 3, label: "Elogio", value: "Elogio" },
  { id: 4, label: "Vendas", value: "Vendas" },
];

export function ContactForm({ ufs }: ContactFormProps) {
  const [isUfChosen, setIsUfChosen] = useState({ chosen: false, ufID: "" });
  const [cities, setCities] = useState<City[]>([]);

  const { register, handleSubmit, formState, reset, watch, setValue } = useForm(
    {
      resolver: yupResolver(ContactFormValidationSchema),
    }
  );
  const ufState = watch("state");
  const cityState = watch("city");
  const subjectState = watch("subject");

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
      _captcha: "false",
      _template: "box",
    };

    await axios.post(
      `https://formsubmit.co/${process.env.REACT_APP_TINOCO_EMAIL}`,
      data
    );
    reset();
  };

  function handleStateChosen(value: any) {
    setValue("state", value.target.value);
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
          onChange={(e) => setValue('phone', maskInputPhone(e.target.value))}
        />
        <Select
          fieldName="subject"
          label="Assunto"
          placeholder="Selecione qual assunto deseja tratar"
          borderRadius="4"
          {...register("subject")}
          options={subjectList}
          hasValue={!!subjectState}
          error={errors.subject}
          minH="33px"
          onChange={(e) => setValue("subject", e.target.value)}
        />
        <Select
          fieldName="state"
          label="Estado"
          placeholder="Selecione seu Estado"
          borderRadius="4"
          {...register("state")}
          error={errors.state}
          minH="33px"
          hasValue={!!ufState}
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
          hasValue={!!cityState}
          minH="33px"
          isDisabled={!isUfChosen.chosen}
          options={cities.map((item) => ({
            id: item.id,
            label: item.nome,
            value: item.nome,
          }))}
          onChange={(e) => setValue("city", e.target.value)}
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
      <Button
        bg="#0060AF"
        color="white"
        fontSize={["md", "md", "md", "xl", "2xl"]}
        width="fit-content"
        display="block"
        ml="auto"
        mr={["auto", 0]}
        px="5"
        mt="6"
        fontWeight={500}
        type="submit"
        colorScheme="blue"
        isLoading={isSubmitting}
      >
        Enviar
      </Button>
    </Box>
  );
}
