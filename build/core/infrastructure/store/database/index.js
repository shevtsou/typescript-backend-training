"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let instance = null;
function default_1() {
    /***
     * create in-memory database connection
    */
    const connectDb = async () => {
        instance = new sequelize_typescript_1.Sequelize({
            database: 'some_db',
            dialect: 'sqlite',
            username: 'root',
            password: '',
            storage: ':memory:',
            models: [__dirname + '/models'],
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
