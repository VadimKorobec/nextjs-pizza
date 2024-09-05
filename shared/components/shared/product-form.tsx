"use client";

import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/shared/store/cart";
import toast from "react-hot-toast";
import ChooseProductForm from "./choose-product-form";
import ChoosePizzaForm from "./choose-pizza-form";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

const ProductForm = ({ product, className }: Props) => {
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem?.pizzaType);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success(`${product.name} has been added to the cart`);
    } catch (error) {
      toast.error(`Failed to add the ${product.name} to the cart`);
      console.error(error);
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      onSubmit={onSubmit}
      price={firstItem.price}
      loading={loading}
    />
  );
};

export default ProductForm;
