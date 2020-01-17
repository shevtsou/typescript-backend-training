"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("./models");
let instance = null;
function default_1() {
    /***
     * create in-memory database connection
    */
    const connectDb = async () => {
        //@ts-ignore
        instance = new sequelize_typescript_1.Sequelize({
            database: 'some_db',
            dialect: 'sqlite',
            username: 'root',
            password: '',
            storage: ':memory:',
            models: [models_1.ProductModel],
        });
        return instance;
    };
    const disconnectDb = async () => {
        await instance.close();
    };
    return {
        instance,
        connectDb,
        disconnectDb
    };
}
exports.default = default_1;
// console.log(sequelize.models)
// console.log('STARTED')
// (async () => {
//     await sequelize.sync({ force: true });
//     ProductModel.create({name: 'test', deleted: false});
//     console.log(await ProductModel.findAll())
//   })();
