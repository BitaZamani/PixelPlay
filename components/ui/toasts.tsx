import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { XCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";

type Variant = "success" | "error" | "info" | "warning";

const variantIcons = {
  success: <CheckCircle2 className="text-green-200 w-5 h-5" />,
  error: <XCircle className="text-red-200 w-5 h-5" />,
  info: <Info className="text-blue-200 w-5 h-5" />,
  warning: <AlertTriangle className="text-yellow-200 w-5 h-5" />,
};
const titles = {
  success: "Success!",
  error: "Error!",
  info: "Info!",
  warning: "Warning!",
};
interface ToastProps {
  title?: string;
  description?: string;
  variant?: Variant;
  label?: string;
  onClick?: () => void;
}

export function showToast({
  title,
  description,
  variant = "info",
  label,
  onClick,
}: ToastProps) {
  toast.custom(
    (t) => (
      <div
        className={cn(
          "flex flex-col items-start gap-2 px-4 py-1.5 border rounded-md shadow-lg text-purple-50 w-[300px]",
          {
            "border-green-500 bg-green-950": variant === "success",
            "border-red-500 !bg-red-950 ": variant === "error",
            "border-blue-500 bg-blue-950": variant === "info",
            "border-yellow-500 bg-yellow-950": variant === "warning",
          }
        )}
      >
        <div className="flex justify-center items-center gap-2">
          <div>{variantIcons[variant]}</div>
          <p className="font-medium">{title ? title : titles[variant]}</p>
        </div>
        <div className="flex-1">
          {description && (
            <p className="text-sm text-purple-200">{description}</p>
          )}
        </div>
        {label && onClick && (
          <button
            onClick={() => {
              onClick();
              toast.dismiss(t);
            }}
            className="text-sm text-primary hover:underline ml-2"
          >
            {label}
          </button>
        )}
      </div>
    ),
    { duration: 4000 }
  );
}
