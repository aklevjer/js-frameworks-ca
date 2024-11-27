import { Link } from "react-router-dom";
import LogoIcon from "../../../assets/logo-icon.svg?react";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="font-montserrat text-lg font-bold">DirectShop</span>
      <LogoIcon />
    </Link>
  );
}
