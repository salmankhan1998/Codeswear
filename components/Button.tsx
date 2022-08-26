import React from "react";

interface ButtonProps {
    title: string;
    variant: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps>= ({title, variant, handleClick}) => {
  return (
    <button
      type="button"
      className="inline-block px-6 py-2 border-2 border-pink-500 text-pink-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      onClick={handleClick}
    >
      Sign Up
    </button>
  );
};

export default Button;
