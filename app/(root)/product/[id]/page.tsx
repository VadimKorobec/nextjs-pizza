import { prisma } from "@/prisma/prisma-client";
import Container from "@/shared/components/shared/container";
import ProductForm from "@/shared/components/shared/product-form";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
  className?: string;
}

const ProductPage = async ({ params: { id } }: Props) => {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <ProductForm product={product} />
    </Container>
  );
};

export default ProductPage;
