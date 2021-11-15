import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewsletterCardForm } from "./index";
import axios from "axios";

const newsletterValidationSchema = Yup.object().shape({
  userName: Yup.string().required("Nome obrigatório"),
  email: Yup.string().required("E-mail obrigatório").email("E-mail inválido"),
});

type NewsLetterFormData = {
  userName: string;
  email: string;
};

export function NewsletterCardFormController() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(newsletterValidationSchema),
  });

  const { errors, isSubmitting } = formState;

  const handleSignNewsletter: SubmitHandler<NewsLetterFormData> = async (
    values: NewsLetterFormData
  ) => {
    const data = {
      formulario: "NEWSLETTER",
      usuario: values.userName,
      email: values.email,
      _captcha: "false",
      _template: "basic",
    };

    await axios.post(
      `https://formsubmit.co/${process.env.REACT_APP_TINOCO_EMAIL}`,
      data
    );
    reset();
  };

  return (
    <NewsletterCardForm
      errors={errors}
      isSubmitting={isSubmitting}
      register={register}
      handleSubmit={handleSubmit}
      handleSignNewsletter={handleSignNewsletter}
    />
  );
}
