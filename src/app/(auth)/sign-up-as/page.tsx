import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

const SignUpAs = () => {
  return (
    <div className="layout min-h-[calc(100vh-500px)] flex items-center">
      <div className="w-fit mx-auto flex flex-col items-center">
        <h3 className="text-3xl text-accent">Sign up as a</h3>
        <div className="flex gap-4 mt-10">
          <Link href="/sign-up">
            <Button text="Seller" className="px-10 py-3 text-lg" />
          </Link>
          <Link href="/sign-up">
            <Button text="Buyer" className="px-10 py-3 text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpAs;
