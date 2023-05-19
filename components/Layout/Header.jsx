import Link from "next/link";
import { BiCart, BiUser } from "react-icons/bi";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const isActive = (r) => {
    if (r == router.pathname) {
      return " text-black";
    } else {
      return "";
    }
  };
  return (
    <div className="md:sticky top-5 z-10 flex items-center h-24 bg-gray-50 md:rounded-full mb-5 md:m-5 px-5 shadow-lg">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <Link href={"/"} className="text-2xl font-bold">
            Next + Tailwind
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex font-semibold text-lg text-gray-500">
            <li className="mx-5">
              <Link
                href={"/"}
                className={
                  "flex items-center hover:text-black transition-all ease-in-out duration-500" +
                  isActive("/")
                }
              >
                Home
              </Link>
            </li>
            <li className="mx-5">
              <Link
                href={"/about"}
                className={
                  "flex items-center hover:text-black transition-all ease-in-out duration-500" +
                  isActive("/about")
                }
              >
                About
              </Link>
            </li>
            <li className="mx-5">
              <Link
                href={"/contact"}
                className={
                  "flex items-center hover:text-black transition-all ease-in-out duration-500" +
                  isActive("/contact")
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center border-x-2 text-gray-500">
            <li className="mx-2">
              <Link
                href="/cart"
                className={
                  "flex items-center gap-2 hover:text-black transition-all ease-in-out duration-500" +
                  isActive("/cart")
                }
              >
                <BiCart className="w-8 h-8" />
                <span className="hidden md:flex font-semibold text-lg">
                  Cart
                </span>
              </Link>
            </li>
            <li className="mx-2">
              <Link
                href="/login"
                className={
                  "flex items-center gap-2 hover:text-black transition-all ease-in-out duration-500" +
                  isActive("/login")
                }
              >
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
