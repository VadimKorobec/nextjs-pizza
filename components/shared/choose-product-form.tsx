import { cn } from "@/lib/utils";
import ProductImage from "./product-image";
import Title from "./title";
import { Button } from "../ui";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
  className?: string;
}

const ChooseProductForm = ({
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
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>
      <div className="w-[490px] bg=[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetaills}</p>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Add to cart for {totalPrice} $
        </Button>
      </div>
    </div>
  );
};

export default ChooseProductForm;
