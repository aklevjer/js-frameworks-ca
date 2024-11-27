import { BiSolidTruck, BiCheckShield, BiRotateLeft } from "react-icons/bi";

export default function PromoBar() {
  const promoItems = [
    {
      id: "shipping",
      icon: BiSolidTruck,
      text: "Free shipping and returns",
    },
    {
      id: "secure",
      icon: BiCheckShield,
      text: "Secure payment",
    },
    {
      id: "return",
      icon: BiRotateLeft,
      text: "100 days return policy",
    },
  ];

  return (
    <div className="hidden bg-neutral-900 py-3 text-sm font-medium uppercase text-neutral-100 md:block">
      <ul className="container flex justify-between">
        {promoItems.map(({ id, icon: Icon, text }) => (
          <li key={id} className="flex items-center gap-2">
            <Icon size={18} />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
