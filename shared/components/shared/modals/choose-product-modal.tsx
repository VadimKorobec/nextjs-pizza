"use client";

import { cn } from "@/shared/lib/utils";
import ChooseProductForm from "../choose-product-form";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import ChoosePizzaForm from "../choose-pizza-form";
import { Dialog, DialogContent } from "../../ui/dialog";
import { useCartStore } from "@/shared/store/cart";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

const ChooseProductModal = ({ product, className }: Props) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const addCartItem = useCartStore((state) => state.addCartItem);

  const onAddProduct = () => {
    addCartItem({
      productItemId: firstItem.id,
    });
  };

  const onAddPizza = (productItemId: number, ingredients: number[]) => {
    addCartItem({
      productItemId,
      ingredients,
    });
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onAddPizza}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onAddProduct}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ChooseProductModal;
