import {
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import Logo from "../../ui/Logo";

export default function Footer() {
  const socialLinks = [
    { label: "Facebook", icon: BiLogoFacebookSquare },
    { label: "Instagram", icon: BiLogoInstagram },
    { label: "Twitter", icon: BiLogoTwitter },
    { label: "Youtube", icon: BiLogoYoutube },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="container flex flex-col items-center justify-between gap-6 py-6 md:flex-row">
        <Logo />
        <ul className="flex gap-4 md:order-last">
          {socialLinks.map(({ label, icon: Icon }) => (
            <li key={label}>
              <a href="#" aria-label={label} className="transition-colors hover:text-neutral-400">
                <Icon size={28} />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center">&copy; 2024 DirectShop. All rights reserved.</p>
      </div>
    </footer>
  );
}
