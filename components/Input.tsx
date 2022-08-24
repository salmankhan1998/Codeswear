import React from "react";

interface InputProps { 
    label: string;
    type: string;
    id: string;
    placeholder: string;
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, id, placeholder, handleChange}) => {
  return (
    <div className=" mb-4">
      <label htmlFor={id} className="leading-7 text-sm text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={handleChange}
        className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder:text-base"
      />
    </div>
  );
};

export default Input;
