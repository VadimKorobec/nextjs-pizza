"use client";

import CheckoutItem from "@/shared/components/shared/checkout-item";
import CheckoutSidebar from "@/shared/components/shared/checkout-sidebar";
import Title from "@/shared/components/shared/title";
import { WhiteBlock } from "@/shared/components/shared/white-block";
import { Input } from "@/shared/components/ui";
import { Textarea } from "@/shared/components/ui/textarea";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { useCart } from "@/shared/hooks/use-cart";
import { getCartItemDetails } from "@/shared/lib/get-cart-item-details";

const VAT = 15;
const DELIVERY_PRICE = 250;

const CheckoutPage = () => {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  const vatPrice = (totalAmount / 100) * VAT;
  const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE;

  return (
    <div className="mt-10">
      <Title text="Ordering" className="font-extrabold mb-8 text-[36px]" />
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  details={getCartItemDetails(
                    item.ingredients,
                    item.pizzaType as PizzaType,
                    item.pizzaSize as PizzaSize
                  )}
                  disabled={item.disabled}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onClickCountButton={(type) =>
                    onClickCountButton(item.id, item.quantity, type)
                  }
                  onClickRemove={() => removeCartItem(item.id)}
                />
              ))}
            </div>
          </WhiteBlock>
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
          <CheckoutSidebar
            totalPrice={totalPrice}
            totalAmount={totalAmount}
            vatPrice={vatPrice}
            DELIVERY_PRICE={DELIVERY_PRICE}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
