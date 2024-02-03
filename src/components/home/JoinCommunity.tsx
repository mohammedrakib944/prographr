import Link from "next/link";
import React from "react";

const JoinCommunity = () => {
  return (
    <div className="layout text-accent bg-neutral rounded-2xl pt-10 pb-24 lg:pb-20 px-12 grid gap-5 lg:gap-10 md:grid-cols-1 lg:grid-cols-2 lg:mb-20">
      <div>
        <h3 className="text-3xl mb-10">Join Our Community</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          praesentium est ea? Ducimus accusantium, sed quisquam repudiandae
          corrupti sint nisi asperiores fugiat dolorum numquam mollitia
          voluptates temporibus tempora neque nobis.
        </p>
      </div>
      <div className="w-fit grid grid-cols-2 gap-3 lg:block lg:w-[400px] float-right border relative">
        <SocialButton
          className="lg:ml-[40%]"
          title="Facebook"
          icon="f"
          link="#"
        />
        <SocialButton className="lg:ml-[80%]" title="Skype" icon="S" link="#" />
        <SocialButton
          className="lg:ml-[60%] lg:mt-[20px]"
          title="Twitter"
          icon="t"
          link="#"
        />
        <SocialButton
          className="lg:ml-[15%] lg:-mt-[50px]"
          title="Behance"
          icon="b"
          link="#"
        />
        <SocialButton
          className="lg:-mt-[33%]"
          title="Dribble"
          icon="d"
          link="#"
        />
      </div>
    </div>
  );
};

export default JoinCommunity;

const SocialButton = ({
  className,
  title,
  icon,
  link,
}: {
  className?: string;
  title: string;
  icon: string;
  link: string;
}) => {
  return (
    <div className={className}>
      <Link
        href={link}
        className="w-[160px] flex items-center justify-between gap-2 border shadow-lg py-2 pl-5 pr-2 font-bold bg-white hover:bg-primary duration-200 hover:text-white rounded-full"
      >
        {title}{" "}
        <p className="w-10 h-10 text-2xl grid place-items-center font-extrabold text-white rounded-full bg-primary">
          {icon}
        </p>
      </Link>
    </div>
  );
};
