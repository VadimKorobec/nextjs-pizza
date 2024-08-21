import { ArrowRight, ShoppingCart } from "lucide-react";

import { Button } from "../ui";
import { cn } from "@/shared/lib/utils";
import CartDrawer from "./cart-drawer";

interface Props {
  className?: string;
}

const CartButton = ({ className }: Props) => {
  return (
    <CartDrawer>
      <Button className={cn("group relative", className)}>
        <b>520 $</b>
        <span className="h-full w-[1px] bg-white/30 mx-3"></span>
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className="relative" strokeWidth={2} />
          <b>3</b>
        </div>
        <ArrowRight
          size={20}
          className=" absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </CartDrawer>
  );
};

export default CartButton;