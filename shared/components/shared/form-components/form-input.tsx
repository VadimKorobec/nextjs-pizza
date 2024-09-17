import { Input } from "../../ui";
import ClearButton from "../clear-button";
import ErrorText from "../error-text";
import RequiredSymbol from "../required-symbol";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

const FormInput = ({ className, name, label, required, ...props }: Props) => {
  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}
      <div className="relative">
        <Input className="h-12 text-md" {...props} />
        <ClearButton onClick={() => console.log("click")} />
      </div>
      <ErrorText text="The field is required" className="mt-2" />
    </div>
  );
};

export default FormInput;
