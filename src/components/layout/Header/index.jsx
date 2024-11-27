import { useState } from "react";
import PromoBar from "./PromoBar";
import Logo from "../../ui/Logo";
import Nav from "./Nav";
import MenuCart from "./MenuCart";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200 bg-white">
      <PromoBar />
      <div className="container flex items-center justify-between py-4">
        <Logo />
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MenuCart isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
}
