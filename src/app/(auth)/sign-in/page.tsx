import Button from "@/components/common/Button";
import { FiArrowRight } from "react-icons/fi";
import React from "react";

const SignIn = () => {
  return (
    <div className="min-h-[calc(100vh-450px)] flex items-center justify-center">
      <form className="w-fit min-h-[400px] mt-10 bg-neutral text-center px-10 py-6 rounded-[30px]">
        <h3 className="text-xl text-accent mb-6">Sign In</h3>
        <input type="email" className="inputfield" placeholder="Email" />
        <br />
        <input
          type="password"
          className="inputfield mt-4"
          placeholder="Password"
        />
        <br />
        <br />
        <Button
          text="Sign in"
          className="w-full mt-3 py-3 shadow-none"
          icon={<FiArrowRight />}
        />
        <br />
        <br />
        <Button
          text="Sign in With Facebook"
          className="w-full py-3 shadow-none"
          icon={<FiArrowRight />}
          white
        />
      </form>
    </div>
  );
};

export default SignIn;
