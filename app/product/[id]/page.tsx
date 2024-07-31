interface Props {
  className?: string;
  params: {
    id: string;
  };
}

const ProductPage = ({ className, params: { id } }: Props) => {
  return <div className={className}>Product{id}</div>;
};

export default ProductPage;
