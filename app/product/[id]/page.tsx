import Container from "@/components/shared/container";
import ProductImage from "@/components/shared/product-image";
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
      <ProductImage src={product.imageUrl} className='' />
    </Container>
  );
};

export default ProductPage;
