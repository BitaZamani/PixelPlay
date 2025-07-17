import Image from "next/image";
import { Button } from "../ui/button";

type ErrorMessageProps = {
  message?: string | null;
  onRetry?: () => void;
};
const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  return (
    <div className="flex items-center justify-center flex-col p-8 space-y-4 h-[calc(100vh-250px)]">
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
      {onRetry && (
        <Button onClick={onRetry} variant={"destructive"}>
          Retry
        </Button>
      )}
    </div>
  );
};
export default ErrorMessage;
