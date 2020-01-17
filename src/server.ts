import Koa from 'koa'
import { asClass, createContainer } from 'awilix'
import { loadControllers, scopePerRequest } from 'awilix-koa'
 
const app = new Koa()
const container = createContainer().register({
})

app.use(scopePerRequest(container))
// Loads all controllers in the `routes` folder
// relative to the current working directory.
// This is a glob pattern.
app.use(loadControllers('routes/*.js', { cwd: __dirname }))
console.log('STARTED') 



import database from './core/infrastructure/store/database'
import { productRepository } from './core/infrastructure/repositories/product/index'
import { ProductModel } from './core/infrastructure/store/database/models'
const databaseInstance = database();

(async () => {
    const instance = await databaseInstance.connectDb()
    await instance.sync({ force: true });
    const repositoryInstance = productRepository({productModel: ProductModel})
    await repositoryInstance.addProduct({name: "test"})
    console.log(await repositoryInstance.getProducts())
    await repositoryInstance.deleteProduct(1)
    console.log(await repositoryInstance.getProducts())
})()





app.listen(4000)


// import { Sequelize } from 'sequelize-typescript';
// import { DataTypes } from 'sequelize/types'
// import ProductModel from './models/product.model';
// import ProductModel from './core/infrastructure/store/database/models/product.model';
console.log(__dirname)
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

