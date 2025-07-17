import { InputProps } from "@/lib/types";
const Input = ({ text, type, icon, value, setValue, id }: InputProps) => {
  return (
    <div className="relative z-0 w-2/3 mx-auto space-y-5">
      <input
        type={type}
        id={id}
        className="block py-2.5 px-0 w-full text-sm text-purple-100 bg-transparent border-0 border-b-2 border-purple-100 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
        placeholder=" "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <label
        htmlFor={id}
        className="absolute text-sm flex gap-2 text-purple-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {icon}
        {text}
      </label>
    </div>
  );
};

export default Input;
