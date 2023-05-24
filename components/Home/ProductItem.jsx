import Image from "next/image";
import Link from "next/link";
import { RiHeartLine, RiShoppingCart2Line } from "react-icons/ri";

export default function ProductItem({ products }) {
  return (
    <div className="bg-gray-50 mt-10 mb-10 rounded-md mx-5">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-semibold tracking-wide text-black text-center mb-10">
          Products
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8500">
          {products.map((product) => (
            <Link
              href={"/product/" + product._id}
              key={product._id}
              className="group relative cursor-pointer transition-all ease-in-out duration-500 hover:shadow-2xl rounded-xl shadow-md"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-90 lg:h-80 duration-500">
                <Image
                  src={product.images[0].url}
                  alt={product.title}
                  title={product.title}
                  width={300}
                  height={300}
                  priority={true}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-2 px-5 py-2">
                <div className="flex items-center justify-center">
                  <h2 className="text-sm text-black capitalize font-semibold">
                    <div>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </div>
                  </h2>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-black">
                    $ {product.price}
                  </p>
                  <p className="mt-1 text-sm text-black">
                    {product.inStock > 0 ? (
                      <span className="text-indigo-600">
                        In Stock : {product.inStock}
                      </span>
                    ) : null}
                  </p>
                </div>
                <div className="relative md:flex items-center justify-between mt-10 mb-5">
                  {product.inStock > 0 ? (
                    <>
                      <button
                        className="bg-indigo-600 text-white rounded-full w-full h-10 mr-2 flex items-center justify-center text-2xl max-md:mb-5"
                        title="Add to cart"
                      >
                        <RiShoppingCart2Line />{" "}
                        <span className="max-sm:flex hidden text-xl ml-2">Add to cart</span>
                      </button>
                      <button
                        className="bg-black text-white rounded-full w-full h-10 mr-2 flex items-center justify-center"
                        title="Buy Now"
                      >
                        Buy Now
                      </button>
                    </>
                  ) : (
                    <span className="text-red-600">Out of Stock</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
