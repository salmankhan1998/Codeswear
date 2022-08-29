import React from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";

interface ButtonProps {
  title: string;
  variant: "outline" | "contained" | null;
  disable: boolean;
  icon: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant,
  disable,
  icon,
  handleClick,
}) => {
  return (
    <button
      type="button"
      disabled={disable}
      className={`${
        variant === "outline"
          ? "inline-block px-6 py-2 border-2 border-pink-500 text-pink-500 font-medium text-xs leading-tight uppercase rounded hover:bg-pink-500 hover:shadow-lg hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          : variant === "contained"
          ? "flex items-center text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded text-base disabled:opacity-70 disabled:cursor-not-allowed"
          : ""
      }`}
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      onClick={handleClick}
    >
            
      {icon && icon === "shoppingCart" ? <HiShoppingCart /> : icon === "bag"? <BsBagCheckFill className="mr-2" /> : ''}
      {title}
    </button>
  );
};

export default Button;
