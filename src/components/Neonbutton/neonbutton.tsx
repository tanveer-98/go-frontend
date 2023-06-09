import React from "react";

import "./styles.css";

interface IButton {
  children: React.ReactNode;
  className: string;
  [key: string]: any;
}
const Button = ({ children, className, ...rest }: any) => {
  return (
    <div className="neon">
      <button
        type="button"
        className={`inline-block items-center px-4 py-2 border  text-sm font-medium rounded-md  transition-all ease-in-out duration-150 ${className}`}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
