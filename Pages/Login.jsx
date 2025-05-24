import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser, loginWithGoogle } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        navigate(location?.state || "/");
        toast.success("Logged In Successfully");
      })
      .catch((error) => {
        if (error) toast.error("Account does not exist");
      });
  };
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        navigate(location?.state || "/");
        toast.success("Logged In Successfully");
      })
      .catch((error) => console.log(error));
  };
  const handleForgetPassword = () => {
    const email = emailRef.current?.value;

    localStorage.setItem("typedEmail", email || "");
    navigate("/forgot-password");
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hero  min-h-screen">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">
                Login to your account
              </h1>
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label">Email</label>
                <input
                  ref={emailRef}
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    title="Password must have at least 6 characters,1 Uppercase and 1 Lowercase letter"
                    pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    className="input"
                    placeholder="Password"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn btn-circle size-8  absolute right-2 top-1 "
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div>
                  <Link
                    onClick={handleForgetPassword}
                    className="link link-hover"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="btn bg-[#1a202c] text-white mt-4"
                >
                  Login
                </button>
              </form>
              <p>
                Don't Have an account?
                <Link to={"/register"}>
                  {" "}
                  <span className="text-orange-600 cursor-pointer hover:underline">
                    Register
                  </span>
                </Link>
              </p>
              <button
                onClick={handleGoogleLogin}
                className="btn   border-[#e5e5e5]"
              >
                <svg className="rounded-full"
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
