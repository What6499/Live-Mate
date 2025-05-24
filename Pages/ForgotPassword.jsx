import { sendPasswordResetEmail } from "firebase/auth";
import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { auth } from "../firebase/firebase.config";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleForgetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
    setEmail("");
  };
  useEffect(() => {
    const typedEmail = localStorage.getItem("typedEmail");
    if (typedEmail) {
      setEmail(typedEmail);
      localStorage.removeItem("typedEmail");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <form onSubmit={handleForgetPassword} className="h-[100vh] ">
        <div className="flex   mx-auto flex-col space-y-4 mt-8 p-4 rounded-md  w-max">
          <h1 className="font-bold text-xl text-center ">
            Reset Your Password
          </h1>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="input input-md"
          />
          <button
            type="submit"
            className="btn "
          >
            Reset My Password
          </button>
        </div>
      </form>
    </>
  );
};

export default ForgotPassword;
