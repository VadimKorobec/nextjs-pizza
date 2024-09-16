import RequiredSymbol from "../required-symbol";

interface Props {
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
    </div>
  );
};

export default FormInput;
