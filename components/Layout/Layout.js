import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      {title === "Home" ? (
        ""
      ) : (
        <>
          <div className="darkbg"></div>
          <div className="w-full flex items-center justify-center py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32 breadcrumb-pages">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center relative">
                <span className="font-satisfy block font-normal mb-3">
                  explore
                </span>
                {title}
              </h2>
            </div>
          </div>
        </>
      )}
      <main className="w-full h-screen relative">{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
