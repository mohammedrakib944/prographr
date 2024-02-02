import Link from "next/link";
import React from "react";

const JoinCommunity = () => {
  return (
    <div>
      <div>
        <h3>Join Our Community</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          praesentium est ea? Ducimus accusantium, sed quisquam repudiandae
          corrupti sint nisi asperiores fugiat dolorum numquam mollitia
          voluptates temporibus tempora neque nobis.
        </p>
      </div>
      <div>
        <Button title="Facebook" icon="f" link="#" />
      </div>
    </div>
  );
};

export default JoinCommunity;

const Button = ({
  title,
  icon,
  link,
}: {
  title: string;
  icon: string;
  link: string;
}) => {
  return (
    <Link
      href="#"
      className="w-fit flex items-center gap-2 border shadow-lg py-2 pl-5 pr-2 font-bold bg-white rounded-full"
    >
      Facebook{" "}
      <p className="w-10 h-10 text-2xl grid place-items-center font-extrabold text-white rounded-full bg-primary">
        f
      </p>
    </Link>
  );
};
