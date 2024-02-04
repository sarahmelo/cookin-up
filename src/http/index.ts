import type { IResult } from "@/interfaces/ICategory";

function adapter(result: any[]) {
    let adaptedResult: IResult[] = [];

    result.map((category, index) => {
        adaptedResult[index] = {
            name: category.nome,
            ingredients: category.ingredientes,
            image: category.imagem
        }
    })
    
    return adaptedResult
}

export async function getCategories() {
    const response = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json')
    
    const categories: any[] = await response.json();

    return adapter(categories)
}
  
export async function getRevenues() {
    const request = await fetch('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');

    const revenues: any[] = await request.json();
    

    return adapter(revenues);
}