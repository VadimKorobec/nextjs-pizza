"use client";

import { cn } from "@/shared/lib/utils";
import Title from "./title";
import { Button } from "../ui";
import PizzaImage from "./pizza-image";
import GroupVariants from "./group-variants";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";

import { Ingredient, ProductItem } from "@prisma/client";
import IngredientItem from "./ingredient-item";
import {
  calcTotalPizzaPrice,
  getAvailablePizzaSizes,
  getPizzaDetails,
} from "@/shared/lib";
import { usePizzaOptions } from "@/shared/hooks/use-pizza-options";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
  className?: string;
}

const ChoosePizzaForm = ({
  name,
  items,
  imageUrl,
  ingredients,
  onClickAddCart,
  className,
}: Props) => {
  const {
    type,
    size,
    selectedIngredients,
    availableSizes,
    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(items);

  const { totalPrice, textDetaills } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const handleClickAdd = () => {
    onClickAddCart?.();
  };

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg=[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetaills}</p>
        <div className="flex flex-col gap-3 mt-5">
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>
        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Add to cart for {totalPrice} $
        </Button>
      </div>
    </div>
  );
};

export default ChoosePizzaForm;
