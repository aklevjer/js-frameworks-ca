import * as yup from "yup";

export const contactSchema = yup.object({
  fullName: yup
    .string()
    .min(3, "Your full name must be at least 3 characters")
    .required("Please enter your full name"),

  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter a valid email address"),

  subject: yup
    .string()
    .min(3, "Subject must be at least 3 characters")
    .required("Please enter a subject"),

  body: yup
    .string()
    .min(3, "Message must be at least 3 characters")
    .required("Please enter a message"),
});
