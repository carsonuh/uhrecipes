import Recipe from "./interface/recipe"

export const recipeMock: Recipe = {
    name: "Chocolate Chip Cookies",
    ingredients: [
        {qty: 2, measure: "cups", ingredient: "sugar"},
        {qty: 8, measure: "ounces", ingredient: "butter"},
    ],
    directions: "directions"
}