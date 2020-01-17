import { asFunction, AwilixContainer } from "awilix";
import database from '../../core/infrastructure/store/database';

export default function register(container: AwilixContainer): AwilixContainer {
    return container.register({
        database: asFunction(database).singleton(),
    })
}