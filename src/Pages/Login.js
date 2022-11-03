import React from "react";
import FormLogin from "../components/FormLogin";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <FormLogin />
      </div>
      <Footer />
    </>
  );
};

export default Login;
