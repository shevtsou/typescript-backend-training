import { ProductDto, NewProductDto} from './product.type';

export interface IProductService {
  addProduct(newProduct: NewProductDto): Promise<ProductDto>;
  getProducts(): Promise<ProductDto[]>;
  getProduct(id: string): Promise<ProductDto>;
  updateProduct(id: string, newProduct: NewProductDto): Promise<ProductDto>;
  deleteProduct(id: string): Promise<any>;
}
