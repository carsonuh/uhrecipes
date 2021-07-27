export default interface Recipe {
    name: string,
    ingredients: ingredients[],
    directions: string
}

export interface ingredients {
    qty: number,
    measure: string,
    ingredient: string
}