import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewsletterCardForm } from "./index";

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
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve(values);
      reset();
    }, 2000)
  );
  console.log(values);
  
  // await axios.post("https://formsubmit.co/feliciovcm@gmail.com", values);
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
