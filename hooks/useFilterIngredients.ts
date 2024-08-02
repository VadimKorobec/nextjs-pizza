import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchIngredients();
  }, []);

  return { ingredients, loading, selectedIds, onAddId: toggle };
};
