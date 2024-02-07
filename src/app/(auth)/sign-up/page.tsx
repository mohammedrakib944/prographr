import React from "react";
import Button from "@/components/common/Button";
import { FiArrowRight } from "react-icons/fi";

const SignUp = () => {
  return (
    <div className="min-h-[calc(100vh-450px)] flex items-center justify-center">
      <form className="w-fit min-h-[400px] bg-neutral text-center px-10 py-6 rounded-[30px] mt-10">
        <h3 className="text-xl text-accent mb-6">Sign Up</h3>
        <div className="flex flex-col gap-3 mb-3">
          <div className="max-w-[280px] lg:max-w-[350px] flex gap-3">
            <input
              type="text"
              className="inputfield w-full"
              placeholder="First Name"
            />
            <input
              type="text"
              className="inputfield w-full"
              placeholder="Last Name"
            />
          </div>
          <input type="email" className="inputfield" placeholder="Email" />
          <input
            type="password"
            className="inputfield"
            placeholder="Password"
          />
          <input
            type="password"
            className="inputfield"
            placeholder="Confirm Password"
          />
        </div>

        <div className="form-control py-3">
          <label className="flex gap-3">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <span className="label-text">
              I agree with all the{" "}
              <a href="#" className="text-blue-500 underline">
                terms and services
              </a>
            </span>
          </label>
        </div>
        <Button
          text="Sign Up"
          className="w-full mt-3 py-3 shadow-none"
          icon={<FiArrowRight />}
        />
      </form>
    </div>
  );
};

export default SignUp;
