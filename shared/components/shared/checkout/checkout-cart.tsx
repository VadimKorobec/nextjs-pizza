import { getCartItemDetails } from "@/shared/lib/get-cart-item-details";
import CheckoutItem from "../checkout-item";
import { WhiteBlock } from "../white-block";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { removeCartItem } from "@/shared/services/cart";
import { CartStateItem } from "@/shared/lib/get-cart-details";

interface Props {
  items: CartStateItem[];
  onClickCountButton: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void;
  removeCartItem: (id: number) => void;
  className?: string;
}

const CheckoutCart = ({
  items,
  onClickCountButton,
  removeCartItem,
  className,
}: Props) => {
  return (
    <WhiteBlock title="1. Cart" className={className}>
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
  );
};

export default CheckoutCart;
