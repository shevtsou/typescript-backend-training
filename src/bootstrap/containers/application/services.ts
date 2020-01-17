import { AwilixContainer, asFunction } from 'awilix';
import ProductService from '../../../core/application/product/product.service';
export default function register(container: AwilixContainer): AwilixContainer {
    return container.register({
        productService: asFunction(ProductService).singleton()
    })
}
