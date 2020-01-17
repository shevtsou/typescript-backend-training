"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const awilix_1 = require("awilix");
const awilix_koa_1 = require("awilix-koa");
const app = new koa_1.default();
const container = awilix_1.createContainer().register({});
app.use(awilix_koa_1.scopePerRequest(container));
// Loads all controllers in the `routes` folder
// relative to the current working directory.
// This is a glob pattern.
app.use(awilix_koa_1.loadControllers('routes/*.js', { cwd: __dirname }));
console.log('STARTED');
const database_1 = __importDefault(require("./core/infrastructure/store/database"));
const index_1 = require("./core/infrastructure/repositories/product/index");
const models_1 = require("./core/infrastructure/store/database/models");
const databaseInstance = database_1.default();
(async () => {
    await databaseInstance.connectDb();
    const repositoryInstance = index_1.productRepository({ productModel: models_1.ProductModel });
    repositoryInstance.addProduct({ name: "test" });
})();
app.listen(4000);
// import { Sequelize } from 'sequelize-typescript';
// import { DataTypes } from 'sequelize/types'
// import ProductModel from './models/product.model';
// import ProductModel from './core/infrastructure/store/database/models/product.model';
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
