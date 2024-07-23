import { cn } from "@/lib/utils";
import Image from "next/image";

import Container from "./container";
import { Button } from "../ui/button";


interface Props {
  className?: string;
}

const Header = ({ className }: Props) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className=" flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className=" text-2xl uppercase font-black">NEXT PIZZA</h1>
            <p className=" text-sm text-gray-400 leading-3">The best pizza in the world</p>
          </div>
              </div>
              <div className="flex items-center gap-3">
                  <Button variant='outline'>Enter</Button>
              </div>
      </Container>
    </header>
  );
};

export default Header;
