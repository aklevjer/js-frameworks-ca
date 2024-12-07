import Page from "../../components/layout/Page";
import ContactDetails from "../../components/contact/ContactDetails";
import ContactForm from "../../components/contact/ContactForm";

export default function Contact() {
  return (
    <Page
      title="Contact Us"
      description="Contact DirectShop for customer support, inquiries, or feedback. We're happy to assist!"
    >
      <section>
        <h1 className="mb-12 text-center text-3xl font-bold capitalize">Contact us</h1>
        <div className="grid gap-12 md:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </section>
    </Page>
  );
}
