import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import CheckoutItemDetails from "./checkout-item-details";
import { WhiteBlock } from "./white-block";
import { Button } from "../ui";

interface Props {
  totalPrice: number;
  totalAmount: number;
  vatPrice: number;
  DELIVERY_PRICE: number;
  className?: string;
}

const CheckoutSidebar = ({
  totalPrice,
  totalAmount,
  vatPrice,
  DELIVERY_PRICE,
  className,
}: Props) => {
  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Total:</span>
        <span className="text-[34px] font-extrabold">{totalPrice} $</span>
      </div>
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package size={18} className="mr-2 text-gray-300" />
            Price of items:
          </div>
        }
        value={`${totalAmount}`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent size={18} className="mr-2 text-gray-300" />
            Taxes:
          </div>
        }
        value={`${Math.round(vatPrice)} $`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck size={18} className="mr-2 text-gray-300" />
            Delivery:
          </div>
        }
        value={`${DELIVERY_PRICE} $`}
      />
      <Button
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Move to payment
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};

export default CheckoutSidebar;
