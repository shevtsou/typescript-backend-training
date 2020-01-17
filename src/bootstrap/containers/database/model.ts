import { AwilixContainer, asValue } from 'awilix';
import { ProductModel } from '../../../core/infrastructure/store/database/models';
export default function register(container: AwilixContainer): AwilixContainer {
    return container.register({
        productModel: asValue(ProductModel)
    })
}

