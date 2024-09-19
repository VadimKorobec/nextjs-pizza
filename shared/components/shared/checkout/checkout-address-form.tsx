import { Input } from "../../ui/input";
import { FormTextarea } from "../form/form-textarea";
import { WhiteBlock } from "../white-block";

interface Props {
  className?: string;
}

const CheckoutAddressForm = ({ className }: Props) => {
  return (
    <WhiteBlock title="3. Delivery address" className={className}>
      <div className="flex flex-col gap-5">
        <Input
          name="deliveryAddress"
          className="text-base"
          placeholder="Enter your address"
        />
        <FormTextarea
          name="comment"
          className="text-base"
          placeholder="Order comment"
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};

export default CheckoutAddressForm;
