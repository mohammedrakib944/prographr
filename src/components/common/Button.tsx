import React from "react";

const Button = ({
  text,
  icon,
  outline,
  white,
  className,
}: {
  text?: string;
  icon?: React.ReactNode;
  outline?: boolean;
  white?: boolean;
  className?: string;
}) => {
  if (outline) {
    return (
      <button
        className={`btn bg-neutral capitalize rounded-full font-light text-accent gap-4 ${className}`}
      >
        {text} {icon && <span className="">{icon}</span>}
      </button>
    );
  }

  if (white) {
    return (
      <button
        className={`btn bg-white hover:bg-gray-100 font-light capitalize text-accent rounded-full gap-4 ${className}`}
      >
        {text} {icon && <span className="text-primary">{icon}</span>}
      </button>
    );
  }

  return (
    <button
      className={`btn btn-primary font-light capitalize text-white rounded-full gap-4 ${className}`}
    >
      {text} {icon && <span className="">{icon}</span>}
    </button>
  );
};

export default Button;
