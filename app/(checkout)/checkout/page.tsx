import CheckoutItemDetails from "@/shared/components/shared/checkout-item-details";
import Title from "@/shared/components/shared/title";
import { WhiteBlock } from "@/shared/components/shared/white-block";
import { Button, Input } from "@/shared/components/ui";
import { Textarea } from "@/shared/components/ui/textarea";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";

interface Props {
  className: string;
}

const CheckoutPage = ({ className }: Props) => {
  return (
    <div className="mt-10">
      <Title text="Ordering" className="font-extrabold mb-8 text-[36px]" />
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">1234</WhiteBlock>
          <WhiteBlock title="2. Personal information">
            <div className="grid grid-cols-2 gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="First name"
              />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Second name"
              />
              <Input name="email" className="text-base" placeholder="E-mail" />
              <Input name="phone" className="text-base" placeholder="Phone" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Delivery address">
            <div className="flex flex-col gap-5">
              <Input
                name="deliveryAddress"
                className="text-base"
                placeholder="Enter your address"
              />
              <Textarea
                className="text-base"
                placeholder="Order comment"
                rows={5}
              />
            </div>
          </WhiteBlock>
        </div>
        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Total:</span>
              <span className="text-[34px] font-extrabold">350 $</span>
            </div>
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-2 text-gray-300" />
                  Price of items:
                </div>
              }
              value="3000"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-2 text-gray-300" />
                  Taxes:
                </div>
              }
              value="150"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-2 text-gray-300" />
                  Delivery:
                </div>
              }
              value="50"
            />
            <Button
              type="submit"
              className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
            >
              Move to payment
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
