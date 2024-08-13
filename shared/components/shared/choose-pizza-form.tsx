import { cn } from "@/shared/lib/utils";

import Title from "./title";
import { Button } from "../ui";
import PizzaImage from "./pizza-image";
import GroupVariants from "./group-variants";
import { pizzaSizes } from "@/shared/constants/pizza";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
  className?: string;
}

const ChoosePizzaForm = ({
  name,
  items,
  imageUrl,
  ingredients,
  onClickAdd,
  className,
}: Props) => {
  const textDetaills = "30sm, traditional 30";
  const totalPrice = 100;

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={30} />
      <div className="w-[490px] bg=[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetaills}</p>
        <GroupVariants items={pizzaSizes}/>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Add to cart for {totalPrice} $
        </Button>
      </div>
    </div>
  );
};

export default ChoosePizzaForm;
