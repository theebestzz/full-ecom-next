import Image from "next/image";

export default function ProductItem({ products }) {
  return (
    <div className="bg-gray-50 mt-10 mb-10 rounded-md mx-5">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-semibold tracking-wide text-black text-center mb-10">
          Products
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product._id}
              title={product.title}
              className="group relative cursor-pointer transition-all ease-in-out hover:scale-105 duration-500"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 duration-500">
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
              <div className="mt-4">
                <div className="flex items-center justify-center">
                  <h2 className="text-sm text-black capitalize font-semibold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h2>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-black">
                    $ {product.price}
                  </p>
                  <p className="mt-1 text-sm text-black">
                    {product.inStock > 0 ? (
                      <span className="text-green-600">
                        In Stock : {product.inStock}
                      </span>
                    ) : (
                      <span className="text-red-600">Out of Stock</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
