import Container from "@/components/shared/container";
import GroupVariants from "@/components/shared/group-variants";
import ProductImage from "@/components/shared/product-image";
import Title from "@/components/shared/title";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

interface Props {
  className?: string;
  params: {
    id: string;
  };
}

const ProductPage = async ({ className, params: { id } }: Props) => {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} size={40} />
        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <GroupVariants
            selectedValue="2"
            items={[
              {
                name: "Little",
                value: "1",
              },
              {
                name: "Middle",
                value: "2",
              },
              {
                name: "Big",
                value: "3",
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
