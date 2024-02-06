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
        className={`btn bg-neutral capitalize hover:bg-primary/50 rounded-full font-light text-accent gap-4 shadow-none ${className}`}
      >
        <span className="-mt-1">{text}</span>{" "}
        {icon && (
          <span className="bg-primary text-white rounded-full p-1">{icon}</span>
        )}
      </button>
    );
  }

  if (white) {
    return (
      <button
        className={`btn bg-white hover:bg-gray-100 font-light capitalize text-accent rounded-full gap-4 ${className}`}
      >
        <span className="-mt-1">{text}</span>{" "}
        {icon && (
          <span className="bg-primary text-white rounded-full p-1">{icon}</span>
        )}
      </button>
    );
  }

  return (
    <button
      className={`btn btn-primary font-light capitalize text-white rounded-full gap-4 ${className}`}
    >
      <span className="-mt-1">{text}</span>
      {icon && (
        <span className="bg-white text-primary rounded-full p-1">{icon}</span>
      )}
    </button>
  );
};

export default Button;
