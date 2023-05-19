import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="w-full h-screen">{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
