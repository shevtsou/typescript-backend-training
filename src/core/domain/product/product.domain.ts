import { IProductRepository, IProductDomain } from './product.interface';
import ProductModel from "../../infrastructure/store/database/models/product.model";
import { NewProduct } from './product.type';
type ServiceType = {
    productRepository: IProductRepository,
}
export default function ({
    productRepository
}: ServiceType): IProductDomain {
    async function addProduct(newProduct: NewProduct): Promise<ProductModel> {
        const product = await productRepository.addProduct(newProduct)
        return product
    }
    async function updateProduct(id: number, newProduct: NewProduct): Promise<ProductModel> {
        const updatedProduct = await productRepository.updateProduct(id, newProduct)
        return updatedProduct
    }
    async function getProductById(productId: number): Promise<ProductModel> {
        return await productRepository.getProductById(productId)
    }
    async function getProducts(): Promise<ProductModel[]> {
        return await productRepository.getProducts()
    }
    async function deleteProduct(id: number): Promise<void> {
        await productRepository.deleteProduct(id)
    }
    return {
        addProduct,
        updateProduct,
        getProductById,
        getProducts,
        deleteProduct
    }
}