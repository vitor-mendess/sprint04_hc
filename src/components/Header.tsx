import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src="src/assets/LOGO.png" alt="Logo" className="h-12" />
        </Link>

        {/* MENU HAMBURGUER (MOBILE) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuAtivo(!menuAtivo)}
        >
          ☰
        </button>

        {/* LINKS */}
        <nav
          className={`${
            menuAtivo ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white shadow-md md:static md:block md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-0 text-gray-700 font-semibold">
   
            <li>
              <Link to="/sobre" className="hover:text-blue-700">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-blue-700">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-blue-700">
                Contato
              </Link>
            </li>
            <li>
              <Link to="/integrantes" className="hover:text-blue-700">
                Integrantes
              </Link>
            </li>
          </ul>
        </nav>

        {/* LOGIN (DESKTOP) */}
        <div className="hidden md:block">
          <Link to="/login">
            <img src="src/assets/login.png" alt="Login" className="h-8" />
          </Link>
        </div>
      </div>
    </header>
  );
}
