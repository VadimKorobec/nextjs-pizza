import { Product } from "@prisma/client";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ChooseProductForm from "../choose-product-form";

interface Props {
  product: Product;
  className?: string;
}

const ChooseProductModal = ({ product, className }: Props) => {
  return (
    <Dialog open={Boolean(product)}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <ChooseProductForm imageUrl={product.imageUrl} name={product.name} ingredients={[]} />
      </DialogContent>
    </Dialog>
  );
};

export default ChooseProductModal;
