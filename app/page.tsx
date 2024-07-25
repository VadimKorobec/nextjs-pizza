import Title from "@/components/shared/title";
import Container from "@/components/shared/container";
import TopBar from "@/components/shared/top-bar";
import Filters from "@/components/shared/filters";
import ProductCard from "@/components/shared/product-card";
import ProductsGroupList from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className=" mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={"Pizzas"}
                items={[
                  {
                    id: 1,
                    name: "Pizza",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    items: [{ price: 100 }],
                  },
                  {
                    id: 2,
                    name: "Pizza",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    items: [{ price: 100 }],
                  },
                  {
                    id: 3,
                    name: "Pizza",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    items: [{ price: 100 }],
                  },
                  {
                    id: 4,
                    name: "Pizza",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    items: [{ price: 100 }],
                  },
                  {
                    id: 5,
                    name: "Pizza",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    items: [{ price: 100 }],
                  },
                  {
                    id: 6,
                    name: "Pizza",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                    items: [{ price: 100 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title={"Breakfast"}
                items={[
                  {
                    id: 1,
                    name: "Cheesecakes with condensed milk",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif",
                    items: [{ price: 100 }],
                  },
                  {
                    id: 2,
                    name: "Cheesecakes with condensed milk",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif",
                    items: [{ price: 100 }],
                  },
                  {
                    id: 3,
                    name: "Cheesecakes with condensed milk",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif",
                    items: [{ price: 100 }],
                  },
                  {
                    id: 4,
                    name: "Cheesecakes with condensed milk",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif",
                    items: [{ price: 100 }],
                  },
                  {
                    id: 5,
                    name: "Cheesecakes with condensed milk",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif",
                    items: [{ price: 100 }],
                  },
                  {
                    id: 6,
                    name: "Cheesecakes with condensed milk",
                    price: 100,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif",
                    items: [{ price: 100 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
