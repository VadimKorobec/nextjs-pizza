import Title from "@/shared/components/shared/title";
import { WhiteBlock } from "@/shared/components/shared/white-block";
import { Input } from "@/shared/components/ui";

interface Props {
  className: string;
}

const CheckoutPage = ({ className }: Props) => {
  return (
    <div className="mt-10">
      <Title text="Ordering" className="font-extrabold mb-8 text-[36px]" />
      <WhiteBlock title="1. Cart">1234</WhiteBlock>
      <WhiteBlock title="2. Personal information">
        <Input
          name="firstName"
          className="text-base"
          placeholder="First name"
        />
        <Input
          name="lastName"
          className="text-base"
          placeholder="Second name"
        />
        <Input name="email" className="text-base" placeholder="E-mail" />
        <Input name="phone" className="text-base" placeholder="Phone" />
      </WhiteBlock>
    </div>
  );
};

export default CheckoutPage;
