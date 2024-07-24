import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";

interface Props {
  className?: string;
}

const SortPopup = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
        className
      )}
    >
      <ArrowUpDown size={16} />
      <b>Sorting:</b>
      <b className="text-primary">popular</b>
    </div>
  );
};

export default SortPopup;
