export type ProductDto = {
    id: number;
    name: string;
}

export type NewProductDto = {
    name: string;
}

export enum ProductErrors {
    BadName = 'BadName'
}