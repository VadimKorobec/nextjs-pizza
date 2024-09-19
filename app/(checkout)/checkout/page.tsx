"use client";

import CheckoutSidebar from "@/shared/components/shared/checkout-sidebar";
import Title from "@/shared/components/shared/title";
import { useCart } from "@/shared/hooks/use-cart";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckoutCart from "@/shared/components/shared/checkout/checkout-cart";
import CheckoutPersonalForm from "@/shared/components/shared/checkout/checkout-personal-form";
import CheckoutAddressForm from "@/shared/components/shared/checkout/checkout-address-form";
import {
  checkoutFormSchema,
  CheckoutFormValues,
} from "@/shared/constants/checkout-form-schem";

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

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  };

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
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
        </form>
      </FormProvider>
    </div>
  );
};

export default CheckoutPage;
