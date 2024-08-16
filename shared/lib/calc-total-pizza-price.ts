export const calcTotalPizzaPrice = (items,) => {
     const pizzaPrice =
       items.find((item) => item.pizzaType === type && item.size === size)
         ?.price || 0;
     const totalIngredientsPrice = ingredients
       .filter((ingredient) => selectedIngredients.has(ingredient.id))
       .reduce((acc, item) => {
         return acc + item.price;
       }, 0);
    
     return  pizzaPrice + totalIngredientsPrice;
}