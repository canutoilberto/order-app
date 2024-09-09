import { Home, Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <ul className="flex justify-around items-center h-16">
        <li>
          <Link
            href="/"
            className="flex flex-col items-center text-gray-600 hover:text-black"
          >
            <Home size={24} />
            <span className="text-xs mt-1">Início</span>
          </Link>
        </li>
        <li>
          <Link
            href="/menu"
            className="flex flex-col items-center text-gray-600 hover:text-black"
          >
            <Menu size={24} />
            <span className="text-xs mt-1">Cardápio</span>
          </Link>
        </li>
        <li>
          <Link
            href="/cart"
            className="flex flex-col items-center text-gray-600 hover:text-black"
          >
            <ShoppingCart size={24} />
            <span className="text-xs mt-1">Carrinho</span>
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className="flex flex-col items-center text-gray-600 hover:text-black"
          >
            <User size={24} />
            <span className="text-xs mt-1">Perfil</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
