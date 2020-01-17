import { AwilixContainer, asFunction } from 'awilix';
import { productDomain } from '../../core/domain/product';
export default (container: AwilixContainer): AwilixContainer => 
container.register({
    productDomain: asFunction(productDomain).singleton()
})