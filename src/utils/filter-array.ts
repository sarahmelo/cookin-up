import type { IResult } from "@/interfaces/ICategory";

export function filterResultPeerIngredients(revenues: string[], ingredients: string[]) { 
    return revenues.every((item) => ingredients.includes(item))
}
