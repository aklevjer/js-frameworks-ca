import {
  BiPhone,
  BiEnvelope,
  BiMap,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

/**
 * Displays contact information and social media links.
 *
 * @component
 * @returns {JSX.Element} The rendered contact details component.
 */
export default function ContactDetails() {
  const contactMethods = [
    {
      label: "Phone",
      icon: BiPhone,
      href: "tel:+4712345678",
      text: "+47 12 34 56 78",
    },
    {
      label: "Email",
      icon: BiEnvelope,
      href: "mailto:support@directshop.com",
      text: "support@directshop.com",
    },
    {
      label: "Address",
      icon: BiMap,
      href: null,
      text: "Slottsplassen 1, 0010 Oslo",
    },
  ];

  const socialLinks = [
    { label: "Facebook", icon: BiLogoFacebook },
    { label: "Instagram", icon: BiLogoInstagram },
    { label: "Twitter", icon: BiLogoTwitter },
    { label: "Youtube", icon: BiLogoYoutube },
  ];

  return (
    <section>
      <h2 className="mb-2 text-2xl font-bold capitalize">Get in touch</h2>
      <p className="mb-8">
        Need assistance with our wide range of products or services? We’re just a phone call, email
        or visit away.
      </p>

      <ul className="mb-8 space-y-6 overflow-wrap-anywhere">
        {contactMethods.map(({ label, icon: Icon, href, text }) => (
          <li key={label} className="flex gap-4 rounded-md border border-neutral-200 bg-white p-4">
            <div className="grid size-12 flex-shrink-0 place-items-center rounded-md bg-teal-50">
              <Icon size={28} className="text-teal-800" />
            </div>
            <div>
              <span className="font-medium text-neutral-600">{label}</span>
              {href ? (
                <a href={href} className="block font-semibold underline hover:no-underline">
                  {text}
                </a>
              ) : (
                <span className="block font-semibold">{text}</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="font-semibold">Connect with us on</span>
        <ul className="flex gap-4">
          {socialLinks.map(({ label, icon: Icon }) => (
            <li key={label}>
              <a
                href="#"
                aria-label={label}
                className="grid size-10 place-items-center rounded-md bg-teal-800 transition-colors hover:bg-teal-900"
              >
                <Icon size={24} className="text-neutral-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
