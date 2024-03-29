import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  icon?: React.ReactNode;
  outline?: boolean;
  white?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  outline,
  white,
  className,
  ...props
}) => {
  if (outline) {
    return (
      <button
        className={`btn bg-transparent capitalize hover:bg-primary/10 rounded-full font-light text-accent gap-4 shadow-none ${className} !border-accent`}
        {...props}
      >
        <span className="-mt-1">{text}</span>{" "}
        {icon && (
          // <span className="bg-primary text-white rounded-full p-1">{icon}</span>
          <>{icon}</>
        )}
      </button>
    );
  }

  if (white) {
    return (
      <button
        className={`btn bg-white hover:bg-gray-100 font-light capitalize text-accent rounded-full gap-4 ${className}`}
        {...props}
      >
        <span className="-mt-1">{text}</span>{" "}
        {icon && (
          // <span className="bg-primary text-white rounded-full p-1">{icon}</span>
          <>{icon}</>
        )}
      </button>
    );
  }

  return (
    <button
      className={`btn btn-primary font-light capitalize text-white rounded-full gap-4 ${className}`}
      {...props}
    >
      <span className="-mt-1">{text}</span>
      {icon && (
        // <span className="bg-white text-primary rounded-full p-1">{icon}</span>
        <>{icon}</>
      )}
    </button>
  );
};

export default Button;
