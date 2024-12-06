import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAlert } from "../../../hooks/useAlert";
import { contactSchema } from "../../../utils/schemas/contactSchema";

import TextInput from "../../ui/TextInput";
import Textarea from "../../ui/Textarea";
import Button from "../../ui/Button";
import Alert from "../../ui/Alert";

export default function ContactForm() {
  const { alertMessage, showAlert } = useAlert();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema) });

  const onSubmit = (formData) => {
    console.log("Contact form data:", formData);
    showAlert("Your message was sent!");
    reset();
  };

  return (
    <section className="rounded-md border border-neutral-200 bg-white p-6 md:p-8">
      <h2 className="mb-2 text-2xl font-bold capitalize">Reach out</h2>
      <p className="mb-4">
        Have a question or feedback for us? Let us know by filling out the form below and we’ll be
        happy to help.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <TextInput
          id="fullName"
          type="text"
          label="Full name"
          placeholder="Full name"
          register={register}
          error={errors.fullName}
        />

        <TextInput
          id="email"
          type="email"
          label="Email"
          placeholder="email@example.com"
          register={register}
          error={errors.email}
        />

        <TextInput
          id="subject"
          type="text"
          label="Subject"
          placeholder="Subject"
          register={register}
          error={errors.subject}
        />

        <Textarea
          id="body"
          label="Message"
          placeholder="Write your message here.."
          register={register}
          error={errors.body}
        />

        <Button variant="primary" type="submit" className="w-full">
          Send Message
        </Button>

        {alertMessage && <Alert type="success" message={alertMessage} />}
      </form>
    </section>
  );
}
