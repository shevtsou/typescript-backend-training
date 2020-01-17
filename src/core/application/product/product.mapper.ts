import { ProductModel } from "../../infrastructure/store/database/models";
import { ProductDto } from "./product.type";

export const toProductDto = (product: ProductModel): ProductDto => {
    return {
        id: product.id,
        name: product.name
    }
}

export const toProductListDto = (products: ProductModel[]): ProductDto[] => 
products.map((product) => toProductDto(product));
