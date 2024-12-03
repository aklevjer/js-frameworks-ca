import ContactDetails from "../../components/contact/ContactDetails";
import ContactForm from "../../components/contact/ContactForm";

export default function Contact() {
  return (
    <section>
      <h1 className="mb-12 text-center text-3xl font-bold capitalize">Contact us</h1>
      <div className="grid gap-12 md:grid-cols-2">
        <ContactDetails />
        <ContactForm />
      </div>
    </section>
  );
}
