import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { User } from "lucide-react";
import { Button } from "../ui";
import SearchInput from "./search-input";
import Container from "./container";
import CartButton from "./cart-button";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

const Header = ({ hasSearch = true, hasCart = true, className }: Props) => {
  return (
    <header className={cn("border-b", className)}>
      <Container className=" flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className=" text-2xl uppercase font-black">NEXT PIZZA</h1>
              <p className=" text-sm text-gray-400 leading-3">
                The best pizza in the world
              </p>
            </div>
          </div>
        </Link>
        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Enter
          </Button>
          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
