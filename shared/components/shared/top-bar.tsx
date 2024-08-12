import { cn } from "@/shared/lib/utils";
import Categories from "./categories";
import SortPopup from "./sort-popup";
import Container from "./container";
import { Category } from "@prisma/client";
import { categories } from "@/prisma/constans";

interface Props {
  categories: Category[];
  className?: string;
}

const TopBar = ({ categories, className }: Props) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};

export default TopBar;