import { IProductService } from "./product.interface";
import { IProductDomain } from "../../domain/product";
import { NewProductDto, ProductDto } from "./product.type";
import { toProductDto } from "./product.mapper";

type ServiceType = {
    productDomain: IProductDomain
};

export default function ProductService({
    productDomain
}: ServiceType): IProductService {
    const addProduct = async (newProduct: NewProductDto): Promise<ProductDto> => {
        const product = await productDomain.addProduct(newProduct);
        return toProductDto(product)
    }

    const getProducts = async (): Promise<ProductDto[]> => {
        return await productDomain.getProducts()
    }

    const getProduct = async (id: number): Promise<ProductDto> =>  {
        return toProductDto(await productDomain.getProductById(id))
    }

    const updateProduct = async (id: number, newProduct: NewProductDto): Promise<ProductDto> => {
        return toProductDto(await productDomain.updateProduct(id, newProduct))
    }

    const deleteProduct = async (id: number): Promise<any> => {
        await productDomain.deleteProduct(id)
    }


    return {
        addProduct,
        getProducts,
        getProduct,
        updateProduct,
        deleteProduct
    }
}