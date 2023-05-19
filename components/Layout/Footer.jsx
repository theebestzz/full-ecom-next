function Footer() {
  return (
    <div className="w-full h-24 flex items-center">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <ul className="hidden md:flex">
            <li className="mx-5">Home</li>
            <li className="mx-5">About</li>
            <li className="mx-5">Products</li>
          </ul>
        </div>
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Next + Tailwind</h1>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex">
            <li className="mx-5">Login</li>
            <li className="mx-5">Register</li>
            <li className="mx-5">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
