import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";

function ErrorPage() {
  const router = useRouter();
  return (
    <Layout title={"Page Not Found"}>
      <div className="h-screen grid place-content-center bg-gray-50">
        <h1 className="text-4xl">Page Not Found</h1>
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

export default ErrorPage;
