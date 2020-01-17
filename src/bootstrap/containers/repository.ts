import { AwilixContainer, asFunction } from 'awilix';
import { productRepository } from '../../core/infrastructure/repositories/product';
export default function register(container: AwilixContainer): AwilixContainer {
    return container.register({
        productRepository: asFunction(productRepository).singleton(),
    })
}
