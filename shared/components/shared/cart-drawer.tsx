import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const CartDrawer = ({ children, className }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
          <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
              <SheetHeader>
                  <SheetTitle>
                      In the cart <span className="font-bold">3 items</span>
                  </SheetTitle>
              </SheetHeader>
              <SheetFooter className="-mx-6 bg-white p-8"></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
