
import { useEffect } from "react";
import { QueryFilters } from "./use-filters";

const useQueryFilters = (filters: QueryFilters) => {
    useEffect(() => {
      const params = {
        ...filters.prices,
        pizzaTypes: Array.from(filters.pizzaTypes),
        sizes: Array.from(filters.sizes),
        ingredients: Array.from(filters.selectedIngredients),
      };

      const query = qs.stringify(params, {
        arrayFormat: "comma",
      });

      router.push(`?${query}`, {
        scroll: false,
      });
    }, []);
}

export default useQueryFilters;