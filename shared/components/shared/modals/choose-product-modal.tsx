"use client";

import { cn } from "@/shared/lib/utils";
import ChooseProductForm from "../choose-product-form";
import { ProductWithRelations } from "@/@types/prisma";
import ChoosePizzaForm from "../choose-pizza-form";
import { Dialog, DialogContent } from "../../ui/dialog";
import { useCartStore } from "@/shared/store/cart";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

const ChooseProductModal = ({ product, className }: Props) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success(`${product.name} has been added to the cart`);
      router.back();
    } catch (error) {
      toast.error(`Failed to add the ${product.name} to the cart`);
      console.error(error);
    }
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
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onSubmit}
            price={firstItem.price}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ChooseProductModal;
