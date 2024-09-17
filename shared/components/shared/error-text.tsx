import { cn } from "@/shared/lib/utils";

interface Props {
  text: string;
  className?: string;
}

const ErrorText = ({ text, className }: Props) => {
  return <div className={cn("text-red-500 text-sm ", className)}>{text}</div>;
};

export default ErrorText;
