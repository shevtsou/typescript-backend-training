"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const awilix_koa_1 = require("awilix-koa");
const bootstrap_1 = __importDefault(require("./bootstrap"));
(async () => {
    const app = new koa_1.default();
    const container = bootstrap_1.default();
    const db = container.resolve('database');
    const service = container.resolve('productService');
    const model = container.resolve('productModel');
    const sequelize = await db.connectDb();
    await sequelize.sync({ force: true });
    await service.addProduct({ name: 'test' });
    console.log(await service.getProducts());
    // ProductModel.create({name: 'test'});
    // console.log(await ProductModel.findAll())
    // await service.addProduct({name: "test"})
    process.exit();
    app.use(awilix_koa_1.scopePerRequest(container));
    // Loads all controllers in the `routes` folder
    // relative to the current working directory.
    // This is a glob pattern.
    app.use(awilix_koa_1.loadControllers('routes/*.js', { cwd: __dirname }));
    console.log('STARTED');
    // import database from './core/infrastructure/store/database'
    // import { productRepository } from './core/infrastructure/repositories/product/index'
    // import { ProductModel } from './core/infrastructure/store/database/models'
    // const databaseInstance = database();
    // (async () => {
    //     const instance = await databaseInstance.connectDb()
    //     await instance.sync({ force: true });
    //     const repositoryInstance = productRepository({productModel: ProductModel})
    //     await repositoryInstance.addProduct({name: "test"})
    //     console.log(await repositoryInstance.getProducts())
    //     await repositoryInstance.deleteProduct(1)
    //     console.log(await repositoryInstance.getProducts())
    // })()
    app.listen(4000);
})();
// import { Sequelize } from 'sequelize-typescript';
// import { DataTypes } from 'sequelize/types'
// import ProductModel from './models/product.model';
// import ProductModel from './core/infrastructure/store/database/models/product.model';
// import { IProductService } from './core/application/product/product.interface';
console.log(__dirname);
// const sequelize =  new Sequelize({
//     database: 'some_db',
//     dialect: 'sqlite',
//     username: 'root',
//     password: '',
//     storage: ':memory:',
//     models: [__dirname + '/models'], // or [Player, Team],
// });
// (async () => {
//     await sequelize.sync({ force: true });
//     ProductModel.create({name: 'test', deleted: false});
//     console.log(await ProductModel.findAll())
//   })();
// console.log(sequelize.models)
// console.log('STARTED')
