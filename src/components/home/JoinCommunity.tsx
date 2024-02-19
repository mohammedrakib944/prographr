import Link from "next/link";
import React from "react";

const JoinCommunity = () => {
  return (
    <div className="layout mb-20">
      <div className="text-accent bg-neutral rounded-2xl pt-10 pb-24 lg:pb-20 px-5 lg:px-12 grid gap-5 lg:gap-10 md:grid-cols-1 lg:grid-cols-2 lg:mb-36">
        <div>
          <h3 className="text-3xl mb-10">Join Our Community</h3>
          <p>
            Join our online community to explore our imagination. Learn more
            about our focus, interests, and how other members engage with one
            another to explore their ideas.
          </p>
        </div>
        <div className="w-fit grid grid-cols-2 gap-3 lg:block lg:w-[400px] float-right relative">
          <SocialButton
            className="lg:ml-[40%]"
            title="Facebook"
            icon="f"
            link="#"
          />
          <SocialButton
            className="lg:ml-[80%]"
            title="Skype"
            icon="S"
            link="#"
          />
          <SocialButton
            className="lg:ml-[60%] lg:mt-[20px]"
            title="Twitter"
            icon="t"
            link="#"
          />
          <SocialButton
            className="lg:ml-[15%] lg:-mt-[37px]"
            title="Behance"
            icon="b"
            link="#"
          />
          <SocialButton
            className="lg:-mt-[29%]"
            title="Dribble"
            icon="d"
            link="#"
          />
        </div>
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
        className="w-[160px] flex items-center justify-between gap-2 py-2 pl-5 pr-2 font-bold bg-white hover:bg-primary/70 duration-200 hover:text-white rounded-full shadow-2xl"
      >
        {title}
        <p className="w-8 h-8 grid place-items-center font-bold text-white rounded-full bg-primary">
          <span className="-mt-1">{icon}</span>
        </p>
      </Link>
    </div>
  );
};
