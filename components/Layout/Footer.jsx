import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

function Footer() {
  return (
    <footer className="">
      <div className="mx-auto w-full">
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/">Next + Tailwind</a>. All
            rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <Link
              href={"/"}
              className="text-gray-400 hover:text-gray-900 duration-500"
            >
              <RiFacebookCircleFill className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href={"/"}
              className="text-gray-400 hover:text-gray-900 duration-500"
            >
              <RiInstagramFill className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link
              href={"/"}
              className="text-gray-400 hover:text-gray-900 duration-500"
            >
              <RiTwitterFill className="w-5 h-5" />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              href={"/"}
              className="text-gray-400 hover:text-gray-900 duration-500"
            >
              <RiYoutubeFill className="w-5 h-5" />
              <span className="sr-only">Youtube account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
