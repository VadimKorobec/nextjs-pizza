
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";
import { Api } from "../services/api-client";

const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  return {
    ingredients,
    loading,
  };
};

export default useIngredients;
