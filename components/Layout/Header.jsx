import Link from "next/link";
import { BiCart, BiUser } from "react-icons/bi";

function Header() {
  return (
    <div className="w-full h-24 flex items-center px-5">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <Link href={"/"} className="text-2xl font-bold">
            Next + Tailwind
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex">
            <li className="mx-5">Home</li>
            <li className="mx-5">About</li>
            <li className="mx-5">Contact</li>
          </ul>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center border-x-2">
            <li className="mx-2">
              <Link href="/cart" className="flex items-center gap-2">
                <BiCart className="w-8 h-8" />
                <span className="hidden md:flex font-semibold text-lg">
                  Cart
                </span>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="/login" className="flex items-center gap-2">
                <BiUser className="w-7 h-7" />
                <span className="hidden md:flex font-semibold text-lg">
                  Login
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
