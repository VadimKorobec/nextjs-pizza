"use client";

import { useFilterIngredients } from "@/hooks/useFilterIngredients";

import { Input } from "../ui";
import CheckboxFiltersGroup from "./ckeckbox-filters-group";
import FilterCheckbox from "./filter-checkbox";
import RangeSlider from "./range-slider";
import Title from "./title";
import { useState } from "react";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

const Filters = ({ className }: Props) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();
  const [prices, setPrice] = useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };

  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />
      <CheckboxFiltersGroup
        title="Sizes"
        name="sizes"
        className="mb-5"
        onClickCheckbox={toggleSizes}
        items={[
          { text: "20 cm", value: "20" },
          { text: "30 cm", value: "30" },
          { text: "40 cm", value: "40" },
        ]}
      />
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to </p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            value={String(prices.priceTo)}
            min={100}
            max={1000}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([from, to]) =>
            setPrice({ priceFrom: from, priceTo: to })
          }
        />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  );
};

export default Filters;
