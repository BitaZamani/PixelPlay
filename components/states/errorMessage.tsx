import Image from "next/image";
const ErrorMessage = ({ message}: {message:string | null}) => {
  return (
    <div className="flex items-center justify-center flex-col p-8">
      <div className="flex justify-center items-center w-[300px]">
        <Image
          src={"/error.png"}
          alt="error"
          height={200}
          width={200}
          className="w-full"
        />
      </div>
      <p className="text-purple-100 text-base font-semibold">
        Error: {message || "Something went wrong."}
      </p>
      
    </div>
  );
};
export default ErrorMessage;
