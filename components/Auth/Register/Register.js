import React, { useState, useContext } from "react";
import Link from "next/link";
import valid from "@/utils/validation";
import { DataContext } from "@/store/GlobalState";
import { toast } from "react-hot-toast";
import { postData } from "@/utils/fetchData";
import Loading from "@/components/Utils/Loading";

function Register() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, confirmPassword } = userData;
  const { state, dispatch } = useContext(DataContext);
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, confirmPassword);
    if (errMsg)
      return dispatch({
        type: "NOTIFY",
        payload: {
          error: toast.error(errMsg),
        },
      });

    setLoading(true);

    const res = await postData("/auth/register", userData);
    if (res.err)
      return dispatch({
        type: "NOTIFY",
        payload: { error: toast.error(res.err) },
      });

    dispatch({
      type: "NOTIFY",
      payload: { success: toast.success(res.msg) },
    });
    setLoading(false);
  };
  return (
    <div className="flex h-screen bg-gray-50 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {loading && <Loading />}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create a new account
        </h2>
      </div>

      <div className="mt-10 mb-40 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 sm:text-sm sm:leading-6"
                value={name}
                onChange={handleChangeInput}
              />
            </div>
          </div>
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
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>

            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset px-2 sm:text-sm sm:leading-6"
                value={confirmPassword}
                onChange={handleChangeInput}
              />
            </div>
            <div className="text-sm mt-5 px-2 text-end">
              <Link
                href={"/forgot-password"}
                className="font-semibold text-gray-500 hover:text-black"
              >
                Forgot password?
              </Link>
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
          Do you have an account?{" "}
          <Link
            href={"/login"}
            className="font-semibold leading-6 text-gray-500 hover:text-black"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Register;
