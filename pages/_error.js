import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";

function ErrorPage({ statusCode }) {
  const router = useRouter();
  return (
    <Layout title={"Page Not Found - " + statusCode}>
      <div className="h-screen grid place-content-center bg-gray-50">
        <h1 className="text-4xl">Page Not Found - {statusCode}</h1>
        <button
          className="text-2xl cursor-pointer bg-black text-white p-2 rounded-md mt-10 w-full"
          onClick={() => router.push("/")}
        >
          Return Home
        </button>
      </div>
    </Layout>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
