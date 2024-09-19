import { Input } from "../../ui/input";
import FormInput from "../form/form-input";
import { WhiteBlock } from "../white-block";

interface Props {
  className?: string;
}

const CheckoutPersonalForm = ({ className }: Props) => {
  return (
    <WhiteBlock title="2. Personal information" className={className}>
      <div className="grid grid-cols-2 gap-5">
        <FormInput
          name="firstName"
          className="text-base"
          placeholder="First name"
        />
        <FormInput
          name="lastName"
          className="text-base"
          placeholder="Second name"
        />
        <FormInput name="email" className="text-base" placeholder="E-mail" />
        <FormInput name="phone" className="text-base" placeholder="Phone" />
      </div>
    </WhiteBlock>
  );
};

export default CheckoutPersonalForm;
