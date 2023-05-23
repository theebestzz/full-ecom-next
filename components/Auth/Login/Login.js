import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/store/GlobalState";
import Link from "next/link";
import { postData } from "@/utils/fetchData";
import Cookie from "js-cookie";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Loading from "@/components/Utils/Loading";

function Login() {
  const initialState = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postData("/auth/login", userData);
    if (res.err)
      return dispatch({
        type: "NOTIFY",
        payload: { error: toast.error(res.err) },
      });
    dispatch({
      type: "NOTIFY",
      payload: { success: toast.success(res.msg) },
    });
    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    Cookie.set("refreshtoken", res.refresh_token, {
      path: "/api/auth/accessToken",
      expires: 7,
    });
    localStorage.setItem("firstLogin", true);
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth]);
  return (
    <>
      <div className="flex h-screen bg-gray-50 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {loading && <Loading />}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 mb-52 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    href={"/forgot-password"}
                    className="font-semibold text-gray-500 hover:text-gray-800"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 sm:text-sm sm:leading-6"
                  value={password}
                  onChange={handleChangeInput}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Do not have an account?{" "}
            <Link
              href={"/register"}
              className="font-semibold leading-6 text-gray-500 hover:text-gray-800"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Login;
