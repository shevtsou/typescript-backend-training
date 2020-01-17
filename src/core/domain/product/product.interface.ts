import ProductModel from '../../infrastructure/store/database/models/product.model';
import { NewProduct } from './product.type';

export interface IProductRepository {
    addProduct(newProduct: NewProduct): Promise<ProductModel>;
    getProductById(id: number): Promise<ProductModel>;
    getProducts(): Promise<ProductModel[]>
    updateProduct(id: number, newProduct: NewProduct): Promise<ProductModel>;
    deleteProduct(id: number): Promise<void>;
}

export interface IProductDomain {
    addProduct(newProduct: NewProduct): Promise<ProductModel>;
    getProductById(id: number): Promise<ProductModel>;
    getProducts(): Promise<ProductModel[]>
    updateProduct(id: number, newProduct: NewProduct): Promise<ProductModel>;
    deleteProduct(id: number): Promise<void>;
}

//TODO: Add cache