"use client";

import CheckoutItem from "@/shared/components/shared/checkout-item";
import CheckoutSidebar from "@/shared/components/shared/checkout-sidebar";
import FormInput from "@/shared/components/shared/form/form-input";
import Title from "@/shared/components/shared/title";
import { WhiteBlock } from "@/shared/components/shared/white-block";
import { Input } from "@/shared/components/ui";
import { Textarea } from "@/shared/components/ui/textarea";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { useCart } from "@/shared/hooks/use-cart";
import { getCartItemDetails } from "@/shared/lib/get-cart-item-details";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckoutCart from "@/shared/components/shared/checkout/checkout-cart";
import CheckoutPersonalForm from "@/shared/components/shared/checkout/checkout-personal-form";
import CheckoutAddressForm from "@/shared/components/shared/checkout/checkout-address-form";
import {
  checkoutFormSchema,
  CheckoutFormValues,
} from "@/shared/components/shared/checkout/checkout-form-schem";

const VAT = 15;
const DELIVERY_PRICE = 250;

const CheckoutPage = () => {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

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
      <FormProvider {...form}>
        <div className="flex gap-10">
          <div className="flex flex-col gap-10 flex-1 mb-20">
            <CheckoutCart
              items={items}
              onClickCountButton={onClickCountButton}
              removeCartItem={removeCartItem}
            />
            <CheckoutPersonalForm />
            <CheckoutAddressForm />
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
      </FormProvider>
    </div>
  );
};

export default CheckoutPage;
