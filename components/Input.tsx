import React from "react";
interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        className="
            block
            rounded-md
            px-6
            pt-6
            pb-1
            w-full
            text-md
            text-white
            bg-neutral-700
            appearance-none
            focus:outline-none
            focus:ring-0
            peer
        "
        placeholder=" "
      />
      <label
        className="peer-focus:-translate-y-3   peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 left-6 origin-[0] top-4 z-10 scale-75 -translate-y-3 transform absolute text-md text-zinc-400 duration-150"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
