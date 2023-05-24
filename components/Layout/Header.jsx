import React, { Fragment, useContext, useState } from "react";
import { BiCart, BiUser } from "react-icons/bi";
import { useRouter } from "next/router";
import Link from "next/link";
import { DataContext } from "@/store/GlobalState";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Cookie from "js-cookie";
import { toast } from "react-hot-toast";

function Header() {
  const router = useRouter();

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const isActive = (r) => {
    if (r == router.pathname) {
      return " text-black";
    } else {
      return "";
    }
  };

  const handleLogout = () => {
    Cookie.remove("refreshtoken", { path: "/api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({
      type: "NOTIFY",
      payload: { success: toast.success("Logged out!") },
    });
  };

  return (
    <div className="sticky top-0 md:top-5 z-10 flex items-center h-24 bg-gray-50 opacity-95 md:rounded-full mb-5 md:m-5 px-5 shadow-lg">
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
          <ul className="flex items-center border-x-2 p-2 text-gray-500">
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
            {Object.keys(auth).length === 0 ? (
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
            ) : (
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm">
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="h-8 w-8 rounded-full"
                      src={auth.user.avatar}
                      alt={auth.user.name}
                      title={auth.user.name}
                      width={100}
                      height={100}
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      <>
                        <Link
                          href={"/profile"}
                          className="flex items-center justify-evenly px-5 py-2 text-lg hover:bg-gray-50 duration-500"
                        >
                          Profile
                        </Link>
                        <button
                          className="flex items-center justify-evenly px-5 py-2 text-lg hover:bg-gray-50 duration-500 w-full"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
