"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import CartDrawerItem from "./cart-drawer-item";
import { getCartItemDetails } from "@/shared/lib/get-cart-item-details";
import { useCartStore } from "@/shared/store/cart";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const CartDrawer = ({ children, className }: Props) => {
  const [totalAmount, fetchCartItems, items] = useCartStore((state) => [
    state.totalAmount,
    state.fetchCartItems,
    state.items,
  ]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            In the cart <span className="font-bold">{items.length} items</span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 -mx-6 mt-5 overflow-auto ">
          <div className="mb-2">
            {items.map((item) => (
              <CartDrawerItem
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                details={getCartItemDetails(
                  item.pizzaType,
                  item.pizzaSize,
                  item.ingredients
                )}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 taxt-lg text-neutral-500">
                Total
                <div className="flex-1 border-b border-dasher border-b-neutral-200 relative -top-1 mx-2"></div>
              </span>
              <span className="font-bold text-lg">{totalAmount} $</span>
            </div>
            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base">
                Place your order
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
