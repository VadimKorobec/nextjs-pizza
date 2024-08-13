export const mapPizzaSize = {
  20: "Little",
  30: "Middle",
  40: "Big",
} as const;

export const mapPizzaType = {
  1: "traditional",
  2: "delicate",
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([name, value]) => ({
  name,
  value,
}))


