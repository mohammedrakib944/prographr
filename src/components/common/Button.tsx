import React from "react";

const Button = ({
  text,
  icon,
  outline,
  white,
}: {
  text?: string;
  icon?: React.ReactNode;
  outline?: boolean;
  white?: boolean;
}) => {
  if (outline) {
    return (
      <button className="btn bg-gray-200 capitalize rounded-full font-light text-accent gap-4 ">
        {text}{" "}
        {icon && (
          <span className="p-[6px] bg-primary text-white rounded-full text-xs">
            {icon}
          </span>
        )}
      </button>
    );
  }

  if (white) {
    return (
      <button className="btn bg-white hover:bg-gray-100 font-light capitalize text-accent rounded-full gap-4 ">
        {text}{" "}
        {icon && (
          <span className="p-[5px] bg-gray-200 text-primary rounded-full text-xs">
            {icon}
          </span>
        )}
      </button>
    );
  }

  return (
    <button className="btn btn-primary font-light capitalize text-white rounded-full gap-4 ">
      {text}{" "}
      {icon && (
        <span className="p-[5px] bg-white text-primary rounded-full text-xs">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
