import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  FaFacebook,
  FaGoogle,
  FaEye,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-12 md:mt-5 gap-4">
          {/* Form */}
          <div className="col-span-12 md:col-span-12 lg:col-span-4 max-w-md mx-auto lg:mx-0">
            <form className="bg-white p-8 rounded-lg shadow-lg w-full ">
              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="emailPhone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email/Phone Number*
                </label>
                <div className="relative flex items-center">
                  <FaEnvelope className="absolute left-3 text-gray-400" />
                  <input
                    type="text"
                    id="emailPhone"
                    className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email /Phone Number"
                    required
                  />
                </div>
              </div>
              {/* Password */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password*
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 pl-10 pr-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <button
                      type="button"
                      className="p-2 text-gray-500 focus:outline-none"
                    >
                      <FaEye />
                    </button>
                  </div>
                </div>
              </div>
              {/* Confirm Password */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Confirm Password*
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 pl-10 pr-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <button
                      type="button"
                      className="p-2 text-gray-500 focus:outline-none"
                    >
                      <FaEye />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <button
                  type="submit"
                  className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-bold py-2 px-4 rounded border border-blue-400 focus:outline-none focus:shadow-outline w-full"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex items-center mb-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-600">Or Sign Up with</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="flex  justify-center gap-2 mb-6">
                <button
                  type="button"
                  className="flex items-center justify-center w-max p-3 rounded-full focus:outline-none focus:shadow-outline text-blue-600 border border-blue-600 hover:bg-blue-100"
                >
                  <FaFacebook className="text-2xl" />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center w-max p-3 rounded-full focus:outline-none focus:shadow-outline text-red-600 border border-red-600 hover:bg-red-100"
                >
                  <FaGoogle className="text-2xl" />
                </button>
              </div>
              <div className="text-center font-bold">
                <p className="text-gray-600 text-sm">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="font-bold text-blue-500 hover:text-blue-800"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 mx-auto lg:flex flex-col justify-center items-center hidden">
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl font-bold">Register</h3>
              <p>
                to Access the Best Deals and Hotels <br /> in Bangladesh!
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 lg:flex justify-center items-center hidden">
             <DotLottieReact
              src="https://lottie.host/e7034912-c602-4ad2-af34-f02236ce98c3/S8S4DVlbfJ.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;