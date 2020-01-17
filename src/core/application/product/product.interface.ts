import { ProductDto, NewProductDto } from "./product.type";

export interface IProductService {
    addProduct(newProduct: NewProductDto): Promise<ProductDto>;
    getProducts(): Promise<ProductDto[]>;
    getProduct(productId: number): Promise<ProductDto>;
    updateProduct(id: number, newProduct: NewProductDto): Promise<ProductDto>;
    deleteProduct(id: number): Promise<any>;
}

// export interface IProductDomain {
//     addProduct(newProduct: NewProductDto): Promise<ProductDto>;
//     getProducts(): Promise<ProductDto[]>;
//     getProduct(productId: number): Promise<ProductDto>;
//     updateProduct(id: number, newProduct: NewProductDto): Promise<ProductDto>;
//     deleteProduct(id: number): Promise<any>;
// }